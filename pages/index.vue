<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <!-- Hero Section -->
      <section class="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div class="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style="background-image: url('/assets/mall-istanbul-hero-CtsvBOyl.webp');">
          <div class="absolute inset-0 bg-primary/70"></div>
        </div>
        <div class="relative z-10 text-center text-white max-w-4xl mx-auto px-4">
          <h1 class="text-4xl md:text-6xl font-bold mb-6">
            {{ $t('hero.titleLine1') }}<br />
            <span class="text-accent">{{ $t('hero.titleLine2') }}</span>
          </h1>
          <p class="text-xl md:text-2xl mb-8 text-white/90">
            {{ $t('hero.subtitle') }}
          </p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white"
              :href="localePath('/search')">
              {{ $t('hero.exploreButton') }}
            </a>
            <a class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium border h-11 rounded-md px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              :href="localePath('/about')">
              {{ $t('hero.aboutButton') }}
            </a>
          </div>
        </div>
      </section>

      <!-- Stats Section -->
      <!-- <section class="py-16 bg-muted">
        <div class="max-w-6xl mx-auto px-4">
          <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">500+</div>
              <div class="text-muted-foreground font-medium">{{ $t('stats.students') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">50+</div>
              <div class="text-muted-foreground font-medium">{{ $t('stats.accommodations') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div class="text-muted-foreground font-medium">{{ $t('stats.universities') }}</div>
            </div>
            <div class="text-center">
              <div class="text-3xl md:text-4xl font-bold text-primary mb-2">24/7</div>
              <div class="text-muted-foreground font-medium">{{ $t('stats.support') }}</div>
            </div>
          </div>
        </div>
      </section> -->

      <!-- Why Choose Us -->
      <section class="py-20">
        <div class="max-w-6xl mx-auto px-4">
          <div class="text-center mb-16">
            <h2 class="text-3xl md:text-4xl font-bold text-primary mb-4">{{ $t('whyChooseUs.title') }}</h2>
            <p class="text-xl text-muted-foreground max-w-2xl mx-auto">{{ $t('whyChooseUs.subtitle') }}</p>
          </div>
          <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-search w-8 h-8 text-accent">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.easySearch.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.easySearch.desc') }}</p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-map-pin w-8 h-8 text-accent">
                  <path
                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                  </path>
                  <circle cx="12" cy="10" r="3"></circle>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.idealLocation.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.idealLocation.desc') }}</p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">

              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-shield w-8 h-8 text-accent">
                  <path
                    d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.safeEnvironment.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.safeEnvironment.desc') }}</p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-star w-8 h-8 text-accent">
                  <path
                    d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z">
                  </path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.qualityService.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.qualityService.desc') }}</p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">
              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-users w-8 h-8 text-accent">
                  <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                  <circle cx="9" cy="7" r="4"></circle>
                  <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                  <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.socialLife.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.socialLife.desc') }}</p>
            </div>

            <div class="rounded-lg border bg-card text-card-foreground shadow-sm p-6 hover:shadow-lg transition-shadow">

              <div class="mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                  stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                  class="lucide lucide-search w-8 h-8 text-accent">
                  <circle cx="11" cy="11" r="8"></circle>
                  <path d="m21 21-4.3-4.3"></path>
                </svg>
              </div>
              <h3 class="text-xl font-semibold text-primary mb-3">{{ $t('whyChooseUs.support247.title') }}</h3>
              <p class="text-muted-foreground">{{ $t('whyChooseUs.support247.desc') }}</p>
            </div>
          </div>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="py-20 bg-primary text-white">
        <div class="max-w-4xl mx-auto text-center px-4">
          <h2 class="text-3xl md:text-4xl font-bold mb-6">{{ $t('cta.title') }}</h2>
          <p class="text-xl mb-8 text-white/90">{{ $t('cta.subtitle') }}</p>
          <div class="flex flex-col sm:flex-row gap-4 justify-center">
            <a class="inline-flex items-center justify-center gap-2 text-sm font-medium h-11 rounded-md px-8 bg-accent hover:bg-accent/90 text-white"
              :href="localePath('/search')">
              {{ $t('cta.startNow') }}
            </a>
            <a class="inline-flex items-center justify-center gap-2 text-sm font-medium border h-11 rounded-md px-8 bg-white/10 border-white text-white hover:bg-white hover:text-primary"
              :href="localePath('/about')">
              {{ $t('cta.moreInfo') }}
            </a>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<script>
import Vue from 'vue'
import VueMeta from 'vue-meta'

Vue.use(VueMeta, { refreshOnceOnNavigation: true })

export default {
  data() {
    return {
      HOST_NAME: process.env.HOST_NAME,
    }
  },
  head() {
    return {
      title: this.SEO_RESULT?.title,
      meta: [
        { name: 'title', content: this.SEO_RESULT?.title },
        { name: 'description', content: this.SEO_RESULT?.description },
        { name: 'keywords', content: this.SEO_RESULT?.keywords },
      ],
    }
  },
  async asyncData({ $axios }) {
    try {
      const SEO = await $axios.get('/api/seo/show/HomePage')
      const SEO_RESULT = SEO.data.result.seo
      return { SEO_RESULT }
    } catch (error) {
      return { SEO_RESULT: {} }
    }
  },
}
</script>
