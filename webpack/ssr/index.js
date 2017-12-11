import compression from 'compression';
import config from 'config';
import cookieParser from 'cookie-parser';
import express from 'express';
import path from 'path';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpackHotServerMiddleware from 'webpack-hot-server-middleware';

// Must be imported in that way to be include in prod
import clientConfig from '../../webpack/ssr/client';
import serverConfig from '../../webpack/ssr/server';


const DEBUG = !(['production', 'development', 'staging']
    .includes(process.env.NODE_ENV));
const DEVELOPMENT = (['development', 'staging'].includes(process.env.NODE_ENV));


// Redefined publicPath and outputPath instead of import clientConfig to solve
// prod importation problems
const publicPath = DEBUG ? (
    config.apps.frontend.baseName.debug
) : (
    config.apps.frontend.baseName.production
);
const outputPath = path.resolve(__dirname, '../../build/ssr/client');


const app = express();
app.use(cookieParser());
app.use(compression());


// UNIVERSAL HMR + STATS HANDLING GOODNESS:
if (DEVELOPMENT) {
    const multiCompiler = webpack([clientConfig, serverConfig]);
    const clientCompiler = multiCompiler.compilers[0];

    // First we fire up Webpack an pass in the configuration we
    // created
    let bundleStart = null;
    // We give notice in the terminal when it starts bundling and
    // set the time it started
    clientCompiler.plugin('compile', () => {
        console.log('Bundling...');
        bundleStart = Date.now();
    });
    // We also give notice when it is done compiling, including the
    // time it took. Nice to have
    clientCompiler.plugin('done', () => {
        console.log(`Bundled in ${(Date.now() - bundleStart)}ms!`);
    });

    app.use(webpackDevMiddleware(multiCompiler, {
        publicPath,
        watchOptions: {
            aggregateTimeout: 300,
            poll: 1000,
        },
        quiet: false,
        noInfo: false,
        stats: {
            colors: true,
            reasons: DEBUG,
            hash: DEVELOPMENT,
            version: DEVELOPMENT,
            timings: true,
            chunks: DEVELOPMENT,
            chunkModules: DEVELOPMENT,
            cached: DEVELOPMENT,
            cachedAssets: DEVELOPMENT,
        },
        headers: clientConfig.devServer.headers,
    }));
    app.use(webpackHotMiddleware(clientCompiler));
    app.use(
        // keeps serverRender updated with arg: { clientStats, outputPath }
        webpackHotServerMiddleware(multiCompiler, {
            serverRendererOptions: {outputPath},
        }),
    );
}
else {
    const clientStats = require('../../build/ssr/client/stats.json'); // eslint-disable-line import/no-unresolved
    const serverRender = require('../../build/ssr/server/main.js').default; // eslint-disable-line import/no-unresolved

    app.use(publicPath, express.static(outputPath));
    app.use(serverRender({clientStats, outputPath}));
}

app.listen(config.apps.frontend.api_port, () => {
    console.log(`Listening @ http://localhost:${config.apps.frontend.api_port}/`);
});
