/**
 * site controller
 */

import { factories } from '@strapi/strapi'
import { Site } from '../../../types';

export default factories.createCoreController('api::site.site', ({ strapi }) => ({
    async find(ctx) {
        const entry = await strapi.db.query('api::site.site').findOne({
            populate: ['deep']
        })
        const navbar = await strapi.db.query('api::navigation.navigation').findOne({
            populate: ['deep']
        })
        const infos = await strapi.db.query('api::informations-menu.informations-menu').findOne({
            populate: ['deep']
        })

        let datas: Site.Type[] = { ...entry, ...navbar, ...infos }

        return { ...datas };
    },
}));
