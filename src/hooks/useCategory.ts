import { computed, ref, onMounted, onUnmounted } from "vue";
import { useStore } from "vuex";
import { useRoute } from "vue-router";

export const useCategory = () => {
  const store = useStore();
  const route = useRoute();

  const categoryId = computed(() => parseInt(route.params.id as string));
  store.dispatch("category/loadProducts", categoryId.value);

  const allProducts = computed(() => store.getters["category/sortedProducts"]);
  const currentPage = computed(() => store.state.category.currentPage);
  const isLoading = computed(() => store.state.category.isLoading);
  const error = computed(() => store.state.category.error);

  // Следим за шириной экрана
  const screenWidth = ref(window.innerWidth);
  const updateWidth = () => (screenWidth.value = window.innerWidth);
  onMounted(() => window.addEventListener("resize", updateWidth));
  onUnmounted(() => window.removeEventListener("resize", updateWidth));

  const itemsPerPage = computed(() => (screenWidth.value <= 640 ? 8 : 9));

  const paginatedProducts = computed(() => {
    const start = (currentPage.value - 1) * itemsPerPage.value;
    const end = start + itemsPerPage.value;
    return allProducts.value.slice(start, end);
  });

  return {
    paginatedProducts,
    isLoading,
    error,
    categoryId,
	itemsPerPage,
    currentPage,
  };
};
