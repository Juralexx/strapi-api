import { Actuality } from "../../../../types";
import { convertStringToURL, numericDateParser } from "../../../../utils";
import { ValidationError } from '@strapi/utils/lib/errors'

const getUrl = (data: Actuality.IAttributes) => {
    const titleToUrl: string = convertStringToURL(data.title)
    const datefr: string[] = data.date.split('-')
    const date: string = `${datefr[2]}-${datefr[1]}-${datefr[0]}`
    return `${date}/${titleToUrl}`
}

export default {
    async beforeCreate(event: any) {
        const { data } = event.params;
        const regExp: RegExp = new RegExp('/', "g")
        if (!data.date) {
            let today = numericDateParser(new Date().toString());
            today = today.replace(regExp, '-')
            let arr = today.split('-')
            data.date = `${arr[2]}-${arr[1]}-${arr[0]}`
        }
        if (data.date.includes('/')) {
            data.date = data.date.replace(regExp, '-')
        }
        const url = getUrl(data)
        data.url = url

        const entries = await strapi.entityService.findMany('api::actuality.actuality', {
            populate: 'deep',
        })

        entries.forEach((entry: Actuality.Type) => {
            if (entry.title === data.title && entry.date === data.date) {
                throw new ValidationError('Une actualité possédant le même titre existe déjà à cette date. Deux actualités ne peuvent pas posséder la même date et le même titre.');
            }
        })
    },
    async beforeUpdate(event: any) {
        const { data } = event.params;
        const regExp: RegExp = new RegExp('/', "g")
        if (!data.date) {
            let today = numericDateParser(new Date().toString());
            today = today.replace(regExp, '-')
            let arr = today.split('-')
            data.date = `${arr[2]}-${arr[1]}-${arr[0]}`
        }
        if (data.date.includes('/')) {
            data.date = data.date.replace(regExp, '-')
        }
        if (data.title) {
            const url = getUrl(data)
            data.url = url
        }

        const entries = await strapi.entityService.findMany('api::actuality.actuality', {
            populate: 'deep',
        })

        entries.forEach((entry: Actuality.Type) => {
            if (entry.title === data.title && entry.date === data.date) {
                throw new ValidationError('Une actualité possèdant le même titre existe déjà à cette date. Deux actualités ne peuvent pas posséder la même date et le même titre.');
            }
        })
    },
}