<template>
    <div role="dialog" id="radix-:r7:" aria-describedby="radix-:r9:" aria-labelledby="radix-:r8:" data-state="open"
        class="fixed z-50 gap-4 bg-background p-6 shadow-lg transition ease-in-out data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:duration-300 data-[state=open]:duration-500 inset-y-0 left-0 h-full border-r data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left w-full sm:max-w-sm"
        tabindex="-1" style="pointer-events: auto;">
        <div class="flex flex-col space-y-2 text-center sm:text-left">
            <h2 id="radix-:r8:" class="text-lg font-semibold text-foreground">Filters</h2>
        </div>
        <div class="space-y-6 mt-6">
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Location</label><button
                    type="button" role="combobox" aria-controls="radix-:rd:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select location</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">City</label><button
                    type="button" role="combobox" aria-controls="radix-:re:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select city</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Reservation
                    Type</label><button type="button" role="combobox" aria-controls="radix-:rf:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select type</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Room
                    Type</label><button type="button" role="combobox" aria-controls="radix-:rg:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select room type</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Gender</label><button
                    type="button" role="combobox" aria-controls="radix-:rh:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select gender</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">University
                    Name</label><button type="button" role="combobox" aria-controls="radix-:ri:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select university</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="space-y-2"><label
                    class="peer-disabled:cursor-not-allowed peer-disabled:opacity-70 text-sm font-medium">Price
                    Range</label><button type="button" role="combobox" aria-controls="radix-:rj:" aria-expanded="false"
                    aria-autocomplete="none" dir="ltr" data-state="closed" data-placeholder=""
                    class="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 [&amp;&gt;span]:line-clamp-1"><span
                        style="pointer-events: none;">Select price range</span><svg xmlns="http://www.w3.org/2000/svg"
                        width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                        stroke-linecap="round" stroke-linejoin="round"
                        class="lucide lucide-chevron-down h-4 w-4 opacity-50" aria-hidden="true">
                        <path d="m6 9 6 6 6-6"></path>
                    </svg></button></div>
            <div class="pt-4 space-y-2"><button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">Apply
                    Filters</button><button
                    class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full">Clear
                    All</button></div>
        </div><button type="button"
            class="absolute right-4 top-4 rounded-sm opacity-70 ring-offset-background transition-opacity data-[state=open]:bg-secondary hover:opacity-100 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:pointer-events-none"><svg
                xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                class="lucide lucide-x h-4 w-4">
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
            </svg><span class="sr-only">Close</span></button>
    </div>
</template>