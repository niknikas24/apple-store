<template>
  <div class="buttons-container">
    <ButtonStore class="wishlist-btn" @click="handleFavorites">
      {{ isFavorite ? "Delete Wishlist" : "Add to Wishlist" }}
    </ButtonStore>
    <ButtonStore class="cart-btn" @click="handleAddToCart">
      {{ isInCart ? "Added to Cart" : "Add to Cart" }}
    </ButtonStore>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import type { Product } from "../types/Product";
import { useHandleAddToCart } from "@/hooks/useHandleAddToCart";
import { useHandleFavorites } from "@/hooks/useHandleFavorites";

export default defineComponent({
  name: "ProductActions",
  props: {
    product: {
      type: Object as () => Product,
      required: true,
    },
  },
  setup(props) {
    
    const { isInCart, handleAddToCart } = useHandleAddToCart(props.product);
    const { isFavorite, handleFavorites } = useHandleFavorites(props.product);

    return {
      isFavorite,
      isInCart,
      handleFavorites,
      handleAddToCart,
    };
  },
});
</script>

<style scoped>
.description {
  color: #6c6c6c;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
  letter-spacing: 0.42px;
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
.buttons-container {
  display: flex;
  gap: 16px;
  width: 100%;
}
.wishlist-btn,
.cart-btn {
  min-width: 136px;
  padding: 16px 56px;
  flex: 1;
  border-radius: 6px;
  font-size: 16px;
  font-style: italic;
  line-height: 24px;
  cursor: pointer;
}

.wishlist-btn {
  border: 1px solid #000;
  color: #000;
  background-color: #fff;
}
.cart-btn {
  color: #fff;
  background-color: #000;
  border: none;
}

@media (max-width: 991px) {
  .buttons-container {
    flex-direction: column;
    margin-bottom: 22px;
  }
  .wishlist-btn, .cart-btn {
    font-family: "Abel", 'Inter', sans-serif !important;
    font-style: normal !important;
  }
}
</style>
