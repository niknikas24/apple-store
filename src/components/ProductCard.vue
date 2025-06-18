<template>
  <article class="product-card" @click="$router.push(`/product/${product.id}`)">
    <div class="product-card__favorite">
      <FavoriteButton :is-active="isFavorite" @toggle="handleFavorites" />
    </div>
    <img :src="product.images[0]" :alt="product.name" class="product-card__image" />
    <div class="product-card__content">
      <div class="product-card__info">
        <h3 class="product-card__title">{{ product.name }}</h3>
        <p class="product-card__price">${{ product.price }}</p>
      </div>
      <ButtonStore class="product-card__button" @click.stop="handleAddToCart">
        {{ isInCart ? "Added" : "Buy Now" }}
      </ButtonStore>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useHandleAddToCart } from "@/hooks/useHandleAddToCart";
import { useHandleFavorites } from "@/hooks/useHandleFavorites";
import { Product } from "../types/Product";

export default defineComponent({
  name: "ProductCard",
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
.product-card {
  display: flex;
  max-width: 234px;
  min-width: 200px;
  padding: 24px 16px;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  flex: 1;
  border-radius: 9px;
  background-color: #f6f6f6;
  font-style: italic;
  cursor: pointer;
}

.product-card__favorite {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
}

.product-card__image {
  width: 160px;
  height: 160px;
  object-fit: contain;
}

.product-card__content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  width: 100%;
}

.product-card__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 16px;
  width: 100%;
}

.product-card__title {
  color: #000;
  text-align: center;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
  width: 100%;
  margin: 0;
}

.product-card__price {
  color: #000;
  text-align: center;
  font-family: 'Abel', 'Inter', sans-serif;
  font-size: 24px;
  font-weight: 400;
  line-height: 24px;
  letter-spacing: 0.72px;
  width: 100%;
  margin: 0;
}

.product-card__button {
  color: #fff;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 12px 64px;
  border-radius: 8px;
  background-color: #000;
  border: none;
  transition: background-color 0.3s ease;
}

.product-card__button:hover {
  background-color: #333;
}

@media (max-width: 640px) {
  .product-card {
    min-width: 140px;
    max-width: 150px;
    padding: 24px 10px;
    gap: 10px;
  }
  .product-card__image {
    width: 104px;
    height: 104px;
  }
  .product-card__content {
    gap: 19px;
  }
  .product-card__info {
    gap: 14px;
  }
  .product-card__button,
  .product-card__title {
    font-family: 'Abel', 'Inter', sans-serif !important;
    font-style: normal !important;
  }
  .product-card__button {
    width: 100%;
    padding: 12px 32px;
    font-size: 14px;
  }
}
</style>
