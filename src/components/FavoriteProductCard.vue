<template>
  <article class="product-card" @click="$router.push(`/product/${product.id}`)">
    <img :src="product.images[0]" :alt="product.name" class="product-image" />
    <div class="product-content">
      <div class="product-info">
        <h2 class="product-name">{{ product.name }}</h2>
        <p class="product-id">#{{ product.id }}</p>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import type { Product } from "../types/Product";

export default defineComponent({
  name: "FavoriteProductCard",
  props: {
    product: {
      type: Object as PropType<Product>,
      required: true,
    },
  },
});
</script>

<style scoped>
.product-card {
  display: flex;
  width: 100%;
  padding: 40px 0 0 0;
  margin: 40px 0 0 0;
  align-items: center;
  gap: 15px;
  justify-content: start;
  border-top: 1px solid #a3a3a3;
  cursor: pointer;
}
.product-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 90px;
  align-self: stretch;
  margin: auto 0;
  flex-shrink: 0;
}
.product-content {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  gap: 8px 0;
  justify-content: start;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
.product-info {
  align-self: stretch;
  min-width: 106px;
  margin: auto 0;
  width: 100%;
  flex: 1;
  flex-shrink: 1;
  flex-basis: 0%;
}
.product-name {
  font-size: 16px;
  font-style: italic;
}
.product-id {
  font-family: 'Abel', 'Inter', 'Helvetica', sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin-top: 0;
}

@media (max-width: 991px) {
  .product-name {
    font-family: "Abel", 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
