<template>
    <main class="flex-1 pt-16">
        <div class="min-h-screen bg-background flex items-center justify-center p-4">
            <div class="rounded-lg border bg-card text-card-foreground shadow-sm w-full max-w-md">
                <div class="flex flex-col space-y-1.5 p-6 text-center">
                    <h3 class="tracking-tight text-2xl font-bold">{{ $t('auth.welcome') }}</h3>
                    <p class="text-sm text-muted-foreground">{{ $t('auth.subtitle') }}</p>
                </div>

                <div class="p-6 pt-0">
                    <div dir="ltr" class="space-y-4">
                        <!-- Tabs -->
                        <div role="tablist" aria-orientation="horizontal"
                            class="h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground grid w-full grid-cols-2">
                            <button type="button" role="tab" :aria-selected="activeTab === 'signin'"
                                :aria-controls="'tabpanel-signin'"
                                :data-state="activeTab === 'signin' ? 'active' : 'inactive'" :id="'trigger-signin'"
                                @click="activeTab = 'signin'" :tabindex="activeTab === 'signin' ? 0 : -1"
                                class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                {{ $t('auth.sign_in') }}
                            </button>

                            <button type="button" role="tab" :aria-selected="activeTab === 'signup'"
                                :aria-controls="'tabpanel-signup'"
                                :data-state="activeTab === 'signup' ? 'active' : 'inactive'" :id="'trigger-signup'"
                                @click="activeTab = 'signup'" :tabindex="activeTab === 'signup' ? 0 : -1"
                                class="inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50">
                                {{ $t('auth.sign_up') }}
                            </button>
                        </div>

                        <!-- Sign In Panel -->
                        <div role="tabpanel" :aria-labelledby="'trigger-signin'" id="tabpanel-signin" tabindex="0"
                            v-show="activeTab === 'signin'"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <div class="space-y-4">
                                <form class="space-y-4" @submit.prevent="onSubmit('signin')">
                                    <!-- method chooser (Email / Phone) -->
                                    <div class="space-y-2">
                                        <label class="text-sm font-medium leading-none">{{ $t('auth.sign_in_with')
                                            }}</label>
                                        <div class="flex rounded-md border overflow-hidden">
                                            <button type="button"
                                                :class="['inline-flex items-center justify-center gap-2 flex-1 px-4 py-2 h-10', method === 'email' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent']"
                                                @click="method = 'email'" aria-pressed="true">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-mail h-4 w-4 mr-2">
                                                    <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                                </svg>
                                                {{ $t('auth.email') }}
                                            </button>

                                            <button type="button"
                                                :class="['inline-flex items-center justify-center gap-2 flex-1 px-4 py-2 h-10', method === 'phone' ? 'bg-primary text-primary-foreground' : 'hover:bg-accent']"
                                                @click="method = 'phone'" aria-pressed="false">
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                    viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                                                    class="lucide lucide-phone h-4 w-4 mr-2">
                                                    <path
                                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72">
                                                    </path>
                                                </svg>
                                                {{ $t('auth.phone') }}
                                            </button>
                                        </div>
                                    </div>

                                    <!-- Email fields -->
                                    <div v-show="method === 'email'">
                                        <div class="space-y-2">
                                            <label for="identifier" class="text-sm font-medium leading-none">{{
                                                $t('auth.email_address') }}</label>
                                            <input v-model="form.email" type="email" id="identifier" name="email"
                                                :placeholder="$t('auth.email_placeholder')" required
                                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                        </div>

                                        <div class="space-y-2">
                                            <label for="password" class="text-sm font-medium leading-none">{{
                                                $t('auth.password') }}</label>
                                            <div class="relative">
                                                <input v-model="form.password" type="password" id="password"
                                                    name="password" :placeholder="$t('auth.password_placeholder')"
                                                    required
                                                    class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                                <button type="button" @click="toggleShowPassword"
                                                    class="absolute right-0 top-0 h-full px-3 py-2">
                                                    <svg v-if="!showPassword" xmlns="http://www.w3.org/2000/svg"
                                                        class="h-4 w-4" viewBox="0 0 24 24" fill="none"
                                                        stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                                        stroke-linejoin="round">
                                                        <path
                                                            d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0">
                                                        </path>
                                                        <circle cx="12" cy="12" r="3"></circle>
                                                    </svg>
                                                    <svg v-else xmlns="http://www.w3.org/2000/svg" class="h-4 w-4"
                                                        viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                        stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                                        <path
                                                            d="M17.94 17.94A10.94 10.94 0 0 1 12 19c-4.97 0-9.5-3.2-11-8 1.08-3.14 3.37-5.64 6.42-6.9">
                                                        </path>
                                                    </svg>
                                                </button>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- Phone fields -->
                                    <div v-show="method === 'phone'">
                                        <div class="space-y-2">
                                            <label for="phoneInput" class="text-sm font-medium leading-none">{{
                                                $t('auth.phone_number') }}</label>
                                            <input v-model="form.phone" type="tel" id="phoneInput" name="phone"
                                                :placeholder="$t('auth.phone_placeholder')" required
                                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                        </div>

                                        <div class="space-y-2">
                                            <label for="pin" class="text-sm font-medium leading-none">
                                                {{ $t('auth.pin') }}</label>
                                            <input v-model="form.pin" type="text" id="pin" name="pin"
                                                :placeholder="$t('auth.pin_placeholder')"
                                                class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                        </div>
                                    </div>

                                    <div class="flex justify-end">
                                        <button type="button"
                                            class="underline-offset-4 hover:underline py-2 px-0 h-auto text-sm text-muted-foreground"
                                            @click.prevent="onForgot">
                                            {{ $t('auth.forgot_password') }}
                                        </button>
                                    </div>

                                    <button type="submit"
                                        class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                                        {{ $t('auth.sign_in') }}
                                    </button>
                                </form>

                                <div class="relative">
                                    <div class="absolute inset-0 flex items-center">
                                        <div class="shrink-0 bg-border h-[1px] w-full"></div>
                                    </div>
                                    <div class="relative flex justify-center text-xs uppercase">
                                        <span class="bg-background px-2 text-muted-foreground">{{
                                            $t('auth.or_continue') }}</span>
                                    </div>
                                </div>

                                <button
                                    class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium border border-input bg-background hover:bg-accent hover:text-accent-foreground h-10 px-4 py-2 w-full"
                                    type="button">
                                    <svg class="h-4 w-4 mr-2" viewBox="0 0 24 24"> ... </svg>
                                    {{ $t('auth.sign_in_with_google') }}
                                </button>
                            </div>
                        </div>

                        <!-- Sign Up Panel -->
                        <div role="tabpanel" :aria-labelledby="'trigger-signup'" id="tabpanel-signup" tabindex="0"
                            v-show="activeTab === 'signup'"
                            class="mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
                            <div class="space-y-4">
                                <form class="space-y-4" @submit.prevent="onSubmit('signup')">
                                    <div class="space-y-2">
                                        <label for="signupName" class="text-sm font-medium leading-none">{{
                                            $t('auth.full_name') }}</label>
                                        <input v-model="form.name" id="signupName" name="name" type="text"
                                            :placeholder="$t('auth.full_name_placeholder')" required
                                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signupEmail" class="text-sm font-medium leading-none">{{
                                            $t('auth.email_address') }}</label>
                                        <input v-model="form.email" id="signupEmail" name="email" type="email"
                                            :placeholder="$t('auth.email_placeholder')" required
                                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                    </div>

                                    <div class="space-y-2">
                                        <label for="signupPassword" class="text-sm font-medium leading-none">{{
                                            $t('auth.password') }}</label>
                                        <input v-model="form.password" id="signupPassword" name="password"
                                            type="password" :placeholder="$t('auth.password_placeholder')" required
                                            class="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2" />
                                    </div>

                                    <button type="submit"
                                        class="inline-flex items-center justify-center gap-2 rounded-md text-sm font-medium bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full">
                                        {{ $t('auth.sign_up') }}
                                    </button>
                                </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
export default {
    data() {
        return {
            activeTab: 'signin', // 'signin' or 'signup'
            method: 'email', // 'email' or 'phone' for sign in
            showPassword: false,
            form: {
                // shared/simple example model
                email: '',
                password: '',
                phone: '',
                pin: '',
                name: ''
            }
        };
    },
    methods: {
        toggleShowPassword() {
            this.showPassword = !this.showPassword;
            // switch input type for password field
            const passInput = this.$el.querySelector('#password');
            if (passInput) {
                passInput.type = this.showPassword ? 'text' : 'password';
            }
        },
        onForgot() {
            // your forgot-password flow
            alert('Forgot password clicked');
        },
        onSubmit(mode) {
            // example submission handler — استبدلي بمنطق ال API تبعك
            if (mode === 'signin') {
                if (this.method === 'email') {
                    // call sign-in by email
                    console.log('Sign in by email', this.form.email, this.form.password);
                } else {
                    // call sign-in by phone
                    console.log('Sign in by phone', this.form.phone, this.form.pin);
                }
            } else if (mode === 'signup') {
                console.log('Sign up', this.form.name, this.form.email, this.form.password);
            }
        }
    }
};
</script>
