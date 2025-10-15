<template>
    <div class="container p-0 m-0">
        <!-- Swiper الرئيسي -->
        <swiper ref="swiper" class="uni-box-swiper swiper m-0" :options="swiperOptions">
            <div class="swiper-slide">
                <img :src="image" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md cursor-pointer"
                    @click="openModal(0)" <!-- أول صورة -->
                >
            </div>

            <div class="swiper-slide" v-for="(imageA, index) in images" :key="index">
                <img :src="imageA" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md cursor-pointer"
                    @click="openModal(index + 1)" <!-- +1 لأن الصورة الأولى خارج الـ v-for -->
                >
            </div>
        </swiper>

        <!-- المودال -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50"
            @click.self="closeModal">
            <div class="relative w-full max-w-6xl">
                <!-- زر الإغلاق -->
                <button @click="closeModal"
                    class="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200 z-50">
                    ✕
                </button>

                <!-- Swiper داخل المودال -->
                <swiper ref="modalSwiper" class="swiper h-[90vh] rounded-lg overflow-hidden"
                    :options="modalSwiperOptions">
                    <div v-for="(img, idx) in allImages" :key="idx"
                        class="swiper-slide flex items-center justify-center bg-black">
                        <img :src="img" class="max-h-[90vh] max-w-full object-contain select-none">
                    </div>
                </swiper>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        image: {
            type: String,
            required: true,
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
                lazy: true,
                autoplay: {
                    delay: 3000,
                    disableOnInteraction: false,
                },
                speed: 1500,
                effect: 'slide',
                grabCursor: true,
            },
            modalSwiperOptions: {
                slidesPerView: 1,
                loop: true,
                navigation: {
                    nextEl: '.swiper-button-next',
                    prevEl: '.swiper-button-prev',
                },
                keyboard: true,
            },
            showModal: false,
            allImages: [],
        };
    },
    methods: {
        openModal(startIndex) {
            // دمج الصورة الأساسية مع باقي الصور
            this.allImages = [this.image, ...this.images];
            this.showModal = true;

            this.$nextTick(() => {
                const modalSwiper = this.$refs.modalSwiper.swiper;
                modalSwiper.slideToLoop(startIndex, 0);
            });
        },
        closeModal() {
            this.showModal = false;
        },
    },
};
</script>

<style scoped>
.swiper-button-next,
.swiper-button-prev {
    color: white !important;
    filter: drop-shadow(0 0 5px black);
}
</style>
