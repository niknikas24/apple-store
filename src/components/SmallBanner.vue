<template>
  <article :class="['small-banner', `small-banner_${variant}`, `small-banner_${length}`]">
    <img :src="imageSrc" :alt="title" class="small-banner__image" />
    <div class="small-banner__content">
      <div class="small-banner__title">{{ title }}</div>
      <p class="small-banner__description">{{ description }}</p>
    </div>
  </article>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SmallBanner",
  props: {
    title: {
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
    variant: {
      type: String,
      default: "white",
      validator: (value: string) => ["light", "dark", "white"].includes(value),
    },
    length: {
      type: String,
      default: "short",
      validator: (value: string) => ["short", "long"].includes(value),
    },
  },
});
</script>

<style scoped>
.small-banner {
  position: relative;
  display: flex;
  min-width: 240px;
  overflow: hidden;
}
.small-banner_light {
  background-color: #EDEDED;
}
.small-banner_dark {
  background-color: #353535;
}
.small-banner_long .small-banner__image {
  margin-bottom: -7%;
  margin-left: -8%;
}
.small-banner__image {
  margin-left: -38%;
}
.small-banner_dark .small-banner__image {
  height: 135px;
  margin: auto 0 auto -48%;
}
.small-banner__content {
  margin: auto 50px;
}
.small-banner_dark .small-banner__content {
  margin: auto 50px auto 20px;
}
.small-banner__title {
  font-size: 29px;
  line-height: 40px;
}
.small-banner_long .small-banner__title {
  font-size: 49px;
}
.small-banner_dark .small-banner__title {
  color: #fff;
}
.small-banner__description {
  color: #909090;
  font-size: 14px;
  line-height: 24px;
  margin: 8px 0 0;
}
.small-banner_long .small-banner__description {
  margin: 16px 0 0;
}

@media (max-width: 991px) {
  .small-banner {
    display: block;
    text-align: center;
  }
  .small-banner__title,
  .small-banner_long .small-banner__title,
  .small-banner__description {
    font-family: Abel, sans-serif;
  }
  .small-banner__title,
  .small-banner_long .small-banner__title {
    font-size: 34px;
  }
  .small-banner_long .small-banner__description,
  .small-banner__description {
    font-size: 16px;
    margin: 4px auto 40px;
  }
  .small-banner__image,
  .small-banner_long .small-banner__image,
  .small-banner_dark .small-banner__image {
    display: block;
    margin: 40px auto 20px auto;
    height: 200px;
  }
  .small-banner_dark .small-banner__image {
    height: auto;
    width: 305px;
    margin: 60px auto;
  }
  .small-banner__content, .small-banner_dark .small-banner__content {
    margin: auto 10px;
  }
}
</style>
