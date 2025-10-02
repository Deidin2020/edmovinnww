<template>
  <div class="testimonial-area-img">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-5 margin-container-full-left">
          <div class="testimonial-heading-area">
            <SectionTitle :subTitle="$t('pages.home.testimonials.description')"
                          :title="$t('pages.home.testimonials.title')" alignment='section-left'/>
          </div>
          <div class="swiper-navigation">
            <div class="swiper-btn-nxt">
              <i class="icon-west"></i>
            </div>
            <div class="swiper-btn-prv">
              <i class="icon-east"></i>
            </div>
          </div>
        </div>
        <div class="col-lg-7 img-testimonial-col-7 home-testimonial" data-aos="fade-right" data-aos-delay="200"
             data-aos-duration="900">

          <swiper ref="swiper" :options="swiperOptions" class="testimonial-home swiper">
            <div v-for="(item, index) in testimonials" :key="index" class="swiper-slide">
              <div class="testimonial-home-container">
                <div class="content">
                  <p class="title">{{ item.name }}</p>
                  <p class="location">{{ item.job }}</p>
                </div>
                <button class="btn-video" aria-label="open video" @click="openVideoModal(item.name, item.videoUrl)"><i
                    class="icon-18"></i></button>
                    <img :alt="item.name" :title="item.name" :src="item.image" loading="lazy" >
              </div>
            </div>
          </swiper>
        </div>
      </div>
    </div>
    <b-modal ref="VideoModel" v-model="showVideoModel" bodyClass="model-no-back" centered
             headerClass="model-no-back" hide-footer hide-header style="max-width: 50vw; max-height: 50vh;">
      <iframe :src="`https://www.youtube.com/embed/${videoSrc}?showinfo=0&rel=0&autoplay=1`"></iframe>
    </b-modal>
  </div>
</template>

<script>
import {BModal} from 'bootstrap-vue'

export default {
  components : {BModal},
  data() {
    return {
      testimonials: [],
      index: null,
      showVideoModel: false,
      videoSrc: "",
      videoTitle: "",
      swiperOptions: {
        slidesPerView: 3.5,
        loop: false,
        navigation: {
          nextEl: '.swiper-btn-prv',
          prevEl: '.swiper-btn-nxt',
        },
        breakpoints: {
          3000: {
            slidesPerView: 4.5,
          },
          1800: {
            slidesPerView: 3.5,
          },
          1200: {
            slidesPerView: 2.5,
          },
          550: {
            slidesPerView: 2.5,
          },
          100: {
            slidesPerView: 1.25,
          },
        },
        lazy: true,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
        },
        speed: 500,
        effect: 'slide',
        grabCursor: true,
      },
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.get('/api/testimonials', {
        headers: {
          local: this.$i18n.locale,
        }
      });
      this.testimonials = res.data.result.items.map(item => ({
        name: item.name,
        job: item.job,
        image: item.image,
        videoUrl: item.youtube_video_id,
      }));
    } catch (error) {
     // console.error("Error fetching testimonials:", error);
    }
  },
  methods: {
    openVideoModal(title, url) {
      this.videoTitle = title;
      this.videoSrc = url;
      this.showVideoModel = true;
    },
  },
};
</script>
