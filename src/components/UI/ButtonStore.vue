<template>
  <button :class="['button', $attrs.class]" @click.stop="handleClick">
    <slot></slot>
  </button>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ButtonStore",
  inheritAttrs: false,
  emits: ["click"],
  setup(_, { emit }) {
    const handleClick = (event: Event) => {
      emit("click", event);
    };

    return {
      handleClick,
    };
  },
});
</script>

<style scoped>
.button {
  border-radius: 6px;
  text-align: center;
  font-family: "ABeeZee", "Inter", sans-serif;
  font-style: italic;
  cursor: pointer;
  transition: all 0.3s ease;
}
</style>
