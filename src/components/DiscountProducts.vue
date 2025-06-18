<template>
  <section class="discount-products">
    <HomeTitle title="Discounts up to -50%" />
    <ProductGrid :products="discountedProducts" />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useDiscountProducts } from "@/hooks/useDiscountProducts";
import HomeTitle from "./HomeTitle.vue";
import ProductGrid from "./ProductGrid.vue";

export default defineComponent({
  name: "DiscountProducts",
  components: {
    HomeTitle,
    ProductGrid,
  },
  setup() {
    const { discountedProducts } = useDiscountProducts();

    return {
      discountedProducts: discountedProducts,
    };
  },
});
</script>

<style scoped>
.discount-products {
  padding: 80px 0;
  max-width: 1120px;
  margin: 0 auto;
  gap: 32px;
}

@media (max-width: 991px) {
  .discount-products {
    padding: 56px 5px;
  }
}
</style>
