/**
 * actuality controller
 */

import { factories } from '@strapi/strapi'
import { Actuality } from '../../../types';
import { isHTML } from '../../../utils';

export default factories.createCoreController('api::actuality.actuality', () => ({
    async find(ctx) {
        const { query } = ctx.request
        const { data, meta } = await super.find(ctx)

        if (query.filtered) {
            const entries = await strapi.entityService.findMany('api::actuality.actuality', {
                populate: 'deep',
            })

            let datas: Actuality.Type[] = []
            let img: Actuality.CustomImage = {}

            entries.forEach((item: Actuality.Type) => {
                const { image, components } = item
                if (image) {
                    img = mainImgStructure(item)
                }

                filterComponents(components)

                datas = [...datas, { ...item, image: img, components: components }]
            })

            /**
             * Get the updater and creator name and firstname
             */

            const items = await strapi.entityService.findMany('api::actuality.actuality', {
                populate: '*',
            })

            let creator: Record<string, any> = {}
            let updater: Record<string, any> = {}

            items.forEach((item: Actuality.Type, i: number) => {
                const { id, createdBy, updatedBy } = item
                let current = datas.find((el: any) => el.id === id)
                if (typeof createdBy === 'object')
                    creator = {
                        firstname: createdBy.firstname,
                        lastname: createdBy.lastname,
                    }
                if (typeof updatedBy === 'object')
                    updater = {
                        firstname: updatedBy.firstname,
                        lastname: updatedBy.lastname,
                    }

                datas[i] = { ...current, updatedBy: updater, createdBy: creator }
            })

            if (query.published) {
                datas = datas.filter(e => e.publishedAt !== null)
            }

            return { data: datas, meta };
        } else {
            return { data, meta }
        }
    },

    async getActu(ctx) {
        const { query } = ctx.request
        const { date, title } = query

        if (date && title) {
            const entry = await strapi.db.query('api::actuality.actuality').findOne({
                where: {
                    url: {
                        $eq: `${date}/${title}`
                    }
                },
                populate: ['deep']
            })

            if (entry.image) {
                entry.image = mainImgStructure(entry)
            }

            filterComponents(entry.components)

            ctx.body = entry;
        }
    }
}));

const mainImgStructure = (item: Actuality.Type) => {
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

const filterComponents = (components: any[]) => {
    if (components.length > 0) {
        components.forEach((component: any, i: number) => {
            /**
             * Gallery component
             */
            if (component.__component === 'general.galerie') {
                let componentGallery: Actuality.CustomImage[] = []
                component.images.map((img: Actuality.CustomImage) => {
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
                let componentCarousel: Actuality.CustomImage[] = []
                component.images.map((img: Actuality.CustomImage) => {
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
}