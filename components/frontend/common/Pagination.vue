<template>
    <ul class="pagination" v-if="pagination">
      <li v-if="pagination.current_page > 3">
        <a @click="updatePage(1)">1</a>
      </li>
      <template v-if="pagination.current_page > 3">
        <li><span>...</span></li>
      </template>
      <li v-for="page in pagination.last_page" :key="page"
        v-if="page > 1 && page < pagination.last_page && (page >= pagination.current_page - 1 && page <= pagination.current_page + 1) || (pagination.current_page < 3 && page < 3) || (pagination.current_page >= pagination.last_page - 1 && page >= pagination.last_page - 2)"
        :class="{ 'active': page === pagination.current_page }">
        <a @click="updatePage(page)">{{ page }}</a>
      </li>
      <template v-if="pagination.current_page < pagination.last_page - 1 && pagination.current_page !== pagination.last_page - 2">
        <li><span>...</span></li>
      </template>
      <li v-if="pagination.current_page < pagination.last_page && pagination.current_page != pagination.last_page - 1">
        <a @click="updatePage(pagination.last_page)">{{ pagination.last_page }}</a>
      </li>
    </ul>
  </template>
  
  <script>
  export default {
    props: ['pagination'],
    methods: {
      updatePage(page) {
        this.$emit('update', page);
      }
    }
  }
  </script>
  