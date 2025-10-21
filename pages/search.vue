<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <div class="flex max-w-7xl mx-auto">
        <aside class="hidden md:block transition-all duration-300 w-80" v-show="isFilterVisible">
          <div class="sticky top-0 p-6">
            <div class="rounded-lg border text-card-foreground shadow-sm bg-filter-bg border-filter-border">
              <div class="p-0">
                <div class="flex items-center justify-between p-4 border-b border-filter-border">
                  <h2 class="font-semibold text-lg">{{ $t('filter.title') }}</h2>
                  <button @click="toggleFilter"
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent h-9 rounded-md px-3 text-primary hover:text-primary/80">
                    {{ $t('filter.hide') }}</button>
                </div>
                <SideFilter @updateFilters="setFilters" />
              </div>
            </div>
          </div>
        </aside>
        <main class="flex-1 p-3 sm:p-4 md:p-6">
          <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-4 sm:mb-6">
            <div>
              <h1 class="text-2xl sm:text-3xl font-bold mb-1 sm:mb-2">{{ $t('accommodation.title') }}</h1>
              <p class="text-sm text-muted-foreground"> {{ $t('labels.Results') }} ({{ targetTab ===
                'accommodations' ? accommodationsPagination?.total_records || 0 :
                roomsPagination?.total_records || 0 }}) <span v-if="targetTab === 'accommodations'">{{
                  $t('labels.Accommodation') }}</span>
                <span v-else>{{ $t('labels.Room') }}</span>
              </p>
            </div>

            <div class="flex items-center gap-2">
              <div class="md:hidden"><button @click="toggleFilterMobile"
                  class="justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center gap-2"
                  type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r7:"
                  data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                    class="lucide lucide-sliders-horizontal w-4 h-4">
                    <line x1="21" x2="14" y1="4" y2="4"></line>
                    <line x1="10" x2="3" y1="4" y2="4"></line>
                    <line x1="21" x2="12" y1="12" y2="12"></line>
                    <line x1="8" x2="3" y1="12" y2="12"></line>
                    <line x1="21" x2="16" y1="20" y2="20"></line>
                    <line x1="12" x2="3" y1="20" y2="20"></line>
                    <line x1="14" x2="14" y1="2" y2="6"></line>
                    <line x1="8" x2="8" y1="10" y2="14"></line>
                    <line x1="16" x2="16" y1="18" y2="22"></line>
                  </svg> {{ $t('filter.title') }}</button></div><button @click="toggleFilter" v-show="!isFilterVisible"
                class="items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border bg-background h-10 px-4 py-2 hidden md:inline-flex text-primary border-primary hover:bg-primary hover:text-primary-foreground">
                {{ $t('filter.show') }}</button>
            </div>
          </div>


          <div data-orientation="horizontal" class="mb-4 sm:mb-6">


            <div
              class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full max-w-xs sm:max-w-md grid-cols-2">
              <button :class="[
                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm',
                targetTab === 'rooms'
                  ? 'shadow-sm bg-primary text-primary-foreground'
                  : ''
              ]" data-bs-target="#room" data-bs-toggle="pill" role="tab" @click="updateActiveTab('rooms')">
                {{ $t('labels.rooms') }}
              </button>

              <button :class="[
                'inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 text-sm',
                targetTab === 'accommodations'
                  ? 'shadow-sm bg-background text-foreground'
                  : ''
              ]" data-bs-target="#accommodation" data-bs-toggle="pill" role="tab"
                @click="updateActiveTab('accommodations')">
                {{ $t('labels.accommodations') }}
              </button>

            </div>
          </div>

          <RoomList v-if="targetTab === 'rooms'" :pagination="roomsPagination" :rooms="rooms"
            @update_page="handlePageChange('rooms', $event)" />
          <AccommodationList v-if="targetTab === 'accommodations'" :pagination="accommodationsPagination"
            :accommodations="accommodations" @update_page="handlePageChange('accommodations', $event)" />


          <div
            v-if="(targetTab === 'accommodations' && accommodations.length === 0 && !loading) || (targetTab === 'rooms' && rooms.length === 0 && !loading)"
            class="d-flex align-items-center justify-content-center flex-column empty-app">
            <img alt="Empty App" title="Empty App" src="/img/program/empty-app.svg" style="height: 200px" />
            <h6 class="mt-4 text-center" v-html="$t('labels.no_results_try_agin')"></h6>
          </div>

        </main>
      </div>
    </div>
    <SideFilterMobile @updateFilters="setFilters" v-show="isFilterVisibleMobile" />
  </main>
</template>

<script>

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
      isFilterVisible: true,
      isFilterVisibleMobile: false,
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
  mounted() {
    this.initializeFilters();
    this.fetchData(this.current_page);
  },
  methods: {
    toggleFilter() {
      this.isFilterVisible = !this.isFilterVisible;
    },
    toggleFilterMobile() {
      this.isFilterVisibleMobile = !this.isFilterVisibleMobile;
    },
    initializeFilters() {
      const { filters, targetTab, current_page } = handleQueryFilters(this.$route.query, this.filters);
      this.filters = filters;
      this.targetTab = 'rooms';
      this.current_page = current_page;
    },
    fetchData(page) {
      this.loading = true;
      this.fetchMainData(page);
    },

    fetchMainData(page = 1, tab = "rooms") {
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
