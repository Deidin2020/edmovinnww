<template>
    <div class="rooms-list">
        <div class="row">
            <div class="col-md-6 col-12" v-for="(room, index) in rooms" :key="room.id">
                <RoomBox :room="room" />
            </div>

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
