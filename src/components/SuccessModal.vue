<template>
  <div v-if="isVisible" class="modal-overlay" @click.self="close">
    <div class="modal">
      <span class="close" @click="close">&times;</span>
      <p class="message">Order accepted!</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "SuccessModal",
  props: {
    isVisible: {
      type: Boolean,
      required: false,
    },
  },
  emits: ["close"],
  setup(_, { emit }) {
    const close = () => {
      emit("close");
    };

    return {
      close,
    };
  },
});
</script>

<style scoped>
.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}
.modal {
  background-color: #4caf50;
  padding: 32px;
  border-radius: 8px;
  position: relative;
  min-width: 275px;
  text-align: center;
}
.close {
  position: absolute;
  right: 16px;
  top: 8px;
  cursor: pointer;
  font-size: 30px;
  color: white;
  font-family: "Abel", "Inter", sans-serif;
  font-style: normal;
}
.message {
  color: white;
  font-size: 18px;
  margin: 0;
}
</style>
