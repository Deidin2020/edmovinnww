<template>
    <div class="hero-banner edu-faq-area faq-style-1">
        <div class="container">
            <div class="row row--45 align-items-center">
                <div class="col-lg-6">
                    <div class="banner-content">
                        <h1 class="title h2">
                            <span v-html="$t('pages.home.hero.title')"></span>
                        </h1>
                        <p>{{ $t('pages.home.hero.description') }}</p>
                        <div class="banner-btn row col-md-12">
                            <div class="col-sm-7">
                                <n-link :to="localePath('/wizard')"  title="Navigate to the Wizard page" class="btn btn-hero btn-primary-gradient">
                                    {{ $t('actions.more_details') }} <img class="svg-hero-home  image-categories"
                                        src="/images/icons/v1-20321.svg" loading="lazy" alt="next" title="next"></n-link>
                            </div>
                            <div class="col-sm-7 mt-3">
                                <button class="btn btn-hero btn-primary-white" @click="openModal">
                                    {{ $t('actions.contact_us') }}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-lg-6">
                    <div class="edu-hero-gallery display-md-desktop">
                        <div class="row g-5">
                            <div class="p-0-m-0 col-6 ">
                                <div class="faq-thumbnail thumbnail-1">
                                    <img src="/img/home/young-man-student-with-notebooks-showing-thumb-up-approval-smiling-satisfied-blue-studio-background-PhotoRoom 1.webp" alt="Faq Images" title="Faq Images">
                                </div>
                            </div>
                            <div class="p-0-m-0 col-6 ">
                                <div class="faq-thumbnail thumbnail-2">
                                    <img src="/img/home/Frame 220.webp" alt="Faq Images"  title="Faq Images" >

                                </div>
                            </div>
                            <div class="p-0-m-0 col-6 ">
                                <div class="faq-thumbnail thumbnail-3">
                                    <img src="/img/home/Frame 221.webp" alt="Faq Images" title="Faq Images"  >
                                </div>
                            </div>
                            <div class="p-0-m-0 col-6 ">
                                <div class="faq-thumbnail thumbnail-4">
                                    <img src="/img/home/portrait-hispanic-college-student-carrying-backpack-standing-school-hallway-PhotoRoom 1.webp" alt="Faq Images" title="Faq Images" >
                                
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="row g-5 display-sm-mobile">
                        <div class="col-md-12">
                            <img src="/img/home/bg-home-mobile.webp" alt="Faq Images"  title="Faq Images">
                        </div>
                    </div>

                </div>
            </div>
        </div>

        <b-modal id="myModal" ref="myModal" :title="$t('pages.home.contact.title')" body-class="ModelContactus" centered
            header-class="ModelContactus" hide-footer hide-header>
            <ModelContactus @hide="hideModal" />
        </b-modal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'

export default {
    components: { BModal },
    methods: {
        openModal() {
            if (this.$refs.myModal) {
                this.$refs.myModal.show()
            } else {
               // console.error('Modal reference is not defined.')
            }
        },
        hideModal() {
            if (this.$refs.myModal) {
                this.$refs.myModal.hide()
            } else {
               // console.error('Modal reference is not defined.')
            }
        }
    }
}
</script>
