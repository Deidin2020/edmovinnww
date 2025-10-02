<template>
  <div class="edu-course-sidebar search-program-sidebar">
    <div class="tab-content">
      <div key="location" class="tab-pane p-0 w-100 fade show active" role="tabpanel">
        <div>
          <button :data-bs-target="`#Filter`" aria-expanded="true"
                  class="accordion-button accordion-button-main accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
            <h2><img src="/img/search/filter-svg.svg" title="filter" alt="filter"> Filter</h2>
          </button>
        </div>
        <div id="Filter" class="accordion-collapse collapse show" data-bs-parent="#search-Filter">
          <div class="accordion-body">
            <div key="location" class="tab-pane tab-pane-program-search fade show active"
                 role="tabpanel">
              <div>
                <button :data-bs-target="`#location`"
                        aria-expanded="true" class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse"
                        type="button">
                  <img :src="`/img/search/icon-80.svg`"  title="filter" alt="filter" class="icon"/>
                  Location
                </button>
              </div>
              <div id="location" class="accordion-collapse collapse"
                   data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  test
                  <location :items="items['Location']" @updateLocation="updateLocation"/>
                </div>
              </div>
            </div>


            <div key="ProgramLevel" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#ProgramLevel`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-86.svg`" title="filter" alt="filter" class="icon"/>
                  Program level
                </button>
              </div>
              <div id="ProgramLevel" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <ProgramLevel :items="items['ProgramLevel']" @updateLevel="updateLevel"/>
                </div>
              </div>
            </div>

            <div key="ProgramLanguage" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#ProgramLanguage`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-85.svg`" title="filter" alt="filter" class="icon"/>
                  Program Language
                </button>
              </div>
              <div id="ProgramLanguage" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <ProgramLanguage :items="items['ProgramLanguage']" @updateLanguage="updateLanguage"/>
                </div>
              </div>
            </div>

            <div key="tuition" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#tuition`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-84.svg`" title="filter" alt="filter" class="icon"/>
                  Tuition
                </button>
              </div>
              <div id="tuition" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <TuitionFees @updateMaxTuition="updateMaxTuition" @updateMinTuition="updateMinTuition"/>
                </div>
              </div>
            </div>

            <div key="Discipline" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#Discipline`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-83.svg`" title="filter" alt="filter" class="icon"/>
                  Discipline
                </button>
              </div>
              <div id="Discipline" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <Discipline :items="items['Discipline']" @updateDiscipline="updateDiscipline"/>
                </div>
              </div>
            </div>

            <div key="UniversityName" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#UniversityName`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-81.svg`"  title="filter" alt="filter"class="icon"/>
                  University Name
                </button>
              </div>
              <div id="UniversityName" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <UniversityName :items="items['UniversityName']" @updateUniversityName="updateUniversityName"/>
                </div>
              </div>
            </div>

            <div key="Intake" class="tab-pane tab-pane-program-search fade show active" role="tabpanel">
              <div>
                <button :data-bs-target="`#Intake`" aria-expanded="true"
                        class="accordion-button accordion-search-program-btn collapsed" data-bs-toggle="collapse" type="button">
                  <img :src="`/img/search/icon-81.svg`" title="filter" alt="filter" class="icon"/>
                  Intake
                </button>
              </div>
              <div id="Intake" class="accordion-collapse collapse" data-bs-parent="#search-accordion">
                <div class="accordion-body search-program-body">
                  <Intake :items="items['Intake']" @updateIntake="updateIntake"/>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  components: {
    TuitionFees: () =>
        import('@/components/frontend/searchProgram/Filter/TuitionFees'),

  },
  data() {
    return {
      sidebarData: {},
      items: {
        ProgramLevel: [],
        Discipline: [],
        Location: [],
        ProgramLanguage: [],
        Tuition: [],
        Intake: [],
        UniversityName: [],
      },
      degreeIds: [],
      languageIds: [],
      countryIds: [],
      fieldIds: [],
      fees_from: null,
      fees_to: null,
      programPage: null,
      intakeIds: [],
      universityIds: [],
      programData: [],
      paginationProgram: {},
      paginationUniversity: {},
    }
  },
  props: {
    next_page: {
      type: Number,
      default: 1
    },
    next_page_university: {
      type: Number,
      default: 1
    },
    searchName: {
      type: String,
      default: null
    },
    sortBy: {
      type: String,
      default: null
    },
    sortDirection: {
      type: String,
      default: null
    }
  },
  watch: {
    next_page: function (updatedSelections) {
      this.next_page = updatedSelections;
      this.search()
    },
    next_page_university: function (updatedSelections) {
      this.next_page_university = updatedSelections;
      this.search()
    },
    searchName: function (updatedSelections) {
      this.next_page = 1;
      this.next_page_university = 1;
      this.searchName = updatedSelections;
      this.search()
    },
    // sortBy: function(updatedSelections) {
    //     this.sortBy=updatedSelections;
    //     this.search()
    // },
    sortDirection: function (updatedSelections) {
      this.sortDirection = updatedSelections;
      this.search()
    },
  },
  methods: {
    updateLocation(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.countryIds = updatedSelections
      this.search()
    },
    updateLevel(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.degreeIds = updatedSelections
      this.search()
    },
    updateLanguage(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.languageIds = updatedSelections
      this.search()
    },
    updateMaxTuition(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.fees_to = updatedSelections
      this.search()
    },
    updateMinTuition(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.fees_from = updatedSelections
      this.search()
    },
    updateDiscipline(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.fieldIds = updatedSelections
      this.search()
    },
    updateIntake(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.intakeIds = updatedSelections
      this.search()
    },
    updateUniversityName(updatedSelections) {
      this.next_page_university = 1;
      this.next_page = 1;
      this.universityIds = updatedSelections
      this.search()
    },

    async fetchItems() {
      try {
        const res = await this.$axios.get('/api/programs/filter')
        const data = res.data.result
        this.items['ProgramLevel'] = data.StudyingDegrees
        this.items['Discipline'] = data.StudyingField
        this.items['Location'] = data.countries
        this.items['ProgramLanguage'] = data.languages
        this.items['Intake'] = data.ProgramIntake
        this.items['UniversityName'] = data.UniversityName
      } catch (error) {
      //  console.error('Error fetching filter:', error)
      }
    },
    async search() {
      this.$emit('update-switcher-data', 'add-shadow-box');
      this.$emit('update-result-message', '');
      this.$emit('update-university-result-message', '');
      try {
        const res = await this.$axios.get('/api/programs', {
          params: {
            degreeIds: this.degreeIds,
            languageIds: this.languageIds,
            countryIds: this.countryIds,
            fieldIds: this.fieldIds,
            fees_from: this.fees_from,
            fees_to: this.fees_to,
            intakeIds: this.intakeIds,
            universityIds: this.universityIds,
            name: this.searchName,
            page: this.next_page,
            // sort_by: this.sortBy,
            sort_direction: this.sortDirection,
            ...this.$route.query
          }
        })
        this.programData = res.data.result.programs;
        this.paginationProgram = res.data.result.programs_pagination;
        this.universityData = res.data.result.universities;
        this.paginationUniversity = res.data.result.universities_pagination;
        if (this.universityData.length == 0) {
          this.$emit('update-university-result-message', "No matching results found. However, you can explore more as follows...");
        }

        if (this.programData.length == 0) {
          this.$emit('update-result-message', "No matching results found. However, you can explore more as follows...");
        }

        this.$emit('update-switcher-data', '');
        this.$emit('update-program-data', this.programData);
        this.$emit('update-program-pagination-data', this.paginationProgram);
        this.$emit('update-university-data', this.universityData);
        this.$emit('update-university-pagination-data', this.paginationUniversity);
      } catch (error) {
      //  console.error('Error searching programs:', error)
      }
    }
  },
  created() {
    this.fetchItems();
    this.search();
  },
  mounted() {
    // degreeIds: this.degreeIds,
    //     languageIds: this.languageIds,
    //     countryIds: this.countryIds,
    //     fieldIds: this.fieldIds,
    //     fees_from: this.fees_from,
    //     fees_to: this.fees_to,
    //     intakeIds: this.intakeIds,
    //     universityIds: this.universityIds,
    //     name: this.searchName,
    //     page: this.next_page,

    this.degreeIds = this.$route.query.degreeIds ? this.$route.query.degreeIds.split(',').map(Number) : [];

    this.search()
  }
}
</script>
