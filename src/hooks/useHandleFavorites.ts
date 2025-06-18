import { computed } from "vue";
import type { Product } from "../types/Product";
import { useStore } from "vuex";

export const useHandleFavorites = (product: Product) => {
  const store = useStore();

  const isFavorite = computed(() => store.getters["favorites/isFavorite"](product.id));

  const handleFavorites = () => {
    if (isFavorite.value) {
      store.dispatch("favorites/removeFromFavorites", product.id);
    } else {
      store.dispatch("favorites/addToFavorites", product);
    }
  };

  return {
    isFavorite,
    handleFavorites,
  };
};
