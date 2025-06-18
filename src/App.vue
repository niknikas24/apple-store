<template>
  <HeaderTop />
  <router-view />
  <FooterStore />
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { useStore } from "vuex";
import HeaderTop from "./components/HeaderTop.vue";
import FooterStore from "./components/FooterStore.vue";

export default defineComponent({
  components: { HeaderTop, FooterStore },
  name: "App",
  setup() {
    const store = useStore();
    onMounted(() => {
      store.dispatch("allProducts/loadProducts");
    });
  },
});
</script>

<style>
@font-face {
  font-family: "ABeeZee";
  src: local("ABeeZee"), url(./assets/fonts/ABeeZee-Italic.ttf) format("truetype");
}
@font-face {
  font-family: "Abel";
  src: local("Abel"), url(./assets/fonts/Abel-Regular.ttf) format("truetype");
}
@font-face {
  font-family: "Inter";
  src: local("Inter"), url(./assets/fonts/Inter.ttf) format("truetype");
}

* {
  font: 16px ABeeZee, Abel, Inter, Helvetica, Arial, sans-serif;
}
#app {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
