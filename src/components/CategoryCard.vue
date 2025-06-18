<template>
  <article class="category-card">
    <img :src="imageUrl" alt="" class="category-image" />
    <p class="category-name">{{ categoryName }}</p>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CategoryCard",
  props: {
    imageUrl: {
      type: String,
      required: true,
    },
    categoryName: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.category-card {
  border-radius: 15px;
  background-color: rgba(237, 237, 237, 1);
  display: flex;
  min-width: 79px;
  min-height: 104px;
  padding: 24px 24px 0 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  width: 112px;
  white-space: nowrap;
  cursor: pointer;
}

.category-image {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 48px;
}

.category-name {
  margin-top: 8px;
  font-style: italic;
}

@media (max-width: 991px) {
  .category-name {
    font-family: "Abel", 'Inter', sans-serif;
    font-style: normal;
  }
  .category-card {
    width: 33%;
    flex-shrink: 1;
  }
}
</style>


