<template>
    <main class="flex-1 pt-16">
        <div class="min-h-screen bg-background ltr">
            <!-- Breadcrumb -->
            <div class="bg-white border-b border-border px-4 py-3">
                <div class="max-w-7xl mx-auto flex items-center gap-2">
                    <a class="text-muted-foreground hover:text-primary transition-colors" href="/cart">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-arrow-left w-4 h-4">
                            <path d="m12 19-7-7 7-7"></path>
                            <path d="M19 12H5"></path>
                        </svg>
                    </a>
                    <span class="text-muted-foreground">/</span>
                    <span class="text-foreground font-medium">
                        {{ $t('pages.checkout.breadcrumb_checkout') }}
                    </span>
                </div>
            </div>

            <!-- Checkout Section -->
            <div class="max-w-4xl mx-auto px-4 py-8">
                <div class="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    <SummaryOrder />
                    <div class="lg:col-span-2">
                        <form class="space-y-6">
                            <!-- Payment Method -->
                            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div class="flex flex-col space-y-1.5 p-6">
                                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                                        {{ $t('pages.checkout.payment_method_title') }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground">
                                        {{ $t('pages.checkout.payment_method_description') }}
                                    </p>
                                </div>
                                <PaymentMethod />
                            </div>

                            <!-- Personal Information -->
                            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div class="flex flex-col space-y-1.5 p-6">
                                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                                        {{ $t('pages.checkout.personal_info_title') }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground">
                                        {{ $t('pages.checkout.personal_info_description') }}
                                    </p>
                                </div>
                                <FormCheckout />
                            </div>

                            <!-- Emergency Contact -->
                            <div class="rounded-lg border bg-card text-card-foreground shadow-sm">
                                <div class="flex flex-col space-y-1.5 p-6">
                                    <h3 class="text-2xl font-semibold leading-none tracking-tight">
                                        {{ $t('pages.checkout.emergency_contact_title') }}
                                    </h3>
                                    <p class="text-sm text-muted-foreground">
                                        {{ $t('pages.checkout.emergency_contact_description') }}
                                    </p>
                                </div>
                                <EmergencyContact />
                            </div>

                            <!-- Continue Button -->
                            <button
                                class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 bg-primary text-primary-foreground hover:bg-primary/90 h-11 rounded-md px-8 w-full"
                                type="submit">
                                {{ $t('pages.checkout.continue_button') }}
                            </button>
                        </form>
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
            cart: [],
            paymentMethods: [
                {
                    id: 'pay-bank',
                    label: this.$t('payment_methods.bank_transfer.label'),
                    description: this.$t('payment_methods.bank_transfer.description'),
                }
            ]
        };
    },
    computed: {
        subtotal() {
            return this.cart.reduce((sum, r) => sum + this.cleanPrice(r.price) * r.quantity, 0);
        },
        totalDeposit() {
            return this.cart.reduce((sum, r) => sum + this.cleanPrice(r.deposit) * r.quantity, 0);
        },
        finalTotal() {
            return this.subtotal + this.totalDeposit;
        }
    },
    mounted() {
        const stored = JSON.parse(localStorage.getItem("cartRooms")) || [];
        this.cart = stored.map(r => ({ ...r, quantity: r.quantity || 1 }));
    },
    methods: {
        cleanPrice(value) {
            if (!value) return 0;
            return Number(value.toString().replace(/[^0-9.-]+/g, '')) || 0;
        }
    },
    head() {
        return { title: this.$t('pages.checkout.breadcrumb_checkout') };
    }
};
</script>
<style>
[dir=rtl] .pl-4 {
    padding-right: 1rem;
}
</style>