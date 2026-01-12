<template>
  <button class="btn button-social-auth w-100" @click="loginWithFacebook" style="display: flex;
    gap: 10px;
    padding: 10px;
    border: 1px solid #ddd;
    width: 100%;
    margin-top: 10px;">
    <img src="/img/auth/icon-facebook.svg" alt="facebook" title="facebook" />
    {{ this.$t('login_with_facebook') }}
  </button>
</template>

<script>
export default {
  methods: {
    async loginWithFacebook() {
      try {
        const response = await this.$axios.get('/api/tenant/facebook');

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
