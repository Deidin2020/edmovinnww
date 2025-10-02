<template>
  <a class="btn button-social-auth w-100 mb-3" @click="loginWithGoogle">
    <img src="/img/auth/icon-google.svg" alt="google"   title="google" />
    {{ this.$t('login_with_google')}}
  </a>
</template>

<script>
export default {
  methods: {
    async loginWithGoogle() {
      try {
          const response = await this.$axios.get('/api/gmail');
          if (response.data && response.data.redirectUrl) {
              window.location.href = response.data.redirectUrl;
          } else {
             // console.error('Invalid response from server');
          }
      } catch (error) {
        //console.error('Error logging in with Google:', error);
      }
    },
  }
}
</script>
