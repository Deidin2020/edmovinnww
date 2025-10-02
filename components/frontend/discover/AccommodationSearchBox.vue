<template>
    <div class="search-box">
        <div class="row">
            <div class="col-md-10">
                <form @submit.prevent="search">
                    <div class="search-box-area-form  d-flex align-items-center">
                        <div id="autocomplete" class="autocomplete-container"></div>
                    </div>
                </form>
            </div>
            <div class="col-md-2" v-if="!event">
                <div class="dropdown">
                    <button class="btn btn-primary-white-without-border flex-align-items-center dropdown-toggle"
                        type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src=" /img/search/icon-sort.svg" alt="Edmov" title="Edmov" /> {{ selectedSortLabel }}
                    </button>

                    <ul class="dropdown-menu w-100" aria-labelledby="dropdownMenuButton1">
                        <li v-for="option in sortingOptions" :key="option.key">
                            <a class="dropdown-item" :class="{ active: activeSort === option.key }"
                                @click="selectSortOption(option.key, option.label)">
                                {{ option.label }}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div class="col-md-2" v-else>
                <div class="dropdown" ref="dropdown">
                    <button class="btn btn-outline-secondary w-100 d-flex" type="button" @click="toggleDropdown">
                        <img src="/img/search/icon-sort.svg" alt="Sort Icon" class="me-2" />
                        {{ selectedSortLabel }}
                    </button>

                    <ul class="dropdown-menu w-100"
                        :style="dropdownOpen ? 'display: block !important' : 'display: none !important'">
                        <li v-for="option in sortingOptions" :key="option.key">
                            <button class="dropdown-item" :class="{ active: activeSort === option.key }"
                                @click="selectSortOption(option.key, option.label); closeDropdown()">
                                {{ option.label }}
                            </button>
                        </li>
                    </ul>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
import { autocomplete } from '@algolia/autocomplete-js';
import { fetchAlgoliaData } from '@/services/AlgoliaService';
import {
    formatCountryData,
    formatFieldsData,
    formatLanguageData,
    formatProgramData,
    formatStudyDegreeData,
    formatUniversityData
} from '@/utils/DataFormatter';

export default {
    props: {
        event: false,
    },
    data() {
        return {
            name: null,
            activeSort: null,
            selectedSortLabel: this.$t('sort'),
            autocompleteInstance: null,
            sortingOptions: [
                { key: 'asc', label: this.$t('Tuition cost low - high') },
                { key: 'desc', label: this.$t('Tuition cost high - low') },
            ],
            dropdownOpen: false,
        };
    },
    mounted() {
        this.initializeAutocomplete();
        this.$nextTick(() => {

            document.querySelector('#autocomplete').addEventListener('keydown', (event) => {
                const panel = document.querySelector('.aa-Panel');
                if (panel.style.display === 'none' || panel.style.display === '') {
                    panel.style.display = 'block';
                }
                if (event.key === 'Enter') {
                    event.preventDefault();
                    this.search();
                }
            });
        });
        document.addEventListener('click', this.handleClickOutside);
    },
    beforeDestroy() {
        document.removeEventListener('click', this.handleClickOutside);
    },
    methods: {
        initializeAutocomplete() {
            const that = this;
            this.autocompleteInstance = autocomplete({
                container: '#autocomplete',
                placeholder: this.$t('search_by_name'),
                openOnFocus: false,
                debug: false,
                stallThreshold: 1000,
                onStateChange(props) {
                    if (props.prevState.query) {
                        that.name = props.prevState.query;
                    }
                },
                onReset() {
                    that.clearInput();
                },
                getSources({ query }) {
                    return [
                        {
                            sourceId: 'programs',
                            async getItems() {
                                const indexName = that.$i18n.locale === 'en' ? 'programs_auto_suggestions' : 'programs_auto_suggestions_ar';
                                const result = await fetchAlgoliaData(indexName, 1, 'status: 1', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatProgramData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('labels.programs');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                        {
                            sourceId: 'universities',
                            async getItems() {
                                const result = await fetchAlgoliaData('universities_index', 1, 'status: 1', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatUniversityData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('labels.universities');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                        {
                            sourceId: 'StudyingDegrees',
                            async getItems() {
                                const result = await fetchAlgoliaData('studying_degrees_index', 1, '', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatStudyDegreeData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('filter.program_level.title');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                        {
                            sourceId: 'Languages',
                            async getItems() {
                                const result = await fetchAlgoliaData('languages_index', 1, '', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatLanguageData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('filter.language.title');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                        {
                            sourceId: 'StudyingFields',
                            async getItems() {
                                const result = await fetchAlgoliaData('studying_fields_index', 1, '', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatFieldsData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('filter.Discipline.title');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                        {
                            sourceId: 'Country',
                            async getItems() {
                                const result = await fetchAlgoliaData('countries_index', 1, '', query, 5);
                                const locale = that.$i18n.locale;
                                return result.hits.map(item => formatCountryData(item, locale));
                            },
                            templates: {
                                header() {
                                    return that.$t('filter.location.title');
                                },
                                item({ item }) {
                                    return item.name;
                                },
                            },
                            onSelect({ item }) {
                                that.selectSuggestion(item.name);
                            },
                        },
                    ];
                },
            });
        },
        selectSuggestion(suggestion) {
            this.autocompleteInstance.setQuery(suggestion);
            this.updateName();
        },
        search() {
            if (this.name !== null && this.name !== '') {
                this.updateName();
                const panel = document.querySelector('.aa-Panel');
                panel.style.display = 'none';
            }
        },
        updateName() {
            this.$emit('update-name-search-data', this.name)
        },
        selectSortOption(sortKey, sortLabel) {
            this.activeSort = sortKey;
            this.selectedSortLabel = sortLabel;
            this.$emit('update-sorting', sortKey);
        },
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
            // alert("toggleDropdown" , this.dropdownOpen);
        },
        closeDropdown() {
            this.dropdownOpen = false;
            // alert("closeDropdown" , this.dropdownOpen);
        },
        handleClickOutside(event) {
            const dropdown = this.$refs.dropdown;
            if (dropdown && !dropdown.contains(event.target)) {
                this.closeDropdown();
            }
        },
        clearInput() {
            this.name = '';
            this.updateName();
        }
    },
    beforeDestroy() {
        const inputElement = document.querySelector('#autocomplete input[type="search"]');
        if (inputElement) {
            inputElement.removeEventListener('keyup', this.handleKeyUp);
        }
    },
}
</script>