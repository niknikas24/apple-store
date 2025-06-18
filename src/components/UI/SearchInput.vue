<template>
  <div class="search-container">
    <img alt="" class="search-icon" src="../../assets/Search.svg" />
    <input
      type="text"
      :value="modelValue"
      @input="handleInput"
      placeholder="Search"
      class="search-input"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SearchInput",
  props: {
    modelValue: {
      type: String,
      default: ""
    }
  },
  emits: ["update:modelValue"],
  methods: {
    handleInput(event: Event) {
      const target = event.target as HTMLInputElement;
      this.$emit("update:modelValue", target.value);
    }
  }
});
</script>


<style scoped>
.search-container {
  display: flex;
  align-items: center;
  background: #f5f5f5;
  border-radius: 8px;
}

.search-icon {
  width: 18px;
  height: 18px;
  margin-right: 8px;
  color: gray;
}

.search-input {
  border: none;
  outline: none;
  background: transparent;
  flex-grow: 1;
  font-size: 14px;
  color: gray;
}

.search-input::placeholder {
  color: gray;
  font-style: italic;
}

@media (max-width: 991px) {
  .search-input, .search-input::placeholder {
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
