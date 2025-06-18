<template>
  <div class="categories-wrap">
    <section class="categories-section">
      <HomeTitle title="Browse By Category" :nav="true" @navigate="onNavigate" />
      <Loader v-if="isLoading"/>
      <div v-else class="categories" ref="categoriesContainer">
        <CategoryCard
          v-for="(category, index) in visibleCategories"
          :key="category.id"
          :imageUrl="category.imageUrl"
          :categoryName="category.name"
          @click="$router.push(`/category/${category.id}`)"
        />
      </div>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CategoryCard from "./CategoryCard.vue";
import HomeTitle from "./HomeTitle.vue";
import { useCategories } from "@/hooks/useCategories";

export default defineComponent({
  name: "Categories",
  components: { CategoryCard, HomeTitle },
  setup() {
    const { categoriesContainer, visibleCategories, onNavigate, isLoading, error } = useCategories();

    return {
      categoriesContainer,
      visibleCategories,
      onNavigate,
      isLoading,
      error,
    };
  },
});
</script>

<style scoped>
.categories-wrap {
  background: #fafafa;
}
.categories-section {
  padding: 80px 0;
  max-width: 1120px;
  margin: 0 auto;
}
.categories {
  display: flex;
  gap: 32px;
  font-style: italic;
  font-weight: 400;
  overflow: hidden;
}
@media (max-width: 991px) {
  .categories-section {
    padding: 80px 5px 64px 5px;
    max-width: 1120px;
    margin: 0 auto;
  }
  .categories {
    flex-wrap: wrap;
    gap: 16px;
    margin-top: 16px;
  }
}
</style>
