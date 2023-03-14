interface ContentBase {
    createdBy?: Record<string, any> | string,
    createdAt?: Record<string, any> | string,
    updatedBy?: Record<string, any> | string,
    updatedAt?: Record<string, any> | string,
    publishedBy?: Record<string, any> | string,
    publishedAt?: Record<string, any> | string
}

export namespace Introduction {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends ContentBase {
        content: string
    }

    export interface Type extends ContentBase {
        id: number,
        content: string
    }
}

export namespace Checkerboard {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends ContentBase {
        title: string,
        content: string
    }

    export interface Type extends ContentBase {
        id: number,
        title: string,
        content: string
    }
}

export namespace Actuality {
    export type defaultType = {
        id: number,
        attributes: IAttributes
    }

    export interface IAttributes extends ContentBase {
        title: string,
        content: string,
        date: string,
        image?: Record<string, any>,
        gallery?: any
    }

    export interface Type extends ContentBase {
        id: number,
        title: string,
        content: string,
        date: string,
        image?: Record<string, any>,
        gallery?: any
    }
}