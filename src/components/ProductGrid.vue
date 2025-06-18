<template>
  <div class="product-grid">
    <ProductCard
      v-for="product in products"
      :key="product.id"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Product } from "../types/Product";
import ProductCard from "./ProductCard.vue";

export default defineComponent({
  name: "ProductGrid",
  components: {
    ProductCard,
  },
  props: {
    products: {
      type: Array as () => Product[],
      required: true,
    },
  },
});
</script>

<style scoped>
.product-grid {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 16px;
  width: 100%;
}
</style>
