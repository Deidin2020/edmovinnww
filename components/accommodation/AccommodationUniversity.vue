<template>
    <div>
        <div class="university-features-area" v-if="items && items.length > 0">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-title-university">
                            <h2 class="title">{{ $t('nearest_universities') }}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div class="university-features-area-tab" v-if="items">
            <div class="container">
                <div class="row">
                    <div class="col-md-6 col-mobile-50 sub-feature" v-for="(data, index) in items" :key="index">
                        <div class="university-features-grid ">
                            <div class=" content">
                                <UniversityBox :university="data" />
                            </div>
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
        items: {
            type: Array,
        }
    },
}
</script>
