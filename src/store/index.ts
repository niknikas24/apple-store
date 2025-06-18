import { createStore } from 'vuex'
import categoryModule from '@/store/modules/CategoryModule';
import cartModule from '@/store/modules/CartModule';
import favoritesModule from '@/store/modules/FavoritesModule';
import allProductsModule from '@/store/modules/AllProductsModule';
import CategoriesModule from '@/store/modules/CategoriesModule';
import { RootState } from '@/types/RootState';

export default createStore({
  state: {} as RootState,
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    category: categoryModule,
    cart: cartModule,
    favorites: favoritesModule,
    allProducts: allProductsModule,
    categories: CategoriesModule,
  }
})
