<template>
    <main class="flex-1 pt-16">
        <div class="min-h-screen bg-background">
            <div class="bg-white border-b border-border px-4 py-3">
                <div class="max-w-7xl mx-auto flex items-center gap-2 text-sm"><a
                        class="text-muted-foreground hover:text-primary transition-colors" :href="localePath('/')"><svg
                            xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-left w-4 h-4">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg></a><span class="text-muted-foreground">/</span><a
                        class="text-muted-foreground hover:text-primary transition-colors"
                        :href="localePath('/')">Accommodations</a><span class="text-muted-foreground">/</span><span
                        class="text-foreground font-medium" v-if="item.name">{{ item.name }}</span></div>
            </div>
            <div class="max-w-7xl mx-auto px-4 py-6">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
                    <div>
                        <h1 class="text-2xl sm:text-3xl font-bold text-foreground mb-2" v-if="item.name">
                            {{ item.name }}</h1>
                        <div class="flex items-center gap-2 text-muted-foreground" v-if="item.address"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg><span>{{ item.address }}</span></div>
                    </div><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-11 rounded-md bg-primary text-primary-foreground hover:bg-primary/90 px-8">Book
                        Now</button>
                </div>
                <div class="mb-8">

                    <RoomImageGallery v-if="item && Object.keys(item).length" :images="item.images"
                        :image="item.image" />

                </div>

                <RoomSummary v-if="item && Object.keys(item).length" :item="item" />
                <div>
                    <div class="flex items-center justify-between mb-6">
                        <h2 class="text-xl font-semibold text-foreground">Similar Rooms</h2><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3">View
                            All</button>
                    </div>
                    <RoomSwiper v-if="rooms && rooms.length" :items="rooms" :title="$t('Similar_Room')"
                        titleClass="title-style-2" />

                </div>
            </div>
        </div>
    </main>
</template>

<script>
import { formatAccommodationData, formatRoomData, getAPIPaginationData } from '@/utils/DataFormatter';
export default {
    // head() {
    //     return {
    //         title: this.item.name,
    //         script: [
    //             {
    //                 type: 'application/ld+json',
    //                 json: this.getRoomSchema()
    //             },
    //             {
    //                 type: 'application/ld+json',
    //                 json: this.$generateBreadCrumbSchema([
    //                     {
    //                         name: 'Home',
    //                         url: 'https://edmovinn.com'
    //                     },
    //                     {
    //                         name: this.item.name,
    //                         url: `https://edmovinn.com/rooms/${this.item.slug}`
    //                     }
    //                 ])
    //             }
    //         ],
    //         meta: [
    //             {
    //                 hid: 'description',
    //                 name: 'description',
    //                 content: this.item.meta_description?.length < 10 ? this.item.description.slice(100, 260) : this.item.meta_description,
    //             }
    //         ]
    //     };
    // },
    data() {
        return {
            item: {},
            rooms: [],
            roomCount: '2560',
        };
    },

    mounted() {
        this.fetchRooms();
    },
    methods: {
        async fetchRooms() {
            try {
                const slug = encodeURIComponent(this.$route.params.slug);
                const { data } = await this.$axios.get(`/api/rooms/${slug}`);
                this.item = data.result?.item || {};

                const res = await this.$axios.get('/api/rooms');
                this.rooms = res.data.result?.item?.map(r => formatRoomData(r, this.$i18n.locale)) || [];
            } catch (err) {
                console.error(err);
                this.item = {};
                this.rooms = [];
            }
        },
    },
    // async asyncData({ redirect, $axios, params }) {
    //     try {
    //         const slug = encodeURIComponent(params.slug);

    //         const { data } = await $axios.get(`/api/rooms/${slug}`);

    //         console.log(data);
    //         const item = data.result?.item || {};

    //         let rooms = [];

    //         try {
    //             const res = await $axios.get('/api/rooms');
    //             rooms = res.data.result?.item || [];
    //             rooms = rooms.map(data => formatRoomData(data, locale));
    //         } catch (e) {
    //         }

    //         return { item, rooms };
    //     } catch (err) {
    //         //   redirect('/404');
    //         return { item: {}, rooms: [] };
    //     }
    // },

};
</script>
