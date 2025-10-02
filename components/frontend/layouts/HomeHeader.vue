<template>
    <header class="bg-white shadow-sm border-b border-border fixed top-0 left-0 right-0 z-50 ltr">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16"><a class="flex-shrink-0" href="/"><img
                        src="/assets/movinn-logo-Z5eRNoAw.jpg" alt="Movinn Logo" class="h-10 w-auto object-contain"></a>
                <nav class="hidden md:flex items-center space-x-4"><a
                        class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/">Home</a><a
                        class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/search">Discover Rooms</a><a
                        class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/about">About</a><a
                        class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/contact">Contact</a></nav>
                <div class="hidden md:flex items-center space-x-3"><button
                        class="justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-1"
                        type="button" id="radix-:r0:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg><span class="text-sm">Language</span></button><a class="relative" href="/cart"><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 relative"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-shopping-cart w-4 h-4">
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path
                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                                </path>
                            </svg></button></a><a href="/auth"><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">Sign
                            In</button></a><a href="/auth"><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90">Sign
                            Up</button></a></div>
                <div class="md:hidden flex items-center space-x-2"><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button" id="radix-:r2:" aria-haspopup="menu" aria-expanded="false"
                        data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe w-4 h-4">
                            <circle cx="12" cy="12" r="10"></circle>
                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                            <path d="M2 12h20"></path>
                        </svg></button><a class="relative" href="/cart"><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 relative"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-shopping-cart w-4 h-4">
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path
                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                                </path>
                            </svg></button></a><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3"
                        type="button" aria-haspopup="dialog" aria-expanded="false" aria-controls="radix-:r4:"
                        data-state="closed"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-menu w-5 h-5">
                            <line x1="4" x2="20" y1="12" y2="12"></line>
                            <line x1="4" x2="20" y1="6" y2="6"></line>
                            <line x1="4" x2="20" y1="18" y2="18"></line>
                        </svg></button></div>
            </div>
        </div>
    </header>
    <!-- <header class="edu-header header-style-1 header-fullwidth no-topbar">
        <div :class="['header-mainmenu', ExtraClass, { 'edu-sticky': isSticky }]">
            <div class="container">
                <div class="header-navbar">
                    <div class="header-brand">
                        <div class="logo">
                            <NuxtLink :to="localePath('/')" @click="closeMobileMenu">
                                <img class="logo-light" src="/img/movinn-logo.jpg" alt="edmovinn" title="edmovinn">
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="header-mainnav">
                        <nav class="mainmenu-nav">
                            <ul class="mainmenu">
                                <li>
                                    <a :href="localePath('/')">{{ $t('header.home') }}</a>
                                </li>
                                <li>
                                    <a :href="localePath('/our-story')">{{ $t('header.discover_room') }}</a>
                                </li>
                                <li>
                                    <a :href="localePath('/our-story')">{{ $t('header.about_us') }}</a>
                                </li>
                                <li>
                                    <a :href="localePath('/contact-us')">{{ $t('header.contact_us') }}</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                    <div class="header-right">
                        <ul class="header-action">
                            <li  class="icon cart-icon "><a
                                    :href="localePath('/shop/cart')" aria-current="page"
                                    class="cart-icon cart-icon-header">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                        stroke-linejoin="round" class="lucide lucide-shopping-cart w-4 h-4">
                                        <circle cx="8" cy="21" r="1"></circle>
                                        <circle cx="19" cy="21" r="1"></circle>
                                        <path
                                            d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                                        </path>
                                    </svg></a></li>
                            <li class="has-droupdown lang-li">
                                <div class="dropdown">
                                    <a class="dropdown-toggle" href="#"
                                        role="button" id="languageDropdown" data-bs-toggle="dropdown"
                                        aria-expanded="false">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20"
                                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                            stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-globe">
                                            <circle cx="12" cy="12" r="10"></circle>
                                            <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                            <path d="M2 12h20"></path>
                                        </svg>
                                        {{ $t('header.language') }}
                                    </a>

                                    <ul class="dropdown-menu" aria-labelledby="languageDropdown">
                                        <li>
                                            <a class="dropdown-item" href="#" @click.prevent="switchLanguage('ar')">
                                                {{ $t('header.arabic') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#" @click.prevent="switchLanguage('tr')">
                                                {{ $t('header.turkish') }}
                                            </a>
                                        </li>
                                        <li>
                                            <a class="dropdown-item" href="#" @click.prevent="switchLanguage('en')">

                                                {{ $t('header.english') }}

                                            </a>
                                        </li>
                                    </ul>
                                </div>

                            </li>
                            <li class="d-block d-xm-none">
                                <div class="input-group">
                                    <a v-if="$auth.loggedIn && $auth.user.is_verified" :href="localePath('/dashboard')"
                                        class="btn btn-primary" style="margin: 0px 10px; border-radius:5px">
                                        {{ $t('header.My_Account') }}
                                    </a>
                                    <a v-if="$auth.loggedIn" @click="logOut" class="btn btn-primary"
                                        style=" border-radius:5px">
                                        {{ $t('header.log_out') }}
                                    </a>
                                    <div v-else class="d-flex" style="gap: 10px;">
                                        <NuxtLink :to="localePath('/signin')" class="btn btn-primary signin">
                                            {{ $t('header.sign_in') }}
                                        </NuxtLink>
                                        <NuxtLink :to="localePath('/signup')" class="btn btn-primary signup">
                                            {{ $t('header.sign_up_new') }}
                                        </NuxtLink>
                                    </div>
                                </div>
                            </li>
                            <li class="mobile-menu-bar d-block d-xl-none">
                                <div class="row mobile-icons-button">
                                    <div class="m-icon-button">
                                        <button class="hamberger-button" aria-label="Open menu" v-if="!isMenuOpen"
                                            @click="toggleMobileMenu">
                                            <i class="icon-54"></i>
                                        </button>
                                        <button class="close-button" aria-label="close menu" v-else
                                            @click="toggleMobileMenu">
                                            <i class="icon-73"></i>
                                        </button>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <OffCanvasMobileMenuOne />
    </header> -->
</template>
<script>
export default {
    props: {
        ExtraClass: String,
    },
    data() {
        return {
            isSticky: false,
            isMenuOpen: false,
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            this.isSticky = window.scrollY >= 50;
        });

        this.$router.beforeEach((to, from, next) => {
            this.isMenuOpen = false;
            next();
        });
    },
    methods: {
        toggleMobileMenu() {
            this.isMenuOpen = !this.isMenuOpen;
            const el = document.querySelector('#offcanvas-menu');
            if (this.isMenuOpen) {
                el.classList.add('active');
            } else {
                el.classList.remove('active');
            }
        },
        closeMobileMenu() {
            this.isMenuOpen = false;
            const el = document.querySelector('#offcanvas-menu');
            el.classList.remove('active');
        },
        async switchLanguage(lang) {
            localStorage.setItem('preferred_language', lang);
            try {
                const currentPath = window.location.pathname;

                let newPath = currentPath;
                if (lang == 'ar') {
                    if (!currentPath.startsWith('/ar')) {
                        newPath = `/ar${currentPath}`;
                    }
                } else {
                    if (currentPath.startsWith('/ar')) {
                        newPath = currentPath.replace('/ar', '') || '/';
                    }
                }
                window.location.href = newPath;
            } catch (error) {
                console.error('Error switching language:', error);
            }
        },
        async logOut() {
            localStorage.removeItem('mobile');
            await this.$auth.logout();

            window.location.href = this.$i18n.locale === 'en' ? '/' : `/${this.$i18n.locale}`;
        }
    }
}
</script>
