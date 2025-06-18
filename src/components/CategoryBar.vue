<template>
  <div class="bar-container">
    <div class="category-bar">
      <section class="counter-container">
        <span class="counter-label">Selected Products:</span>
        <span class="counter-value">{{ totalProducts }}</span>
      </section>

      <button class="filter-toggle" aria-label="Toggle filters" @click.stop="$router.push(`/filter/${categoryId}`)">
        <span class="filter-text">Filters</span>
        <img class="filter-icon" src="../assets/Filters.svg" alt="" />
      </button>

      <Sort label="By rating" :is-open="isFilterOpen" @click="toggleFilter" />
    </div>

    <section class="counter-container counter-container-mob">
      <span class="counter-label">Products Result:</span>
      <span class="counter-value">{{ totalProducts }}</span>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, ref } from "vue";
import { useStore } from "vuex";
import Sort from "./Sort.vue";
import { useRoute } from "vue-router";

export default defineComponent({
  name: "ProductFilterBar",
  components: {
    Sort,
  },
  setup() {
    const store = useStore();
    const isFilterOpen = ref(false);

    const totalProducts = computed(() => {
      return store.getters["category/filteredProducts"]?.length || 0;
    });

    const toggleFilter = () => {
      isFilterOpen.value = !isFilterOpen.value;
    };

    const route = useRoute();
    const categoryId = computed(() => parseInt(route.params.id as string));

    return {
      totalProducts,
      isFilterOpen,
      toggleFilter,
      categoryId,
    };
  },
});
</script>

<style scoped>
.bar-container {
  margin-bottom: 24px;
}
.category-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.counter-container {
  display: flex;
  min-width: 200px;
  align-items: flex-end;
  gap: 6px;
}
.counter-container-mob {
  display: none;
  margin-top: 24px;
}
.counter-label {
  color: #6c6c6c;
  font-size: 16px;
  line-height: 16px;
  letter-spacing: 0.48px;
}
.counter-value {
  color: #000;
  text-align: center;
  font-size: 20px;
  line-height: 16px;
  letter-spacing: 0.6px;
}
.filter-toggle {
  display: none;
  max-width: 164px;
  padding: 17px 16px;
  justify-content: space-between;
  align-items: center;
  border-radius: 8px;
  border: 0.5px solid #d4d4d4;
  background-color: #fff;
  cursor: pointer;
  flex: 1;
}
.filter-text {
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 15px;
  line-height: 16px;
  letter-spacing: -0.075px;
}

@media (max-width: 991px) {
  .counter-container {
    display: none;
  }
  .counter-container-mob {
    display: flex;
  }
  .counter-label,
  .counter-value {
    font-family: "Abel", 'Inter', sans-serif;
  }
  .filter-toggle {
    display: flex;
  }
}
</style>
