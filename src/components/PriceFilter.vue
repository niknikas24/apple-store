<template>
  <div class="price-filter" v-if="isInitialized">
    <div class="range-inputs">
      <div class="range-labels">
        <span class="range-label">From</span>
        <span class="range-label range-label--to">To</span>
      </div>
      <div class="range-values">
        <input type="text" v-model="minPriceFormatted" class="range-input" @input="handleMinInput" />
        <div class="range-separator"></div>
        <input type="text" v-model="maxPriceFormatted" class="range-input" @input="handleMaxInput" />
      </div>
    </div>
    <div class="range-slider" ref="slider">
      <div class="slider-track"></div>
      <div class="slider-progress" :style="progressStyle"></div>
      <div
        class="slider-thumb"
        :style="minThumbStyle"
        @mousedown="startDrag('min')"
        @touchstart.prevent="startDrag('min')"
      ></div>
      <div
        class="slider-thumb"
        :style="maxThumbStyle"
        @mousedown="startDrag('max')"
        @touchstart.prevent="startDrag('max')"
      ></div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, watch } from "vue";
import { usePriceFilter } from "@/hooks/usePriceFilter";

export default defineComponent({
  name: "PriceFilter",
  emits: ["update:price"],
  setup(_, { emit }) {
    const {
      isInitialized,
      slider,
      minPrice,
      maxPrice,
      minPriceFormatted,
      maxPriceFormatted,
      minThumbStyle,
      maxThumbStyle,
      progressStyle,
      handleMinInput,
      handleMaxInput,
      startDrag,
    } = usePriceFilter();

    // Отправка изменений
    watch([minPrice, maxPrice], () => {
      emit("update:price", [minPrice.value, maxPrice.value]);
    });

    return {
      isInitialized,
      slider,
      minPriceFormatted,
      maxPriceFormatted,
      minThumbStyle,
      maxThumbStyle,
      progressStyle,
      handleMinInput,
      handleMaxInput,
      startDrag,
    };
  },
});
</script>

<style scoped>
.price-filter {
  margin-top: 24px;
  width: 100%;
}
.range-inputs {
  width: 100%;
  font-size: 14px;
  font-weight: 400;
  letter-spacing: -0.07px;
  line-height: 24px;
}
.range-labels {
  display: flex;
  width: 100%;
  align-items: end;
  gap: 40px 100px;
  justify-content: space-between;
}
.range-label {
  color: rgba(167, 167, 167, 1);
}
.range-label--to {
  color: rgba(167, 167, 167, 1);
}
.range-values {
  display: flex;
  margin-top: 8px;
  width: 100%;
  align-items: center;
  color: #000;
  text-align: right;
  justify-content: space-between;
}
.range-input {
  border-radius: 3px;
  background-color: rgba(255, 255, 255, 1);
  border: 1px solid rgba(159, 159, 159, 1);
  padding: 8px;
  width: 30%;
  text-align: left;
  font-family: inherit;
}
.range-label, .range-input {
  font-family: 'Abel', 'Inter', sans-serif;
  font-size: 14px;
  line-height: 24px;
}
.range-separator {
  border: 1px solid rgba(231, 231, 231, 1);
  align-self: stretch;
  margin: auto 0;
  width: 20px;
}
.range-slider {
  position: relative;
  display: flex;
  margin-top: 16px;
  width: 96%;
  align-items: start;
  gap: 40px 99px;
  justify-content: start;
  height: 12px;
}
.slider-track {
  border-radius: 2px;
  background-color: rgba(206, 206, 206, 1);
  position: absolute;
  width: 104%;
  height: 4px;
  top: 4px;
}
.slider-progress {
  border-radius: 2px;
  background-color: rgba(65, 65, 65, 1);
  position: absolute;
  width: 70%;
  height: 4px;
  top: 4px;
  left: 0;
}
.slider-thumb {
  background-color: #000;
  border-radius: 50%;
  width: 12px;
  height: 12px;
  position: absolute;
  top: 0;
  cursor: pointer;
  touch-action: none;
  user-select: none;
}
.slider-thumb:first-child {
  left: 0;
}
.slider-thumb:last-child {
  left: 70%;
}
</style>
