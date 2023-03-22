/**
 * service router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::service.service');

const customRouter = (innerRouter: any, extraRoutes = []) => {
    let routes: any;
    return {
        get prefix() {
            return innerRouter.prefix;
        },
        get routes() {
            if (!routes) routes = innerRouter.routes.concat(extraRoutes);
            return routes;
        },
    };
};

const routes = [
    {
        method: "GET",
        path: "/service",
        handler: "api::service.service.getService",
    },
];

export default customRouter(defaultRouter, routes);
