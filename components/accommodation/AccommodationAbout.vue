<template>
    <div class="about-university-area">
        <div class="container">
            <div class="row">
                <div class="col-lg-12">
                    <div class="main-title-university">
                        <h2 class="title">{{ $t('labels.about') }}</h2>
                    </div>
                </div>
                <div class="col-lg-12">
                    <div class="university-details-content">
                        <p class="subtitle-university" v-html="item.description"></p>
                    </div>
                </div>
            </div>
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

    methods: {

        stripHtml(html) {
            return html ? html.replace(/<[^>]+>/g, '') : '';
        }
    }
}
</script>
