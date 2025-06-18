<template>
  <article class="product-item">
    <div class="product-image">
      <img :src="product.images[0]" :alt="product.name" width="90" height="90" @click="$router.push(`/product/${product.id}`)" />
    </div>
    <div class="product-content">
      <div class="product-info" @click="$router.push(`/product/${product.id}`)">
        <h3 class="product-name">{{ product.name }}</h3>
        <p class="product-sku">#{{ product.id }}</p>
      </div>
      <div class="product-actions">
        <QuantityControl v-model="quantity" />
        <span class="product-price">${{ product.price }}</span>
        <button 
          type="button" 
          class="icon-button" 
          @click="handleRemove"
        ></button>
      </div>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "../types/Product";
import QuantityControl from "../components/UI/QuantityControl.vue";
import { useCartItem } from "@/hooks/useCartItem";

export default defineComponent({
  name: "CartItem",
  components: { QuantityControl },
  props: {
    product: {
      type: Object as () => Product & { quantity: number },
      required: true,
    },
  },
  emits: ["update:quantity", "remove"],
  setup(props, { emit }) {
    
    const {handleRemove, quantity} = useCartItem(props.product);

    return {
      quantity,
      handleRemove
    };
  },
});
</script>

<style scoped>
.product-item {
  display: flex;
  padding: 16px 0 56px 0;
  align-items: center;
  gap: 15px;
  width: 100%;
}
.product-image {
  display: flex;
  width: 90px;
  height: 90px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.product-content {
  display: flex;
  align-items: center;
  gap: 8px 0;
  flex: 1;
}
.product-info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 8px;
  flex: 1;
  cursor: pointer;
}
.product-name {
  width: 100%;
  font-size: 16px;
  line-height: 24px;
  margin: 0;
}
.product-sku {
  width: 100%;
  font-family: 'Abel', 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  margin: 0;
}
.product-actions {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 24px;
}
.product-price {
  font-size: 20px;
  line-height: 32px;
  letter-spacing: 0.6px;
}
.icon-button {
  background: url("../assets/Close.svg") center center no-repeat;
  height: 24px;
  width: 24px;
  border: none;
  padding: 0;
  cursor: pointer;
}

@media (max-width: 991px) {
  .product-content {
    flex-wrap: wrap;
  }
  .product-name, .product-actions, .product-price {
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
