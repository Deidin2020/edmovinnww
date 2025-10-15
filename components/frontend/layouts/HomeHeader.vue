<template>
    <header class="bg-white shadow-sm border-b border-border fixed top-0 left-0 right-0 z-50 ltr">
        <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div class="flex justify-between items-center h-16">
                <!-- Logo -->
                <a class="flex-shrink-0" href="/">
                    <img src="/assets/movinn-logo-Z5eRNoAw.jpg" style="height: 2.5rem;" alt="Movinn Logo"
                        class="h-10 w-auto object-contain" />
                </a>

                <!-- Navigation -->
                <nav class="hidden md:flex items-center space-x-4">
                    <a class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/">
                        {{ $t('header.home') }}
                    </a>
                    <a class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/search">
                        {{ $t('header.discover_room') }}
                    </a>
                    <a class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/about">
                        {{ $t('header.about') }}
                    </a>
                    <a class="text-muted-foreground hover:text-primary transition-colors px-3 py-2 text-sm font-medium"
                        href="/contact">
                        {{ $t('header.contact') }}
                    </a>
                </nav>

                <!-- Right Section -->
                <div class="hidden md:flex items-center space-x-3">
                    <!-- Dropdown Language -->
                    <div class="relative inline-block text-left">
                        <button @click="isLangOpen = !isLangOpen"
                            class="justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 flex items-center space-x-1"
                            type="button">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-globe w-4 h-4">
                                <circle cx="12" cy="12" r="10"></circle>
                                <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path>
                                <path d="M2 12h20"></path>
                            </svg>
                            <span class="text-sm">{{ $t('header.language') }}</span>
                        </button>

                        <!-- Dropdown Menu -->
                        <transition name="fade">
                            <div v-if="isLangOpen" @click.outside="isLangOpen = false"
                                class="absolute right-0 mt-2 w-40 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 z-50">
                                <ul class="py-1 text-sm text-gray-700">
                                    <li>
                                        <a href="#" @click.prevent="switchLanguage('ar')"
                                            class="block px-4 py-2 hover:bg-gray-100">
                                            {{ $t('header.arabic') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="switchLanguage('tr')"
                                            class="block px-4 py-2 hover:bg-gray-100">
                                            {{ $t('header.turkish') }}
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#" @click.prevent="switchLanguage('en')"
                                            class="block px-4 py-2 hover:bg-gray-100">
                                            {{ $t('header.english') }}
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </transition>
                    </div>

                    <!-- Buttons -->
                    <a class="relative" href="/cart">
                        <button
                            class="inline-flex items-center justify-center gap-2 text-sm font-medium hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-shopping-cart w-4 h-4">
                                <circle cx="8" cy="21" r="1"></circle>
                                <circle cx="19" cy="21" r="1"></circle>
                                <path
                                    d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12">
                                </path>
                            </svg>
                        </button>
                    </a>

                    <a href="/auth">
                        <button
                            class="inline-flex items-center justify-center gap-2 text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">
                            Sign In
                        </button>
                    </a>

                    <a href="/auth">
                        <button
                            class="inline-flex items-center justify-center gap-2 text-sm font-medium h-9 rounded-md px-3 bg-primary text-primary-foreground hover:bg-primary/90">
                            Sign Up
                        </button>
                    </a>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
    data() {
        return {
            isLangOpen: false,
            isMenuOpen: false,
        }
    },
    directives: {
        outside: {
            beforeMount(el, binding) {
                el.clickOutsideEvent = function (event) {
                    if (!(el === event.target || el.contains(event.target))) {
                        binding.value()
                    }
                }
                document.addEventListener('click', el.clickOutsideEvent)
            },
            unmounted(el) {
                document.removeEventListener('click', el.clickOutsideEvent)
            },
        },
    },
    methods: {
        async switchLanguage(lang) {
            this.isLangOpen = false
            localStorage.setItem('preferred_language', lang)

            try {
                let newPath = '/'
                if (lang === 'ar') {
                    newPath = '/ar'
                } else if (lang === 'tr') {
                    newPath = '/tr'
                }
                window.location.href = newPath
            } catch (error) {
                console.error('Error switching language:', error)
            }
        },
    },
}
</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.15s ease;
}

.fade-enter-from,
.fade-leave-to {
    opacity: 0;
}
</style>
