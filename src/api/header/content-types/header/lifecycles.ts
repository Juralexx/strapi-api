export default {
    async afterUpdate() {
        strapi.plugins["rest-cache"].services.cacheStore.clearByUid("api::site.site");
    },
}