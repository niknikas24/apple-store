<template>
  <section class="product-info">
    <h1 class="product-title">{{ title }}</h1>
    <div class="price-container">
      <p class="current-price">${{ currentPrice }}</p>
      <p v-if="originalPrice" class="original-price">${{ originalPrice }}</p>
    </div>
    <SpecificationsList :specifications="specifications" />
    <p class="description">
      Enhanced capabilities thanks toan enlarged display of 6.7 inchesand work without rechargingthroughout the day.
      Incredible photosas in weak, yesand in bright lightusing the new systemwith two cameras
      <a class="read-more" href="#details">more...</a>
    </p>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { Characteristic } from "../types/Product";
import SpecificationsList from "../components/SpecificationsList.vue";

export default defineComponent({
  name: "ProductDetails",
  components: { SpecificationsList },
  props: {
    title: { type: String, required: true },
    currentPrice: { type: Number, required: true },
    originalPrice: { type: [Number, null], required: true },
    specifications: {
      type: Array as () => Characteristic[],
      required: false,
    },
  }
});
</script>

<style scoped>
.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}
.product-title {
  font-size: 40px;
  font-style: italic;
  color: #000;
  line-height: 1;
  margin: 0;
}
.price-container {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 48px;
}
.current-price {
  font-size: 32px;
  font-style: italic;
  color: #000;
  line-height: 48px;
  letter-spacing: 0.96px;
}
.original-price {
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 24px;
  color: #a0a0a0;
  text-decoration: line-through;
  line-height: 32px;
  letter-spacing: 0.72px;
}
.description {
  color: #6c6c6c;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.42px;
  margin: 8px 0 0 0;
}
.read-more {
  color: #2c2c2c;
  text-decoration: underline;
  cursor: pointer;
  background: none;
  border: none;
  padding: 0;
  font: inherit;
}

@media (max-width: 640px) {
  .product-title, .current-price {
    font-family: "Abel", 'Inter', sans-serif;
    font-style: normal;
  }
  .product-title {
    margin: 10px 0;
  }
  .product-content {
    gap: 10px;
  }
}
</style>
