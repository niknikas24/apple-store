import { ref, computed, onMounted } from "vue";
import { useStore } from "vuex";
import { Category } from "@/types/Category";

const defaultCategories: Category[] = [
  { id: 2, name: "Phones", imageUrl: "/images/Phones.svg" },
  { id: 5, name: "Smart Watches", imageUrl: "/images/SmartWatches.svg" },
  { id: 1, name: "Accessories", imageUrl: "/images/Cameras.svg" },
  { id: 6, name: "Headphones", imageUrl: "/images/Headphones.svg" },
  { id: 3, name: "Computers", imageUrl: "/images/Computers.svg" },
  { id: 4, name: "Tablets", imageUrl: "/images/Gaming.svg" },
];

export const useCategories = () => {
  const store = useStore();
  const currentIndex = ref(0);
  const visibleCount = 6;
  const categoriesContainer = ref<HTMLElement | null>(null);

  // Получаем данные из Vuex
  const categories = computed(() => {
    const storeCategories = store.state.categories.categories;
    return storeCategories.length > 0 ? storeCategories : defaultCategories;
  });

  const visibleCategories = computed(() => {
    const total = categories.value.length;
    return Array.from({ length: visibleCount }, (_, i) => {
      const index = (currentIndex.value + i) % total;
      return categories.value[index];
    });
  });

  const onNavigate = (direction: "previous" | "next") => {
    const total = categories.value.length;
    currentIndex.value = direction === "next" 
      ? (currentIndex.value + 1) % total
      : (currentIndex.value - 1 + total) % total;
  };

  // Загружаем данные при монтировании
  onMounted(() => {
    store.dispatch("categories/loadCategories");
  });

  return {
    categoriesContainer,
    visibleCategories,
    onNavigate,
    isLoading: computed(() => store.state.categories.isLoading),
    error: computed(() => store.state.categories.error),
  };
};