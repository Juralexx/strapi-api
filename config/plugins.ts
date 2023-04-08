module.exports = () => {
    return {
        'strapi-plugin-populate-deep': {
            config: {
                defaultDepth: 10,
            }
        },
        'rest-cache': {
            config: {
                provider: {
                    name: 'memory',
                    getTimeout: 500,
                    options: {
                        max: 32767,
                        updateAgeOnGet: false,
                    },
                },
                strategy: {
                    enableEtagSupport: true,
                    logs: true,
                    clearRelatedCache: true,
                    contentTypes: [
                        "api::site.site",
                        "api::navigation.navigation",
                        "api::home.home",
                        "api::header.header",
                        {
                            contentType: "api::service.service",
                            routes: [{
                                path: '/api/services?filtered=true',
                                method: 'GET',
                            }, {
                                path: '/api/services?filtered=true&published=true',
                                method: 'GET',
                            }]
                        }, {
                            contentType: "api::actuality.actuality",
                            routes: [{
                                path: '/api/actualities?filtered=true',
                                method: 'GET',
                            }, {
                                path: '/api/actualities?filtered=true&published=true',
                                method: 'GET',
                            }]
                        }]
                }
            }
        },
        'ckeditor': {
            enabled: true,
            resolve: "./src/plugins/strapi-plugin-ckeditor"
        },
        'strapi-blurhash': {
            enabled: true,
        },
        'preview-button': {
            config: {
                openTarget: '_blank',
                contentTypes: [
                    {
                        uid: 'api::introduction.introduction',
                        published: {
                            url: process.env.FRONT_URL,
                        },
                    },
                    {
                        uid: 'api::service.service',
                        draft: {
                            url: `${process.env.FRONT_URL}/api/preview`,
                            query: {
                                type: 'service',
                                url: '{url}',
                            },
                        },
                        published: {
                            url: `${process.env.FRONT_URL}/{url}`,
                        },
                    },
                    {
                        uid: 'api::actuality.actuality',
                        draft: {
                            url: `${process.env.FRONT_URL}/api/preview`,
                            query: {
                                type: 'actuality',
                                url: '{url}',
                            },
                        },
                        published: {
                            url: `${process.env.FRONT_URL}/actualites/{url}`,
                        },
                    },
                ],
            },
        },
    }
}