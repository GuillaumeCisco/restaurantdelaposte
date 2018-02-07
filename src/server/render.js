/* global APP_NAME META_DESCRIPTION META_KEYWORDS */

import React from 'react';
import {renderToNodeStream} from 'react-dom/server';
import {renderStylesToNodeStream} from 'emotion-server';
import {Provider} from 'react-redux';
import {flushChunkNames} from 'react-universal-component/server';
import flushChunks from 'webpack-flush-chunks';
import configureStore from './configureStore';

import App from '../app';
import serviceWorker from './serviceWorker';

const createApp = (App, store) => (
    <Provider store={store}>
        <App />
    </Provider>
);

const flushDll = clientStats => {
    return clientStats.assets.reduce((p, c) => [
        ...p,
        ...(c.name.endsWith('dll.js') ? [`<script type="text/javascript" src="/${c.name}" defer></script>`] : [])
    ], []).join('\n');
};

const earlyChunk = (styles, stateJson) => `
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
        </head>
      <body>
          <script>window.REDUX_STATE = ${stateJson}</script>
          <div id="root">`,
    lateChunk = (cssHash, js, dll) => `</div>
          ${process.env.NODE_ENV === 'development' ? '<div id="devTools"></div>' : ''}
          ${cssHash}       
          ${dll}
          ${js}
          ${serviceWorker}
        </body>
    </html>
  `;

export default ({clientStats}) => async (req, res, next) => {
    const store = await configureStore(req, res);
    if (!store) return; // no store means redirect was already served

    // Grab the CSS from our sheetsRegistry.
    const stateJson = JSON.stringify(store.getState());
    const chunkNames = flushChunkNames();
    const {js, styles, cssHash} = flushChunks(clientStats, {chunkNames});
    const dll = flushDll(clientStats);

    console.log(dll, `${js}`);

    res.set('Content-Type', 'text/html');
    // flush the head with css & js resource tags first so the download starts immediately
    const early = earlyChunk(styles, stateJson);
    res.write(early);
    res.flush();

    console.log('REQUESTED PATH:', req.path);
    console.log('CHUNK NAMES', chunkNames);

    const app = createApp(App, store);
    const stream = renderToNodeStream(app).pipe(renderStylesToNodeStream());

    stream.pipe(res, {end: false});
    stream.on('end', () => {
        const late = lateChunk(cssHash, js, dll);
        res.write(late);
        res.end();
    });
};
