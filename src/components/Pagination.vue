<template>
  <nav class="pagination" aria-label="Pagination" v-if="pages.length > 0">
    <button @click="prevPage" class="nav-button">
      <img src="/images/pag-left.svg" class="nav-icon" alt="" />
    </button>

    <div class="page-numbers">
      <template v-for="page in pages" :key="page">
        <span class="dots" v-if="page === '....'">....</span>
        <PaginationButton v-else :isActive="currentPage === page" @click="setPage(page as number)">
          {{ page }}
        </PaginationButton>
      </template>
    </div>

    <button @click="nextPage" class="nav-button">
      <img src="/images/pag-right.svg" class="nav-icon" alt="" />
    </button>
  </nav>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import PaginationButton from "./PaginationButton.vue";
import { useCategory } from "@/hooks/useCategory";
import { usePagination } from "@/hooks/usePagination";


export default defineComponent({
  name: "Pagination",
  components: { PaginationButton },
  emits: ["page-change"],
  setup() {
    const { currentPage, itemsPerPage } = useCategory();
    const { pages, setPage } = usePagination(itemsPerPage.value);

    const prevPage = () => {
      if (currentPage.value > 1) setPage(currentPage.value - 1);
    };
    const nextPage = () => {
      if (currentPage.value < pages.value[pages.value.length - 1]) {
        setPage(currentPage.value + 1);
      }
    };

    return { pages, currentPage, setPage, prevPage, nextPage };
  },
});
</script>

<style scoped>
.pagination {
  display: flex;
  padding: 40px 0 0 0;
  align-items: center;
  gap: 16px;
  font-style: italic;
  font-size: 16px;
  color: #000;
  font-weight: 400;
  white-space: nowrap;
  text-align: center;
  letter-spacing: 0.48px;
  justify-content: center;
}
.page-numbers {
  align-self: stretch;
  display: flex;
  margin: auto 0;
  align-items: flex-end;
  gap: 8px;
  justify-content: flex-start;
}
.ellipsis {
  display: flex;
  min-height: 6px;
  padding-bottom: 3px;
  gap: 4px;
  align-items: flex-end;
  font-style: italic;
}
.nav-button {
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
}
.nav-icon {
  aspect-ratio: 1;
  object-fit: contain;
  object-position: center;
  width: 24px;
  align-self: stretch;
  margin: auto;
  flex-shrink: 0;
}
.nav-button:last-child .nav-icon {
  width: 23px;
  aspect-ratio: 0.96;
}
.dots {
  font-size: 25px;
  color: #737373;
  line-height: 0.9;
  letter-spacing: -1px;
}
</style>
