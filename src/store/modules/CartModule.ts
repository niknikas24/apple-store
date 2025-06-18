import { Module } from 'vuex';
import { RootState } from "@/types/RootState";
import { Product } from '@/types/Product';

export interface CartState {
  items: Array<Product & { quantity: number }>;
}

const module: Module<CartState, RootState> = {
  namespaced: true,
  state: () => ({
    items: []
  }),
  mutations: {
    ADD_TO_CART(state, product: Product) {
      const existing = state.items.find(item => item.id === product.id);
      if (existing) {
        existing.quantity++;
      } else {
        state.items.push({ ...product, quantity: 1 });
      }
    },
    REMOVE_FROM_CART(state, productId: number) {
      state.items = state.items.filter(item => item.id !== productId);
    },
    UPDATE_QUANTITY(state, { productId, quantity }) {
      const item = state.items.find(item => item.id === productId);
      if (item) {
        item.quantity = quantity;
      }
    },
    CLEAR_CART(state) {
      state.items = [];
    }
  },
  actions: {
    addToCart({ commit }, product: Product) {
      commit('ADD_TO_CART', product);
    },
    removeFromCart({ commit }, productId: number) {
      commit('REMOVE_FROM_CART', productId);
    },
    updateQuantity({ commit }, payload) {
      commit('UPDATE_QUANTITY', payload);
    },
    clearCart({ commit }) {
      commit('CLEAR_CART');
    }
  },
  getters: {
    cartItems: state => state.items,
    totalItems: state => state.items.reduce((acc, item) => acc + item.quantity, 0)
  }
};

export default module;