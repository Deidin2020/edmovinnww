<template>

    <div data-state="active" data-orientation="horizontal" role="tabpanel"
        aria-labelledby="radix-:ra:-trigger-accommodations" id="radix-:ra:-content-accommodations" tabindex="0"
        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4 sm:mt-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

            <AccommodationBox :accommodation="accommodation" v-for="(accommodation, index) in accommodations" />

        </div>
        <div class="col-12">
            <div class="d-flex justify-content-center">
                <AppPagination :pagination="pagination" @page-changed="updatePage" v-if="accommodations" />
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
