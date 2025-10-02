export const state = () => ({
    countryCode: 'TR',
});

export const mutations = {
    setCountryCode(state, countryCode) {
        state.countryCode = countryCode;
    },
};

export const actions = {
    async fetchVisitorInfo({ commit }) {
        try {
            const response = await fetch('https://ipapi.co/json/');
            const data = await response.json();
            commit('setCountryCode', data.country_code || this.countryCode);
        } catch (error) {
           // console.error('Error fetching country code:', error);
        }
    },
};

export const getters = {
    countryCode: (state) => state.countryCode,
};
