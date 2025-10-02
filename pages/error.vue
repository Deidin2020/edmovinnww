<template>
    <div>
      <h1 v-if="error.statusCode === 404">Page not found</h1>
      <h1 v-else-if="error.statusCode === 500">Internal Server Error</h1>
      <h1 v-else>An error occurred</h1>
      <p>{{ error.message }}</p>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      error: {
        type: Object,
        default: null
      }
    }
  }
  </script>
