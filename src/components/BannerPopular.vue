<template>
  <article :class="[isDark ? 'banner-dark' : 'banner', $attrs.class]">
    <img :src="image" :alt="title" class="banner-image" />
    <div class="content-wrapper">
      <div class="title">{{ title }}</div>
      <p class="description">{{ description }}</p>
      <ButtonStore class="shop-button" @click="$router.push(`/category/${categoryId}`)">Shop Now</ButtonStore>
    </div>
  </article>
</template>

<script lang="ts">
export default {
  name: "BannerPopular",
  props: {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    isDark: {
      type: Boolean,
      default: false,
    },
    categoryId: {
      type: String,
      required: true,
    },
  },
};
</script>

<style scoped>
.banner, .banner-dark {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 280px;
  max-width: 360px;
  position: relative;
  background-color: #fff;
}
.banner {
  background-color: #fff;
}
.banner-dark {
  background-color: #2C2C2C;
}
.content-wrapper {
  display: flex;
  flex-direction: column;
  padding: 10px 32px 56px;
}
.title {
  color: #000;
  font-size: 33px;
  font-weight: 400;
  line-height: 48px;
}
.banner-dark .title {
  color: #fff;
}
.description {
  color: #909090;
  font-size: 14px;
  font-weight: 400;
  line-height: 24px;
}
.shop-button {
  padding: 15px;
  width: 188px;
  font-size: 16px;
  font-weight: 400;
  line-height: 24px;
  background: transparent;
  border: 1px solid #000;
}
.banner-dark .shop-button {
  border: 1px solid #fff;
  color: #fff;
}
.banner-image {
  width: 100%;
  height: 360px;
  object-fit: contain;
}

@media (max-width: 991px) {
  .banner, .banner-dark {
    max-width: 100%;
  }
  .content-wrapper {
    text-align: center;
    padding: 10px 32px 100px;
  }
  .title, .description, .shop-button {
    font-family: "Abel", 'Inter', sans-serif !important;
    font-style: normal !important;
  }
  .title{
    font-size: 49px;
  }
  .description{
    line-height: 26px;
  }
  .shop-button {
    width: 173px;
    margin: 0 auto;
  }
}
</style>
