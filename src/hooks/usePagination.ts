import { computed } from "vue";
import { useStore } from "vuex";

export const usePagination = (itemsPerPage: number) => {
  const store = useStore();
  const filteredProducts = computed(() => store.getters["category/filteredProducts"]);
  const currentPage = computed(() => store.state.category.currentPage);
  const totalPages = computed(() => Math.ceil(filteredProducts.value.length / itemsPerPage));

  const pages = computed(() => {
    const total = totalPages.value;
    const current = currentPage.value;
    const pagesArr: Array<number | string> = [];

    if (total <= 4) {
      for (let i = 1; i <= total; i++) {
        pagesArr.push(i);
      }
    } else {
      if (current <= 2) {
        for (let i = 1; i <= 3; i++) pagesArr.push(i);
        pagesArr.push("....", total);
      } else if (current >= total - 2) {
        pagesArr.push(1, "....");
        for (let i = total - 2; i <= total; i++) pagesArr.push(i);
      } else {
        pagesArr.push(1);
        if (current > 3) pagesArr.push("....");
        pagesArr.push(current - 1, current, current + 1, "....", total);
      }
    }

    return pagesArr;
  });

  const setPage = (page: number) => store.commit("category/SET_PAGE", page);

  return {
    pages,
    currentPage,
    setPage,
  };
};
