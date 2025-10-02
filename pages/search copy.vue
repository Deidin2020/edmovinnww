<template>
  <div id="main-wrapper" class="main-wrapper search-program-edmov container-fluid">
    <section>
      <div class="row">
        <div class="col-md-8">




        </div>
      </div>
    </section>
  </div>
</template>

<script>

import { fetchAlgoliaData } from '@/services/AlgoliaService';
import { generateAlgoliaFilters, handleQueryFilters } from '@/utils/FiltersHelper';
import { formatAccommodationData, formatRoomData, getAPIPaginationData } from '@/utils/DataFormatter';
import { updateUrl } from "@/utils/urlHelper";

import { BModal } from 'bootstrap-vue'
import { saveFiltersInBackEnd } from "@/utils/filterUtils";

export default {
  components: { BModal },
  async asyncData({ $axios }) {
    try {
      const SEO = await $axios.get('/api/seo/show/Discover');
      const SEO_RESULT = SEO.data.result.seo;
      return { SEO_RESULT };
    } catch (error) {
      // console.error('Error fetching BlogSwiperItems:', error);
      return { SEO_RESULT: {} };
    }
  },
  head() {
    return {
      title: this.SEO_RESULT?.title,
      meta: [
        {
          name: 'title',
          content: this.SEO_RESULT?.title
        },
        {
          name: 'description',
          content: this.SEO_RESULT?.description
        },
        {
          name: 'keywords',
          content: this.SEO_RESULT?.keywords
        }
      ],
      script: [
        {
          type: 'application/ld+json',
          json: this.$generateBreadCrumbSchema([
            { name: 'Home', url: 'https://edmovinn.com' },
            { name: 'Accommodations', url: 'https://edmovinn.com/accommodations' }
          ])
        }
      ],
      style: [
        {
          cssText: `
            body {
              background-color: #EAECF0 !important;
            }
            .edu-header.header-fullwidth .header-mainmenu {
              background-color: #EAECF0 !important;
            }
          `
        }
      ],
      meta: [
        {
          hid: 'robots',
          name: 'robots',
          content: 'noindex'
        },
        {
          hid: 'description',
          name: this.SEO_RESULT?.meta_title,
          content: this.SEO_RESULT?.meta_description
        }
      ]
    };
  },
  data() {
    return {
      accommodations: [],
      rooms: [],
      searchName: null,
      sorting: null,
      sortDirection: '',
      filters: {},
      loading: true,
      targetTab: 'rooms',
      algoliaFilters: '',
      accommodationsPagination: {},
      roomsPagination: {},
      current_page: 1,
    };
  },
  async mounted() {
    this.initializeFilters();
    await this.fetchData(this.current_page);
  },
  methods: {
    initializeFilters() {
      const { filters, targetTab, current_page } = handleQueryFilters(this.$route.query, this.filters);
      this.filters = filters;
      this.targetTab = 'rooms';
      this.current_page = current_page;
    },
    async fetchData(page) {
      this.loading = true;
      await this.fetchMainData(page);
    },

    async fetchMainData(page = 1, tab = "rooms") {
      const query = {
        ...this.$route.query,
        page,
      };

      const queryString = Object.keys(this.filters)
        .filter(key => this.filters[key] !== null && this.filters[key] !== '' && this.filters[key].length !== 0)
        .map(key => `${encodeURIComponent(key)}=${encodeURIComponent(this.filters[key])}`)
        .join('&');

      this.$axios.$get('/api/accommodations/filterData?page=' + page + '&' + queryString)
        .then(response => {
          const result = response.result;
          const locale = this.$i18n.locale;

          this.accommodations = result.accommodations.map(item => formatAccommodationData(item, locale));
          this.rooms = result.rooms.map(item => formatRoomData(item, locale));

          this.accommodationsPagination = getAPIPaginationData(result.accommodations_pagination);
          this.roomsPagination = getAPIPaginationData(result.rooms_pagination);

          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.accommodations = [];
          this.accommodationsPagination = {};
          this.rooms = [];
          this.roomsPagination = {};
        });
    },
    setFilters(newFilters) {
      this.filters = newFilters;
      saveFiltersInBackEnd(this.$axios, this.$auth, newFilters);
      this.current_page = 1;
      updateUrl(this.filters, this.sorting, this.$route, this.$router, this.selectedTab, this.current_page, this.localePath);
      this.fetchData(this.current_page);

    },
    handleSearchNameUpdate(data) {
      this.current_page = 1;
      this.searchName = data;
      updateUrl(this.filters, this.sorting, this.$route, this.$router, this.selectedTab, this.current_page, this.localePath);
      this.fetchData(this.current_page);

    },
    handleSorting(sort) {
      this.current_page = 1;
      this.sorting = sort;
      updateUrl(this.filters, this.sorting, this.$route, this.$router, this.selectedTab, this.current_page, this.localePath);
      this.fetchData(this.current_page);

    },
    updateActiveTab(tab) {
      this.targetTab = tab;
      this.current_page = 1;
    },
    handlePageChange(tab, page) {
      this.current_page = page;
      updateUrl(this.filters, this.sorting, this.$route, this.$router, this.selectedTab, this.current_page, this.localePath);
      this.fetchData(this.current_page);

    },
  }
};
</script>
