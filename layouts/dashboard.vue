<template>
    <div>
        <HomeHeader showHeaderTop="false" />
        <Nuxt />
        <WebsiteFooter />
    </div>
</template>

<script>
export default {
    middleware: ['auth'],
    async mounted() {
        await this.updateLanguage();
    },
    methods: {
        async updateLanguage() {
            const currentLang = this.$i18n.locale;
            const currentPath = this.$route.fullPath;
            if (currentLang === 'ar' && !currentPath.startsWith('/ar')) {
                localStorage.setItem('preferred_language', 'ar');
                this.$i18n.locale = 'ar';
            }
            else if (currentLang !== 'ar' && currentPath.startsWith('/ar')) {
                localStorage.setItem('preferred_language', 'en');
                this.$i18n.locale = 'en';
            }
        },
    },
    head() {
        return {
            htmlAttrs: {
                lang: this.$i18n.local,
                dir: this.$i18n.locale === 'ar' ? 'rtl' : 'ltr',
            },
            meta: [
                { name: 'robots', content: 'noindex, nofollow, max-image-preview:large, max-snippet:-1, max-video-preview:-1' },
            ],
            link: [

                // { rel: 'stylesheet', href: '/css/extra.css' },
                //     { rel: 'stylesheet', href: '/css/style.css' },
                { rel: 'stylesheet', href: '/css/vue-input.css' },
                { rel: 'stylesheet', href: '/css/index.css' },
                { rel: 'stylesheet', href: this.$dir() !== 'rtl' ? '/css/custom.css' : '/css/custom.rtl.css' },
                { rel: 'canonical', href: `https://edmovinn.com${this.$route.fullPath}` },
                { rel: 'alternate', hreflang: 'en', href: `https://edmovinn.com` },
                { rel: 'alternate', hreflang: 'tr', href: `https://edmovinn.com/tr` },
                { rel: 'alternate', hreflang: 'ar', href: `https://edmovinn.com/ar` },
            ],
            script: [
                {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "LocalBusiness",
                        "name": "Edmov",
                        "description": "Welcome to edmov, the innovative EdTech platform revolutionizing the way students find and apply to their dream schools.",
                        "url": "https://www.edmovinn.com",
                        "logo": "https://edmovinn.com/img/edmovinn-logo-Main.png",
                        "sameAs": [
                            "https://www.youtube.com/@edmovcom",
                            "https://x.com/i/flow/login?redirect_after_login=%2Fedmovcom",
                            "https://www.instagram.com/edmovcom/?igshid=MTIxdnVrbzBkZDNkaw",
                            "https://www.linkedin.com/company/edmov/",
                            "https://www.facebook.com/edmovar"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+90 555 044 80 00",
                            "contactType": "Customer Service",
                            "areaServed": "TR",
                            "availableLanguage": "Turkish"
                        },
                        "address": {
                            "@type": "PostalAddress",
                            "streetAddress": "123 Edmov Street",
                            "addressLocality": "Istanbul",
                            "addressRegion": "TR",
                            "postalCode": "34000",
                            "addressCountry": "Turkey"
                        },
                        "geo": {
                            "@type": "GeoCoordinates",
                            "latitude": "41.0082",
                            "longitude": "28.9784"
                        },
                        "openingHoursSpecification": {
                            "@type": "OpeningHoursSpecification",
                            "dayOfWeek": [
                                "Monday",
                                "Tuesday",
                                "Wednesday",
                                "Thursday",
                                "Friday"
                            ],
                            "opens": "09:00",
                            "closes": "18:00"
                        }
                    }
                },
                {
                    type: 'application/ld+json',
                    json: {
                        "@context": "https://schema.org",
                        "@type": "Organization",
                        "name": "Edmov",
                        "description": "Welcome to edmov, the innovative EdTech platform revolutionizing the way students find and apply to their dream schools.",
                        "url": "https://www.edmovinn.com",
                        "logo": "https://edmovinn.com/img/edmovinn-logo-Main.png",
                        "sameAs": [
                            "https://www.youtube.com/@edmovcom",
                            "https://x.com/i/flow/login?redirect_after_login=%2Fedmovcom",
                            "https://www.instagram.com/edmovcom/?igshid=MTIxdnVrbzBkZDNkaw",
                            "https://www.linkedin.com/company/edmov/",
                            "https://www.facebook.com/edmovar"
                        ],
                        "contactPoint": {
                            "@type": "ContactPoint",
                            "telephone": "+90 555 044 80 00",
                            "contactType": "Customer Service",
                            "areaServed": "TR",
                            "availableLanguage": "Turkish"
                        }
                    }
                },
            ]
        };
    }
};
</script>