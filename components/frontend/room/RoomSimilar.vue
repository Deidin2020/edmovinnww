<template>
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <div
            class="rounded-lg border bg-card text-card-foreground shadow-sm overflow-hidden hover:shadow-lg transition-shadow duration-300">
            <div class="relative"><img src="/assets/room2-De7teWo2.jpg" alt="Room 4 in Accommodation 7"
                    class="w-full h-40 sm:h-48 object-cover">
                <div
                    class="inline-flex items-center rounded-full border px-2.5 py-0.5 font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-primary/80 absolute top-2 left-2 text-xs bg-accommodation-female text-accommodation-female-text">
                    Females accommodation</div>
            </div>
            <div class="p-3 sm:p-4">
                <h3 class="font-semibold text-base sm:text-lg mb-2 sm:mb-3 line-clamp-2">Room 4 in
                    Accommodation 7</h3>
                <div class="grid grid-cols-1 sm:grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                    <div class="flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                            viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-map-pin w-3 h-3 sm:w-4 sm:h-4 text-muted-foreground flex-shrink-0">
                            <path
                                d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0">
                            </path>
                            <circle cx="12" cy="10" r="3"></circle>
                        </svg><span class="text-muted-foreground text-xs">Location</span></div>
                    <div class="flex items-center gap-1 sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-maximize w-3 h-3 text-muted-foreground flex-shrink-0">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                            <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                        </svg><span class="text-muted-foreground text-xs">Size</span></div>
                    <div class="flex items-center gap-1 sm:hidden"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-calendar w-3 h-3 text-green-600 flex-shrink-0">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg><span class="text-green-600 text-xs">Available From</span></div>
                    <div class="font-medium text-sm">Downtown Campus</div>
                    <div class="hidden sm:flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-maximize w-4 h-4 text-muted-foreground">
                            <path d="M8 3H5a2 2 0 0 0-2 2v3"></path>
                            <path d="M21 8V5a2 2 0 0 0-2-2h-3"></path>
                            <path d="M3 16v3a2 2 0 0 0 2 2h3"></path>
                            <path d="M16 21h3a2 2 0 0 0 2-2v-3"></path>
                        </svg><span class="text-muted-foreground">Size</span></div>
                    <div class="hidden sm:flex items-center gap-1"><svg xmlns="http://www.w3.org/2000/svg" width="24"
                            height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                            stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-calendar w-4 h-4 text-green-600">
                            <path d="M8 2v4"></path>
                            <path d="M16 2v4"></path>
                            <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                            <path d="M3 10h18"></path>
                        </svg><span class="text-green-600">Available From</span></div>
                    <div class="font-medium text-sm sm:hidden">20 sqm</div>
                    <div class="font-medium text-sm sm:hidden">Sep 5, 2024</div>
                    <div class="hidden sm:block font-medium">20 sqm</div>
                    <div class="hidden sm:block font-medium">Sep 5, 2024</div>
                </div>
                <div class="grid grid-cols-3 gap-2 sm:gap-4 mb-3 sm:mb-4 text-xs sm:text-sm">
                    <div><span class="text-muted-foreground block text-xs">Price</span><span
                            class="font-bold text-base sm:text-lg">$750/month</span></div>
                    <div><span class="text-muted-foreground block text-xs">Deposit</span><span
                            class="font-medium text-sm">$375</span></div>
                    <div><span class="text-muted-foreground block text-xs">Contract</span><span
                            class="font-medium text-sm truncate">Monthly</span></div>
                </div>
                <div class="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    <div
                        class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-amenity-tag text-amenity-text text-xs px-2 py-1">
                        WiFi</div>
                    <div
                        class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-amenity-tag text-amenity-text text-xs px-2 py-1">
                        Desk</div>
                    <div
                        class="inline-flex items-center rounded-full border font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent hover:bg-secondary/80 bg-amenity-tag text-amenity-text text-xs px-2 py-1">
                        Shared Kitchen</div>
                </div>
                <div class="flex flex-col sm:flex-row gap-2"><a class="flex-1" href="/room/2"><button
                            class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-9 rounded-md px-3 w-full text-xs sm:text-sm">See
                            More</button></a><button
                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3 flex-1 text-xs sm:text-sm">Book
                        Now</button></div>
            </div>
        </div>
    </div>
</template>