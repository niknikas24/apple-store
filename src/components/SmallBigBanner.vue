<template>
  <article class="smallbig-banner">
    <div class="smallbig-banner__content">
      <div class="smallbig-banner__text">
        <h2 class="smallbig-banner__title">
          {{ title }} <span class="smallbig-banner__title-italic">{{ titleItalic }}</span>
        </h2>
        <p class="smallbig-banner__description">
          {{ description }}
        </p>
      </div>
      <ButtonStore class="smallbig-banner__button" @click="$router.push('/category/3')">Shop Now</ButtonStore>
    </div>
    <div class="smallbig-banner__image-container">
      <img :src="imageSrc" alt="" class="smallbig-banner__image" />
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "smallbigBanner",
  props: {
    title: {
      type: String,
      required: true,
    },
    titleItalic: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    imageSrc: {
      type: String,
      required: true,
    },
  },
});
</script>

<style scoped>
.smallbig-banner {
  background-color: #ededed;
  position: relative;
  display: flex;
  min-width: 240px;
  min-height: 600px;
  align-items: center;
  overflow: hidden;
  flex: 1;
}
.smallbig-banner__content {
  min-width: 50%;
  margin: auto 0 auto 50px;
}
.smallbig-banner__title {
  color: #000;
  font-size: 64px;
  font-family: 'Abel', 'Inter', sans-serif;
  line-height: 56px;
  margin: 0;
}
.smallbig-banner__title-italic {
  font-style: italic;
  font-size: 64px;
  line-height: 56px;
}
.smallbig-banner__description {
  color: #909090;
  font-size: 14px;
  line-height: 24px;
  margin: 16px 0 0;
}
.smallbig-banner__button {
  border: 1px solid #000;
  margin-top: 16px;
  padding: 16px 56px;
  color: #000;
  background: transparent;
}

@media (max-width: 991px) {
  .smallbig-banner {
    flex-direction: column;
    width: 100%;
    text-align: center;
    min-height: auto;
  }
  .smallbig-banner__content {
    width: 330px;
    margin: 10px auto 40px;
    order: 2;
  }
  .smallbig-banner__title,
  .smallbig-banner__title-italic,
  .smallbig-banner__description,
  .smallbig-banner__button {
    font-family: 'Abel', 'Inter', sans-serif !important;
    font-style: normal !important;
  }
  .smallbig-banner__title,
  .smallbig-banner__title-italic {
    font-size: 34px;
    line-height: 40px;
  }
  .smallbig-banner__description {
    font-size: 16px;
    line-height: 24px;
    margin: 10px 0 0;  }

  .smallbig-banner__button {
    width: 100%;
  }
  .smallbig-banner__image-container {
    margin: 55px 0 30px 0;
  }
  .smallbig-banner__image {
    width: 271px;
    order: 1;
  }
}
</style>
