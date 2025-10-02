<template>
    <div class="margin-top">
        <div class="pagination-list" v-if="pagination && pagination.last_page > 1">
            <!-- First page button -->
            <button class="btn" @click="changePage(1)"
                :class="pagination.current_page === 1 ? 'btn-primary' : 'btn-secondary'">
                1
            </button>

            <!-- Ellipsis before visible pages -->
            <span v-if="showEllipsisBefore">...</span>

            <!-- Visible pages -->
            <button v-for="page in visiblePages" :key="page" class="btn" @click="changePage(page)"
                :class="page === pagination.current_page ? 'btn-primary' : 'btn-secondary'">
                {{ page }}
            </button>

            <!-- Ellipsis after visible pages -->
            <span v-if="showEllipsisAfter">...</span>

            <!-- Last page button -->
            <button class="btn" @click="changePage(pagination.last_page)"
                :class="pagination.current_page === pagination.last_page ? 'btn-primary' : 'btn-secondary'">
                {{ pagination.last_page }}
            </button>
        </div>
    </div>
</template>
<script>
export default {
    props: {
        pagination: {
            type: Object,
            required: true,
        },
    },
    computed: {
        totalVisiblePages() {
            return 5; // Total number of visible pages including the first and last
        },
        visiblePages() {
            const pages = [];
            const halfVisible = Math.floor((this.totalVisiblePages - 2) / 2); // Exclude first and last
            let startPage = this.pagination.current_page - halfVisible;
            let endPage = this.pagination.current_page + halfVisible;

            // Ensure startPage is at least 2 (to leave space for the first page button)
            if (startPage < 2) {
                startPage = 2;
                endPage = Math.min(this.totalVisiblePages - 1, this.pagination.last_page - 1);
            }

            // Ensure endPage does not exceed last_page - 1 (to leave space for the last page button)
            if (endPage > this.pagination.last_page - 1) {
                endPage = this.pagination.last_page - 1;
                startPage = Math.max(this.pagination.last_page - this.totalVisiblePages + 2, 2);
            }

            for (let i = startPage; i <= endPage; i++) {
                pages.push(i);
            }

            return pages;
        },
        showEllipsisBefore() {
            return this.pagination.last_page > 4 && this.pagination.current_page > 3;
        },
        showEllipsisAfter() {
            return this.pagination.last_page > 4 && this.pagination.current_page <= this.pagination.last_page - 3;
        },
    },
    methods: {
        changePage(page) {
            this.$emit('page-changed', page);
        },
    },
};
</script>
