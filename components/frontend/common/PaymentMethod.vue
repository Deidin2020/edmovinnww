<template>
    <div class="p-6 pt-0">
        <div class="space-y-2">
            <div role="radiogroup" aria-required="false" dir="ltr" class="grid gap-2 space-y-4">

                <!-- Pay at Property -->
                <div class="space-y-3 border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div class="flex items-center space-x-3">
                        <button type="button" role="radio" :aria-checked="selectedPayment === 'property'"
                            @click="selectPayment('property')" :class="[
                                'aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                selectedPayment === 'property' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'
                            ]">
                            <span v-if="selectedPayment === 'property'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                            </span>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-building w-5 h-5 text-muted-foreground">
                            <rect width="16" height="20" x="4" y="2" rx="2" ry="2"></rect>
                            <path d="M9 22v-4h6v4"></path>
                            <path d="M8 6h.01"></path>
                            <path d="M16 6h.01"></path>
                            <path d="M12 6h.01"></path>
                            <path d="M12 10h.01"></path>
                            <path d="M12 14h.01"></path>
                            <path d="M16 10h.01"></path>
                            <path d="M16 14h.01"></path>
                            <path d="M8 10h.01"></path>
                            <path d="M8 14h.01"></path>
                        </svg>
                        <label class="flex-1 cursor-pointer">
                            <div class="font-medium">Pay at Property</div>
                            <div class="text-sm text-muted-foreground">Pay when you arrive at the accommodation</div>
                        </label>
                    </div>

                    <div v-if="selectedPayment === 'property'" class="ml-8 pl-4 border-l-2 border-muted space-y-2">
                        <div role="alert" class="relative w-full rounded-lg border p-4 bg-background text-foreground">
                            <h5 class="mb-1 font-medium leading-none tracking-tight">Payment Instructions</h5>
                            <div class="text-sm [&_p]:leading-relaxed">
                                Please visit the accommodation and complete your payment within <strong>48
                                    hours</strong> of booking. Bring a valid ID and your booking confirmation email.
                            </div>
                        </div>
                    </div>
                </div>

                <!-- Credit Card -->
                <div class="space-y-3 border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div class="flex items-center space-x-3">
                        <button type="button" role="radio" :aria-checked="selectedPayment === 'credit'"
                            @click="selectPayment('credit')" :class="[
                                'aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                selectedPayment === 'credit' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'
                            ]">
                            <span v-if="selectedPayment === 'credit'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                            </span>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-credit-card w-5 h-5 text-muted-foreground">
                            <rect width="20" height="14" x="2" y="5" rx="2"></rect>
                            <line x1="2" x2="22" y1="10" y2="10"></line>
                        </svg>
                        <label class="flex-1 cursor-pointer">
                            <div class="font-medium">Credit Card</div>
                            <div class="text-sm text-muted-foreground">Pay securely with your credit card</div>
                        </label>
                    </div>

                    <div v-if="selectedPayment === 'credit'" class="ml-8 pl-4 border-l-2 border-muted space-y-3">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="cc-holder">Cardholder Name</label>
                                <input id="cc-holder" placeholder="Name on card" class="input" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="cc-number">Card Number</label>
                                <input id="cc-number" placeholder="1234 5678 9012 3456" class="input" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="cc-exp">Expiry (MM/YY)</label>
                                <input id="cc-exp" placeholder="MM/YY" class="input" />
                            </div>
                            <div class="space-y-2">
                                <label class="text-sm font-medium" for="cc-cvc">CVC</label>
                                <input id="cc-cvc" placeholder="123" class="input" />
                            </div>
                        </div>
                        <div role="alert" class="border rounded-lg p-4 border-destructive text-destructive">
                            <h5 class="mb-1 font-medium">Demo Notice</h5>
                            <div class="text-sm">This form collects card details for demonstration only and does not
                                process real payments.</div>
                        </div>
                    </div>
                </div>

                <!-- Bank Transfer -->
                <div class="space-y-3 border rounded-lg p-4 hover:bg-secondary/50 transition-colors">
                    <div class="flex items-center space-x-3">
                        <button type="button" role="radio" :aria-checked="selectedPayment === 'bank'"
                            @click="selectPayment('bank')" :class="[
                                'aspect-square h-4 w-4 rounded-full border ring-offset-background focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2',
                                selectedPayment === 'bank' ? 'border-primary text-primary' : 'border-muted-foreground text-muted-foreground'
                            ]">
                            <span v-if="selectedPayment === 'bank'">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                    stroke-linejoin="round"
                                    class="lucide lucide-circle h-2.5 w-2.5 fill-current text-current">
                                    <circle cx="12" cy="12" r="10"></circle>
                                </svg>
                            </span>
                        </button>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
                            class="lucide lucide-banknote w-5 h-5 text-muted-foreground">
                            <rect width="20" height="12" x="2" y="6" rx="2"></rect>
                            <circle cx="12" cy="12" r="2"></circle>
                            <path d="M6 12h.01M18 12h.01"></path>
                        </svg>
                        <label class="flex-1 cursor-pointer">
                            <div class="font-medium">Bank Transfer</div>
                            <div class="text-sm text-muted-foreground">Transfer directly to our bank account</div>
                        </label>
                    </div>

                    <div v-if="selectedPayment === 'bank'" class="ml-8 pl-4 border-l-2 border-muted space-y-3">
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
                            <div><span class="text-muted-foreground">Bank Name</span>
                                <div class="font-medium">Ziraat Bankası</div>
                            </div>
                            <div><span class="text-muted-foreground">Account Name</span>
                                <div class="font-medium">MovInn Accommodation LTD</div>
                            </div>
                            <div class="md:col-span-2"><span class="text-muted-foreground">IBAN</span>
                                <div class="font-mono text-xs tracking-wide select-all bg-secondary/20 p-2 rounded">TR12
                                    3456 7890 1234 5678 9012 34</div>
                            </div>
                            <div><span class="text-muted-foreground">SWIFT/BIC</span>
                                <div class="font-medium">TCZBTR2A</div>
                            </div>
                        </div>
                        <div class="space-y-2">
                            <label class="text-sm font-medium" for="receipt">Upload Transfer Receipt
                                (JPG/PNG/PDF)</label>
                            <input type="file" id="receipt" accept="image/*,application/pdf" class="input" />
                        </div>
                        <div role="alert" class="border rounded-lg p-4 bg-background text-foreground mt-2">
                            <h5 class="mb-1 font-medium">Important Note</h5>
                            <div class="text-sm [&_p]:leading-relaxed">Include your full name and booking email as the
                                transfer reference. We will verify payment within 24 hours.</div>
                        </div>
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
            selectedPayment: 'property', // القيمة الافتراضية
        }
    },
    methods: {
        selectPayment(method) {
            this.selectedPayment = method; // بدون .value
        }
    }
};
</script>

<style>
.input {
    flex: 1;
    height: 2.5rem;
    width: 100%;
    border: 1px solid #d1d5db;
    border-radius: 0.375rem;
    padding: 0.5rem 0.75rem;
    background-color: #fff;
    color: #111827;
    font-size: 0.875rem;
}
</style>
