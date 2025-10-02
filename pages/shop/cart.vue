<template>
  <div id="main-wrapper" class="main-wrapper">
    <section class="cart-page-area edu-section-gap">
      <div class="container">
        <!-- Table -->
        <div class="table-responsive" v-if="cart.length">
          <table class="table cart-table">
            <thead>
              <tr>
                <th class="product-remove"></th>
                <th>Accommodation / Location</th>
                <th>Price</th>
                <th>Deposit</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
            </thead>

            <tbody>
              <tr v-for="(room, index) in cart" :key="room.id">
                <!-- Remove -->
                <td class="product-remove">
                  <a href="#" @click.prevent="removeFromCart(index)">
                    <i class="icon-73"></i>
                  </a>
                </td>

                <!-- Info -->
                <td class="product-title d-flex align-center gap-2">
                  <img :src="room.image" alt="room.name" width="60" style="width: 80px;height: 80px;" />
                  <div style="
                  display: flex;
    flex-direction: column;
    align-items: flex-start;
">

                    <span>{{ room.name }}</span>
                    <span style="
    font-size: 15px;
    font-weight: 500;
    font-style: italic;
">{{ room.accommodation?.state }}</span>

                  </div>
                </td>
                <td>${{ cleanPrice(room.price) }}</td>
                <td>${{ cleanPrice(room.deposit) }}</td>
                <!-- Quantity -->
                <td>
                  <div class="pro-qty d-flex gap-1 justify-center items-center">
                    <button @click="decreaseQty(index)">-</button>
                    <input type="text" v-model.number="room.quantity" readonly />
                    <button @click="increaseQty(index)">+</button>
                  </div>
                </td>

                <!-- Total -->
                <td>${{ (cleanPrice(room.price) + cleanPrice(room.deposit)) * room.quantity }}</td>
              </tr>
            </tbody>
          </table>
        </div>

        <!-- Empty Cart -->
        <div v-else class="text-center py-5">
          <h4>Your cart is empty</h4>
        </div>

        <!-- Summary -->
        <div class="row mt-4" v-if="cart.length">
          <div class="col-xl-5 col-lg-7 offset-xl-7 offset-lg-5">
            <div class="order-summary p-4 rounded shadow">
              <h4 class="title mb-3">Booking Summary</h4>
              <table class="table summery-table">
                <tbody>
                  <tr>
                    <td>Rooms Cost</td>
                    <td class="text-end">${{ subtotal }}</td>
                  </tr>
                  <tr>
                    <td>Total Deposit</td>
                    <td class="text-end">${{ totalDeposit }}</td>
                  </tr>
                  <tr class="order-total fw-bold">
                    <td>Final Total</td>
                    <td class="text-end">${{ finalTotal }}</td>
                  </tr>
                </tbody>
              </table>
              <a :href="localePath('/shop/checkout')" class="edu-btn btn-medium checkout-btn w-100 mt-3">
                Proceed to Checkout <i class="icon-4"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
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
