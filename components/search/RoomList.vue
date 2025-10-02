<template>

    <div
        class="ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 mt-4 sm:mt-6">
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">

            <RoomBox :room="room" v-for="(room, index) in rooms" :key="room.id" />
        </div>
        <div class="row">
            <div class="col-12">
                <div class="d-flex justify-content-center">
                    <AppPagination :pagination="pagination" @page-changed="updatePage" />
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        rooms: Array,
        pagination: {
            type: Object,
            required: true,
        },
    },
    data() {
        return {
            currentPage: 1,
        };
    },
    mounted() {
        this.currentPage = this.pagination?.current_page;
    },
    methods: {
        updatePage(page) {
            this.$emit('update_page', page);
        },
    },
}
</script>
