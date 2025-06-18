<template>
  <div class="products-home">
    <TagTabs :active-tab="activeTab" @tab-change="handleTabChange" />
    <Loader v-if="isLoading" />
    <ErrorMessage v-if="error" :message="error" />
    <ProductGrid v-if="filteredProducts.length > 0" :products="filteredProducts" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useProductsHome } from "@/hooks/useProductsHome";
import TagTabs from "./TagTabs.vue";
import ProductGrid from "./ProductGrid.vue";

export default defineComponent({
  name: "ProductsHome",
  components: {
    TagTabs,
    ProductGrid,
  },
  setup() {
    const { activeTab, filteredProducts, handleTabChange, isLoading, error } = useProductsHome();

    return {
      activeTab,
      filteredProducts,
      handleTabChange,
      isLoading,
      error,
    };
  },
});
</script>

<style scoped>
.products-home {
  display: flex;
  flex-direction: column;
  padding: 56px 0;
  max-width: 1120px;
  margin: 0 auto;
  align-items: flex-start;
  gap: 32px;
  background-color: #fff;
}

@media (max-width: 991px) {
  .products-home {
    padding: 56px 5px;
  }
}
</style>
