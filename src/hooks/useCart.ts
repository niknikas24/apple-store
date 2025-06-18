import { computed } from "vue";
import { useStore } from "vuex";
import { QuantityChangeEvent } from "../types/Cart";

export const useCart = () => {
  const store = useStore();

  const products = computed(() => store.getters["cart/cartItems"]);

  const handleQuantityChange = (event: QuantityChangeEvent) => {
    store.dispatch("cart/updateQuantity", {
      productId: event.productId,
      quantity: event.quantity,
    });
  };

  const handleRemove = (productId: number) => {
    store.dispatch("cart/removeFromCart", productId);
  };

  return {
    products,
    handleQuantityChange,
    handleRemove,
  };
};
