<template>
  <div class="filters-box">
    <div class="d-flex align-items-center justify-content-between" :class="filtersCollapsed ? '' : 'pb-4 mb-1'">
      <span class="filter-title p-0 m-0">
        {{ $t('filters') }}
      </span>

      <span class="text-primary" @click="toggleFilters" style="cursor: pointer">
        {{ filtersCollapsed ? $t('actions.show') : $t('actions.hide') }}
        {{ $t('filters') }}
      </span>
    </div>

    <div v-if="!filtersCollapsed">
      <div class="parent-filter-item location-filter" :class="{ 'active': showFilters.location }" v-if="!event">
        <div class="head d-flex align-items-center" @click="toggleFilter('location')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.location.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.countryKeys.length > 0 || showFilters.location">
          {{ $t('filter.location.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.countryKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.countryKeys.length > 0 ? filtersData.countryKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(country, index) in filters.countries"
            v-if="!event || (event && country.key === 'turkey')">
            <input type="checkbox" v-model="filtersData.countryKeys" :value="country.id" :id="'location-' + country.key"
              checked />

            <label :for="'location-' + country.key">
              <span v-html="country.icon_svg"></span> {{ country.title ? country.title : country.name }}
            </label>
          </div>
        </div>
      </div>


      <div class="parent-filter-item mt-5 city-filter" :class="{ 'active': showFilters.city }">
        <div class="head d-flex align-items-center" @click="toggleFilter('city')">
          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.city.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.cityKeys.length > 0 || showFilters.city">
          {{ $t('filter.city.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.cityKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.cityKeys.length > 0 ? filtersData.cityKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(city, index) in filters.cities" :key="'city-' + index">
            <input type="checkbox" v-model="filtersData.cityKeys" :value="city.id" :id="'city-' + city.id" />

            <label :for="'city-' + city.id">
              {{ city.name }}
            </label>
          </div>
        </div>
      </div>


      <div class="parent-filter-item mt-5 reservation-filter" :class="{ 'active': showFilters.reservation }">
        <div class="head d-flex align-items-center" @click="toggleFilter('reservation')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.reservation.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.reservationKeys.length > 0 || showFilters.reservation">
          {{ $t('filter.reservation.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.reservationKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.reservationKeys.length > 0 ? filtersData.reservationKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(reservation, index) in filters.reservations"
            :key="'reservation-' + index">
            <input type="checkbox" v-model="filtersData.reservationKeys" :value="reservation.id"
              :id="'reservation-' + reservation.id" />

            <label :for="'reservation-' + reservation.id">
              {{ reservation.name }}
            </label>
          </div>
        </div>
      </div>


      <div class="parent-filter-item mt-5 room-filter" :class="{ 'active': showFilters.room }">
        <div class="head d-flex align-items-center" @click="toggleFilter('room')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.room.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.roomKeys.length > 0 || showFilters.room">
          {{ $t('filter.room.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.roomKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.roomKeys.length > 0 ? filtersData.roomKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(room, index) in filters.rooms" :key="'room-' + index">
            <input type="checkbox" v-model="filtersData.roomKeys" :value="room.id" :id="'room-' + room.id" />

            <label :for="'room-' + room.id">
              {{ room.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 gender-filter" :class="{ 'active': showFilters.gender }">
        <div class="head d-flex align-items-center" @click="toggleFilter('gender')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.gender.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.genderKeys.length > 0 || showFilters.gender">
          {{ $t('filter.gender.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.genderKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.genderKeys.length > 0 ? filtersData.genderKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(gender, index) in filters.genders" :key="'gender-' + index">
            <input type="checkbox" v-model="filtersData.genderKeys" :value="gender.id" :id="'gender-' + gender.id" />

            <label :for="'gender-' + gender.id">
              {{ gender.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.universities }">
        <div class="head d-flex align-items-center" @click="toggleFilter('universities')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.university_name.title') }}

          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.universityKeys.length > 0 || showFilters.universities">
          {{ $t('filter.university_name.placeholder') }}


          <span class="text-primary" style="cursor: pointer" @click="filtersData.universityKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.universityKeys.length > 0 ? filtersData.universityKeys.length : 0 }})
          </span>
        </div>

        <div class="search-box" style=" margin: 10px 10px 20px 10px !important;" v-if="showFilters.universities">
          <input type="text" v-model="searchQuery" @input="updateSearchQuery" :placeholder="$t('Search_universities')"
            class="form-control" />
        </div>

        <div class="filter-items mt-4">
          <div v-if="displayedUniversities.length === 0 && searchQuery.trim() !== ''" class="no-results mt-2">
            {{ $t('no_result') }}
          </div>


          <div class="filter-item mb-1" v-for="(university, index) in displayedUniversities" :key="index"
            v-if="(!event) || (event && university.country == 'Turkey')">
            <input type="checkbox" v-model="filtersData.universityKeys" :value="university.id"
              :id="'university-' + university.key" />
            <label :for="'university-' + university.key">
              {{ university.name }}
            </label>
          </div>
        </div>

      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.tuitionFees }"
        v-if="!event">
        <div class="head d-flex align-items-center" @click="toggleFilter('tuitionFees')">

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.tuitionFees.title') }}
          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="(filtersData.fees_from || filtersData.fees_to) || showFilters.tuitionFees">
          {{ $t('filter.tuitionFees.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.fees_from = filtersData.fees_to = ''">
            {{ $t('filter.clear_all') }}
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="d-flex align-item-center">
            <AppInput :label="$t('filter.min_fees')" type="number" v-model="filtersData.fees_from" />
            <div class="mx-3" />
            <AppInput :label="$t('filter.max_fees')" type="number" v-model="filtersData.fees_to" />
          </div>
        </div>
      </div>

    </div>
  </div>
</template>

<script>
export default {
  props: {
    event: false,
  },
  data() {
    return {
      filters: [],
      searchQuery: '',
      showFilters: {
        location: false,
        universities: false,
        tuitionFees: false,
        city: false,
        reservation: false,
        room: false,
        gender: false,
      },
      filtersData: {
        countryKeys: [],
        universityKeys: [],
        fees_from: '',
        fees_to: '',
        cityKeys: [],
        reservationKeys: [],
        roomKeys: [],
        genderKeys: [],
      },
      displayedUniversities: [],
      allUniversities: [],
      filtersCollapsed: true
    }
  },
  mounted() {
    this.getFilters()
    if (this.event) {
      this.filtersData.countryKeys = ['turkey'];
    }
    // if size web
    if (window.innerWidth > 768) {
      this.filtersCollapsed = false
    }
  },
  watch: {

    filtersData: {
      handler() {
        this.$emit('updateFilters', this.filtersData)
      },
      deep: true
    },
  },
  methods: {
    handleQueryFilters() {
      const query = this.$route.query
      Object.keys(this.filtersData).forEach(key => {
        if (query[key] && query[key] !== undefined) {
          if (Array.isArray(this.filtersData[key])) {
            this.filtersData[key] = query[key].split(',').map(value => String(value)).filter(String);
          } else {
            this.filtersData[key] = String(query[key]) || query[key];
          }
        }
      });
    },
    updateSearchQuery() {
      const query = this.normalizeArabic(this.searchQuery.trim());
      if (query) {
        this.displayedUniversities = this.allUniversities.filter(university =>
          this.normalizeArabic(university.name).includes(query)
        );
      } else {
        this.displayedUniversities = this.allUniversities;
      }
    },
    getFilters() {
      this.$axios.$get('/api/accommodations/filter')
        .then(response => {
          this.filters = response.result
          this.handleQueryFilters();
          this.allUniversities = this.filters.UniversityName
          this.displayedUniversities = this.allUniversities
        })
        .catch(error => {
          // console.log(error)
        })
    },
    toggleFilter(filter) {
      this.showFilters[filter] = !this.showFilters[filter]
    },
    toggleFilters() {
      this.filtersCollapsed = !this.filtersCollapsed
    },
    normalizeArabic(text) {
      const normalizedText = text
        .replace(/أ/g, 'ا')
        .replace(/إ/g, 'ا')
        .replace(/آ/g, 'ا')
        .replace(/ﺀ/g, 'ا')
        .replace(/ﺍ/g, 'ا')
        .replace(/ﻫ/g, 'ه')
        .replace(/ؤ/g, 'و')
        .replace(/ﻭ/g, 'و')
        .replace(/ﻯ/g, 'ي')
        .replace(/ﻰ/g, 'ي')
        .replace(/ﻱ/g, 'ي')
        .replace(/ﻲ/g, 'ي')
        .replace(/ى/g, 'ي')
        .toLowerCase();
      return normalizedText;
    },
  }
}
</script>
