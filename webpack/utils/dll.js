import path from 'path';
import webpack from 'webpack';
import AutoDllPlugin from 'autodll-webpack-plugin';

export default new AutoDllPlugin({
    context: path.join(__dirname, '../..'),
    filename: '[name]-dll.js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    debug: true,
    entry: {
        reactVendors: [
            'react',
            'react-dom',
            'react-emotion',
            'react-redux',
            'react-tap-event-plugin',
            // 'react-universal-component',
        ],
        reduxVendors: [
            'redux',
            // 'redux-actions',
            // 'redux-first-router',
            // 'redux-first-router-link',
            // 'redux-reducers-injector',
            // 'redux-saga',
            // 'redux-sagas-injector'
        ],
        vendors: [
            'emotion',
            'fastclick',
            'google-map-react',
            'history',
            'react-helmet',
            'recompose',
            // 'transition-group',
        ],
    },
});
