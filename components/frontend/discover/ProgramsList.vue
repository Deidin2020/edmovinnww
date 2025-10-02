<template>
  <div class="programs-list university-program-area">
    <div class="row">
      <div
        class="col-12" :class="className"
        v-for="(program, index) in programs"
      >
        <ProgramBox :program="program"  v-if="!event"/>
        <ProgramEventBox :program="program" v-else />
        
      </div>

        <div class="col-12">
            <div class="d-flex justify-content-center">
                <AppPagination :pagination="pagination" @page-changed="updatePage" v-if="programs"/>
            </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
    props: {
        programs: Array,
        pagination: {
            type: Object,
            required: true,
        },
        className: {
            type: String,
            default: "col-md-6",
        },
        event:false,
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
