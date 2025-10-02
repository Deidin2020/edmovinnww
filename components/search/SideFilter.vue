<template>
    <div class="divide-y divide-filter-border">
        <div :class="{ 'active': showFilters.location }">

            <FilterItem :title="$t('filter.location.title')" :placeholder="$t('filter.location.placeholder')"
                :model="filtersData" keyName="countryKeys" :items="filters.countries" :show="showFilters.location"
                @toggle="toggleFilter('location')" />

            <FilterItem :title="$t('filter.city.title')" :placeholder="$t('filter.city.placeholder')"
                :model="filtersData" keyName="cityKeys" :items="filters.cities" :show="showFilters.city"
                @toggle="toggleFilter('city')" />

            <FilterItem :title="$t('filter.reservation.title')" :placeholder="$t('filter.reservation.placeholder')"
                :model="filtersData" keyName="reservationKeys" :items="filters.reservations"
                :show="showFilters.reservation" @toggle="toggleFilter('reservation')" />

            <FilterItem :title="$t('filter.room.title')" :placeholder="$t('filter.room.placeholder')"
                :model="filtersData" keyName="roomKeys" :items="filters.rooms" :show="showFilters.room"
                @toggle="toggleFilter('room')" />

            <FilterItem :title="$t('filter.gender.title')" :placeholder="$t('filter.gender.placeholder')"
                :model="filtersData" keyName="genderKeys" :items="filters.genders" :show="showFilters.gender"
                @toggle="toggleFilter('gender')" />

            <FilterItem :title="$t('filter.university_name.title')"
                :placeholder="$t('filter.university_name.placeholder')" :model="filtersData" keyName="universityKeys"
                :items="filters.UniversityName" :show="showFilters.universities"
                @toggle="toggleFilter('universities')" />

            <FilterItem :title="$t('filter.tuitionFees.title')" :placeholder="$t('filter.tuitionFees.placeholder')"
                :model="filtersData" :show="showFilters.tuitionFees" type="fees"
                @toggle="toggleFilter('tuitionFees')" />
        </div>
    </div>
</template>

<script>
export default {
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
            filtersCollapsed: true,
        }
    },
    mounted() {
        this.getFilters()
        if (window.innerWidth > 768) {
            this.filtersCollapsed = false
        }
    },
    watch: {
        filtersData: {
            handler() {
                this.$emit('updateFilters', this.filtersData)
            },
            deep: true,
        },
    },
    methods: {
        handleQueryFilters() {
            const query = this.$route.query
            Object.keys(this.filtersData).forEach((key) => {
                if (query[key] && query[key] !== undefined) {
                    if (Array.isArray(this.filtersData[key])) {
                        this.filtersData[key] = query[key]
                            .split(',')
                            .map((value) => String(value))
                            .filter(String)
                    } else {
                        this.filtersData[key] = String(query[key]) || query[key]
                    }
                }
            })
        },
        getFilters() {
            this.$axios
                .$get('/api/accommodations/filter')
                .then((response) => {
                    this.filters = response.result
                    this.handleQueryFilters()
                })
                .catch(() => {
                    // handle error
                })
        },
        toggleFilter(filter) {
            this.showFilters[filter] = !this.showFilters[filter]
        },
        toggleFilters() {
            this.filtersCollapsed = !this.filtersCollapsed
        },
    },
}
</script>
