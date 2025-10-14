<template>
    <div>
        <div class="bg-secondary/20 rounded-lg p-6 mb-8">
            <h2 class="text-xl font-semibold text-foreground mb-4">Room Summary</h2>
            <p class="text-muted-foreground" v-if="item.description">{{ item.description }}</p>
        </div>
        <div class="bg-card rounded-lg border border-border p-6 mb-8">
            <h2 class="text-xl font-semibold text-foreground mb-6">About The Room :</h2>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div class="space-y-4">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-house w-4 h-4 text-primary">
                                <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                <path
                                    d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z">
                                </path>
                            </svg><span class="text-muted-foreground">Housing Type</span></div><span class="font-medium"
                            v-if="item.accommodation">{{ item.accommodation?.name }}</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="item.room_types?.name">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-building2 w-4 h-4 text-primary">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg><span class="text-muted-foreground">Room Type</span></div><span class="font-medium">
                            {{ item.room_types?.name }}</span>
                    </div>
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-calendar w-4 h-4 text-primary">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg><span class="text-muted-foreground">Accommodation Type</span></div><span
                            class="font-medium">Monthly</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="item.floor">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-building2 w-4 h-4 text-primary">
                                <path d="M6 22V4a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v18Z"></path>
                                <path d="M6 12H4a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h2"></path>
                                <path d="M18 9h2a2 2 0 0 1 2 2v9a2 2 0 0 1-2 2h-2"></path>
                                <path d="M10 6h4"></path>
                                <path d="M10 10h4"></path>
                                <path d="M10 14h4"></path>
                                <path d="M10 18h4"></path>
                            </svg><span class="text-muted-foreground">Floor</span></div><span class="font-medium">
                            {{ item.floor }}</span>
                    </div>
                </div>
                <div class="space-y-4" v-if="item.area">
                    <div class="flex items-center justify-between">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-maximize w-4 h-4 text-primary">
                                <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                                <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                                <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                                <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                            </svg><span class="text-muted-foreground">Area</span></div><span class="font-medium">
                            {{ item.area }}m²</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="item.housing_fee">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-users w-4 h-4 text-primary">
                                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path>
                                <circle cx="9" cy="7" r="4"></circle>
                                <path d="M22 21v-2a4 4 0 0 0-3-3.87"></path>
                                <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                            </svg><span class="text-muted-foreground">Price</span></div><span class="font-medium">
                            {{ item.housing_fee }} {{ item.currency }}</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="item.available_from">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-calendar w-4 h-4 text-green-600">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg><span class="text-muted-foreground">Available From</span></div><span
                            class="font-medium">{{ item.available_from }}</span>
                    </div>
                    <div class="flex items-center justify-between" v-if="item.available_to">
                        <div class="flex items-center gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                                height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round"
                                class="lucide lucide-calendar w-4 h-4 text-red-600">
                                <path d="M8 2v4"></path>
                                <path d="M16 2v4"></path>
                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                <path d="M3 10h18"></path>
                            </svg><span class="text-muted-foreground">Available To</span></div><span
                            class="font-medium">{{ item.available_to }}</span>
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
