<template>
  <div id="partner" class="partner-home-area">
    <div class="edu-about-area">
      <div class="container">
        <div class="row g-5 align-items-center">
          <div class="col-lg-5 m-0">
            <div class="about-content">
              <SectionTitle :subTitle="$t('pages.home.partners.description')"
                            :title="$t('pages.home.partners.title')" alignment='section-left'/>
            </div>
          </div>
          <div class="col-lg-7 position-relative">
            <div class="row  partner-bg">
              <img :alt="$t('pages.home.partners.title')" :title="$t('pages.home.partners.title')" class="partner-img"
                   src="/img/home/pre-02.webp" loading="lazy">
              <button class="btn-video" @click="openVideoModal()" aria-label="open video"><i class="icon-18"></i></button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="partner-area">
      <div class="container">
        <div class="row">
          <div class="col-md-12 partner-area-title">
            <h2 class="title">{{ $t('pages.home.partners.label') }}</h2>
          </div>
        </div>
      </div>

      <div class="container">
        <div class="row">

          <swiper ref="swiper" :options="swiperOptions" class="testimonial-activation-3 swiper">
            <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
              <div class="brand-grid">
                <img :src="slide.image" alt="Brand Logo" title="Brand Logo" loading="lazy">
              </div>
            </div>
          </swiper>
        </div>
      </div>
    </div>
    <b-modal ref="VideoModel" v-model="showVideoModel" bodyClass="model-no-back"
             centered headerClass="model-no-back" hide-footer hide-header style="max-width: 50vw; max-height: 50vh;">
      <iframe :src="`https://www.youtube.com/embed/6yIYiEdPJF8?controls=0&showinfo=0&rel=0&autoplay=1`"></iframe>
    </b-modal>

  </div>
</template>
<script>
import {BModal} from 'bootstrap-vue'

export default {
  components : {BModal},
  data() {
    return {
      videoUrl: '5LBD5jPHGrA',
      showVideoModel: false,

      swiperOptions: {
        slidesPerView: 8,
        loop: true,
        lazy: true,
        speed: 1500,
        effect: 'slide',
        grabCursor: true,
        breakpoints: {
          1200: {
            slidesPerView: 8,
          },
          992: {
            slidesPerView: 6,
          },
          768: {
            slidesPerView: 4.5,
          },
          576: {
            slidesPerView: 4.5,
          },
          300: {
            slidesPerView: 3.5,
          },
          200: {
            slidesPerView: 2.5,
          },
          100: {
            slidesPerView: 1.25,
          },
        },
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
      },
      slides: [
        {image: "/img/university/logos/rumeli.svg"},
        {image: "/img/university/logos/Biruni.svg"},
        {image: "/img/university/logos/atlas.svg"},
        {image: "/img/university/logos/au.svg"},
        {image: "/img/university/logos/aydin.svg"},
        {image: "/img/university/logos/bau.svg"},
        {image: "/img/university/logos/istinye.svg"},
        {image: "/img/university/logos/medipol.svg"},
        {image: "/img/university/logos/isik.svg"},
        {image: "/img/university/logos/nisantasi.svg"},
        {image: "/img/university/logos/uskudar.svg"},
      ],
    };
  },
  methods: {
    openVideoModal(url) {
      this.showVideoModel = true;
    },
  },
};
</script>
