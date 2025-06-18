<template>
  <div class="rating-container" v-if="rating">
    <HomeTitle class="title" title="Reviews" />
    <article class="rating">
      <div class="rating-inner">
        <div class="rating-top">
          <h2 class="rating-score">{{ rating.toFixed(1) }}</h2>
          <p class="review-count">of {{ reviewCount }} reviews</p>
        </div>
        <div class="rating-stars">
          <template v-for="i in 5" :key="i">
            <img :src="getStarSrc(i)" class="star-img" alt="" />
          </template>
        </div>
      </div>
    </article>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import HomeTitle from "./HomeTitle.vue";

export default defineComponent({
  name: "Rating",
  components: {
    HomeTitle
  },
  props: {
    rating: {
      type: Number,
      required: true
    },
    reviewCount: {
      type: Number,
      required: true,
    },
  },
  setup(props) {
    const getStarSrc = (index: number) => {
      const starIndex = index - 1;
      const value = Math.max(0, Math.min(props.rating - starIndex, 1));
      const percent = Math.round(value * 10); // округление до 0.1
      return `/images/stars/star-${percent}.svg`;
    }

    return {getStarSrc};
  }
});
</script>

<style scoped>
.rating-container {
  max-width: 1120px;
  margin: 88px auto;
}
.rating {
  border-radius: 25px;
  background-color: #FAFAFA;
  font-style: italic;
  color: #000;
  font-weight: 400;
  text-align: center;
  width: 184px;
  height: 192px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.rating-inner {
  display: flex;
  flex-direction: column;
}
.rating-score {
  font-size: 56px;
  line-height: 1;
  margin: 0;
}
.review-count {
  font-size: 15px;
  line-height: 1;
  opacity: 0.3;
  margin: 16px 0 0 0;
}
.rating-stars {
  display: flex;
  margin-top: 16px;
  justify-content: center;
}
.star-img {
  width: 24px;
  height: 24px;
}
.title {
  display: none;
}

@media (max-width: 991px) {
  .title {
    display: block;
  }
  .rating-container {
    padding: 0 5px;
    margin: 88px auto 40px auto;
  }
  .rating {
    margin-top: 8px;
    width: 100%;
    height: 152px;
    align-items: flex-start;
  }
  .rating-inner {
    flex-direction: row;
    margin-left: 56px;
    align-items: center;
    gap: 47px;
  }
  .rating-score,
  .review-count {
    font-family: "Abel", "Inter", sans-serif;
    font-style: normal;
  }
  .rating-stars {
    margin: 0;
  }
}
</style>
