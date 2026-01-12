<template>
  <button class="btn button-social-auth w-100 mb-3" @click="loginWithGoogle" style="display: flex;
      gap: 10px;
      padding: 10px;
      border: 1px solid #ddd;
      width: 100%;
      margin-top: 10px;">
    <img src="/img/auth/icon-google.svg" alt="google" title="google" />
    {{ this.$t('login_with_google') }}
  </button>
</template>

<script>
export default {
  methods: {
    async loginWithGoogle() {
      try {
        const response = await this.$axios.get('/api/tenant/gmail');
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
