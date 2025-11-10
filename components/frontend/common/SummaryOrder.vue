<template>
    <div class="lg:col-span-1">
        <div class="rounded-lg border bg-card text-card-foreground shadow-sm">

            <!-- Header -->
            <div class="flex flex-col space-y-1.5 p-6 border-b">
                <h3 class="text-2xl font-semibold leading-none tracking-tight"> {{ $t('cart.Order Summary') }}</h3>
            </div>

            <!-- Rooms list -->
            <div class="p-6 space-y-4">
                <div class="flex justify-between items-start text-sm border-b pb-4" v-for="room in cart" :key="room.id">
                    <div class="flex-1 space-y-1">
                        <p class="font-medium">{{ room.name }} - {{ room.accommodation }}</p>
                        <p class="text-muted-foreground text-xs">{{ room.location ?? '' }}</p>
                        <p class="text-xs">Qty: {{ room.quantity }}</p>
                        <p v-if="room.price?.deposit" class="text-xs text-muted">
                            {{ $t('cart.Deposit') }}:{{ room.price?.currency }} {{ room.price?.deposit }}
                        </p>
                    </div>
                    <div class="text-right font-medium">
                        <p>{{ room.price?.currency }} {{ room.price?.price }} x {{ room.quantity }}</p>
                        <p v-if="room.price?.deposit">{{ $t('cart.Subtotal') }}: {{ room.price?.currency }} {{
                            (cleanPrice(room.price?.price) + cleanPrice(room.price?.deposit)) * room.quantity }}</p>
                    </div>
                </div>

                <div class="pt-4">
                    <div class="flex justify-between font-bold text-lg border-t pt-4">
                        <span>{{ $t('cart.Total') }}:</span>
                        <span class="text-primary">{{ finalTotal }} {{ cart[0]?.price?.currency ?? '' }}</span>
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
            cart: [],
        };
    },
    computed: {
        finalTotal() {
            return this.cart.reduce((sum, room) => {
                const price = this.cleanPrice(room.price?.price);
                const deposit = this.cleanPrice(room.price?.deposit);
                return sum + (price + deposit) * room.quantity;
            }, 0);
        },
    },
    mounted() {
        this.loadCart();
    },
    methods: {
        cleanPrice(value) {
            if (!value) return 0;
            return Number(value.toString().replace(/[^0-9.-]+/g, '')) || 0;
        },
        loadCart() {
            const stored = JSON.parse(localStorage.getItem('cartRooms')) || [];
            this.cart = stored.map((room) => ({ ...room, quantity: room.quantity || 1 }));
        },
    },
};
</script>

<style scoped>
.border-b {
    border-bottom: 1px solid #e5e7eb;
}

.text-muted {
    color: #6b7280;
}

.text-primary {
    color: #3b82f6;
    font-weight: 600;
}

.space-y-1> :not(:first-child) {
    margin-top: 0.25rem;
}

.space-y-4> :not(:first-child) {
    margin-top: 1rem;
}
</style>
