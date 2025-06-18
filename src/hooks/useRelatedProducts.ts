import { computed } from "vue";
import { useStore } from "vuex";
import { Product } from "@/types/Product";

export const useRelatedProducts = (category: string, currentProductId: number) => {
const store = useStore();

    const allProducts = computed(() => 
      store.getters['allProducts/allProducts'] as Product[]
    );

    const relatedProducts = computed(() => {
      return allProducts.value
        .filter(product => 
          product.category === category &&
          product.id !== currentProductId
        )
        .slice(0, 4);
    });

    return {
      relatedProducts,
      isLoading: computed(() => store.state.allProducts.isLoading),
      error: computed(() => store.state.allProducts.error),
    };
}