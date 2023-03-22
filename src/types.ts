export namespace Site {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends Type { }

    export interface Type {
        denomination?: string,
        job?: string,
        slogan?: string,
        creation_date?: string,
        adress?: string,
        street?: string,
        postcode?: string,
        city?: string,
        latitude?: string,
        longitude?: string,
        googlemap?: string,
        mail?: string,
        phone?: string,
        opening?: Array<{ [key: string]: string }>
        legales?: Legals
    }

    export interface Legals {
        raison_social?: string,
        adresse_siege?: string,
        ville_RCS?: string,
        SIRET?: string,
    }
}

/**
 * 
 */

interface ContentBase {
    createdBy?: Record<string, any> | string,
    createdAt?: Record<string, any> | string,
    updatedBy?: Record<string, any> | string,
    updatedAt?: Record<string, any> | string,
    publishedBy?: Record<string, any> | string,
    publishedAt?: Record<string, any> | string
}

/**
 * 
 */

export namespace Home {
    export type defaultType = {
        id: number,
        introduction: Introduction,
        checkerboard: Checkerboard
    }

    export interface Introduction {
        id: number,
        title: string,
        content: string
    }
    
    export interface Checkerboard {
        id: number,
        title: string,
        content: string,
        link: string,
        button_name: string
    }
}

/**
 * 
 */

export namespace Actuality {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends ContentBase {
        title: string,
        url: string,
        content: string,
        date: string,
        image?: Image,
        gallery?: any
        image_display: boolean,
        image_side: 'Gauche' | 'Droite' | 'Haut',
        components: any[]
    }

    export interface Type extends ContentBase {
        id: number,
        title: string,
        url: string,
        content: string,
        date: string,
        image?: CustomImage,
        gallery?: any
        image_display: boolean,
        image_side: 'Gauche' | 'Droite' | 'Haut',
        components: any[]
    }

    interface ImageBase {
        url?: string,
        name?: string,
        alternativeText?: string,
        caption?: string,
        width?: number,
        height?: number,
        ext?: string,
        mime?: string,
        blurhash?: string
    }

    export interface Image {
        data: {
            id?: number,
            attributes?: ImageBase
        }
    }

    export interface CustomImage extends ImageBase {
        id?: number,
    }
}

/**
 * 
 */

export namespace Service {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends ContentBase {
        title: string,
        url: string,
        content: string,
        image?: Image,
        gallery?: any
        image_display: boolean,
        image_side: 'Gauche' | 'Droite' | 'Haut',
        components: any[]
    }

    export interface Type extends ContentBase {
        id: number,
        title: string,
        url: string,
        content: string,
        image?: CustomImage,
        gallery?: any
        image_display: boolean,
        image_side: 'Gauche' | 'Droite' | 'Haut',
        components: any[]
    }

    interface ImageBase {
        url?: string,
        name?: string,
        alternativeText?: string,
        caption?: string,
        width?: number,
        height?: number,
        ext?: string,
        mime?: string,
        blurhash?: string
    }

    export interface Image {
        data: {
            id?: number,
            attributes?: ImageBase
        }
    }

    export interface CustomImage extends ImageBase {
        id?: number,
    }
}