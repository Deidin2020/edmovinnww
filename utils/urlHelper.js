export function updateUrl(filters, sorting, route, router, selectedTab, current_page, localePath) {
    const newFilters = filters || {};
    // Merge the new filters with existing query parameters
    const newQuery = {...route.query};

    Object.keys(newFilters).forEach(key => {
        if (newFilters[key] !== undefined && newFilters[key] !== null) {
            const newValues = String(newFilters[key]).split(',').map(value => String(value)).filter(String);
            if (newQuery[key]) {
                const existingValues = String(newQuery[key]).split(',').map(value => String(value)).filter(String);
                
                // Update the values by adding new ones and removing those that are no longer selected
                const updatedValues = newValues.filter(value => existingValues.includes(value) || !existingValues.includes(value));

                // Remove the key from the query if all values are removed
                if (updatedValues.length === 0) {
                    delete newQuery[key];
                } else {
                    newQuery[key] = updatedValues.join(',');
                }
            } else if (newValues.length > 0) {
                newQuery[key] = newValues.join(',');
            }
        }
    });


    // Remove keys with empty values
    Object.keys(newQuery).forEach(key => {
        if (!newQuery[key]) {
            delete newQuery[key];
        }
    });

    newQuery.tab = selectedTab;
    newQuery.page = current_page;
    if (sorting) {
        newQuery.sort_dir = sorting;
    }

    router.push(localePath({ query: newQuery }));
}
