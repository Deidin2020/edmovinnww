<template>
    <div id="main-wrapper" class="main-wrapper">
        <div class="auth-section">
            <div class="container">
                <div class="row row--45 align-items-center">
                    <div class="col-lg-5 col-md-12 m-auto margin-top--120">
                        <FormRegister />
                    </div>
                    <div class="col-lg-6 d-mobile-none">
                        <div class="auth-thumbnail">
                            <AuthHero />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            title: 'Edmov | Make your journey to study abroad easier with Edmov',
            meta_description: 'Make your journey to study abroad easier with Edmov.',
            meta_title: 'Edmov | Make your journey to study abroad easier with Edmov',
        };
    },
    head() {
        return {
            title: this.title,
            meta: [
                { hid: 'meta_description', name: 'meta_description', content: this.meta_description },
                { hid: 'meta_title', name: 'meta_title', content: this.meta_title },
            ],
        };
    },
    mounted() {
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get('token');

      if (token) {
        this.$auth.setUserToken(token);

        const redirect = localStorage.getItem('redirect');

        if (redirect) {
          localStorage.removeItem('redirect');

          window.location.href = this.localePath(redirect);
        } else {
          window.location.href = this.localePath('/dashboard');
        }
      }
    },
};
</script>
