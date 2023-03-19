/**
 * home controller
 */

import { factories } from '@strapi/strapi'

export default factories.createCoreController('api::home.home', ({ strapi }) => ({
    async find(ctx) {
        const entry = await strapi.db.query('api::home.home').findOne({
            populate: ['deep']
        })

        return { ...entry };
    }
}))
