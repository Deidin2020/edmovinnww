<template>
  <div id="main-wrapper" class="main-wrapper">
    <div class="faqs-hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-md-6 col-12">
    
            <h1 class="h2" v-html="$t('pages.faqs.hero.title')"></h1>
            <p >
              {{ $t('pages.faqs.hero.description') }}
            </p>
          </div>

          <div class="col-md-6 col-12">
            <img src="~/assets/images/faqs/faqs-hero.svg" alt="faq-hero" title="faq-hero" class="img-fluid" />
          </div>
        </div>
      </div>
    </div>

    <div class="faqs-topics py-5 my-5">
      <div class="container">
        <p class="h2" v-html="$t('pages.faqs.discover.title')"></p>
        <p class="mb-5 discover_section">
          {{ $t('pages.faqs.discover.description') }}
        </p>
        <Faqs :query="{ type: 'website' }" />
      </div>
    </div>
  </div>
</template>

<script>
export default {

  async asyncData({ $axios }) {
    try {
      const SEO = await $axios.get('/api/seo/show/Faqs');
      const SEO_RESULT = SEO.data.result.seo;
      return { SEO_RESULT };
      } catch (error) {
        //console.error('Error fetching BlogSwiperItems:', error);
        return { SEO_RESULT: {} };
      }
    },
  head() {
    return {
      script: [
        {
          type: 'application/ld+json',
          json: this.$generateBreadCrumbSchema([
            {
              name: 'Home',
              url: 'https://edmovinn.com'
            },
            {
              name: 'Faqs',
              url: 'https://edmovinn.com/faqs'
            },
          ])
        }
      ],
      title: this.SEO_RESULT?.title,
      meta: [
        {
          name: 'title',
          content: this.SEO_RESULT?.title
        },
        {
          name: 'description',
          content: this.SEO_RESULT?.description
        },
        {
          name: 'keywords',
          content: this.SEO_RESULT?.keywords
        }
      ],
    };
  },
};
</script>
