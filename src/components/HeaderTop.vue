<template>
  <header class="header-container">
    <div class="header" :class="{ 'menu-open': isMenuOpen }" v-click-outside="closeMenu">
      <router-link to="/" class="link">
        <img alt="" src="../assets/Logo.svg" />
      </router-link>

      <button class="hamburger" @click="toggleMenu">
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
        <span class="hamburger-line"></span>
      </button>

      <div class="search-wrapper">
        <SearchInput v-model="searchQuery" class="search-field" />
        <SearchResults :search-query="searchQuery" @close="searchQuery = ''" />
      </div>

      <div class="header__buttons">
        <router-link to="/favorites" class="link" @click="closeMenu">
          <img alt="" src="../assets/Favorite.svg" />
        </router-link>
        <router-link to="/cart" class="link" @click="closeMenu">
          <img alt="" src="../assets/Cart.svg" />
        </router-link>
      </div>
    </div>
  </header>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";
import SearchResults from "./SearchResults.vue";
import { clickOutside } from "../directives/clickOutside";

export default defineComponent({
  name: "HeaderTop",
  directives: {
    clickOutside,
  },
  components: {
    SearchResults,
  },
  setup() {
    const searchQuery = ref("");
    const isMenuOpen = ref(false);

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value;
    };

    const closeMenu = () => {
      isMenuOpen.value = false;
    };

    return {
      searchQuery,
      isMenuOpen,
      toggleMenu,
      closeMenu,
    };
  },
});
</script>

<style scoped>
.header-container {
  border-bottom: 1px solid #b5b5b5;
}
.header {
  display: flex;
  height: 87px;
  max-width: 1120px;
  margin: 0 auto;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  position: relative;
  padding: 0 16px;
}
.search-wrapper {
  width: 372px;
}
.search-field {
  padding: 19px 16px;
  width: 91%;
}
.header__buttons {
  display: flex;
  width: 77px;
  justify-content: space-between;
}
.link {
  line-height: 0;
}
.hamburger {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: 8px;
}

.hamburger-line {
  display: block;
  width: 25px;
  height: 2px;
  background: #000;
  margin: 4px 0;
}

@media (max-width: 991px) {
  .header {
    height: auto;
    padding: 25px 16px;
  }
  .hamburger {
    display: block;
    margin-left: auto;
    order: 1;
  }
  .search-wrapper,
  .header__buttons {
    display: none;
    width: 100%;
    order: 2;
    margin-top: 16px;
  }
  .header.menu-open .search-wrapper,
  .header.menu-open .header__buttons {
    display: flex;
  }
  .search-wrapper {
    margin-bottom: 16px;
  }
  .header__buttons {
    justify-content: center;
    gap: 20px;
  }
}
</style>
