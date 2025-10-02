<template>
    <div v-if="universities.length > 0" class="university-area">
        <div :class="{ 'container': hasContainer }">
            <div class="row">
                <SectionTitle :subTitle="$t('pages.home.universities.description')"
                    :title="$t('pages.home.universities.title')" :titleClass="titleClass"
                    :urlLink="showUniversitiesLink" :urlTitle="viewAll" alignment="section-left m-0 urlButton row" />

                <div class="edu-course-area course-area-1">
                    <div class="">
                        <div class="d-flex">
                            <swiper ref="swiper" :options="swiperOptions" class="uni-box-swiper  swiper">
                                <div v-for="(item, index) in universities" :key="index" class="swiper-slide">
                                    <MUniversityBox :item="item" />
                                </div>
                            </swiper>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        titleClass: {
            type: String
        },
        hasContainer: {
            type: Boolean,
            default: true
        },
    },
    data() {
        return {
            universities: [],
            viewAll: this.$t('view_all'),
            index: null,
            swiperOptions: {
                slidesPerView: 4,
                loop: false,
                navigation: {
                    nextEl: '.swiper-btn-prv',
                    prevEl: '.swiper-btn-nxt',
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 3.5,
                    },
                    760: {
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
                speed: 1500,
                effect: 'slide',
                grabCursor: true,
            },
            showUniversitiesLink: '/discover?tab=universities',
        };
    },
    mounted() {
        if (this.$route.path.startsWith('/dashboard')) {
            this.showUniversitiesLink = '/dashboard/discover?tab=universities';
        }
    },
    async fetch() {
        try {
            const response = await this.$axios.get('/api/universities/list', {
                headers: {
                    'local': this.$i18n.locale,
                }
            });
            this.universities = response.data.data.map(item => ({
                title: item.name,
                location: item.country_title,
                image: item.image ? item.image : item.logo,
                url: this.$route.path.startsWith('/dashboard') ? `/dashboard/universities/${item.slug}` : `/universities/${item.slug}`,
            }));
        } catch (error) {
           // console.error("Error fetching universities:", error);
        }
    },
};
</script>
