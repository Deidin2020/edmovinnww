<template>
    <div class="container">

        <div class="about-university-area">
            <div class="container">
                <div class="row">

                    <div class="col-lg-12">
                        <div class="main-title-university">
                            <h2 class="title" style=" font-size: 25px; margin-top: 25px;">
                                {{ $t('accommodation.room_summary') }} :
                            </h2>
                        </div>
                    </div>
                    <div class="col-lg-12">
                        <div class="university-details-content">
                            <span>{{ stripHtml(itemProp.description) }}</span>
                        </div>
                    </div>
                </div>
            </div>

        </div>
        <div class="about-university-area">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="main-title-university">
                            <h2 class="title" style=" font-size: 25px; margin-top: 25px;">
                                {{ $t('accommodation.about_room') }} :
                            </h2>
                        </div>
                    </div>
                    <div class="row program-detail-box-area">
                        <div class="col-md-12" v-for="(feature, index) in details" :key="index"
                            v-if="feature && feature.display">
                            <div class="program-detail-box" :class="feature.colorClass">
                                <div class="content">
                                    <div class="main">
                                        <span v-html="feature.imgSrc" :title="feature.title" class="icon"></span>
                                        <h3 class="title">{{ feature.title }}</h3>
                                    </div>
                                    <p>{{ feature.details }} <br><span>{{ feature.spanDetails }} </span></p>
                                </div>
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
    data() {
        return {
            showAll: false
        }
    },
    props: {
        item: {
            type: Object,
            required: true
        },
    },
    computed: {
        itemProp() {
            return this.item
        },
        details() {
            return [
                {
                    title: this.$t('accommodation.housing_fee'),
                    details: this.item.housing_fee + " " + (this.item.currency?.symbol || ""),
                    spanDetails: "/" + (this.item.payment_types?.map(p => p.name).join(', ') || ''),
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-10v2m0 10v2m9-10a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>`,
                    display: this.item.housing_fee > 0,
                },
                {
                    title: this.$t('accommodation.room_type'),
                    details: this.item.room_types?.map(r => r.name).join(', ') || '-',
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 6a1 1 0 011-1h16a1 1 0 011 1v5H3V6zm0 7h18v5a1 1 0 01-1 1H4a1 1 0 01-1-1v-5z" /></svg>`,
                    display: this.item.room_types?.length > 0,
                },
                {
                    title: this.$t('accommodation.reservation_type'),
                    details: this.item.reservation_types?.map(r => r.name).join(', ') || '-',
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
                    display: this.item.reservation_types?.length > 0,
                },
                {
                    title: this.$t('accommodation.floor'),
                    details: this.item.floor,
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M4 3h16v2H4V3zm0 4h16v2H4V7zm0 4h16v2H4v-2zm0 4h10v2H4v-2z" /></svg>`,
                    display: this.item.floor ?? false,
                },
                {
                    title: this.$t('accommodation.area'),
                    details: this.item.area,
                    spanDetails: "m²",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 24 24" fill="currentColor"><path d="M3 5a2 2 0 012-2h14a2 2 0 012 2v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5zm2 0v14h14V5H5z" /></svg>`,
                    display: this.item.area ?? false,
                },
                {
                    title: this.$t('accommodation.capacity'),
                    details: this.item.capacity,
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M9 20h6m-6 0a3 3 0 00-5.356-1.857M9 20v-2a3 3 0 016 0v2M9 7a4 4 0 118 0 4 4 0 01-8 0z" /></svg>`,
                    display: this.item.capacity ?? false,
                },
                {
                    title: this.$t('accommodation.available_from'),
                    details: this.item.available_from,
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
                    display: this.item.available_from ?? false,
                },
                {
                    title: this.$t('accommodation.available_to'),
                    details: this.item.available_to,
                    spanDetails: "",
                    imgSrc: `<svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>`,
                    display: this.item.available_to ?? false,
                },
            ];
        }


    },
    methods: {
        toggleShowMore() {
            this.showAll = !this.showAll
        },
        truncate(text, limit) {
            if (text.length <= limit) {
                return text
            }
            return text.substring(0, limit) + '...'
        },
        stripHtml(html) {
            return html ? html.replace(/<[^>]+>/g, '') : ''
        }
    }
}
</script>
