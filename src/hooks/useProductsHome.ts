import { computed, ref, onMounted } from "vue";
import { useStore } from "vuex";
import { Product } from "../types/Product";

export const useProductsHome = () => {
  const store = useStore();
  const activeTab = ref("newArrival");

  const allProducts = computed(() => store.getters["allProducts/allProducts"] as Product[]);

  const filteredProducts = computed(() => {
    const filtered = allProducts.value.filter((product) => {
      const date = new Date(product.createdAt || "");
      switch (activeTab.value) {
        case "newArrival":
          return date > new Date("2023-01-01");
        case "bestseller":
          return product.rating === 5;
        case "featured":
          return (product.count_review || 0) > 50;
        default:
          return true;
      }
    });
    return filtered.slice(0, 8);
  });

  const handleTabChange = (tabId: string) => {
    activeTab.value = tabId;
  };

  onMounted(() => {
    if (allProducts.value.length === 0) {
      store.dispatch("allProducts/loadProducts");
    }
  });

  return {
    activeTab,
    filteredProducts,
    handleTabChange,
    isLoading: computed(() => store.state.allProducts.isLoading),
    error: computed(() => store.state.allProducts.error),
  };
};
