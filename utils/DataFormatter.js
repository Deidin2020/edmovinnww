export function formatProgramData(item, locale) {
    return {
        id                 : item.objectID || '',
        name               : item.name?.[locale] || '',
        university_name    : item.university_name?.[locale] || '',
        field              : item.field?.[locale] || '',
        language_trans     : item.language_trans?.[locale] || '',
        degree             : item.degree?.[locale] || '',
        university_slug    : item.university_slug?.[locale] || '',
        university_logo    : item.university_logo || '',
        country            : item.country || '',
        country_title      : item.country_title?.[locale] || '',
        duration_in_months : item.duration_in_months || 0,
        cost_after_discount: item.fees,
        cash_payment_fees  : item.cash_payment_fees_usd,
        currency           : item.currency,
        price              : item.cash_payment_fees,
        discount           : item.cost_after_discount,
        price_usd          : item.cash_payment_fees_usd,
        discount_usd       : item.fees_usd || 0,
        application_allowed: item.application_allowed ?? false,
        slug               : item.slug?.[locale] || '',
        logo               : item.logo || '',
        meta_description   : item.meta_description?.[locale] || '',
        cost_type          : item.cost_type || '',
        discount_amount    : item.discount_amount || 0,
    };
}


export function formatUniversityData(item, locale) {
    return {
        id              : item.objectID,
        name            : item.name[locale],
        image           : item.image,
        url             : item.url,
        location        : item.location,
        slug            : item.slug[locale],
        logo            : item.logo,
        city            : item.city,
        country_title   : item.country_title[locale],
        meta_description: item.meta_description[locale],
    };
}

export function formatStudyDegreeData(item, locale) {
    return {
        id  : item.objectID,
        name: item.name[locale],
        key : item.key,
    };
}

export function formatLanguageData(item, locale) {
    return {
        id  : item.objectID,
        name: item.title[locale],
    };
}

export function formatFieldsData(item, locale) {
    return {
        id  : item.objectID,
        name: item.name[locale],
    };
}

export function formatCountryData(item, locale) {
    return {
        id  : item.objectID,
        name: item.title[locale],
    };
}

export function getAPIPaginationData(result) {
    if (!result) return {};

    return {
        current_page : result.current_page,
        last_page    : result.last_page,
        total_records: result.total_records,
    };
}

export function getPaginationData(result) {
    return {
        current_page : result.page + 1,
        last_page    : result.nbPages,
        total_records: result.nbHits,
    };
}

export function formatAccommodationData(item, locale) {
    return {
        id     : item.id,
        name   : item.name,
        slug   : item.slug,
        state  : item.state,
        image  : item.image,
        city   : item.city,
        country: item.country,
        image  : item.image || '/img/search/default-room.jpg',
    };
}

export function formatRoomData(item, locale) {
    return {
        id            : item.id,
        name          : item.name,
        slug          : item.slug,
        image         : item.image || '/img/search/default-room.jpg',
        availability  : item.availability,
        available_from: item.available_from,
        available_to  : item.available_to,
        no_bed        : item.no_bed || null,
        room_type     : item.room_type || '',
        size          : item.size,
        accommodation : {
            id     : item.accommodation?.id,
            name   : item.accommodation?.name,
            slug   : item.accommodation?.slug,
            image  : item.accommodation?.image || '',
            state  : item.accommodation?.state,
            city   : item.accommodation?.city,
            country: item.accommodation?.country,
        },
        price: {
            id                : item.price_id || null,
            service_id        : item.service_id || null,
            payment_method_id : item.payment_method_id || null,
            service           : item.service || '',
            payment_method    : item.payment_type || '',
            price             : item.price || 0,
            deposit           : item.deposit || 0,
            currency_id       : item.currency || '',
        },
        facilities: item.facilities?.map(f => ({ name: f.name })) || [],
        gender_map: item.gender_map?.map(f => ({ name: f.name })) || [],
    };
}
