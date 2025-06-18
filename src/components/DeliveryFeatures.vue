<template>
  <section class="features-container">
    <article v-for="(feature, index) in deliveryFeatures" :key="index" class="feature-item">
      <div class="feature-icon">
        <img class="feature-icon__img" :src="feature.icon" alt=""/>
      </div>
      <div class="feature-content">
        <span class="feature-title">{{ feature.title }}</span>
        <span class="feature-subtitle">{{ feature.subtitle }}</span>
      </div>
    </article>
  </section>
</template>

<script setup lang="ts">
import { DeliveryFeature } from "../types/Product";

const deliveryFeatures: DeliveryFeature[] = [
  {
    icon: "/images/delivery.svg",
    title: "Free Delivery",
    subtitle: "1-2 day",
  },
  {
    icon: "/images/stock.svg",
    title: "In Stock",
    subtitle: "Today",
  },
  {
    icon: "/images/Guaranteed.svg",
    title: "Guaranteed",
    subtitle: "1 year",
  },
];
</script>

<style scoped>
.features-container {
  display: flex;
  align-items: center;
  gap: 32px;
  width: 100%;
}
.feature-item {
  display: flex;
  align-items: center;
  gap: 16px;
  flex: 1;
}
.feature-icon {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 56px;
  height: 56px;
  border-radius: 11px;
  background: #F6F6F6;
}
.feature-content {
  display: flex;
  flex-direction: column;
}
.feature-title, .feature-subtitle{
  font-size: 14px;
  font-style: italic;
  line-height: 24px;
}
.feature-title {
  color: #717171;
}

@media (max-width: 991px) {
  .feature-item {
    flex-direction: column;
    text-align: center;
  }
  .feature-title, .feature-subtitle {
    font-family: "Abel", 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
