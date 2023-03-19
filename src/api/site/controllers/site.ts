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

        let datas: Site.Type[] = entry

        return { ...datas };
    },
}));
