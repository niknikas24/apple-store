<template>
  <div class="error-message">{{ message }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorMessage',
  props: {
    message: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.error-message {
  text-align: center;
  padding: 2rem;
  background: #e06e79;
  color: #ffffff;
  border-radius: 1rem;
}
</style>