<template>
    <div class="university-hero">
        <div class="container">
            <div class="row">
                <div class="col-12">
                    <div class="mb--20">
                        <div class="university-hero-img">
                            <div class="thumbnail">
                                <img :src="item.logo" :alt="item.name" :title="item.name" v-if="item.logo">
                            </div>
                            <div class="author-content">
                                <h1 class="title">{{ item.name }}</h1>
                            </div>
                        </div>
                        <div class="university-hero-location">
                            <!-- <div class="location"><i class="ri-map-pin-2-line"></i><span>
                                    {{ item.state }} <span v-if="item.state"> , </span> {{ item.country_title }}
                                </span></div> -->

                            <div class="location"><i class="ri-map-pin-2-line"></i><span>{{ item.country_title }}
                                </span></div>

                            <div class="col-sm-12 btn-apply display-desktop">
                                <NuxtLink :to="goToDiscover()" class="btn btn-primary btn-l">
                                    {{ $t('actions.apply_now') }}
                                </NuxtLink>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-12 col-lg-12">
                    <div class="university-image-details">
                        <div class="col-md-12 university-img-full">
                            <img src="/img/university/img-uni.jpg" alt="Images" title="Images"
                                v-if="!item.youtube_video_id">
                            <iframe v-if="item.youtube_video_id" width="100%" height="500"
                                :src="`https://www.youtube.com/embed/` + item.youtube_video_id"></iframe>
                        </div>

                        <div class="col-offset-md-4 col-md-7 hero-card-university" style="direction: rtl;">
                            <div class="row">
                                <div class="col-lg-3 col-md-6 col-sm-6 col-mobile-50" style="direction: ltr;"
                                    v-for="(feature, index) in features" :key="index" v-if="feature.display">
                                    <div class="hero-university-box" :class="feature.colorClass">
                                        <div class="content">
                                            <div class="icon">
                                                <img :src="'/img/program/' + feature.imgSrc" alt="Images"
                                                    title="Images" />
                                            </div>
                                            <span class="title">{{ feature.title }}</span>
                                            <p>{{ feature.details }}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-sm-12 btn-apply btn-apply-mobile display-mobile ">
                    <NuxtLink :to="goToDiscover()" class="btn btn-primary btn-l btn-lg">
                        {{ $t('actions.apply_now') }}
                    </NuxtLink>
                </div>
            </div>
        </div>

        <BModal ref="myModal" id="myModal" centered bodyClass="ModelContactus" headerClass="ModelContactus" hide-footer
            hide-header>
            <ModelContactus @hide="hideModal" />
        </BModal>
    </div>
</template>

<script>
import { BModal } from 'bootstrap-vue'

export default {
    components: {
        BModal,
        ModelContactus: () => import('@/components/frontend/common/ModelContactus'),
    },
    props: {
        item: {
            type: Object
        }
    },
    computed: {
        features() {
            return [
                {
                    title: this.$t('Establishment'),
                    details: this.item.establishment_date,
                    imgSrc: 'icon-0010.svg',
                    display: this.item.establishment_date,
                },
                {
                    title: this.$t('Number_Courses'),
                    details: this.item.programs?.length,
                    imgSrc: 'icon-009.svg',
                    display: this.item.programs?.length,
                },
                {
                    title: this.$t('Cost_Living'),
                    details: this.item.living_cost,
                    imgSrc: 'icon-008.svg',
                    display: this.item.living_cost,

                },
                {
                    title: this.$t('tuition_cost'),
                    details: this.item.fees_from + '$' + ' - ' + this.item.fees_to + '$',
                    imgSrc: 'icon-007.svg',
                    display: this.item.fees_from || this.item.fees_to,
                }
            ]
        }
    },
    methods: {
        hideModal() {
            if (this.$refs.myModal) {
                this.$refs.myModal.hide()
            } else {
                //  console.error('Modal reference is not defined.')
            }
        },
        goToDiscover() {
            const path = `/discover?universityIds=${this.item.id}`;

            return this.$route.path.startsWith('/dashboard')
                ? this.localePath({ path: '/dashboard/discover', query: { universityIds: this.item.id } })
                : this.localePath(path);
        }
    }
}
</script>
