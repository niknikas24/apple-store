<template>
  <Loader v-if="isLoading" />
  <ErrorMessage v-if="error" :message="error" />
  <section class="related-products" v-if="relatedProducts.length > 0">
    <HomeTitle title="Related Products" />
    <ProductGrid :products="relatedProducts" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useRelatedProducts } from "@/hooks/useRelatedProducts";
import HomeTitle from "./HomeTitle.vue";
import ProductGrid from "./ProductGrid.vue";

export default defineComponent({
  name: "RelatedProducts",
  components: {
    HomeTitle,
    ProductGrid,
  },
  props: {
    category: {
      type: String,
      required: true,
    },
    currentProductId: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const { relatedProducts, isLoading, error } = useRelatedProducts(props.category, props.currentProductId);

    return {
      relatedProducts,
      isLoading,
      error,
    };
  },
});
</script>

<style scoped>
.related-products {
  max-width: 1120px;
  margin: 80px auto;
  gap: 32px;
}

@media (max-width: 991px) {
  .related-products {
    margin: 0 auto 40px 0;
    padding: 0 5px;
  }
}
</style>
