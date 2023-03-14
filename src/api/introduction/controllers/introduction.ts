/**
 * introduction controller
 */

import { factories } from '@strapi/strapi'
import { Introduction } from '../../../types';

export default factories.createCoreController('api::introduction.introduction', ({ strapi }) => ({
    async find(ctx) {
        const { data, meta } = await super.find(ctx)

        let datas: Introduction.Type[] = []

        const { id, attributes } = data
        datas = { id: id, ...attributes }

        return { data: datas, meta };
    },
}));
