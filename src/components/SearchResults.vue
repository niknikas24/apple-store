<template>
  <div
    class="search-results"
    v-if="isVisible"
    v-click-outside="closeResults"
    @click.stop
  >
    <div
      v-for="product in searchedProducts"
      :key="product.id"
      class="result-item"
      @click="handleProductClick(product.id)"
    >
      <img v-if="product.images.length > 0" :src="product.images[0]" alt="Product image" class="result-image" />
      <div class="result-info">
        <h3 class="result-title">{{ product.name }}</h3>
        <p class="result-price">${{ product.discount_price || product.price }}</p>
      </div>
    </div>
    <div v-if="!searchedProducts.length" class="no-results">No products found</div>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref, watch } from 'vue';
import { useStore } from "vuex";
import { Product } from "../types/Product";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "SearchResults",
  props: {
    searchQuery: {
      type: String,
      required: true,
    },
  },
  emits: ['close'],
  setup(props, { emit }) {
    const store = useStore();
    const router = useRouter();

    const searchedProducts = computed(() => {
      const query = props.searchQuery.toLowerCase();
      return (store.getters["allProducts/allProducts"] as Product[])
        .filter((product) => product.name.toLowerCase().includes(query))
        .slice(0, 15);
    });

    const isVisible = ref(false);

    watch(() => props.searchQuery, (newVal) => {
      isVisible.value = !!newVal?.trim();
    });

    const closeResults = () => {
      isVisible.value = false;
      emit('close');
    };

    const handleProductClick = (productId: number) => {
      closeResults();
      router.push(`/product/${productId}`);
    };

    return {
      isVisible,
      closeResults,
      searchedProducts,
      handleProductClick,
    };
  },
});
</script>

<style scoped>
.search-results {
  position: absolute;
  width: 40%;
  background: #ffffff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  z-index: 1000;
  margin-top: 8px;
  max-height: 500px;
  overflow-y: auto;
}
.result-item {
  display: flex;
  align-items: center;
  padding: 12px 16px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  border-bottom: 1px solid #f5f5f5;
}
.result-item:hover {
  background-color: #f8f9fa;
}
.result-image {
  width: 50px;
  height: 50px;
  object-fit: cover;
  border-radius: 4px;
  margin-right: 16px;
}
.result-info {
  flex-grow: 1;
}
.result-title {
  margin-bottom: 4px;
}
.result-price {
  margin: 0;
}
.no-results{
  padding: 20px;
}
@media (max-width: 991px) {
  .search-results {
    left: 0;
    width: 95%;
    max-height: 300px;
    margin-top: 60px;
  }
}
</style>
