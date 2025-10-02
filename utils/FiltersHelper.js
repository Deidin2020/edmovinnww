export function generateAlgoliaFilters(filters) {
    let algoliaFilters = "status: 1";
    
    if (filters.universityKeys?.length) {
        algoliaFilters += ` AND ${filters.universityKeys.map(key => `university_key:${key}`).join(' OR ')}`;
    }

    if (filters.countryKeys?.length) {
        algoliaFilters += ` AND ${filters.countryKeys.map(id => `country_key:${id}`).join(' OR ')}`;
    }

    if (filters.degreeKeys?.length) {
        algoliaFilters += ` AND ${filters.degreeKeys.map(id => `degree_keys:${id}`).join(' OR ')}`;
    }

    if (filters.fieldKeys?.length) {
        algoliaFilters += ` AND ${filters.fieldKeys.map(id => `field_keys:${id}`).join(' OR ')}`;
    }

    if (filters.intakeKeys?.length) {
        algoliaFilters += ` AND ${filters.intakeKeys.map(id => `intake_keys:${id}`).join(' OR ')}`;
    }

    if (filters.languageKeys?.length) {
        algoliaFilters += ` AND ${filters.languageKeys.map(id => `language_keys:${id}`).join(' OR ')}`;
    }

    
    if (filters.fees_from && filters.fees_to) {
        algoliaFilters += ` AND ((cash_payment_fees_usd>=${filters.fees_from} AND cash_payment_fees_usd<=${filters.fees_to}))`;
    } else if (filters.fees_from) {
        algoliaFilters += ` AND (cash_payment_fees_usd>=${filters.fees_from})`;
    } else if (filters.fees_to) {
        algoliaFilters += ` AND (cash_payment_fees_usd<=${filters.fees_to})`;
    }

    return algoliaFilters;
}


export function handleQueryFilters(routeQuery, filters) {
    Object.keys(filters).forEach(key => {
        if (routeQuery[key] !== undefined && routeQuery[key] !== null) {
            filters[key] = Array.isArray(filters[key])
                ? routeQuery[key].split(',').map(value => String(value))
                : String(routeQuery[key]);
        }
    });

    const searchName = routeQuery.searchName || null;

    return {
        filters,
        selectedTab: routeQuery.tab || 'programs',
        current_page: Number(routeQuery.page) || 1, // Ensure current_page is a number
        searchName,
    };
}
