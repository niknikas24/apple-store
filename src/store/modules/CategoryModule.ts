import { Module } from "vuex";
import { RootState } from "@/types/RootState";
import { Product } from "@/types/Product";
import { CharacteristicGroup } from "@/types/Filter";
import { fetchCategoryProducts } from "@/services/categoryService";

export interface CategoryState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  filters: {
    priceRange?: [number, number];
    characteristics: Record<string, string[]>;
  };
  sortBy: "rating" | "price" | "createdAt";
  currentPage: number;
  itemsPerPage: number;
  currentCategoryId: number | null;
}

const module: Module<CategoryState, RootState> = {
  namespaced: true,
  state: () => ({
    products: [],
    isLoading: false,
    error: null,
    filters: {
      characteristics: {},
    },
    sortBy: "rating",
    currentPage: 1,
    itemsPerPage: 12,
    currentCategoryId: null,
  }),
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.isLoading = payload;
    },
    SET_PRODUCTS(state, payload: Product[]) {
      state.products = payload;
    },
    SET_ERROR(state, payload: string | null) {
      state.error = payload;
    },
    SET_FILTERS(state, filters) {
      state.filters = filters;
    },
    SET_SORT(state, sortBy) {
      state.sortBy = sortBy;
    },
    SET_PAGE(state, page) {
      state.currentPage = page;
    },
    SET_CATEGORY_ID(state, payload: number) {
      state.currentCategoryId = payload;
    },
  },
  actions: {
    async loadProducts({ commit, state }, categoryId: number) {
      // Проверяем изменение категории
      if (state.currentCategoryId === categoryId) return;

      // Обновляем ID текущей категории
      commit("SET_CATEGORY_ID", categoryId);

      // Сброс состояния только при изменении категории
      commit("SET_PRODUCTS", []);
      commit("SET_FILTERS", {
        characteristics: {},
        priceRange: undefined,
      });
      commit("SET_SORT", "rating");
      commit("SET_PAGE", 1);
      commit("SET_ERROR", null);

      try {
        commit("SET_LOADING", true);
        const products = await fetchCategoryProducts(categoryId);
        commit("SET_PRODUCTS", products);
      } catch (error) {
        commit("SET_ERROR", error instanceof Error ? error.message : "Unknown error");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    filteredProducts: (state) => {
      return state.products.filter((product) => {
        // Проверка цены
        const price = product.discount_price || product.price;
        const [min, max] = state.filters.priceRange || [0, Infinity];
        if (price < min || price > max) return false;

        // Проверка характеристик
        return Object.entries(state.filters.characteristics).every(([key, values]) => {
          const char = product.characteristics?.find((c) => c.characteristic === key);
          return char && values.includes(char.value);
        });
      });
    },
    sortedProducts: (state, getters) => {
      return [...getters.filteredProducts].sort((a, b) => {
        if (state.sortBy === "price") {
          return a.price - b.price;
        }
        if (state.sortBy === "createdAt") {
          return new Date(a.createdAt!).getTime() - new Date(b.createdAt!).getTime();
        }
        return b.rating - a.rating;
      });
    },
    paginatedProducts: (state, getters) => {
      const start = (state.currentPage - 1) * state.itemsPerPage;
      const end = start + state.itemsPerPage;
      return getters.sortedProducts.slice(start, end);
    },
    characteristicsOptions: (state): Array<{ name: string; values: string[] }> => {
      const characteristics: Record<string, Set<string>> = {};

      state.products.forEach((product) => {
        product.characteristics?.forEach((char) => {
          if (!characteristics[char.characteristic]) {
            characteristics[char.characteristic] = new Set();
          }
          characteristics[char.characteristic].add(char.value);
        });
      });

      return Object.entries(characteristics).map(([name, values]) => ({
        name,
        values: Array.from(values),
      }));
    },
    characteristicsWithCounts: (state, getters): CharacteristicGroup[] => {
      const allProducts = state.products;
      const currentFilters = state.filters;

      return (getters.characteristicsOptions as Array<{ name: string; values: string[] }>).map(
        (option: { name: string; values: string[] }) => ({
          name: option.name,
          values: option.values.map((value: string) => ({
            value,
            count: allProducts.filter((product: Product) => {
              // Логика подсчета
              const price = product.discount_price || product.price;
              const [minPrice, maxPrice] = currentFilters.priceRange || [0, Infinity];

              const priceMatch = price >= minPrice && price <= maxPrice;

              const otherCharsMatch = Object.entries(currentFilters.characteristics)
                .filter(([key]) => key !== option.name)
                .every(([key, values]) => {
                  const char = product.characteristics?.find((c) => c.characteristic === key);
                  return char ? values.includes(char.value) : false;
                });

              const currentCharMatch = product.characteristics?.some(
                (c) => c.characteristic === option.name && c.value === value
              );

              return priceMatch && otherCharsMatch && currentCharMatch;
            }).length,
          })),
        })
      );
    },
  },
};

export default module;
