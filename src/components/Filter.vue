<template>
  <section class="filter-section">
    <DropdownSection title="Price" :isOpen="true">
      <PriceFilter @update:price="setPriceRange" />
    </DropdownSection>

    <DropdownSection
      v-for="char in characteristics"
      :key="char.name"
      :title="char.name"
      :isOpen="hasSelectedCharacteristics(char.name)"
    >
      <SearchableFilter
        :options="
          char.values.map((v) => ({
            label: v.value,
            count: v.count,
          }))
        "
        :selected="selectedCharacteristics[char.name] || []"
        @update:selected="setCharacteristicFilter(char.name, $event)"
      />
    </DropdownSection>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useFilter } from "@/hooks/useFilter";
import DropdownSection from "./DropdownSection.vue";
import PriceFilter from "./PriceFilter.vue";
import SearchableFilter from "./SearchableFilter.vue";

export default defineComponent({
  name: "Filter",
  components: {
    DropdownSection,
    PriceFilter,
    SearchableFilter,
  },
  setup() {
    const {
      characteristics,
      selectedCharacteristics,
      setPriceRange,
      setCharacteristicFilter,
      hasSelectedCharacteristics,
    } = useFilter();

    return {
      characteristics,
      selectedCharacteristics,
      setPriceRange,
      setCharacteristicFilter,
      hasSelectedCharacteristics,
    };
  },
});
</script>

<style scoped>
.filter-section {
  max-width: 256px;
  width: 100%;
  padding: 0 1px;
}

@media (max-width: 991px) {
  .filter-section {
    max-width: 100%;
  }
}
</style>
