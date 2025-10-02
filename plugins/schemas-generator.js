import Vue from 'vue'

Vue.prototype.$generateBreadCrumbSchema = function (items) {
    const itemListElement = items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        item: {
            '@id': item.url,
            name: item.name
        }
    }));

    return {
        '@context': 'http://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: itemListElement
    };
};
