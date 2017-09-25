/* global APP_NAME META_DESCRIPTION META_KEYWORDS */

import React from 'react';
import ReactDOM from 'react-dom/server';
import ReactDOMStream from 'react-dom-stream/server';
import LRURenderCache from 'react-dom-stream/lru-render-cache';
import {JssProvider, SheetsRegistry} from 'react-jss';
import {create} from 'jss';
import preset from 'jss-preset-default';
import {extractCritical} from 'emotion-server';
import {Provider} from 'react-redux';
import {flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import {MuiThemeProvider} from 'material-ui/styles';
import createGenerateClassName from 'material-ui/styles/createGenerateClassName';

import configureStore from './configureStore';

import theme from '../common/theme/index';
import App from '../common/routes';
import serviceWorker from './serviceWorker';

// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const cache = LRURenderCache({max: 64 * 1024 * 1024});

const createApp = (App, store) =>
    (<Provider store={store}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </JssProvider>
    </Provider>);


const earlyChunk = (styles, materialUiCss, css, stateJson, ids) => `
    <!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${APP_NAME}</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="description" content="${META_DESCRIPTION}"/>
          <meta name="keywords" content="${META_KEYWORDS}" />
          ${styles}
          <style id="jss-server-side">${materialUiCss}</style>
          <style type="text/css">${css}</style>
        </head>
      <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <script>window.EMOTION_IDS = new Array("${ids}")</script>
          <div id="root">${process.env.NODE_ENV !== 'production' ? '<div>' : ''}`,
    lateChunk = (cssHash, js) => `
          ${process.env.NODE_ENV !== 'production' ? '</div>' : ''}
          </div>
          ${cssHash}       
          <script type='text/javascript' src='/reactVendors.js'></script>
          <script type='text/javascript' src='/vendors.js'></script>
          ${js}
          ${serviceWorker}
        </body>
    </html>
  `;

export default ({clientStats}) => async (req, res, next) => {
    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served

    // Grab the CSS from our sheetsRegistry.
    const materialUiCss = sheetsRegistry.toString();
    const stateJson = JSON.stringify(store.getState());
    const chunkNames = flushChunkNames();
    const {js, styles, cssHash} = flushChunks(clientStats, {chunkNames});

    const app = createApp(App, store);

    // TODO Remove when extractCritical can run with stream
    const Sync = extractCritical(ReactDOM.renderToString(app));

    const {html, ids, css} = extractCritical(ReactDOMStream.renderToString(app, {cache}));

    res.set('Content-Type', 'text/html');
    // flush the head with css & js resource tags first so the download starts immediately
    const early = earlyChunk(styles, materialUiCss, Sync.css, stateJson, ids);
    res.write(early);
    res.flush();

    console.log('REQUESTED PATH:', req.path);
    console.log('CHUNK NAMES', chunkNames);

    const stream = html;
    stream.pipe(res, {end: false});
    stream.on('end', () => {
        const late = lateChunk(cssHash, js);
        res.write(late);
        res.end();
    });
};
