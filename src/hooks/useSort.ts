import { ref } from "vue";
import { useStore } from "vuex";

type SortOption = {
  value: "rating" | "price" | "createdAt";
  label: string;
};

export const useSort = () => {
  const store = useStore();
  const options: SortOption[] = [
    { value: "rating", label: "By rating" },
    { value: "price", label: "By price" },
    { value: "createdAt", label: "By delivery" },
  ];

  const isOpen = ref(false);
  const selectedOption = ref(options[0].label);

  const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
  };

  const selectOption = (option: SortOption) => {
    selectedOption.value = option.label;
    store.commit("category/SET_SORT", option.value);
    isOpen.value = false;
  };

  return {
    options,
    isOpen,
    selectedOption,
    toggleDropdown,
    selectOption,
  };
};
