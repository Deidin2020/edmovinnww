<template>
  <div class="university-program-area">
    <div class="container">
      <div class="row">
        <SectionTitle alignment="section-left m-0 p-0 urlButton row" :title="title" :urlTitle="$t('view_all')"
          :urlLink="localePath('/accommodation')" extraClass="color-303DBF" :titleClass="titleClass" />

        <div class="container p-0 m-0">
          <div class="row p-0">
            <swiper ref="swiper" class="uni-box-swiper swiper m-0" :options="swiperOptions">
              <div class="program-box-university swiper-slide" v-for="(item, index) in items" :key="index">
                <RoomBox :room="item" />
              </div>
            </swiper>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    extraMainClass: String,
    titleClass: String,
    items: {
      type: Array,
      required: true
    }
  },
  components: {
    SectionTitle: () => import('/components/frontend/common/SectionTitle'),
  },
  data() {
    return {
      swiperOptions: {
        slidesPerView: 2.5,
        loop: false,
        navigation: {
          nextEl: '.swiper-btn-prv',
          prevEl: '.swiper-btn-nxt',
        },
        breakpoints: {
          3000: { slidesPerView: 3 },
          1200: { slidesPerView: 2.5 },
          992: { slidesPerView: 2.5 },
          760: { slidesPerView: 2.5 },
          0: { slidesPerView: 1 },
        },
        lazy: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 1500,
        effect: 'slide',
        grabCursor: true,
      },
    };
  },
};
</script>
