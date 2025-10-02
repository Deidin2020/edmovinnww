<template>
    <!-- <footer class="edu-footer footer-lighten bg-image footer-style-1">
        <div class="footer-top">
            <div class="container">
                <div class="row g-5">
                    <div class="col-lg-3 col-md-6">
                        <div class="edu-footer-widget">
                            <div class="logo">
                                <n-link :to="localePath('/')">
                                    <img alt="Dark Logo" class="logo-light" src="/img/movinn-logo.jpg" loading="lazy"
                                        title="Dark Logo">
                                </n-link>
                            </div>
                            <p class="description">{{ $t('footer.description') }}</p>
                        </div>
                    </div>
                    <div class="col-lg-3 col-sm-6 footer-space-top">
                        <div class="edu-footer-widget quick-link-widget">
                            <p class="widget-title">{{ $t('footer.quick_links') }}</p>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.home') }}
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.discover_rooms') }}
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.about') }}
                                        </NuxtLink>
                                    </li>
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.contact') }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-3 col-md-6 footer-space-top">
                        <div class="edu-footer-widget quick-link-widget">
                            <p class="widget-title">{{ $t('footer.contact_info') }}</p>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.email') }}
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.phone') }}
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.address') }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>


                    <div class="col-lg-3 col-md-6 footer-space-top">
                        <div class="edu-footer-widget quick-link-widget">
                            <p class="widget-title">{{ $t('footer.languages') }}</p>
                            <div class="inner">
                                <ul class="footer-link link-hover">
                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.turkish') }}
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.english') }}
                                        </NuxtLink>
                                    </li>

                                    <li>
                                        <NuxtLink :to="localePath('/')">
                                            {{ $t('footer.address') }}
                                        </NuxtLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div class="container footer-bottom">
                        <div class="row g-5">
                            <div class="col-md-12">
                                <div class="edu-footer-widget text-center">
                                    <p>
                                        {{ $t('footer.copyright') }}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <WhatsappIcon />
    </footer> -->
    <footer class="bg-secondary text-white py-8 ltr">
        <div class="max-w-6xl mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-6">
                <div class="space-y-3"><img src="/assets/movinn-logo-Z5eRNoAw.jpg" alt="Movinn Logo"
                        class="h-8 w-auto object-contain brightness-200">
                    <p class="text-sm text-white/80">Your trusted partner for premium student accommodation in Turkey.
                    </p>
                </div>
                <div class="space-y-3">
                    <h4 class="font-semibold text-white">Quick Links</h4>
                    <div class="space-y-2"><a class="block text-sm text-white/80 hover:text-white transition-colors"
                            href="/">Home</a><a class="block text-sm text-white/80 hover:text-white transition-colors"
                            href="/search">Discover Rooms</a><a
                            class="block text-sm text-white/80 hover:text-white transition-colors"
                            href="/about">About</a><a
                            class="block text-sm text-white/80 hover:text-white transition-colors"
                            href="/contact">Contact</a></div>
                </div>
                <div class="space-y-3">
                    <h4 class="font-semibold text-white">Contact Info</h4>
                    <div class="space-y-2">
                        <div class="flex items-center gap-2 text-sm text-white/80"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-mail w-4 h-4">
                                <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                            </svg><span>info@movinn.com</span></div>
                        <div class="flex items-center gap-2 text-sm text-white/80"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-phone w-4 h-4">
                                <path
                                    d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z">
                                </path>
                            </svg><span>+90 XXX XXX XXXX</span></div>
                        <div class="flex items-center gap-2 text-sm text-white/80"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg><span>Istanbul, Turkey</span></div>
                    </div>
                </div>
                <div class="space-y-3">
                    <h4 class="font-semibold text-white">Languages</h4>
                    <div class="space-y-2"><a class="block text-sm text-white/80 hover:text-white transition-colors"
                            href="/">🇹🇷 Türkçe</a><a
                            class="block text-sm text-white/80 hover:text-white transition-colors" href="/ar">🇸🇦
                            العربية</a></div>
                </div>
            </div>
            <div class="border-t border-white/20 mt-6 pt-4 flex flex-col md:flex-row justify-between items-center">
                <p class="text-sm text-white/60">© 2024 MovInn. All rights reserved.</p>
                <p class="text-sm text-white/60 flex items-center gap-1">Made with <svg
                        xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-heart w-4 h-4 text-red-400">
                        <path
                            d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z">
                        </path>
                    </svg> in Turkey</p>
            </div>
        </div>
    </footer>
</template>

<script>
import WhatsappIcon from '@/components/frontend/layouts/WhatsappIcon.vue'
export default {
    components: {
        WhatsappIcon,
    },
    data() {
        return {
            newsletter_form: {
                email: null,
            },
            alert_type: null,
            alert_message: null,
            where_studies: []
        };
    },
    created() {
        this.fetchMenus();
    },
    methods: {
        async fetchMenus() {
            try {
                const res = await this.$axios.get('/api/where_studies', {
                    headers: {
                        'local': this.$i18n.locale,
                    }
                });
                this.where_studies = res.data.result.items;

            } catch (error) {
                // console.error('Error fetching where studies navigation:', error);
            }
        },
        async newsLetterSubscribe() {
            await this.$axios
                .post('/api/website/subscribe_news_letter', this.newsletter_form)
                .then((res) => {
                    this.alert_message = res.data.message;
                    this.alert_type = res.data.success ? 'alert-success' : 'alert-danger';
                })
                .catch((e) => {
                    if (e.response) {
                        this.alert_message = e.response.data.errors && e.response.data.errors.email ? e.response.data.errors.email[0] : e.response.data.message;
                        this.alert_type = e.response.data.success ? 'alert-success' : 'alert-danger';
                    }
                });

            setTimeout(() => {
                this.alert_message = null;
                this.alert_type = null;
            }, 5000);
        },
    },
};
</script>
