/* global APP_NAME */

import React from 'react';
import ReactDOM from 'react-dom/server';
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

// Create a sheetsRegistry instance.
const sheetsRegistry = new SheetsRegistry();

// Configure JSS
const jss = create(preset());
jss.options.createGenerateClassName = createGenerateClassName;

const createApp = (App, store) =>
    (<Provider store={store}>
        <JssProvider registry={sheetsRegistry} jss={jss}>
            <MuiThemeProvider theme={theme}>
                <App />
            </MuiThemeProvider>
        </JssProvider>
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

    console.log('REQUESTED PATH:', req.path);
    console.log('CHUNK NAMES', chunkNames);

    return res.send(
        `<!doctype html>
      <html>
        <head>
          <meta charset="utf-8">
          <title>${APP_NAME}</title>
          <meta charset="utf-8" />
          <meta http-equiv="X-UA-Compatible" content="IE=edge" />
          <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, user-scalable=0" />
          <meta name="description" content="Restaurant de la poste (Chez Robert). 01 46 21 32 07, 2 rue Rouget de L'isle, Boulogne-Billancourt, France"/>
          <meta name="keywords" content="restaurant, poste, boulogne, brasserie" />
          ${styles}
          <style type="text/css">${css}</style>
          <style id="jss-server-side">${materialUiCss}</style>
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <script>${`window.EMOTION_IDS = new Array("${ids}")`}</script>
          <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
          ${cssHash}          
          <script type="text/javascript" src="/reactVendors.js"></script>
          <script type="text/javascript" src="/vendors.js"></script>
          ${js}
          <script type="text/javascript">
          'serviceWorker' in window.navigator && window.addEventListener('load', function() {
              window.navigator.serviceWorker.register('service-worker.js')
                .then(function(r) {
                  console.log('ServiceWorker registration successful with scope: ', r.scope)
                }).catch(function(e) {
                  console.error('ServiceWorker registration failed: ', e)
                })
            });
          </script>
        </body>
      </html>`,
    );
};
