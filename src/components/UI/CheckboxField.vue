<template>
  <label 
    :class="['checkbox-field', { 'checkbox-field_selected': modelValue }]"
    @click.prevent="handleClick"
  >
    <div
      :class="['checkbox-indicator', { 'checkbox-indicator_selected': modelValue }]"
      role="checkbox"
      :aria-checked="modelValue"
    ></div>
    <div class="checkbox-label">
      <span class="label-text">{{ label }}</span>
      <span class="count-text">{{ count }}</span>
    </div>
  </label>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "CheckboxField",
  props: {
    label: {
      type: String,
      required: true
    },
    count: {
      type: Number,
      required: true
    },
    modelValue: {
      type: Boolean,
      required: true
    }
  },
  emits: ["update:modelValue"],
  setup(props, { emit }) {
    const handleClick = () => {
      emit("update:modelValue", !props.modelValue);
    };

    return {
      handleClick
    };
  }
});
</script>

<style scoped>
.checkbox-field {
  display: flex;
  width: 100%;
  align-items: center;
  gap: 8px;
  cursor: pointer;
  font-size: 14px;
  color: #000000;
  font-weight: 400;
  line-height: 24px;
}
.checkbox-indicator {
  border-radius: 3px;
  border: 1px solid rgba(211, 211, 211, 1);
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: center;
  justify-content: center;
  width: 15px;
  height: 15px;
}
.checkbox-indicator_selected {
  background: #000000 url("../../assets/check.svg") center center no-repeat;
  border: 1px solid #000000;
}
.checkbox-label {
  align-self: stretch;
  margin: auto 0;
  flex: 1;
}
.label-text {
  font-size: 15px;
  line-height: 24px;
}
.count-text {
  font-size: 12px;
  color: rgba(146, 146, 146, 1);
  margin-left: 4px;
  font-family: 'Abel', 'Inter', sans-serif;
  line-height: 24px;
}
@media (max-width: 991px) {
  .label-text {
    font-family: 'Abel', 'Inter', sans-serif;
  }
}
</style>
