<template>
  <button
    type="button"
    :class="['page-button', { active: isActive }]"
    :aria-current="isActive ? 'page' : undefined"
  >
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "PaginationButton",
  props: {
    isActive: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<style scoped>
.page-button {
  border: none;
  border-radius: 5px;
  background-color: rgba(246, 246, 246, 1);
  padding: 4px 11px;
  width: 32px;
  height: 32px;
  font-style: italic;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}

.page-button.active {
  background-color: #000;
  color: #fff;
}
@media (max-width: 991px) {
  .page-button {
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
