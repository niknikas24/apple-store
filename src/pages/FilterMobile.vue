<template>
  <div class="filter-container">
    <header class="top" @click="$router.push(`/category/${categoryId}`)">
      <img src="../assets/Arrow-mob.svg" class="filter-icon" alt="" />
      <span class="filters-title">Filters</span>
    </header>
    <Loader v-if="isLoading" />
    <ErrorMessage v-if="error" :message="error" />
    <Filter />
    <ButtonStore class="button-apply" @click.stop="$router.push(`/category/${categoryId}`)">Apply</ButtonStore>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Filter from "../components/Filter.vue";
import { useCategory } from "@/hooks/useCategory";

export default defineComponent({
  name: "FilterMobile",
  components: { Filter },
  setup() {
    const { isLoading, error, categoryId } = useCategory();

    return {
      isLoading,
      error,
      categoryId,
    };
  },
});
</script>

<style scoped>
.filter-container {
  padding: 36px 5px 48px 5px;
  max-width: 500px;
  margin: 0 auto;
}
.top {
  display: flex;
  align-items: center;
  gap: 16px;
  white-space: nowrap;
  letter-spacing: 0.24px;
  line-height: 1;
  justify-content: start;
  margin-bottom: 24px;
  cursor: pointer;
}
.filter-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  align-self: stretch;
  margin-top: auto;
  margin-bottom: auto;
  flex-shrink: 0;
}
.filters-title {
  align-self: stretch;
  margin: auto 0;
  font-family: Abel, -apple-system, Roboto, Helvetica, sans-serif;
  font-size: 24px;
}
.button-apply {
  color: #fff;
  font-family: Abel, -apple-system, Roboto, Helvetica, sans-serif !important;
  font-style: normal !important;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
  padding: 12px;
  border-radius: 8px;
  background-color: #000;
  border: none;
  transition: background-color 0.3s ease;
  width: 100%;
  display: none;
}
.button-apply:hover {
  background-color: #333;
}
@media (max-width: 991px) {
  .button-apply {
    display: block;
  }
}
</style>
