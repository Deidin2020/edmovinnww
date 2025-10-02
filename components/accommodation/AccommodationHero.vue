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
                            <div class="location"><i class="ri-map-pin-2-line"></i><span>
                                    {{ item.location?.country }}
                                    <span v-if="item.location?.state"> , </span>
                                    {{ item.location?.state }}
                                    <span v-if="item.location?.city"> , </span>
                                    {{ item.location?.city }}
                                </span></div>

                            <div class="location"><i class="ri-map-pin-2-line"></i><span>{{ item.address }}
                                </span></div>

                            <div class="col-sm-12 btn-apply display-desktop">
                                <a :href="localePath('/accommodation')" class="btn btn-primary btn-l">
                                    {{ $t('actions.apply_now') }}
                                </a>
                            </div>
                        </div>
                    </div>
                </div>


                <div class="col-sm-12 btn-apply btn-apply-mobile display-mobile ">
                    <a :href="localePath('/accommodation')" class="btn btn-primary btn-l btn-lg">
                        {{ $t('actions.apply_now') }}
                    </a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {
    props: {
        item: {
            type: Object
        }
    },
}
</script>
