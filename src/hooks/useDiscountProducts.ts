import { computed } from "vue";
import { useStore } from "vuex";
import { Product } from "@/types/Product";

export const useDiscountProducts = () => {
  const store = useStore();

  const discountedProducts = computed(() => {
    const allProducts = store.getters["allProducts/allProducts"] as Product[];
    return allProducts
      .filter((product) => product.discount_price !== null && product.discount_price <= product.price / 1.3)
      .slice(0, 4);
  });

  return {
    discountedProducts,
  };
};
