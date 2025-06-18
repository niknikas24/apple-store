import { CategoryState } from '@/store/modules/CategoryModule';
import {CartState } from '@/store/modules/CartModule';
import {FavoritesState} from '@/store/modules/FavoritesModule';
import {AllProductsState} from '@/store/modules/AllProductsModule';
import {CategoriesState} from '@/store/modules/CategoriesModule';

export interface RootState {
  category: CategoryState;
  cart: CartState,
  favorites: FavoritesState,
  allProducts: AllProductsState,
  categories: CategoriesState,
}

// Расширяем типы Vuex
declare module 'vuex' {
  export function useStore<S = RootState>(): import('vuex').Store<S>;
}