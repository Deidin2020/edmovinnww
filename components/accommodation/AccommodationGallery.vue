<template>
    <div>
        <section v-if="item.images && item.images.length > 0" class="gallery-area"
            style="width: 80%; max-height: 500px; display: block; margin: auto; border-radius: 16px;">

            <div class="container">
                <div class="row">
                    <div class="edu-gallery-area">
                        <div class="row">
                            <swiper ref="swiper" class="uni-box-swiper swiper" :options="swiperOptions">
                                <div class="swiper-slide" v-for="(image, index) in item.images" :key="index">
                                    <img :src="image" alt="Gallery Image" title="Gallery Image"
                                        style="height: fit-content !important; width: fit-content !important; object-fit: contain !important; max-height: 350px;"
                                        @click="openModal(image)" />
                                </div>
                            </swiper>

                            <div class="swiper-pagination"></div>

                            <div class="swiper-button-prev swiper-btn-prv"></div>
                            <div class="swiper-button-next swiper-btn-nxt"></div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <div v-else>
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="university-image-details">
                            <div class="col-md-12 university-img-full">
                                <img :src="item.image ? item.image : '/img/search/default-room.jpg'" alt="Images"
                                    title="Images"
                                    style="max-height: 330px; width: 100%; object-fit: cover; border-radius: 16px; margin-bottom: 18px;">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div v-if="modalImage" class="image-modal" @click="modalImage = null">
            <img :src="modalImage" alt="Zoomed Image" class="modal-img" />
        </div>
    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object,
            required: true
        }
    },
    data() {
        return {
            index: null,
            modalImage: null,
            swiperOptions: {
                slidesPerView: 'auto',
                centeredSlides: true,
                loop: true,
                spaceBetween: 0,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                speed: 800,
                grabCursor: true,
                effect: 'coverflow',
                coverflowEffect: {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2,
                    slideShadows: false,
                },
                navigation: {
                    nextEl: '.swiper-btn-nxt',
                    prevEl: '.swiper-btn-prv'
                },
                breakpoints: {
                    1200: {
                        slidesPerView: 3,
                    },
                    768: {
                        slidesPerView: 1.5,
                    },
                    0: {
                        slidesPerView: 1,
                    },
                },
            },
        };
    },
    methods: {
        openModal(image) {
            this.modalImage = image;
        }
    }
};
</script>
