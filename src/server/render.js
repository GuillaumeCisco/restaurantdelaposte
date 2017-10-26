/* global APP_NAME META_DESCRIPTION META_KEYWORDS */

import React from 'react';
import ReactDOM from 'react-dom/server';
import {JssProvider, SheetsRegistry} from 'react-jss';
import {extractCritical} from 'emotion-server';
import {Provider} from 'react-redux';
import {flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import {MuiThemeProvider} from 'material-ui/styles';

import configureStore from './configureStore';

import App from '../common/routes';
import serviceWorker from './serviceWorker';

// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();


const createApp = (App, store) =>
    (<Provider store={store}>
        <App />
    </Provider>);


export default ({clientStats}) => async (req, res, next) => {
    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served

    const app = createApp(App, store);
    const {html, ids, css} = extractCritical(ReactDOM.renderToString(app));

    // Grab the CSS from our sheetsRegistry.
    const materialUiCss = sheetsRegistry.toString();
    const stateJson = JSON.stringify(store.getState());
    const chunkNames = flushChunkNames();
    const {js, styles, cssHash} = flushChunks(clientStats, {chunkNames});

    console.log(`${js}`);

    console.log('REQUESTED PATH:', req.path);
    console.log('CHUNK NAMES', chunkNames);

    console.log(process.env.NODE_ENV, html);

    return res.send(
        `<!doctype html>
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
          <style type="text/css">${css}</style>
          <style id="jss-server-side">${materialUiCss}</style>
          <link rel="preload" href="ShadedLarch_PERSONAL_USE.ttf" as="font" crossorigin>
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <script>${`window.EMOTION_IDS = new Array("${ids}")`}</script>
          <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div></div><div id="test">${html}</div>`}</div>
          ${cssHash}                    

          ${js}    
          ${serviceWorker}
        </body>
      </html>`,
    );
};
