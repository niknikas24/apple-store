<template>
  <nav class="tabs">
    <button
      v-for="tab in tabs"
      :key="tab.id"
      :class="['tabs__item', { tabs__item_active: activeTab === tab.id }]"
      @click="handleTabClick(tab.id)"
    >
      {{ tab.label }}
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface Tab {
  id: string;
  label: string;
}

export default defineComponent({
  name: "TagTabs",
  props: {
    activeTab: {
      type: String,
      required: true,
    },
  },
  emits: ["tab-change"],
  setup(_, { emit }) {
    const tabs: Tab[] = [
      { id: "newArrival", label: "New Arrival" },
      { id: "bestseller", label: "Bestseller" },
      { id: "featured", label: "Featured Products" },
    ];

    const handleTabClick = (tabId: string) => {
      emit("tab-change", tabId);
    };

    return {
      tabs,
      handleTabClick,
    };
  },
});
</script>

<style scoped>
.tabs {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}

.tabs__item {
  color: #8b8b8b;
  font-size: 18px;
  font-weight: 400;
  line-height: 32px;
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  transition: color 0.3s ease;
}

.tabs__item:hover,
.tabs__item_active {
  color: #000;
  border-bottom: 2px solid #000;
}

@media (max-width: 991px) {
  .tabs{
    justify-content: center;
  }
  .tabs__item  {
    font-family: 'Abel', 'Inter', sans-serif;
    font-size: 16px;
  }
}
</style>
