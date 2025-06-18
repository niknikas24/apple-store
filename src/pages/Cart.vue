<template>
  <div class="container">
    <ShoppingCart />
    <OrderSummary />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import ShoppingCart from "@/components/ShoppingCart.vue";
import OrderSummary from "@/components/OrderSummary.vue";

export default defineComponent({
  name: "Cart",
  components: { ShoppingCart, OrderSummary },
});
</script>

<style scoped>
.container {
  display: flex;
  max-width: 1120px;
  margin: 112px auto;
  gap: 48px;
}
@media (max-width: 991px) {
  .container {
    margin: 40px auto;
    flex-direction: column;
    padding: 0 5px;
    gap: 0;
  }
}
</style>
