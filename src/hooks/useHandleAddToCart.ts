import { computed } from "vue";
import type { Product } from "../types/Product";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export const useHandleAddToCart = (product: Product) => {
  const store = useStore();
  const router = useRouter();

  const isInCart = computed(() =>
    store.getters["cart/cartItems"].some((item: Product) => item.id === product.id)
  );

  const handleAddToCart = () => {
    if (isInCart.value) {
      router.push("/cart");
    } else {
      store.dispatch("cart/addToCart", product);
    }
  };

  return { isInCart, handleAddToCart };
};
