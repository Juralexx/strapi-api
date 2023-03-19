import { editorConfig } from "../tools/editor.config"

module.exports = () => {
    return {
        'strapi-blurhash': {
            enabled: true,
        },
        'strapi-plugin-populate-deep': {
            config: {
                defaultDepth: 10, // Default is 5
            }
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
                    contentTypes: [{
                        contentType: "api::site.site",
                    }, {
                        contentType: "api::home.home",
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
        ckeditor: {
            enabled: true,
            config: editorConfig
        }
    }
}