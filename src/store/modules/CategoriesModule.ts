import { Module } from "vuex";
import { RootState } from "@/types/RootState";
import { Category } from "@/types/Category";
import { fetchCategories } from "@/services/categoriesService";

export interface CategoriesState {
  isLoading: boolean;
  categories: Category[];
  error: string | null;
}

const module: Module<CategoriesState, RootState> = {
  namespaced: true,
  state: () => ({
    isLoading: false,
    categories: [],
    error: null,
  }),
  mutations: {
    SET_LOADING(state, payload: boolean) {
      state.isLoading = payload;
    },
    SET_CATEGORIES(state, payload: Category[]) {
      state.categories = payload;
    },
    SET_ERROR(state, payload: string | null) {
      state.error = payload;
    },
  },
  actions: {
    async loadCategories({ commit }) {
      commit("SET_LOADING", true);
      commit("SET_ERROR", null);
      
      try {
        const categories = await fetchCategories();
        if (categories) {
          commit("SET_CATEGORIES", categories);
        }
      } catch (error) {
        commit("SET_ERROR", error instanceof Error ? error.message : "Unknown error");
      } finally {
        commit("SET_LOADING", false);
      }
    },
  },
};

export default module;