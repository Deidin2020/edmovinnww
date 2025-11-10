<template>
        <div class="p-6 pt-0 space-y-4">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-2">
                                <label class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":rh:-form-item">First Name</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="Enter your first name" name="firstName" id=":rh:-form-item"
                                        aria-describedby=":rh:-form-item-description" aria-invalid="false" value="">
                        </div>
                        <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":ri:-form-item">Last Name</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="Enter your last name" name="lastName" id=":ri:-form-item"
                                        aria-describedby=":ri:-form-item-description" aria-invalid="false" value="">
                        </div>
                </div>
                <div class="space-y-2"><label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for=":rj:-form-item">Email Address</label><input type="email"
                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                placeholder="Enter your email address" name="email" id=":rj:-form-item"
                                aria-describedby=":rj:-form-item-description" aria-invalid="false" value="">
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":rk:-form-item">Mobile Number</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="Enter your mobile number" name="mobile" id=":rk:-form-item"
                                        aria-describedby=":rk:-form-item-description" aria-invalid="false" value="">
                        </div>
                        <div class="space-y-2 flex flex-col"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":rl:-form-item">Date of Birth</label><button
                                        class="inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&amp;_svg]:pointer-events-none [&amp;_svg]:size-4 [&amp;_svg]:shrink-0 border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full pl-3 text-left font-normal text-muted-foreground"
                                        id=":rl:-form-item" aria-describedby=":rl:-form-item-description"
                                        aria-invalid="false" type="button" aria-haspopup="dialog" aria-expanded="false"
                                        aria-controls="radix-:rm:" data-state="closed"><span>Pick a date</span><svg
                                                xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                                stroke-linecap="round" stroke-linejoin="round"
                                                class="lucide lucide-calendar ml-auto h-4 w-4 opacity-50">
                                                <path d="M8 2v4"></path>
                                                <path d="M16 2v4"></path>
                                                <rect width="18" height="18" x="3" y="4" rx="2"></rect>
                                                <path d="M3 10h18"></path>
                                        </svg></button></div>
                </div>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":rn:-form-item">University Name</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="Enter your university name" name="universityName"
                                        id=":rn:-form-item" aria-describedby=":rn:-form-item-description"
                                        aria-invalid="false" value=""></div>
                        <div class="space-y-2"><label
                                        class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                        for=":ro:-form-item">Nationality</label><input
                                        class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
                                        placeholder="Enter your nationality" name="nationality" id=":ro:-form-item"
                                        aria-describedby=":ro:-form-item-description" aria-invalid="false" value="">
                        </div>
                </div>
                <div class="space-y-2"><label
                                class="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                for=":rp:-form-item">Address</label><textarea
                                class="flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 resize-none"
                                placeholder="Enter your full address" name="address" id=":rp:-form-item"
                                aria-describedby=":rp:-form-item-description" aria-invalid="false"></textarea></div>
        </div>
</template>