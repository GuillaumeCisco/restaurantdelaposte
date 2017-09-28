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
            meta: {
                description: 'Restaurant de la poste (Chez Robert). 01 46 21 32 07, 2 rue Rouget de L\'isle, Boulogne-Billancourt, France',
                keywords: 'restaurant, poste, boulogne, brasserie'
            }
        },
    }
};
