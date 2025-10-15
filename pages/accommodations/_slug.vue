<template>
    <main class="flex-1 pt-16">
        <div class="min-h-screen bg-background">
            <main class="container mx-auto px-4 py-8">
                <div class="mb-8">
                    <h1 class="text-4xl font-bold text-primary mb-4" v-if="item.name">{{ item.name }}</h1>
                    <div class="flex flex-col gap-2 mb-6">
                        <div class="flex items-center gap-2 text-muted-foreground"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg><span>{{ item.address }}</span></div>
                    </div><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 h-10 bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-2">Apply
                        Now</button>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-8">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight text-primary">About</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <p class="text-muted-foreground mb-6">{{ item.description }}</p>
                        <RoomImageGallery :images="item.images" :image="item.image" />
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-8">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight text-primary">Facilities</h3>
                    </div>
                    <div class="p-6 pt-0">
                        <div class="grid grid-cols-6 md:grid-cols-6 gap-4">
                            <div class="flex flex-col items-center text-center p-4"
                                v-for="(facility, index) in item.facilities" :key="index">
                                <div class="p-3 rounded-full mb-2 bg-green-100 text-green-700">
                                    <span class="text-sm font-medium text-foreground"> {{ facility.name }}</span>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
                <div class="rounded-lg border bg-card text-card-foreground shadow-sm mb-8">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight text-primary">Reservation Types
                        </h3>
                    </div>
                    <div class="p-6 pt-0">
                        <div class="grid grid-cols-2 md:grid-cols-4 gap-3">
                            <div v-for="(data, index) in item.genders" :key="index"
                                class="inline-flex items-center rounded-full border px-2.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent justify-center py-2 bg-secondary/50 text-secondary-foreground hover:bg-secondary/70">
                                {{ data.name }}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="rounded-lg border text-card-foreground shadow-sm bg-primary/10 border-primary/20">
                    <div class="flex flex-col space-y-1.5 p-6">
                        <h3 class="text-2xl font-semibold leading-none tracking-tight text-primary">Nearest Universities
                            To The Residence</h3>
                    </div>
                    <div class="p-6 pt-0" v-for="(data, index) in item.transportRooms" :key="index">
                        <div class="rounded-lg border text-card-foreground shadow-sm bg-white border-primary/10">
                            <div class="p-4">
                                <div style="display: flex;justify-content: space-between;">
                                    <div class="flex items-center gap-3">
                                        <div
                                            class="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                                            <img :src="data.university?.logo" :alt="data.university?.name">
                                        </div>
                                        <div>
                                            <h4 class="font-semibold text-foreground">{{ data.university?.name }}</h4>
                                            <p class="text-sm text-muted-foreground">{{ data.university?.country_title
                                            }}
                                            </p>
                                        </div>
                                    </div>

                                    <div>
                                        <p style="color: #36594d;">
                                            {{ data.name }}
                                        </p>
                                        <p style="color: #778c85;">
                                            {{ data.duration }}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <RoomSwiper v-if="rooms && rooms.length" :items="rooms" :title="$t('Similar_Room')"
                    titleClass="title-style-2" />
            </main>
        </div>
    </main>
</template>
<script>
export default {
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
                const { data } = await this.$axios.get(`/api/accommodations/${slug}`);
                this.item = data.result?.accommodation || {};

                const res = await this.$axios.get('/api/rooms');
                this.rooms = res.data.result?.item?.map(r => formatRoomData(r, this.$i18n.locale)) || [];
            } catch (err) {
                this.rooms = [];
            }
        },
    },
    // async asyncData({ redirect, $axios, params }) {
    //     try {
    //         const slug = encodeURIComponent(params.slug);

    //         const { data } = await $axios.get(`/api/accommodations/${slug}`)
    //         const item = data.result.accommodation || {}

    //         let rooms = [];

    //         try {
    //             const res = await $axios.get('/api/rooms');
    //             rooms = res.data.result?.item || [];
    //             rooms = rooms.map(data => formatRoomData(data, locale));
    //         } catch (e) {
    //         }
    //         return { item, rooms };
    //     } catch (error) {
    //         return { item: {} };
    //     }
    // },
};
</script>
