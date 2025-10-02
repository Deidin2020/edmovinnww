<template>
    <div id="main-wrapper" class="main-wrapper university-details-edmov room-details-edmov mb-50">
        <RoomHero :item="item" />
        <RoomFeature :item="item" />
        <RoomSummary :item="item" />
        <RoomSwiper :items="rooms" :title="$t('Similar_Room')" titleClass="title-style-2" />
    </div>
</template>

<script>
import { formatAccommodationData, formatRoomData, getAPIPaginationData } from '@/utils/DataFormatter';
export default {
    head() {
        return {
            title: this.item.name,
            script: [
                {
                    type: 'application/ld+json',
                    json: this.getRoomSchema()
                },
                {
                    type: 'application/ld+json',
                    json: this.$generateBreadCrumbSchema([
                        {
                            name: 'Home',
                            url: 'https://edmovinn.com'
                        },
                        {
                            name: this.item.name,
                            url: `https://edmovinn.com/rooms/${this.item.slug}`
                        }
                    ])
                }
            ],
            meta: [
                {
                    hid: 'description',
                    name: 'description',
                    content: this.item.meta_description?.length < 10 ? this.item.description.slice(100, 260) : this.item.meta_description,
                }
            ]
        };
    },

    data() {
        return {
            item: {},
            rooms: [],
            roomCount: '2560',
        };
    },
    methods: {
        getRoomSchema() {
            if (!this.item) return {};

            return {
                "@context": "https://schema.org/",
                "@id": `https://edmovinn.com/rooms/${this.item.slug}`,
                "@type": "Course",
                "name": this.item.name,
                "description": this.item.description,

                "publisher": {
                    "@type": "Edmov",
                    "name": "Edmov",
                    "url": "https://edmovinn.com"
                },

                "provider": {
                    "@type": "university",
                    "name": this.item.university_name,
                },
                "image": [this.item.university_logo ?? 'https://edmovinn.com/images/logo/logo-dark.png'],

            }
        }
    },

    async asyncData({ redirect, $axios, params }) {
        try {
            const slug = encodeURIComponent(params.slug);

            const { data } = await $axios.get(`/api/rooms/${slug}`);

            const item = data.result?.item || {};

            let rooms = [];

            try {
                const res = await $axios.get('/api/rooms');
                rooms = res.data.result?.item || [];
                rooms = rooms.map(data => formatRoomData(data, locale));
            } catch (e) {
            }

            return { item, rooms };
        } catch (err) {
            redirect('/404');
            return { item: {}, rooms: [] };
        }
    },

};
</script>
