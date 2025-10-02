<template>
    <div class="where-study-section" v-if="items.length > 0">
        <div class="container">
            <SectionTitle :title="$t('pages.home.where_study.title')"
                :subTitle="$t('pages.home.where_study.description')" alignment='section-center' />

            <div v-if="items.length == 2" class="row align-items-center" data-aos-delay="200" data-aos="fade-up"
                data-aos-duration="900">
                <div class="col-lg-6" v-for="(item, index) in items.slice(0, 2)" :key="index">
                    <div class="image-study-container">
                        <NuxtLink :to="localePath('/study-abroad/' + item.slug)" title="study-abroad" class="image-study-link">
                            <img :src="item.image" alt="About Images" title="About Images" loading="lazy" >
                            <p class="image-text-overlay p-r-l-20">{{ item.title }}</p>
                        </NuxtLink>
                    </div>
                </div>
            </div>
            
            <div v-else>
                <div class="row p-0 d-d-none">
                    <swiper ref="swiper" class="uni-box-swiper swiper" :options="swiperOptions">
                        <div class="swiper-slide" v-for="( item, index ) in items " :key="index">
                            <div class="image-study-container study-abroad-item-3">
                                <NuxtLink :to="localePath('/study-abroad/' + item.slug)" title="study-abroad" class="image-study-link">
                                    <img :src="item.image" title="About Images"  alt="About Images" loading="lazy" >
                                    <p class="image-text-overlay p-r-l-20">{{ item.title }}</p>
                                </NuxtLink>
                            </div>
                        </div>
                    </swiper>
                </div>

                <div class="row align-items-center d-m-none" data-aos-delay="200" data-aos="fade-up"
                    data-aos-duration="900">
                    <div class="col-lg-3">
                        <div class="image-study-container study-abroad-item-0" v-if="items.length > 0">
                            <NuxtLink :to="localePath('/study-abroad/' + items[0].slug)"  title="study-abroad"class="image-study-link">
                                <img :src="items[0].image" title="About Images"  alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[0].title }}</p>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="image-study-container study-abroad-item-1" v-if="items.length > 1">
                            <NuxtLink :to="localePath('/study-abroad/' + items[1].slug)" title="study-abroad" class="image-study-link">
                                <img :src="items[1].image" title="About Images"  alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[1].title }}</p>
                            </NuxtLink>
                        </div>
                        <div class="image-study-container study-abroad-item-2" v-if="items.length > 2">
                            <NuxtLink :to="localePath('/study-abroad/' + items[2].slug)" title="study-abroad" class="image-study-link">
                                <img :src="items[2].image" title="About Images"  alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[2].title }}</p>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="col-lg-3">
                        <div class="image-study-container study-abroad-item-3" v-if="items.length > 3">
                            <NuxtLink :to="localePath('/study-abroad/' + items[3].slug)"  title="study-abroad" class="image-study-link">
                                <img :src="items[3].image" title="About Images"  alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[3].title }}</p>
                            </NuxtLink>
                        </div>

                        <div class="image-study-container study-abroad-item-4" v-if="items.length > 4">
                            <NuxtLink :to="localePath('/study-abroad/' + items[4].slug)"  title="study-abroad" class="image-study-link">
                                <img :src="items[4].image" alt="About Images" title="About Images"  loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[4].title }}</p>
                            </NuxtLink>
                        </div>
                    </div>
                    <div class="col-lg-3">
                        <div class="image-study-container study-abroad-item-5" v-if="items.length > 5">
                            <NuxtLink :to="localePath('/study-abroad/' + items[5].slug)"  title="study-abroad" class="image-study-link">
                                <img :src="items[5].image" title="About Images"  alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[5].title }}</p>
                            </NuxtLink>
                        </div>

                        <div class="image-study-container study-abroad-item-6" v-if="items.length > 6">
                            <NuxtLink :to="localePath('/study-abroad/' + items[6].slug)"  title="study-abroad" class="image-study-link">
                                <img :src="items[6].image"  title="About Images" alt="About Images" loading="lazy" >
                                <p class="image-text-overlay p-r-l-20">{{ items[6].title }}</p>
                            </NuxtLink>
                        </div>
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
            index: null,
            swiperOptions: {
                slidesPerView: 1.25,
                loop: false,
                navigation: {
                    nextEl: '.swiper-btn-prv',
                    prevEl: '.swiper-btn-nxt',
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
    async fetch() {
        try {
            const res = await this.$axios.get('/api/where_studies', {
                headers: {
                    'local': this.$i18n.locale,
                }
            });
            this.items = res.data.result.items;
        } catch (error) {
           // console.error("Error fetching where studies component:", error);
        }
    },
};
</script>
