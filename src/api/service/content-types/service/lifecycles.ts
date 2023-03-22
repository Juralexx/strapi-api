import { Service } from "../../../../types";
import { ValidationError } from '@strapi/utils/lib/errors'

export default {
    async beforeCreate(event: any) {
        const { data } = event.params;

        const entries = await strapi.entityService.findMany('api::service.service', {
            populate: 'deep',
        })

        entries.forEach((entry: Service.Type) => {
            if (entry.url === data.url) {
                throw new ValidationError('Une page est déjà reliée à l\'URL spécifiée.');
            }
        })
    },
    async beforeUpdate(event: any) {
        const { data } = event.params;

        const entries = await strapi.entityService.findMany('api::service.service', {
            populate: 'deep',
        })

        entries.forEach((entry: Service.Type) => {
            if (entry.url === data.url) {
                throw new ValidationError('Une page est déjà reliée à l\'URL spécifiée.');
            }
        })
    },
}