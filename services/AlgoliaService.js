import algoliasearch from 'algoliasearch';

export async function fetchAlgoliaData(
    indexName, 
    page,
    filters = null, 
    query = null, 
    hitsPerPage = 14,
    sortAttribute = 'fees',   
    sortOrder = null
) {
    const searchClient = algoliasearch(process.env.ALGOLIA_APP_ID, process.env.ALGOLIA_SEARCH_KEY);

    if (sortAttribute !== null && sortOrder !== null) {
        indexName = `${indexName}_${sortAttribute}_${sortOrder}`;
    }

    const params = {
        page: page - 1,
        hitsPerPage,
        filters,
    };
    
    // Remove null values from params
    Object.keys(params).forEach(key => params[key] == null && delete params[key]);

    if (query !== '' && query !== undefined && query !== null) {
        params.query = query;
    }

    try {
        const { results } = await searchClient.search([
            {
                indexName,
                params
            }
        ]);

        return results[0];
    } catch (error) {
       // console.error("Error fetching data from Algolia:", error);
        throw error;
    }
}
