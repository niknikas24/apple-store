<template>
  <section class="shopping-cart">
    <h2 class="cart-title">Shopping Cart</h2>
    <div v-if="products?.length > 0" class="cart-items">
      <CartItem
        class="cart-item"
        v-for="product in products"
        :key="product.id"
        :product="product"
        @update:quantity="handleQuantityChange"
        @remove="handleRemove"
      />
    </div>
    <p v-else>Cart is empty.</p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useCart } from "@/hooks/useCart";
import CartItem from "./CartItem.vue";

export default defineComponent({
  name: "ShoppingCart",
  components: {
    CartItem,
  },
  setup() {
    const { products, handleQuantityChange, handleRemove } = useCart();
    return {
      products,
      handleQuantityChange,
      handleRemove,
    };
  },
});
</script>

<style scoped>
.shopping-cart {
  width: 66%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
}
.cart-title {
  color: #000;
  font-family: Abel;
  font-size: 24px;
  line-height: 24px;
  margin: 0;
}
.cart-items {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 40px;
  width: 100%;
  border-radius: 15px;
}
.cart-item {
  border-bottom: 1px solid #a3a3a3;
}
.cart-items .cart-item:last-child {
  border-bottom: none;
}
@media (max-width: 991px) {
  .shopping-cart {
    width: 100%;
  }
}
</style>
