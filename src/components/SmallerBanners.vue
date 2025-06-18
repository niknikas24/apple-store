<template>
  <section class="smaller-banners">
    <div class="left-banners">
      <SmallBanner
        title="Playstation 5"
        description="Incredibly powerful CPUs, GPUs, and an SSD with integrated I/O will redefine your PlayStation experience."
        :imageSrc="'/images/PlayStation.png'"
        length="long"
        class="wide-banner"
      />
      <div class="squares">
        <SmallBanner
          title="Apple AirPods Max"
          description="Computational audio. Listen, it's powerful"
          :imageSrc="'/images/airpodsmax.png'"
          variant="light"
          class="square-banner"
        />
        <SmallBanner
          title="Apple Vision Pro"
          description="An immersive way to experience entertainment"
          :imageSrc="'/images/applevisionpro.png'"
          variant="dark"
          class="square-banner"
        />
      </div>
    </div>
    <SmallBigBanner
      title="Macbook"
      titleItalic="Air"
      description="The new 15‑inch MacBook Air makes room for more of what you love with a spacious Liquid Retina display."
      :imageSrc="'/images/MacBookPro14.png'"
    />
  </section>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import SmallBanner from "./SmallBanner.vue";
import SmallBigBanner from "./SmallBigBanner.vue";

export default defineComponent({
  name: "SmallerBanners",
  components: {
    SmallBanner,
    SmallBigBanner,
  },
});
</script>

<style scoped>
.smaller-banners {
  display: flex;
  align-items: start;
  justify-content: start;
  flex-wrap: wrap;
}
.left-banners {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  font-weight: 400;
  justify-content: center;
  flex: 1;
  flex-shrink: 1;
  height: 600px;
}
.squares {
  display: flex;
  height: 272px;
  flex-wrap: wrap;
}
.square-banner {
  flex: 1;
}
@media (max-width: 991px) {
  .smaller-banners, .left-banners, .squares {
    flex-direction: column;
    height: auto;
    width: 100%;
  }
  .squares {
    order: 1;
  }
  .wide-banner{
    order: 2;
  }
}
</style>
