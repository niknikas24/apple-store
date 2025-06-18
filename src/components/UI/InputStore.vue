<template>
  <div class="input-group">
    <label v-if="label" class="input-label">{{ label }}</label>
    <div class="input-wrap">
      <input
        type="text"
        :class="['input-field', { 'input-field_apply': buttonTitle }]"
        :placeholder="placeholder"
        :value="modelValue"
        @input="$emit('update:modelValue', ($event.target as HTMLInputElement).value)"
      />
      <button v-if="buttonTitle" class="apply-button">{{ buttonTitle }}</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "InputStore",
  props: {
    buttonTitle: { type: String },
    placeholder: { type: String },
    label: { type: String },
    modelValue: { type: String },
  },
  emits: ["update:modelValue"],
});
</script>

<style scoped>
.input-group {
  width: 100%;
  margin-bottom: 24px;
}

.input-label {
  color: rgba(84, 84, 84, 1);
  font-size: 14px;
  line-height: 1;
  display: block;
  margin-bottom: 8px;
}
.input-wrap {
  position: relative;
}
.input-field {
  width: 96%;
  padding: 16px 0 16px 16px;
  border-radius: 7px;
  border: 0.5px solid #9f9f9f;
  background-color: #fff;
  font-family: Abel, -apple-system, Roboto, Helvetica, sans-serif;
  color: rgba(151, 151, 151, 1);
  font-size: 14px;
  letter-spacing: -0.07px;
  line-height: 24px;
}
.input-field_apply {
  padding: 19px 0 19px 16px;
}
.apply-button {
  position: absolute;
  top: 18px;
  right: 16px;
  width: 76px;
  border-radius: 6px;
  border: 1px solid #000;
  padding: 8px;
  font-style: italic;
  font-size: 12px;
  color: #000;
  text-align: center;
  line-height: 1;
  background: transparent;
  cursor: pointer;
}

@media (max-width: 991px) {
  .apply-button, .input-label{
    font-family: 'Abel', 'Inter', sans-serif;
    font-style: normal;
  }
  .input-field {
    width: 95%;
  }
}
</style>
