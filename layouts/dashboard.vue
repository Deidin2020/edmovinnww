<template>
    <div class="dashboard-student" data-bs-theme="light" data-color-theme="Blue_Theme" data-layout="vertical">
        <div id="main-wrapper">
            <Sidebar />
            <div class="page-wrapper">
                <DashboardHeader />
                <div class="body-wrapper">
                    <Nuxt />
                </div>
                <SidebarMobile />
            </div>
        </div>
        <footerMobile />
    </div>
</template>
<script>
export default {
    async mounted() {
      await this.updateLanguage();
      this.saveWizard();
    },
    methods: {
      async updateLanguage() {
        const currentLang = this.$i18n.locale;
          const currentPath = this.$route.fullPath;
          if (currentLang === 'ar' && !currentPath.startsWith('/ar')) {
              localStorage.setItem('preferred_language', 'ar');
              this.$i18n.locale = 'ar';
          } else if (currentLang !== 'ar' && currentPath.startsWith('/ar')) {
              localStorage.setItem('preferred_language', 'en');
              this.$i18n.locale = 'en';
          }
      },
        saveWizard() {
            const savedWizard = localStorage.getItem('savedWizard');

            if (savedWizard) {
                const wizardData = JSON.parse(savedWizard);

                this.savedWizardToDatabase(wizardData);
            }
        },
        savedWizardToDatabase(wizardData) {
            this.$axios.$post('/api/student/wizards', wizardData)
                .then(response => {
                  //  console.log('Wizard data saved successfully:', response.data);
                    localStorage.removeItem('savedWizard');
                })
                .catch(error => {
                   // console.error('Error saving wizard data:', error);
                });
        }
    },
    middleware: ['auth', 'profile_completed', 'verified'],
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.locale,
                dir: this.$i18n.locale,
            },
            bodyAttrs: {
                'data-sidebartype': 'mini-sidebar'
            },
            link: [
                { rel: 'stylesheet', href: '/dashboard/css/styles.css?v=1' },
                { rel: 'stylesheet', href: '/dashboard/css/custom.css?v=22' },
                { rel: 'stylesheet', href: this.$dir() !== 'rtl' ? '/dashboard/css/custom.css' : '/dashboard/css/custom.rtl.css' },
            ],
            script: [
                // { src: '/dashboard/js/jquery.js', body: true },
                {src: '/dashboard/js/vendor.min.js', body: true},
                {src: '/dashboard/js/simplebar.min.js', body: true},
                {src: '/dashboard/js/theme/app.minisidebar.init.js', body: true},
                {src: '/dashboard/js/theme/theme.js', body: true},
                {src: '/dashboard/js/theme/app.min.js', body: true},
                {src: 'https://cdn.jsdelivr.net/npm/iconify-icon@1.0.8/dist/iconify-icon.min.js', body: true},
                {
                    hid: 'gtm-script',
                    innerHTML: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src='https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);})(window,document,'script','dataLayer','GTM-N2X95CJZ');`,
                    type: 'text/javascript',
                    charset: 'utf-8'
                    },
                    {
                            hid: 'gtm-dataLayer',
                            innerHTML: `
                                window.dataLayer = window.dataLayer || [];
                                if (${this.$auth?.user?.id}) {
                                    window.dataLayer.push({
                                        'event': 'login',
                                        'userId': ${this.$auth?.user?.id}
                                    });
                                }
                            `,
                            type: 'text/javascript',
                            charset: 'utf-8',
                        },
            ],
        };
    },
};
</script>
