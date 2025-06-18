<template>
  <div class="searchable-filter">
    <SearchInput v-model="searchQuery" class="search-field" />
    <div class="options-list">
      <CheckboxField
        v-for="option in filteredOptions"
        :key="option.label"
        :label="option.label"
        :count="option.count"
        :modelValue="isSelected(option.label)"
        @update:modelValue="toggleOption(option.label)"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, PropType } from "vue";
import CheckboxField from "../components/UI/CheckboxField.vue";
import SearchInput from "../components/UI/SearchInput.vue";
import { FilterOption } from "../types/Filter";

export default defineComponent({
  name: "SearchableFilter",
  components: {
    CheckboxField,
    SearchInput,
  },
  props: {
    options: {
      type: Array as PropType<FilterOption[]>,
      required: true,
    },
    selected: {
      type: Array as PropType<string[]>,
      default: () => [],
    },
    placeholder: {
      type: String,
      default: "",
    },
  },
  emits: ["update:selected"],
  setup(props, { emit }) {
    const searchQuery = ref("");

    const isSelected = (label: string) => {
      return props.selected.includes(label);
    };

    const filteredOptions = computed(() => {
      return props.options.filter((option) => option.label.toLowerCase().includes(searchQuery.value.toLowerCase()));
    });

    const toggleOption = (label: string) => {
      const newSelected = props.selected.includes(label)
        ? props.selected.filter((item) => item !== label)
        : [...props.selected, label];

      emit("update:selected", newSelected);
    };

    return {
      searchQuery,
      filteredOptions,
      isSelected,
      toggleOption,
    };
  },
});
</script>

<style scoped>
.searchable-filter {
  width: 100%;
}
.search-field {
  width: auto;
  padding: 11px 16px;
}
.options-list {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin-top: 16px;
  width: 100%;
}
@media (max-width: 991px) {
  .options-list {
    max-height: 315px;
    overflow: scroll;
  }
  .searchable-filter {
    width: 94%;
  }
}
</style>
