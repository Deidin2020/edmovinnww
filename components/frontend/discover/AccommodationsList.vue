<template>
    <div class="programs-list university-program-area">
        <div class="row">
            <div class="col-12" :class="className" v-for="(accommodation, index) in accommodations">
                <AccommodationBox :accommodation="accommodation" />

            </div>

            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <AppPagination :pagination="pagination" @page-changed="updatePage" v-if="accommodations" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        accommodations: Array,
        pagination: {
            type: Object,
            required: true,
        },
        className: {
            type: String,
            default: "col-md-6",
        },
        event: false,
    },
    methods: {
        updatePage(page) {
            this.$emit('update_page', page);
        },
    },
    data() {
        return {
            currentPage: 1,
        }
    },
    mounted() {
        this.currentPage = this.pagination?.current_page
    },
}
</script>
