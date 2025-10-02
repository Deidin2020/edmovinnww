<template>
    <!-- <div class="isotope-wrapper">
        <div class="isotope-header">
            <h2 :class="{ 'show active': selectedTab === 'program' }" v-if="selectedTab == 'program'">Result <span>( {{ paginationProgram?.total_records ?paginationProgram?.total_records : 0 }} )</span></h2>
            <h2 :class="{ 'show active': selectedTab === 'university' }" v-if="selectedTab == 'university'">Result <span>( {{ paginationUniversity?.total_records  ?paginationUniversity?.total_records : 0 }} )</span></h2>
        </div>
        <div class="isotop-button isotop-filter nav">
            <button class="nav-link" :class="{ 'active': activeTab === 'program' }" data-bs-toggle="pill" data-bs-target="#program" role="tab" @click="changeTab('program')">Programs</button>
            <button class="nav-link" :class="{ 'active': activeTab === 'university' }" data-bs-toggle="pill" data-bs-target="#university" role="tab" @click="changeTab('university')">Universities</button>
        </div>
        <div class="tab-content" :class="switcherData">
            <div class="tab-pane fade" :class="{ 'show active': activeTab === 'program' }" id="program" role="tabpanel">
                <p v-if="ResultData" class="ErrorResult">{{ ResultData }}</p>
                <div class="university-program-area">
                    <div class="row">
                        <div class="col-md-12 col-lg-6" v-for="(program, index) in programData" :key="index">
                            <ProgramBox :program="program" />
                        </div>
                        <pagination :pagination="paginationProgram" @update="NextPage" />
                    </div>
                </div>
            </div>

            <div class="tab-pane fade" :class="{ 'show active': activeTab === 'university' }" id="university" role="tabpanel">
                <p v-if="UniversityResultData">{{ UniversityResultData }}</p>
                <div class="university-program-area">
                    <div class="row">
                        <div class="col-md-6" v-for="(university, index) in UniversityData" :key="index">
                            <universityBox :university="university" />
                        </div>
                        <pagination :pagination="paginationUniversity" @update="updateUniversityPage" />
                    </div>
                </div>
            </div>
        </div>
    </div> -->
</template>

<script>
export default {
    props: {
        switcherData: {
            type: String,
            default: ''
        },
        ResultData: {
            type: String,
            default: null
        },
        UniversityResultData: {
            type: String,
            default: null
        },
        programData: {
            type: Array
        },
        UniversityData: {
            type: Array
        },
        paginationProgram: {
            type: Object,
            default: null
        },
        paginationUniversity: {
            type: Object,
            default: null
        }
    },
    components: {
        pagination: () => import('@/components/frontend/common/Pagination'),
    },
    data() {
        return {
            activeTab: 'program',
            selectedTab: ''
        };
    },
    methods: {
        NextPage(page) {
            this.$emit('update-next-page-data', page);
        },
        updateUniversityPage(page) {
            this.$emit('update-next-university-page-data', page);
        },
        changeTab(tab) {
        this.selectedTab = tab;
        },
        updateActiveTab() {
            const type = this.$route.query.type;
            if (type == 'universities') {
                this.activeTab = 'university';
            } else  {
                this.activeTab = 'program';
            }
            this.selectedTab = this.activeTab;
        }
    },
    watch: {
        '$route.query.type'(newVal, oldVal) {
            if (newVal) {
                this.updateActiveTab();
            }
        }
    },
    beforeRouteUpdate(to, from, next) {
        this.updateActiveTab();
        next();
    },
    mounted() {
        this.updateActiveTab();
    }
};
</script>
