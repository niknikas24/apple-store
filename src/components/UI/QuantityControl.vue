<template>
  <div class="quantity-control">
    <button type="button" class="icon-button icon-minus" @click="updateQuantity(-1)"></button>
    <input type="number" class="quantity-value" v-model="modelValue" />
    <button type="button" class="icon-button icon-plus" @click="updateQuantity(1)"></button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "QuantityControl",
  props: {
    modelValue: {
      type: Number,
      default: 1
    },
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const updateQuantity = (change: number) => {
      const newValue = props.modelValue + change;
      if (newValue >= 1) {
        emit("update:modelValue", newValue);
      }
    };

    return {
      updateQuantity,
    };
  },
});
</script>

<style scoped>
.quantity-control {
  display: flex;
  align-items: center;
  gap: 8px;
}
.quantity-value {
  color: #000;
  width: 32px;
  height: 30px;
  text-align: center;
  border-radius: 4px;
  border: 0.5px solid #d9d9d9;
}
input::-webkit-outer-spin-button,
input::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}
.icon-button {
  height: 24px;
  width: 24px;
  border: none;
  padding: 0;
  cursor: pointer;
}
.icon-minus {
  background: url("../../assets/minus.svg") center center no-repeat;
}
.icon-plus {
  background: url("../../assets/plus.svg") center center no-repeat;
}
@media (max-width: 991px) {
  .quantity-value {
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
}
</style>
