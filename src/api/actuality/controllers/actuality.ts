/**
 * actuality controller
 */

import { factories } from '@strapi/strapi'
import { Actuality } from '../../../types';
import { isHTML } from '../../../utils';

export default factories.createCoreController('api::actuality.actuality', () => ({
    async find(ctx) {
        //Get URL query params
        const { query } = ctx.request;
        //Strapi response structure
        const { data, meta } = await super.find(ctx);
        //If the query param 'filtered' exists (?filtered=true)
        if (query.filtered) {
            //Deep entity population
            const entries = await strapi.entityService.findMany('api::actuality.actuality', {
                populate: 'deep',
            });
            //Variable containing all actualities sent to the client
            let datas: Actuality.Type[] = [];
            //Variable handling actuality image
            let img: Actuality.CustomImage = {};
            //For each database entry (actuality)
            entries.forEach((item: Actuality.Type) => {
                //Get actuality image and components
                const { image, components } = item;
                //If there's an image
                if (image) {
                    //Simplify image structure
                    img = mainImgStructure(item);
                }
                //Process restructuration for each components
                filterComponents(components);
                //Pass the results to the 'datas' variable
                datas = [...datas, { ...item, image: img, components: components }]
            })

            /**
             * Get the updater and creator name and firstname
             */

            const items = await strapi.entityService.findMany('api::actuality.actuality', {
                populate: '*',
            })
            //Variable handling actuality creator
            let creator: Record<string, any> = {};
            //Variable handling actuality updater
            let updater: Record<string, any> = {};
            //For each actuality
            items.forEach((item: Actuality.Type, i: number) => {
                //Get actuality id, createdBy and updatedBy properties
                const { id, createdBy, updatedBy } = item;
                //Find current actuality in th 'datas' variable
                let current = datas.find((el: any) => el.id === id);
                //If the 'createdBy' prop is an object
                //Create a custom 'createdBy' object
                if (typeof createdBy === 'object') {
                    creator = {
                        firstname: createdBy.firstname,
                        lastname: createdBy.lastname,
                    }
                }
                //If the 'updatedBy' prop is an object
                //Create a custom 'updatedBy' object
                if (typeof updatedBy === 'object') {
                    updater = {
                        firstname: updatedBy.firstname,
                        lastname: updatedBy.lastname,
                    }
                }
                //Pass the result to the actuality in the 'datas' variable
                datas[i] = { ...current, updatedBy: updater, createdBy: creator }
            })
            //If the query param 'published' exists (?published=true)
            //Return only published actualities
            if (query.published) {
                datas = datas.filter(e => e.publishedAt !== null)
            }
            //Send the results to the client with the 'meta' object : { "pagination": { "page": 1, "pageSize": 25,  "pageCount": 1, "total": 1  } }
            return { data: datas, meta };
        }
        //Else send the response to the client
        else {
            return { data, meta }
        }
    },
    //Custom get single actuality function
    //Function fired from the custom route in the 'actuality.ts' file in the 'routes' folder
    async getActu(ctx) {
        //Get URL query params
        const { query } = ctx.request;
        //Get 'date' and 'title' from query params
        const { date, title } = query;
        //If there's 'date' and 'title' query params
        if (date && title) {
            //Find requested actuality in the database
            const entry = await strapi.db.query('api::actuality.actuality').findOne({
                where: {
                    url: {
                        $eq: `${date}/${title}`
                    }
                },
                populate: ['deep']
            });
            //If the found item contains an image
            if (entry.image) {
                //Simplify image structure
                entry.image = mainImgStructure(entry);
            }
            //Process restructuration for each components
            filterComponents(entry.components);
            //Push the result to the response body
            ctx.body = entry;
        }
    }
}));

/**
 * Return the image with a simplified structure
 * @param item Actuality to process on
 */

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

/**
 * Return the image with a simplified structure
 * @param item Image to process on
 */

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

/**
 * Process an action on every component
 * @param components 
 */

const filterComponents = (components: any[]) => {
    //If there's components
    if (components.length > 0) {
        //For each components
        components.forEach((component: any, i: number) => {
            /**
             * Gallery component
             */
            if (component.__component === 'general.galerie') {
                //Variable handling all gallery images
                let componentGallery: Actuality.CustomImage[] = [];
                //Map all images
                component.images.map((img: Actuality.CustomImage) => {
                    //Return image with a simplified structure
                    return componentGallery = [...componentGallery, galleryImgStructure(img)]
                })
                //Update the component
                components[i] = { ...component, images: componentGallery }
            };
            /**
             * Checkerboard component
             */
            if (component.__component === 'general.damier') {
                //Simplify checkerboard image structure
                components[i].image = mainImgStructure(components[i]);
            };
            /**
             * Cards component
             */
            if (component.__component === 'general.groupe-de-cartes') {
                //For each cards
                component.cards.map((card: any, i: number) => {
                    //Simplify checkerboard image structure
                    return component.cards[i] = { ...card, image: mainImgStructure(card) };
                })
            };
            /**
             * Image component
             */
            if (component.__component === 'general.image') {
                //Simplify checkerboard image structure
                components[i].image = mainImgStructure(components[i]);
            };
            /**
             * Billboard component
             */
            if (component.__component === 'general.tableau-d-affichage') {
                //Variable handling all images
                let componentImages: any[] = [];
                //For each images
                component.images.map((img: any) => {
                    //Update image structure
                    return componentImages = [...componentImages, {
                        title: img.title,
                        text: img.text,
                        text_placement: img.text_placement,
                        ...galleryImgStructure(img.image)
                    }]
                });
                //Update the component
                components[i] = { ...component, images: componentImages };
            };
            /**
             * Carousel component
             */
            if (component.__component === 'general.carrousel-d-images') {
                //Variable handling all carousel images
                let componentCarousel: Actuality.CustomImage[] = [];
                component.images.map((img: Actuality.CustomImage) => {
                    //Simplify carousel image structure
                    return componentCarousel = [...componentCarousel, galleryImgStructure(img)];
                })
                //Update the component
                components[i] = { ...component, images: componentCarousel };
            };
            /**
             * Embed component
             */
            if (component.__component === 'medias.integration') {
                //Check if the embedded element is not HTML (iframe...), remove it
                if (!isHTML(component.embed)) {
                    delete components[i];
                };
            };
        });
    };
};