import { computed } from "vue";
import { useStore } from "vuex";
import type { Product } from "../types/Product";
import { QuantityChangeEvent } from "../types/Cart";

export const useCartItem = (product: Product & { quantity: number }) => {
  const store = useStore();

  const quantity = computed({
    get: () => product.quantity,
    set: (value) => {
      const payload: QuantityChangeEvent = {
        productId: product.id,
        quantity: value,
      };
      store.dispatch("cart/updateQuantity", payload);
    },
  });

  const handleRemove = () => {
    store.dispatch("cart/removeFromCart", product.id);
  };

  return {
    quantity,
    handleRemove,
  };
};
