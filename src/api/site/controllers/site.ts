/**
 * site controller
 */

import { factories } from '@strapi/strapi'
import { Site } from '../../../types';

export default factories.createCoreController('api::site.site', ({ strapi }) => ({
    async find(ctx) {
        //Populate site datas
        const entry = await strapi.db.query('api::site.site').findOne({
            populate: ['deep']
        })
        //Populate navigation datas
        const navbar = await strapi.db.query('api::navigation.navigation').findOne({
            populate: ['deep']
        })
        //Populate informations-menu datas
        const infos = await strapi.db.query('api::informations-menu.informations-menu').findOne({
            populate: ['deep']
        })
        //Populate header datas
        const header = await strapi.db.query('api::header.header').findOne({
            populate: ['deep']
        })
        //Populate home datas
        const home = await strapi.db.query('api::home.home').findOne({
            populate: ['deep']
        })
        //Push all populated datas in an object to send to the client
        let datas: Site.Type[] = { ...entry, ...navbar, ...infos, ...header, ...home }

        return { ...datas };
    },
}));
