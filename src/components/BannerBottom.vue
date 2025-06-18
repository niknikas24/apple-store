<template>
  <section class="banner-container">
    <div class="banner-content">
      <div class="banner-text-container">
        <h2 class="banner-heading">
          <span class="heading-regular">Big Summer</span>
          <span class="heading-italic"> Sale</span>
        </h2>
        <p class="banner-description">Commodo fames vitae vitae leo mauris in. Eu consequat.</p>
      </div>
      <ButtonStore class="shop-now-button" @click="$router.push('/category/2')">Shop Now</ButtonStore>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerBottom",
});
</script>

<style scoped>
.banner-container {
  display: flex;
  height: 448px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
  width: 100%;
  background: url("../assets/banner-bottom1.png") left top no-repeat,
    url("../assets/banner-bottom2.png") right bottom no-repeat, linear-gradient(100deg, #2e2e2e 42.36%, #000 98.65%);
}

.banner-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 40px;
}

.banner-text-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.banner-heading {
  color: #fff;
  text-align: center;
  font-size: 72px;
  letter-spacing: -0.72px;
  margin: 0;
}

.heading-regular {
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 72px;
  font-weight: 400;
  line-height: 0;
}

.heading-italic {
  font-size: 72px;
  font-style: italic;
  font-weight: 400;
}

.banner-description {
  color: #787878;
  text-align: center;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1;
  width: 100%;
  margin: 0;
}

.shop-now-button {
  padding: 16px 56px;
  border: 1px solid #fff;
  color: #fff;
  background: transparent;
}

.shop-now-button:hover {
  background-color: rgba(255, 255, 255, 0.1);
}

@media (max-width: 991px) {
  .banner-container {
    background: url("../assets/banner-bottom3.png") top center no-repeat,
      url("../assets/banner-bottom4.png") bottom center no-repeat, linear-gradient(100deg, #2e2e2e 42.36%, #000 98.65%);
    background-size: 100%;
  }
  .heading-regular,
  .heading-italic {
    font-family: "Abel", 'Inter', sans-serif;
    font-size: 48px;
    font-style: normal;
  }
  .banner-description {
    line-height: 32px;
    width: 80%;
  }
  .shop-now-button {
    font-family: "Abel", 'Inter', sans-serif !important;
    font-style: normal !important;
  }
}
</style>
