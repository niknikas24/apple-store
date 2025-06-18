<template>
  <section v-if="cartItems.length > 0" class="summary">
    <h2 class="order-summary">Order Summary</h2>
    <div class="content">
      <div class="summary-block">
        <div class="input-fields">
          <InputStore v-model="discountCode" placeholder="Code" label="Discount code / Promo code" />
          <InputStore
            v-model="bonusCard"
            placeholder="Enter Card Number"
            label="Your bonus card number"
            buttonTitle="Apply"
          />
        </div>

        <div class="prices">
          <div class="price-row subtotal">
            <span class="price-label">Subtotal</span>
            <span class="price-amount">${{ subtotal.toFixed(2) }}</span>
          </div>

          <div class="taxes">
            <div class="price-row">
              <span class="price-label secondary">Estimated Tax</span>
              <span class="price-amount">${{ estimatedTax.toFixed(2) }}</span>
            </div>
            <div class="price-row">
              <span class="price-label secondary">Estimated shipping & Handling</span>
              <span class="price-amount">${{ estimatedShipping.toFixed(2) }}</span>
            </div>
          </div>

          <div class="price-row total">
            <span class="price-label">Total</span>
            <span class="price-amount">${{ total.toFixed(2) }}</span>
          </div>
        </div>
      </div>
      <ButtonStore class="checkout-button" @click="handleCheckout">Checkout</ButtonStore>
    </div>
  </section>
  <SuccessModal :isVisible="showSuccessModal" @close="showSuccessModal = false" />
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import { useOrder } from "@/hooks/useOrder";
import InputStore from "../components/UI/InputStore.vue";
import SuccessModal from "@/components/SuccessModal.vue";

export default defineComponent({
  name: "OrderSummary",
  components: { InputStore, SuccessModal },
  setup() {
    const {
      discountCode,
      bonusCard,
      total,
      estimatedTax,
      estimatedShipping,
      subtotal,
      handleCheckout,
      cartItems,
      showSuccessModal
    } = useOrder();

    return {
      discountCode,
      bonusCard,
      total,
      estimatedTax,
      estimatedShipping,
      subtotal,
      handleCheckout,
      cartItems,
      showSuccessModal,
    };
  },
});
</script>

<style scoped>
.summary {
  border-radius: 10px;
  border-color: rgba(235, 235, 235, 1);
  border-style: solid;
  border-width: 1px;
  width: 50%;
  max-width: 536px;
  padding: 56px 64px;
  font-weight: 400;
}
.order-summary {
  color: rgba(17, 17, 17, 1);
  font-size: 20px;
  line-height: 1;
  margin: 0;
}
.content {
  margin-top: 40px;
  width: 100%;
}
.summary-block {
  width: 100%;
}
.input-fields {
  width: 100%;
}
.prices {
  margin-top: 24px;
  width: 100%;
}
.price-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  letter-spacing: 0.48px;
}
.price-label.secondary {
  color: rgba(84, 84, 84, 1);
  font-family: "Abel", "Inter", "Helvetica", sans-serif;
}
.price-amount {
  line-height: 32px;
}
.taxes {
  margin-top: 16px;
}
.taxes .price-row + .price-row {
  margin-top: 8px;
}
.total {
  margin-top: 16px;
}
.checkout-button {
  width: 100%;
  margin-top: 48px;
  padding: 18px 56px;
  background-color: #000;
  color: #fff;
  border: none;
}
.checkout-button:hover {
  background-color: #333;
}

@media (max-width: 991px) {
  .summary {
    width: auto;
    padding: 56px 16px;
  }
  .order-summary,
  .input-label,
  .price-label,
  .price-amount,
  .checkout-button {
    font-family: "Abel", "Inter", sans-serif !important;
    font-style: normal !important;
  }
}
</style>
