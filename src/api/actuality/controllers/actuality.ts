/**
 * actuality controller
 */

import { factories } from '@strapi/strapi'
import { Actuality } from '../../../types';

export default factories.createCoreController('api::actuality.actuality', () => ({
    async find(ctx) {
        const { query } = ctx.request

        if (query['populate']) {
            const { data, meta } = await super.find(ctx)

            let customDatas: any[] = []
            let customImg: Record<string, any> = {}

            data.forEach((item: Actuality.defaultType, i: number) => {
                const { id, attributes } = item
                const { image } = attributes
                const { name, alternativeText, width, height, ext, mime, url } = image.data.attributes
                customImg = {
                    id: image.data.id,
                    url: url,
                    name: name,
                    alternativeText: alternativeText,
                    width: width,
                    height: height,
                    ext: ext,
                    mime: mime,
                }
                if (!customImg['alternativeText']) {
                    customImg['alternativeText'] = attributes.title
                }
                customDatas = [...customDatas, { id: id, ...attributes, image: customImg }]
            })

            return { data: customDatas, meta };
        } else {
            const entries = await strapi.entityService.findMany('api::actuality.actuality', {
                populate: '*',
            })

            const { meta } = await super.find(ctx)

            let datas: Array<Actuality.Type> = []
            let img: Record<string, any> = {}
            let creator: Record<string, any> = {}
            let updater: Record<string, any> = {}

            entries.forEach((item: Actuality.Type, i: number) => {
                const { image, createdBy, updatedBy } = item
                img = {
                    id: image['id'],
                    url: image['url'],
                    name: image['name'],
                    alternativeText: image['alternativeText'],
                    width: image['width'],
                    height: image['height'],
                    ext: image['ext'],
                    mime: image['mime'],
                }
                if (!img['alternativeText']) {
                    img['alternativeText'] = item.title
                }
                if (typeof createdBy === 'object') {
                    creator = {
                        firstname: createdBy.firstname,
                        lastname: createdBy.lastname,
                        createdAt: createdBy.createdAt,
                        updatedAt: createdBy.updatedAt,
                    }
                }
                if (typeof updatedBy === 'object') {
                    updater = {
                        firstname: updatedBy.firstname,
                        lastname: updatedBy.lastname,
                        createdAt: updatedBy.createdAt,
                        updatedAt: updatedBy.updatedAt,
                    }
                }

                datas = [...datas, {
                    ...item,
                    image: img,
                    createdBy: creator,
                    updatedBy: updater,
                    createdAt: creator.createdAt,
                    updatedAt: updater.updatedAt
                }]
            })

            return { data: datas, meta };
        }
    },
}));
