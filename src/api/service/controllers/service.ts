/**
 * service controller
 */

import { factories } from '@strapi/strapi'
import { Service } from '../../../types';
import { isHTML } from '../../../utils';

export default factories.createCoreController('api::service.service', () => ({
    async find(ctx) {
        const { query } = ctx.request
        const { data, meta } = await super.find(ctx)

        if (query.filtered) {
            const entries = await strapi.entityService.findMany('api::service.service', {
                populate: 'deep',
            })

            let datas: Service.Type[] = []
            let img: Service.CustomImage = {}

            entries.forEach((item: Service.Type) => {
                const { image, components } = item
                if (image) {
                    img = mainImgStructure(item)
                }
                if (components.length > 0) {
                    components.forEach((component: any, i: number) => {
                        /**
                         * Gallery component
                         */
                        if (component.__component === 'general.galerie') {
                            let componentGallery: Service.CustomImage[] = []
                            component.images.map((img: Service.CustomImage) => {
                                return componentGallery = [...componentGallery, galleryImgStructure(img)]
                            })
                            components[i] = { ...component, images: componentGallery }
                        }
                        /**
                         * Checkerboard component
                         */
                        if (component.__component === 'general.damier') {
                            components[i].image = mainImgStructure(components[i])
                        }
                        /**
                         * Cards component
                         */
                        if (component.__component === 'general.groupe-de-cartes') {
                            component.cards.map((card: any, i: number) => {
                                return component.cards[i] = { ...card, image: mainImgStructure(card) }
                            })
                        }
                        /**
                         * Image component
                         */
                        if (component.__component === 'general.image') {
                            components[i].image = mainImgStructure(components[i])
                        }
                        /**
                         * Billboard component
                         */
                        if (component.__component === 'general.tableau-d-affichage') {
                            let componentImages: any[] = []
                            component.images.map((img: any) => {
                                return componentImages = [...componentImages, {
                                    title: img.title,
                                    text: img.text,
                                    text_placement: img.text_placement,
                                    ...galleryImgStructure(img.image)
                                }]
                            })
                            components[i] = { ...component, images: componentImages }
                        }
                        /**
                         * Carousel component
                         */
                        if (component.__component === 'general.carrousel-d-images') {
                            let componentCarousel: Service.CustomImage[] = []
                            component.images.map((img: Service.CustomImage) => {
                                return componentCarousel = [...componentCarousel, galleryImgStructure(img)]
                            })
                            components[i] = { ...component, images: componentCarousel }
                        }
                        /**
                         * Embed component
                         */
                        if (component.__component === 'medias.integration') {
                            if (!isHTML(component.embed)) {
                                delete components[i]
                            }
                        }
                    })
                }

                datas = [...datas, { ...item, image: img, components: components }]
            })

            if (query.published) {
                datas = datas.filter(e => e.publishedAt !== null)
            }

            return { data: datas, meta };
        } else {
            return { data, meta }
        }
    },
    async getService(ctx) {
        const { query } = ctx.request
        const { url } = query

        if (url) {
            const entry = await strapi.db.query('api::service.service').findOne({
                where: {
                    url: {
                        $eq: url
                    }
                },
                populate: ['deep']
            })

            ctx.body = entry;
        }
    }
}));

const mainImgStructure = (item: Service.Type) => {
    const { image } = item
    return {
        id: image['id'],
        url: image['url'],
        name: image['name'],
        alternativeText: image['alternativeText'] ? image['alternativeText'] : item.title,
        caption: image['caption'],
        width: image['width'],
        height: image['height'],
        ext: image['ext'],
        mime: image['mime'],
        blurhash: image['blurhash'],
    }
}

const galleryImgStructure = (img: Record<string, any>) => {
    return {
        id: img['id'],
        url: img['url'],
        name: img['name'],
        alternativeText: img['alternativeText'],
        caption: img['caption'],
        width: img['width'],
        height: img['height'],
        ext: img['ext'],
        mime: img['mime'],
        blurhash: img['blurhash'],
    }
}