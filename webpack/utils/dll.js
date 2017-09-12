import path from 'path';
import webpack from 'webpack';
import AutoDllPlugin from 'autodll-webpack-plugin';

export default new AutoDllPlugin({
    context: path.join(__dirname, '..'),
    filename: '[name].js',
    plugins: [
        new webpack.optimize.UglifyJsPlugin(),
    ],
    entry: {
        reactVendors: [
            'emotion',
            'react',
            'react-dom',
            'react-helmet',
            'react-emotion',
            'react-redux',
            'react-select',
            'react-tap-event-plugin',
            'react-universal-component',
            'react-useragent',
        ],
        reduxVendors: [
            'redux',
            'redux-actions',
            'redux-first-router',
            'redux-first-router-link',
            'redux-form',
            'redux-reducers-injector',
            'redux-saga',
            'redux-sagas-injector',
        ],
        vendors: [
            'emotion',
            'fastclick',
            'history',
            'material-ui',
            'material-ui-icons',
            'query-string',
            'recompose',
            'reselect',
            'url',
            'uuid',
        ],
    },
});
