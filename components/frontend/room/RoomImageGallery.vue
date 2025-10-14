<template>
    <div class="container p-0 m-0">
        <swiper ref="swiper" class="uni-box-swiper swiper m-0" :options="swiperOptions">
            <div class="swiper-slide">
                <img :src="image" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md">
            </div>
            <div class="swiper-slide" v-for="(imageA, index) in images">
                <img :src="imageA" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md">
            </div>
        </swiper>

    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
        },
        images: {
            type: Array,
            required: true
        }
    },
    data() {
        return {
            swiperOptions: {
                slidesPerView: 1,
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
};
</script>