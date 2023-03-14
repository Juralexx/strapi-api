/**
 * checkerboard controller
 */

import { factories } from '@strapi/strapi'
import { Checkerboard } from '../../../types';

export default factories.createCoreController('api::checkerboard.checkerboard', ({ strapi }) => ({
    async find(ctx) {
        const { data, meta } = await super.find(ctx)

        let datas: Checkerboard.Type[] = []

        data.forEach((item: Checkerboard.defaultType, i: number) => {
            const { id, attributes } = item
            datas = [...datas, { id: id, ...attributes }]
        })

        return { data: datas, meta };
    },
}));
