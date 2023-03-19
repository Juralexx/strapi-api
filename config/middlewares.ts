export default [
    'strapi::errors',
    {
        name: "strapi::security",
        config: {
            contentSecurityPolicy: {
                useDefaults: true,
                directives: {
                    'frame-src': ["'self'", process.env.FRONT_URL],
                    'frame-ancestors': null,
                    upgradeInsecureRequests: null,
                },
            },
            frameguard: false,
        },
    },
    'strapi::cors',
    'strapi::poweredBy',
    'strapi::logger',
    'strapi::query',
    'strapi::body',
    'strapi::session',
    'strapi::favicon',
    'strapi::public',
];
