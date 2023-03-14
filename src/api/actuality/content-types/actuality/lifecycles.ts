import { Actuality } from "../../../../types";
import { convertStringToURL, numericDateParser } from "../../../../utils";

const getUrlOnCreate = (data: Actuality.IAttributes) => {
    const titleToUrl = convertStringToURL(data.title)
    let datefr: string | string[] = numericDateParser(data.date)
    const regExp = new RegExp('/', "g")
    datefr = datefr.replace(regExp, '-')
    datefr = datefr.split('-')
    const date = `${datefr[0]}-${datefr[1]}-${datefr[2]}`
    return `${date}/${titleToUrl}`
}

const getUrlOnUpdate = (data: Actuality.IAttributes) => {
    const titleToUrl = convertStringToURL(data.title)
    const datefr = data.date.split('-')
    const date = `${datefr[2]}-${datefr[1]}-${datefr[0]}`
    return `${date}/${titleToUrl}`
}

export default {
    async beforeCreate(event: any) {
        const { data } = event.params;
        if (!data.date) {
            data.date = new Date();
        }
        const url = getUrlOnCreate(data)
        data.url = url
    },
    async beforeUpdate(event: any) {
        const { data } = event.params;
        if (data.title) {
            const url = getUrlOnUpdate(data)
            data.url = url
        }
    },
}