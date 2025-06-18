<template>
  <div class="banner">
    <section class="banner-container">
      <article class="content-wrapper">
        <header class="header-content">
          <div class="subtitle">Pro.Beyond.</div>
          <div class="title">IPhone 14 Pro</div>
        </header>
        <p class="description">Created to change everything for the better. For everyone</p>
        <ButtonStore class="cta-button" @click.stop="$router.push('/category/2')">Shop Now</ButtonStore>
      </article>
      <figure class="image-container">
        <img src="../assets/Banner-top.png" alt="iPhone 14 Pro" class="product-image" />
      </figure>
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "BannerTop",
  components: {},
});
</script>

<style scoped>
.banner {
  background: linear-gradient(91deg, #211c24 0.64%, #211c24 101%);
}
.banner-container {
  display: flex;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
}

@media (max-width: 1200px) {
  .banner-container {
    margin: 0 15px;
  }
}

@media (max-width: 991px) {
  .banner-container {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
}
.content-wrapper {
  height: 256px;
}
.subtitle {
  color: #fff;
  font-size: 25px;
  font-weight: 400;
  line-height: 32px;
  opacity: 0.4;
  font-style: normal !important;
  font-family: 'Inter', sans-serif !important;
}
.title {
  color: #fff;
  font-family: "Abel", 'Inter', sans-serif;
  font-size: 96px;
  font-weight: 400;
  display: block;
  position: relative;
  line-height: 72px;
  letter-spacing: -0.96px;
  margin: 24px 0 0 0;
}
.description {
  color: #909090;
  font-size: 18px;
  font-style: italic;
  font-weight: 400;
  line-height: 24px;
}
.cta-button {
  position: relative;
  padding: 16px 56px;
  gap: 8px;
  border: 1px solid #fff;
  color: #fff;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: transparent;
  z-index: 1000;
}
.cta-button:hover {
  background: rgba(255, 255, 255, 0.1);
}

@media (max-width: 991px) {
  .content-wrapper {
    min-width: unset;
    align-items: center;
    margin-top: 72px;
  }
  .header-content {
    align-items: center;
  }
  .header-content,
  .title,
  .subtitle,
  .description,
  .cta-button {
    font-family: "Abel", 'Inter', sans-serif !important;
    font-style: normal !important;
  }
  .title {
    font-size: 72px;
    margin: 20px 0 0 0;
  }
  .description {
    font-size: 19px;
    margin: 20px 0 30px;
  }
  .cta-button {
    width: 175px;
  }
}

.image-container {
  display: flex;
  width: 406px;
  height: 632px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 0;
}
.product-image {
  width: 100%;
  height: 100%;
  object-fit: contain;
}

@media (max-width: 991px) {
  .image-container {
    width: 321px;
    margin-bottom: -66%;
  }
}
</style>
