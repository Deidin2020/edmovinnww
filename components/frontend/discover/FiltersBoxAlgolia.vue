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
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M4 10.143C4 5.646 7.582 2 12 2C16.418 2 20 5.646 20 10.143C20 14.605 17.447 19.813 13.463 21.674C13.0051 21.8884 12.5056 21.9996 12 21.9996C11.4944 21.9996 10.9949 21.8884 10.537 21.674C6.553 19.812 4 14.606 4 10.144V10.143Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path
                d="M12 13C13.6569 13 15 11.6569 15 10C15 8.34315 13.6569 7 12 7C10.3431 7 9 8.34315 9 10C9 11.6569 10.3431 13 12 13Z"
                stroke="#303DBF" stroke-width="1.5" />
            </svg>
          </div>

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
            <input type="checkbox" v-model="filtersData.countryKeys" :value="country.key"
              :id="'location-' + country.key" checked />

            <label :for="'location-' + country.key">
              <span v-html="country.icon_svg"></span> {{ country.title ? country.title : country.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.programLevel }">
        <div class="head d-flex align-items-center" @click="toggleFilter('programLevel')">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M15.6688 7C15.6688 6.80109 15.7478 6.61032 15.8885 6.46967C16.0291 6.32902 16.2199 6.25 16.4188 6.25H22.0008C22.1997 6.25 22.3905 6.32902 22.5311 6.46967C22.6718 6.61032 22.7508 6.80109 22.7508 7V12.546C22.7508 12.7449 22.6718 12.9357 22.5311 13.0763C22.3905 13.217 22.1997 13.296 22.0008 13.296C21.8019 13.296 21.6111 13.217 21.4705 13.0763C21.3298 12.9357 21.2508 12.7449 21.2508 12.546V8.803L15.1148 14.9C14.6458 15.366 14.2418 15.768 13.8748 16.047C13.4808 16.345 13.0448 16.571 12.5058 16.571C11.9678 16.571 11.5308 16.345 11.1368 16.046C10.7698 15.768 10.3668 15.366 9.89681 14.9L9.62281 14.627C9.10881 14.116 8.77581 13.787 8.49781 13.576C8.23781 13.378 8.11581 13.356 8.03481 13.356C7.95481 13.356 7.83281 13.379 7.57281 13.576C7.29581 13.787 6.96281 14.116 6.44881 14.628L2.52981 18.53C2.38739 18.6622 2.19921 18.734 2.0049 18.7302C1.8106 18.7264 1.62536 18.6474 1.4882 18.5097C1.35104 18.372 1.27268 18.1865 1.26962 17.9922C1.26657 17.7978 1.33905 17.6099 1.47181 17.468L5.42481 13.53C5.89481 13.064 6.29781 12.661 6.66481 12.382C7.05881 12.082 7.49581 11.857 8.03481 11.856C8.57381 11.856 9.01081 12.082 9.40481 12.381C9.77181 12.66 10.1758 13.062 10.6448 13.529L10.9198 13.801C11.4338 14.312 11.7668 14.641 12.0438 14.851C12.3038 15.049 12.4258 15.071 12.5058 15.071C12.5858 15.071 12.7078 15.049 12.9678 14.851C13.2458 14.641 13.5778 14.312 14.0928 13.801L20.1828 7.749H16.4188C16.2199 7.749 16.0291 7.66998 15.8885 7.52933C15.7478 7.38868 15.6688 7.19891 15.6688 7Z"
                fill="#303DBF" />
            </svg>
          </div>

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.program_level.title') }}

          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.degreeKeys.length > 0 || showFilters.programLevel">
          {{ $t('filter.program_level.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.degreeKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.degreeKeys.length > 0 ? filtersData.degreeKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(programLevel, index) in filters.StudyingDegrees">
            <input type="checkbox" v-model="filtersData.degreeKeys" :value="programLevel.key"
              :id="'programLevel-' + programLevel.key" />

            <label :for="'programLevel-' + programLevel.key">
              {{ programLevel.name }}
            </label>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.programLanguage }">
        <div class="head d-flex align-items-center" @click="toggleFilter('programLanguage')">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.001 11.9995C22.001 13.3128 21.7423 14.6132 21.2398 15.8265C20.7372 17.0399 20.0006 18.1423 19.0719 19.0709C18.1433 19.9996 17.0408 20.7362 15.8275 21.2388C14.6142 21.7414 13.3138 22 12.0005 22C10.6872 22 9.38679 21.7414 8.17347 21.2388C6.96016 20.7362 5.85771 19.9996 4.92908 19.0709C4.00045 18.1423 3.26381 17.0399 2.76124 15.8265C2.25867 14.6132 2 13.3128 2 11.9995C2 9.34723 3.05362 6.80356 4.92908 4.9281C6.80454 3.05264 9.3482 1.99902 12.0005 1.99902C14.6528 1.99902 17.1965 3.05264 19.0719 4.9281C20.9474 6.80356 22.001 9.34723 22.001 11.9995Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path
                d="M16.0001 12C16.0001 13.313 15.8961 14.614 15.6951 15.827C15.4951 17.04 15.2001 18.142 14.8281 19.071C14.4571 20 14.0161 20.736 13.5311 21.239C13.0451 21.741 12.5251 22 12.0001 22C11.4751 22 10.9551 21.741 10.4701 21.239C9.98405 20.736 9.54305 19.999 9.17205 19.071C8.80005 18.142 8.50505 17.041 8.30405 15.827C8.09902 14.5617 7.99735 13.2818 8.00005 12C8.00005 10.687 8.10305 9.386 8.30405 8.173C8.50505 6.96 8.80005 5.858 9.17205 4.929C9.54305 4 9.98405 3.264 10.4691 2.761C10.9551 2.26 11.4751 2 12.0001 2C12.5251 2 13.0451 2.259 13.5301 2.761C14.0161 3.264 14.4571 4.001 14.8281 4.929C15.2001 5.858 15.4951 6.959 15.6951 8.173C15.8971 9.386 16.0001 10.687 16.0001 12Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path d="M2 12H22" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.language.title') }}

          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.languageKeys.length > 0 || showFilters.programLanguage">
          {{ $t('filter.language.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.languageKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.languageKeys.length > 0 ? filtersData.languageKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(language, index) in filters.languages" :key="index">
            <input type="checkbox" v-model="filtersData.languageKeys" :value="language.key"
              :id="'language-' + language.key" />
            <label :for="'language-' + language.key">
              <span v-html="language.icon_svg"></span> {{ language.title }}
            </label>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 program-level-filter Discipline"
        :class="{ 'active': showFilters.studyingFields }">
        <div class="head d-flex align-items-center" @click="toggleFilter('studyingFields')">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M9.783 3.49996C10.4758 3.1711 11.2331 3.00049 12 3.00049C12.7669 3.00049 13.5242 3.1711 14.217 3.49996L20.908 6.63696C22.364 7.31896 22.364 9.68096 20.908 10.363L14.218 13.5C13.5251 13.829 12.7676 13.9997 12.0005 13.9997C11.2334 13.9997 10.4759 13.829 9.783 13.5L3.092 10.363C1.636 9.68096 1.636 7.31896 3.092 6.63696L9.783 3.49996Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path
                d="M2 8.5V14M19 11.5V16.625C19 17.633 18.497 18.577 17.615 19.065C16.146 19.88 13.796 21 12 21C10.204 21 7.854 19.879 6.385 19.066C5.504 18.577 5 17.633 5 16.626V11.5"
                stroke="#303DBF" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.Discipline.title') }}

          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.fieldKeys.length > 0 || showFilters.studyingFields">
          {{ $t('filter.Discipline.placeholder') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.fieldKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.fieldKeys.length > 0 ? filtersData.fieldKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <AppInput label="Search" v-model="studyingFieldsSearch" />
          <div class="filter-item mb-3 "
            v-for="(field, index) in studyingFieldsSearch ? displayedStudyingFields : filters.StudyingField">
            <span class="filter-title mb-2 field-title">
              {{ field.name }}
            </span>

            <div class="filter-child" v-for="(subField, index) in field.children">
              <input type="checkbox" v-model="filtersData.fieldKeys" :value="subField.key"
                :id="'field-' + subField.key" />

              <label :for="'field-' + subField.key">
                {{ subField.name }}
              </label>
            </div>
          </div>
        </div>
      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.tuitionFees }"
        v-if="!event">
        <div class="head d-flex align-items-center" @click="toggleFilter('tuitionFees')">
          <div class="icon">
            <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M11 1.75C8.54675 1.75 6.19397 2.72455 4.45926 4.45926C2.72455 6.19397 1.75 8.54675 1.75 11C1.75 13.4533 2.72455 15.806 4.45926 17.5407C6.19397 19.2754 8.54675 20.25 11 20.25C13.4533 20.25 15.806 19.2754 17.5407 17.5407C19.2754 15.806 20.25 13.4533 20.25 11C20.25 8.54675 19.2754 6.19397 17.5407 4.45926C15.806 2.72455 13.4533 1.75 11 1.75ZM0.25 11C0.25 5.063 5.063 0.25 11 0.25C16.937 0.25 21.75 5.063 21.75 11C21.75 16.937 16.937 21.75 11 21.75C5.063 21.75 0.25 16.937 0.25 11ZM11 4.25C11.1989 4.25 11.3897 4.32902 11.5303 4.46967C11.671 4.61032 11.75 4.80109 11.75 5V5.317C13.38 5.609 14.75 6.834 14.75 8.5C14.75 8.69891 14.671 8.88968 14.5303 9.03033C14.3897 9.17098 14.1989 9.25 14 9.25C13.8011 9.25 13.6103 9.17098 13.4697 9.03033C13.329 8.88968 13.25 8.69891 13.25 8.5C13.25 7.656 12.377 6.75 11 6.75C9.624 6.75 8.75 7.656 8.75 8.5C8.75 9.344 9.624 10.25 11 10.25C12.937 10.25 14.75 11.583 14.75 13.5C14.75 15.166 13.38 16.391 11.75 16.683V17C11.75 17.1989 11.671 17.3897 11.5303 17.5303C11.3897 17.671 11.1989 17.75 11 17.75C10.8011 17.75 10.6103 17.671 10.4697 17.5303C10.329 17.3897 10.25 17.1989 10.25 17V16.683C8.62 16.391 7.25 15.166 7.25 13.5C7.25 13.3011 7.32902 13.1103 7.46967 12.9697C7.61032 12.829 7.80109 12.75 8 12.75C8.19891 12.75 8.38968 12.829 8.53033 12.9697C8.67098 13.1103 8.75 13.3011 8.75 13.5C8.75 14.344 9.624 15.25 11 15.25C12.377 15.25 13.25 14.344 13.25 13.5C13.25 12.656 12.377 11.75 11 11.75C9.063 11.75 7.25 10.417 7.25 8.5C7.25 6.834 8.62 5.609 10.25 5.317V5C10.25 4.80109 10.329 4.61032 10.4697 4.46967C10.6103 4.32902 10.8011 4.25 11 4.25Z"
                fill="#303DBF" />
            </svg>
          </div>

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

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.universities }">
        <div class="head d-flex align-items-center" @click="toggleFilter('universities')">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M22.001 11.9995C22.001 13.3128 21.7423 14.6132 21.2398 15.8265C20.7372 17.0399 20.0006 18.1423 19.0719 19.0709C18.1433 19.9996 17.0408 20.7362 15.8275 21.2388C14.6142 21.7414 13.3138 22 12.0005 22C10.6872 22 9.38679 21.7414 8.17347 21.2388C6.96016 20.7362 5.85771 19.9996 4.92908 19.0709C4.00045 18.1423 3.26381 17.0399 2.76124 15.8265C2.25867 14.6132 2 13.3128 2 11.9995C2 9.34723 3.05362 6.80356 4.92908 4.9281C6.80454 3.05264 9.3482 1.99902 12.0005 1.99902C14.6528 1.99902 17.1965 3.05264 19.0719 4.9281C20.9474 6.80356 22.001 9.34723 22.001 11.9995Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path
                d="M16.0001 12C16.0001 13.313 15.8961 14.614 15.6951 15.827C15.4951 17.04 15.2001 18.142 14.8281 19.071C14.4571 20 14.0161 20.736 13.5311 21.239C13.0451 21.741 12.5251 22 12.0001 22C11.4751 22 10.9551 21.741 10.4701 21.239C9.98405 20.736 9.54305 19.999 9.17205 19.071C8.80005 18.142 8.50505 17.041 8.30405 15.827C8.09902 14.5617 7.99735 13.2818 8.00005 12C8.00005 10.687 8.10305 9.386 8.30405 8.173C8.50505 6.96 8.80005 5.858 9.17205 4.929C9.54305 4 9.98405 3.264 10.4691 2.761C10.9551 2.26 11.4751 2 12.0001 2C12.5251 2 13.0451 2.259 13.5301 2.761C14.0161 3.264 14.4571 4.001 14.8281 4.929C15.2001 5.858 15.4951 6.959 15.6951 8.173C15.8971 9.386 16.0001 10.687 16.0001 12Z"
                stroke="#303DBF" stroke-width="1.5" />
              <path d="M2 12H22" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round" />
            </svg>
          </div>

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
            <input type="checkbox" v-model="filtersData.universityKeys" :value="university.key"
              :id="'university-' + university.key" />
            <label :for="'university-' + university.key">
              {{ university.name }}
            </label>
          </div>
        </div>

      </div>

      <div class="parent-filter-item mt-5 program-level-filter" :class="{ 'active': showFilters.intakes }">
        <div class="head d-flex align-items-center" @click="toggleFilter('intakes')">
          <div class="icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M2 12C2 8.229 2 6.343 3.172 5.172C4.343 4 6.229 4 10 4H14C17.771 4 19.657 4 20.828 5.172C22 6.343 22 8.229 22 12V14C22 17.771 22 19.657 20.828 20.828C19.657 22 17.771 22 14 22H10C6.229 22 4.343 22 3.172 20.828C2 19.657 2 17.771 2 14V12Z"
                stroke="#303DBF" />
              <path d="M7 4V2.5M17 4V2.5" stroke="#303DBF" stroke-linecap="round" />
              <path
                d="M16.5 18C17.3284 18 18 17.3284 18 16.5C18 15.6716 17.3284 15 16.5 15C15.6716 15 15 15.6716 15 16.5C15 17.3284 15.6716 18 16.5 18Z"
                stroke="#303DBF" />
              <path d="M2.5 9H21.5" stroke="#303DBF" stroke-linecap="round" />
            </svg>
          </div>

          <span class="filter-title ms-4 px-0 py-0 mx-0 my-0">
            {{ $t('filter.Intakes.title') }}

          </span>

          <span class="toggle-icon">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M6 9L12 15L18 9" stroke="#303DBF" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round" />
            </svg>
          </span>
        </div>

        <div class="desc mt-4 py-1 d-flex align-items-center justify-content-between"
          v-if="filtersData.intakeKeys.length > 0 || showFilters.intakes">
          {{ $t('filter.Intakes.title') }}

          <span class="text-primary" style="cursor: pointer" @click="filtersData.intakeKeys = []">
            {{ $t('filter.clear_all') }}
            ({{ filtersData.intakeKeys.length > 0 ? filtersData.intakeKeys.length : 0 }})
          </span>
        </div>

        <div class="filter-items mt-4">
          <div class="filter-item mb-1" v-for="(intake, index) in filters.ProgramIntake">
            <input type="checkbox" v-model="filtersData.intakeKeys" :value="intake.key" :id="'intake-' + intake.key" />

            <label :for="'intake-' + intake.key">
              {{ intake.name }}
            </label>
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
        programLevel: false,
        programLanguage: false,
        studyingFields: false,
        universities: false,
        tuitionFees: false,
        intakes: null,
      },
      filtersData: {
        countryKeys: [],
        degreeKeys: [],
        languageKeys: [],
        fieldKeys: [],
        universityKeys: [],
        intakeKeys: [],
        fees_from: '',
        fees_to: '',
      },
      studyingFieldsSearch: '',
      displayedStudyingFields: [],
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
    studyingFieldsSearch() {
      this.searchStudyingFields()
    },
    filtersData: {
      handler() {
        this.$emit('updateFilters', this.filtersData)
      },
      deep: true
    },
    event(newVal) {
      if (newVal) {
        if (!this.filtersData.countryKeys.includes('turkey')) {
          this.filtersData.countryKeys = ['turkey'];
        }
      } else {
        const index = this.filtersData.countryKeys.indexOf('turkey');
        if (index !== -1) {
          this.filtersData.countryKeys.splice(index, 1);
        }
      }
    }

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
      this.$axios.$get('/api/programs/filter')
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
    searchStudyingFields() {
      const searchTerm = this.studyingFieldsSearch.trim().toLowerCase();

      this.displayedStudyingFields = this.filters.StudyingField
        .map(field => {
          const matchedChildren = field.children.filter(subField =>
            subField.name.toLowerCase().includes(searchTerm)
          );

          // Return a new field object with filtered subfields
          return {
            ...field,
            children: matchedChildren
          };
        })
        .filter(field => field.children.length > 0);
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
