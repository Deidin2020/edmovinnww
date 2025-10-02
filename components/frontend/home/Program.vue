<template>
  <div class="program-area">
    <div class="container">
      <div class="row g-5">
        <div class="col-lg-5">
          <div class="testimonial-heading-area">
            <SectionTitle :subTitle="$t('pages.home.programs.description')"
                          :title="$t('pages.home.programs.title')" alignment='section-left'/>
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
        <div class="col-lg-7 custom-testimonial-col-7 program-box-bg" data-aos="fade-right" data-aos-delay="200"
             data-aos-duration="900">
          <div class="swiper-container-program">
            <swiper ref="swiper" :options="swiperOptions" class="program-box-swiper swiper">
              <div v-for="(slide, index) in slides" :key="index" class="swiper-slide">
                <div class="why-choose-box features-box">
                  <div class="icon">
                    <img :alt="slide.title" :title="slide.title" :src="slide.image" loading="lazy" >
                  </div>
                  <div class="content">
                    <h3 class="title">
                      {{ slide.title }}
                    </h3>
                  </div>
                </div>
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
  data() {
    return {
      studying_fields: [],
      index: null,
      swiperOptions: {
        slidesPerView: 3,
        loop: false,

        navigation: {
          nextEl: '.swiper-btn-prv',
          prevEl: '.swiper-btn-nxt',
        },
        breakpoints: {
          1200: {
            slidesPerView: 3,
          },
          760: {
            slidesPerView: 2.5,
          },
          100: {
            slidesPerView: 1.25,
            loop: true,

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
      slides: [
          { image: "/img/home/field-1.png", title: this.$t('studying_fields.art') , url: this.localePath('/discover?fieldI  ds=19,18,17,15,16,14,13') },
          { image: "/img/home/field-2.png", title: this.$t('studying_fields.health') , url: this.localePath('/discover?fieldIds=30,31,32,33,34,35,36')  },
          { image: "/img/home/field-3.png", title: this.$t('studying_fields.english') , url: this.localePath('/discover?fieldIds=20,21,22,23,24,25')  },
          { image: "/img/home/field-4.png", title: this.$t('studying_fields.law'), url: this.localePath('/discover?fieldIds=12,11,10,9,8,7')  },
          { image: "/img/home/field-5.png", title: this.$t('studying_fields.science'), url: this.localePath('/discover?fieldIds=26,27,28,29')  },
          { image: "/img/home/field-6.png", title: this.$t('studying_fields.engineering'), url: this.localePath('/discover?fieldIds=37,38,39,40,41,42,43,44,45')  },
      ],
    };
  },
  async fetch() {
    try {
      const res = await this.$axios.get('/api/studying_fields', {
        headers: {
          'local': this.$i18n.locale,
        }
      });
      this.studying_fields = res.data.result.items.map(item => ({
        title: item.name,
        id: item.id,
        image: item.logo ? item.logo : "/img/home/logo.png",

      }));
    } catch (error) {
     // console.error("Error fetching studying_fields:", error);
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
