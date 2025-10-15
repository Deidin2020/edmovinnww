<template>
    <a class="block hover:scale-105 transition-transform duration-200"
        :href="localePath('/accommodations/' + accommodation.slug)">
        <div
            class="rounded-lg border text-card-foreground shadow-sm bg-card border-border hover:shadow-lg transition-shadow duration-200">
            <div class="p-4">
                <div class="flex items-center gap-4">
                    <div class="w-20 h-20 rounded-lg overflow-hidden flex-shrink-0">
                        <img :src="accommodation.image" alt="Student Accommodation 1"
                            class="w-full h-full object-cover">
                    </div>
                    <div class="flex-1">
                        <div class="flex items-start justify-between mb-2">
                            <h3 class="text-lg font-semibold text-foreground mb-1 flex-1"> {{ accommodation.name }}</h3>
                            <!-- <div
                                class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 bg-accommodation-mixed text-accommodation-mixed-text ml-2 capitalize text-xs">
                                mixed</div> -->
                        </div>
                        <div class="flex items-center gap-1 text-primary font-medium mb-1"><svg
                                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                stroke-linejoin="round" class="lucide lucide-map-pin w-4 h-4">
                                <path
                                    d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                                </path>
                                <circle cx="12" cy="10" r="3"></circle>
                            </svg><span> {{ accommodation.state }} </span></div>
                        <!-- <p class="text-sm text-muted-foreground">Küçükcekmece</p> -->
                    </div>
                </div>
            </div>
        </div>
    </a>
</template>
<script>
export default {
    props: {
        accommodation: Object,
    },
};
</script>
