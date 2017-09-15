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
            'react',
            'react-dom',
            'react-helmet',
            'react-emotion',
            'react-tap-event-plugin',
            'react-universal-component',
        ],
        vendors: [
            'emotion',
            'fastclick',
            'history',
            'recompose',
        ],
    },
});
