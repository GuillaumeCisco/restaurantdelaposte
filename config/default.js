const apiPort = process.env.NODE_PORT || 3000;

module.exports = {
    appName: 'Restaurant de la poste (Chez Robert)',
    apps: {
        frontend: {
            api_port: apiPort,
            baseName: {
                production: '/',
                debug: '/restaurantdelaposte/build/frontend/',
            },
        },
    },
    babel_ignore: /node_modules\/(?!admin-config)/,
};
