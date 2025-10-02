<template>
  <div id="main-wrapper" class="main-wrapper">
    <section class="section-gap-equal error-page-area">
      <div class="container">
        <div class="edu-error">
          <div class="thumbnail">
            <img alt="404 Error" src="/images/others/404.png" title="404 Error" >
          </div>
          <div class="content">
            <h2 v-if="error.statusCode === 404" class="title">Page not found</h2>
            <h2 v-else-if="error.statusCode === 500" class="title">Internal Server Error</h2>
            <h2 v-else class="title">Try Again</h2>
            <h4 v-if="error.statusCode === 404" class="subtitle">The page you are looking for does not exist.</h4>
            <n-link class="btn-primary-gradient" to="/"><i class="icon-west"></i>Back to Homepage</n-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  props: {
    error: {
      type: Object,
      default: null
    }
  },
  mounted() {
    // setTimeout(() => {
    //   this.$router.push('/'); 
    // }, 3000);
  },
  head() {
    return {
      title: '404 Not Found'
    }
  }
}
</script>
