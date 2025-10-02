<template>
  <div class="where-study-section" v-if="items.length > 0">
    <div class="container">
      <SectionTitle :title="$t('pages.home.where_study.title')" :subTitle="$t('pages.home.where_study.description')"
        alignment='section-center' subTitleClass="d-m-none" />

      <div class="row align-items-center" data-aos-delay="200" data-aos="fade-up" data-aos-duration="900">

        <div class="col-lg-6" v-for="(item, index) in items.slice(0, 2)" :key="index">
          <div class="image-study-container h-400">
            <n-link :to="localePath('/study-abroad/' + item.slug)" class="image-study-link">
              <img :src="item.image" alt="About Image" title="About Image" loading="lazy">
              <p class="image-text-overlay p-r-l-20">{{ item.title }}</p>
              <!-- <p class="image-text-overlay">{{ $t('header.study in north cyprus') }}</p> -->
            </n-link>
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
      items: [],
    };
  },

  async fetch() {
    try {
      const res3 = await this.$axios.get('/api/where_studies', {
                headers: {
                    'local': this.$i18n.locale,
                }
      });
      this.items = res.data.result.items;
    } catch (error) {
      //console.error("Error fetching where studies component:", error);
    }
  },
};
</script>
