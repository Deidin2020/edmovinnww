<template>
  <main class="flex-1 pt-16">
    <div class="min-h-screen bg-background">
      <div class="bg-white border-b border-border px-4 py-3">
        <div class="max-w-7xl mx-auto flex items-center gap-2">
          <a class="text-muted-foreground hover:text-primary transition-colors" href="/">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
              class="lucide lucide-arrow-left w-4 h-4">
              <path d="m12 19-7-7 7-7"></path>
              <path d="M19 12H5"></path>
            </svg>
          </a>
          <span class="text-muted-foreground">/</span>
          <span class="text-foreground font-medium">{{ $t('cart.breadcrumb_cart') }}</span>
        </div>
      </div>

      <div class="max-w-7xl mx-auto px-4 py-16 text-center">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none"
          stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"
          class="lucide lucide-shopping-cart w-16 h-16 text-muted-foreground mx-auto mb-4">
          <circle cx="8" cy="21" r="1"></circle>
          <circle cx="19" cy="21" r="1"></circle>
          <path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path>
        </svg>

        <h2 class="text-2xl font-semibold text-foreground mb-2">
          {{ $t('cart.empty_title') }}
        </h2>

        <p class="text-muted-foreground mb-8">
          {{ $t('cart.empty_description') }}
        </p>

        <a href="/">
          <button
            class="inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 h-11 rounded-md px-8 bg-primary text-primary-foreground hover:bg-primary/90">
            {{ $t('cart.browse_button') }}
          </button>
        </a>
      </div>
    </div>
  </main>
</template>


<script>
export default {
  data() {
    return {
      cart: []
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
    this.loadCart();
  },
  methods: {
    cleanPrice(value) {
      // تحويل النص $1,958 → 1958
      if (!value) return 0;
      return Number(value.toString().replace(/[^0-9.-]+/g, '')) || 0;
    },
    loadCart() {
      const stored = JSON.parse(localStorage.getItem("cartRooms")) || [];
      this.cart = stored.map(r => ({ ...r, quantity: r.quantity || 1 }));
      this.emitCartCount();
    },
    saveCart() {
      localStorage.setItem("cartRooms", JSON.stringify(this.cart));
      this.emitCartCount();
    },
    emitCartCount() {
      window.dispatchEvent(new CustomEvent("cart-updated", {
        detail: { count: this.cart.length }
      }));
    },
    removeFromCart(index) {
      this.cart.splice(index, 1);
      this.saveCart();
    },
    increaseQty(index) {
      this.cart[index].quantity++;
      this.saveCart();
    },
    decreaseQty(index) {
      if (this.cart[index].quantity > 1) {
        this.cart[index].quantity--;
        this.saveCart();
      }
    }
  }
};
</script>
