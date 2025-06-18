// store/favorites/module.ts
import { Module } from "vuex";
import { RootState } from "@/types/RootState";
import { Product } from "@/types/Product";

export interface FavoritesState {
  items: Product[];
}

const module: Module<FavoritesState, RootState> = {
  namespaced: true,
  state: () => ({
    items: [],
  }),
  mutations: {
    ADD_FAVORITE(state, product: Product) {
      if (!state.items.some((item) => item.id === product.id)) {
        state.items.push(product);
      }
    },
    REMOVE_FAVORITE(state, productId: number) {
      state.items = state.items.filter((item) => item.id !== productId);
    },
  },
  actions: {
    addToFavorites({ commit }, product: Product) {
      commit("ADD_FAVORITE", product);
    },
    removeFromFavorites({ commit }, productId: number) {
      commit("REMOVE_FAVORITE", productId);
    },
  },
  getters: {
    favoriteProducts: (state) => state.items,
    isFavorite: (state) => (productId: number) => state.items.some((item) => item.id === productId),
  },
};

export default module;
