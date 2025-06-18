<template>
  <section class="gallery">
    <div class="thumbnails">
      <img
        v-for="(image, index) in images"
        :key="index"
        :src="image.url"
        alt=""
        :class="['thumbnail', { thumbnail_active: image.isActive }]"
        @click="handleImageSelect(index)"
      />
    </div>
    <div class="main-image">
      <img :src="mainImage.url" alt="" class="main-image__img" />
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { useImageGallery } from "@/hooks/useImageGallery";

export default defineComponent({
  name: "ImageGallery",
  props: {
    productImages: {
      type: Array as () => string[],
      required: true,
    },
  },
  setup(props) {
    const { mainImage, images, handleImageSelect } = useImageGallery(props.productImages);
    return { mainImage, images, handleImageSelect };
  },
});
</script>

<style scoped>
.gallery {
  display: flex;
  width: 536px;
  align-items: center;
  gap: 48px;
}
.thumbnails {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
}
.thumbnail {
  width: 75px;
  height: 93px;
  opacity: 0.4;
  cursor: pointer;
}
.thumbnail_active {
  opacity: 1;
}
.main-image__img {
  width: 413px;
  height: 516px;
  object-fit: contain;
}

@media (max-width: 991px) {
  .gallery {
    width: 100%;
    flex-direction: column;
    gap: 30px;
  }
  .thumbnails {
    order: 2;
    flex-direction: row;
  }
  .thumbnail {
    width: 66px;
    height: 74px;
  }
  .main-image {
    order: 1;
  }
  .main-image__img {
    width: 90%;
    height: auto;
    margin: 0 auto;
    display: block;
  }
}
</style>
