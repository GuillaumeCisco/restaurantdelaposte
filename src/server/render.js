/* global APP_NAME META_DESCRIPTION META_KEYWORDS */

import React from 'react';
import ReactDOM from 'react-dom/server';
import {extractCritical} from 'emotion-server';
import {Provider} from 'react-redux';
import {flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';

import configureStore from './configureStore';

import App from '../common/routes';
import serviceWorker from './serviceWorker';

const createApp = (App, store) =>
    (<Provider store={store}>
        <App/>
    </Provider>);


export default ({clientStats}) => async (req, res, next) => {
    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served

    const app = createApp(App, store);
    const {html, ids, css} = extractCritical(ReactDOM.renderToString(app));

    const stateJson = JSON.stringify(store.getState());
    const chunkNames = flushChunkNames();
    const {js, scripts, styles, cssHash} = flushChunks(clientStats, {chunkNames});

    console.log(`${js}`, 'Js: ', scripts);

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
          <meta name="description" content="${META_DESCRIPTION}"/>
          <meta name="keywords" content="${META_KEYWORDS}" />
          ${styles}
          <style type="text/css">${css}</style>
          <link rel="preload" href="ShadedLarch_PERSONAL_USE.ttf" as="font" crossorigin>
        </head>
        <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <script>${`window.EMOTION_IDS = new Array("${ids}")`}</script>
          <div id="root">${process.env.NODE_ENV === 'production' ? html : `<div>${html}</div>`}</div>
          ${cssHash}
          <script type='text/javascript' src='/bootstrap.js'></script>        
          <script type="text/javascript" src="/reactVendors-dll.js"></script>
          <script type="text/javascript" src="/reduxVendors-dll.js"></script>
          <script type="text/javascript" src="/vendors-dll.js"></script>
          <script type='text/javascript' src='/components/index.js'></script>
          ${serviceWorker}
        </body>
      </html>`,
    );
};
