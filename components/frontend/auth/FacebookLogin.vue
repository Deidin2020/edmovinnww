<template>
  <a class="btn button-social-auth w-100" @click="loginWithFacebook">
    <img src="/img/auth/icon-facebook.svg"  alt="facebook"   title="facebook" />
    {{ this.$t('login_with_facebook')}}
  </a>
</template>

<script>
export default {
  methods: {
    async loginWithFacebook() {
      try {
        const response = await this.$axios.get('/api/facebook');

        if (response.data && response.data.redirectUrl) {
          window.location.href = response.data.redirectUrl;
        } else {
         // console.error('Invalid response from server');
        }
      } catch (error) {
       // console.error('Error logging in with facebook:', error);
      }
    },
  }
}
</script>
