<template>
  <section class="title-section">
    <h2 class="home-title">{{ title }}</h2>
    <div v-if="nav" class="navigation-controls">
      <button class="nav-button" aria-label="Navigate to previous category" @click="navigatePrevious">
        <img src="../assets/left-arrow.svg" alt="" class="arrow-left" />
      </button>
      <button class="nav-button" aria-label="Navigate to next category" @click="navigateNext">
        <img src="../assets/right-arrow.svg" alt="" class="arrow-right" />
      </button>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "HomeTitle",
  props: {
    title: {
      type: String,
      required: true,
    },
    nav: {
      type: Boolean,
    },
  },
  emits: ["navigate"],
  methods: {
    navigatePrevious(): void {
      this.$emit("navigate", "previous");
    },
    navigateNext(): void {
      this.$emit("navigate", "next");
    },
  },
});
</script>

<style scoped>
.title-section {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 0 32px 0;
}

.home-title {
  color: #000;
  font-size: 24px;
  font-style: italic;
  font-weight: 400;
  line-height: 32px;
  letter-spacing: 0.24px;
  margin: 0;
}
.navigation-controls {
  display: flex;
  align-items: center;
  gap: 16px;
}
.nav-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.arrow-left,
.arrow-right {
  width: 32px;
  height: 32px;
}

@media (max-width: 991px) {
  .home-title {
    font-family: "Abel", 'Inter', sans-serif;
    font-style: normal;
    font-size: 24px;
    line-height: 1;
  }
  .arrow-left, .arrow-right {
    width: 25px;
    height: 25px;
}
}
</style>
