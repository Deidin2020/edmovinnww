<template>
    <div class="container p-0 m-0">
        <!-- Swiper -->
        <swiper ref="swiper" class="uni-box-swiper swiper m-0" :options="swiperOptions">
            <div class="swiper-slide">
                <img :src="image" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md cursor-pointer"
                    @click="openModal(image)">
            </div>
            <div class="swiper-slide" v-for="(imageA, index) in images" :key="index">
                <img :src="imageA" class="w-full h-64 sm:h-80 lg:h-96 object-cover rounded-lg shadow-md cursor-pointer"
                    @click="openModal(imageA)">
            </div>
        </swiper>

        <!-- Modal -->
        <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
            @click.self="closeModal">
            <div class="relative max-w-5xl w-full p-4">
                <button @click="closeModal"
                    class="absolute top-4 right-4 bg-white text-black rounded-full w-8 h-8 flex items-center justify-center shadow hover:bg-gray-200">
                    ✕
                </button>
                <img :src="selectedImage" class="w-full max-h-[90vh] object-contain rounded-lg shadow-lg">
            </div>
        </div>
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
            showModal: false,
            selectedImage: null,
        };
    },
    methods: {
        openModal(image) {
            this.selectedImage = image;
            this.showModal = true;
        },
        closeModal() {
            this.showModal = false;
            this.selectedImage = null;
        },
    },
};
</script>

<style scoped>
body.modal-open {
    overflow: hidden;
}
</style>
