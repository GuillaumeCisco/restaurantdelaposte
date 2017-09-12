const webpack = require('webpack');
const config = require('config');

const PRODUCTION = (['production'].includes(process.env.NODE_ENV));

export default () => new webpack.DefinePlugin({
    'process.env.NODE_ENV': PRODUCTION ? JSON.stringify('production') : JSON.stringify('development'),
    'process.env.DEBUG_PROD': JSON.stringify(process.env.DEBUG_PROD || 'false'),
    APP_NAME: JSON.stringify(config.appName),
    PRODUCTION_BASE_NAME: JSON.stringify(config.apps.frontend.baseName.production),
    DEBUG_BASE_NAME: JSON.stringify(config.apps.frontend.baseName.debug),
});
