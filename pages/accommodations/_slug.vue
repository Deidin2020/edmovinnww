<template>
    <div id="main-wrapper" class="main-wrapper university-details-edmov">
        <AccommodationHero :item="item" />

        <AccommodationAbout :item="item" />

        <AccommodationGallery :item="item" />

        <AccommodationFeatures :items="item.facilities" :title="$t('facilities')" />

        <AccommodationFeatures :items="item.reservationTypes" :title="$t('reservationTypes')" />

        <AccommodationFeatures :items="item.genders" :title="$t('genders')" />

        <AccommodationUniversity :items="item.universities" />

        <AccommodationYoutube :item="item" />

        <RoomSwiper :items="item.rooms" :title="$t('Similar_Room')" titleClass="title-style-2" />
    </div>
</template>

<script>
export default {
    head() {
        return {
            title: this.item.name,
            script: [
                {
                    type: 'application/ld+json',
                    json: this.$generateBreadCrumbSchema([
                        {
                            name: 'Home',
                            url: 'https://edmovinn.com'
                        },
                        {
                            name: this.item.name,
                            url: `https://edmovinn.com/accommodations/${this.item.slug}`
                        },
                    ])
                }
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.item.meta_description
                }
            ]
        };
    },
    async asyncData({ redirect, $axios, params }) {
        try {
            const slug = encodeURIComponent(params.slug);

            const { data } = await $axios.get(`/api/accommodations/${slug}`)
            const item = data.result.accommodation || {}

            let rooms = [];

            try {
                const res = await $axios.get('/api/rooms');
                rooms = res.data.result?.item || [];
                rooms = rooms.map(data => formatRoomData(data, locale));
            } catch (e) {
            }
            return { item, rooms };
        } catch (error) {
            redirect('/404');
            return { item: {} };
        }
    },

};
</script>
