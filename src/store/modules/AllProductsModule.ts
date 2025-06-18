import { Module } from "vuex";
import { RootState } from "@/types/RootState";
import { Product } from "@/types/Product";
import { fetchAllProducts } from "@/services/allProductsService";

export interface AllProductsState {
  items: Product[];
  isLoading: boolean;
  error: string | null;
}

const module: Module<AllProductsState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
    isLoading: false,
    error: null,
  }),
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.isLoading = payload;
    },
    SET_PRODUCTS(state, payload: Product[]) {
      state.items = payload;
    },
    SET_ERROR(state, payload: string | null) {
      state.error = payload;
    },
  },
  actions: {
    async loadProducts({ commit }) {
      try {
        commit("SET_LOADING", true);
        const products = await fetchAllProducts();
        commit("SET_PRODUCTS", products);
      } catch (error) {
        commit("SET_ERROR", error instanceof Error ? error.message : "Unknown error");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
  getters: {
    allProducts: (state) => state.items
  }
};

export default module;
