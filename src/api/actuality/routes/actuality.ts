/**
 * actuality router
 */

import { factories } from '@strapi/strapi';

const defaultRouter = factories.createCoreRouter('api::actuality.actuality');

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
        path: "/actuality",
        handler: "api::actuality.actuality.getActu",
    },
];

export default customRouter(defaultRouter, routes);
