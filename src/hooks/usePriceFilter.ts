import { ref, computed, onMounted, onUnmounted, watch } from "vue";
import { Product } from "../types/Product";
import { useStore } from "vuex";

export const usePriceFilter = () => {
  const store = useStore();
  const isInitialized = ref(false);

  // Получаем текущий priceRange из хранилища
  const currentPriceRange = computed(() => store.state.category.filters.priceRange);

  // Получаем минимальную и максимальную цену из Vuex
  const minMaxPrices = computed(() => {
    const products = store.state.category.products as Product[];
    if (!products.length) return [0, 0];

    const prices = products.map((p) => p.discount_price || p.price);
    return [Math.min(...prices), Math.max(...prices)];
  });

  const minLimit = ref(0);
  const maxLimit = ref(0);
  const minPrice = ref(1299);
  const maxPrice = ref(1299);

  // Инициализация лимитов
  watch(
    [minMaxPrices, currentPriceRange],
    ([newMinMax, newPriceRange]) => {
      const [productsMin, productsMax] = newMinMax;
      const [savedMin = productsMin, savedMax = productsMax] = newPriceRange || [];
      
      minLimit.value = productsMin;
      maxLimit.value = productsMax;
      
      // Устанавливаем значения из хранилища или пределы
      minPrice.value = Math.max(productsMin, savedMin);
      maxPrice.value = Math.min(productsMax, savedMax);
      
      isInitialized.value = true;
    },
    { immediate: true }
  );

  const slider = ref<HTMLElement | null>(null);
  const dragging = ref<"min" | "max" | null>(null);
  const sliderWidth = ref(0);

  // Форматирование значений для отображения
  const formatPrice = (value: number) => value.toFixed(0).replace(/\B(?=(\d{3})+(?!\d))/g, " ");

  const minPriceFormatted = computed(() => formatPrice(minPrice.value));
  const maxPriceFormatted = computed(() => formatPrice(maxPrice.value));

  // Стили для позиционирования элементов
  const minThumbStyle = computed(() => {
    const range = maxLimit.value - minLimit.value;
    if (range <= 0) return { left: "0%" };
    const left = ((minPrice.value - minLimit.value) / range) * 100;
    return { left: `${left}%` };
  });

  const maxThumbStyle = computed(() => {
    const range = maxLimit.value - minLimit.value;
    if (range <= 0) return { left: "0%" };
    const left = ((maxPrice.value - minLimit.value) / range) * 100;
    return { left: `${Math.min(left, 100)}%` };
  });

  const progressStyle = computed(() => {
    const range = maxLimit.value - minLimit.value;
    if (range <= 0) return { width: "0%", left: "0%" };

    const left = ((minPrice.value - minLimit.value) / range) * 100;
    const width = ((maxPrice.value - minPrice.value) / range) * 100;

    return {
      width: `${Math.min(width, 100)}%`,
      left: `${Math.max(left, 0)}%`,
    };
  });

  // Обработка ввода
  const parseInput = (value: string) => parseInt(value.replace(/\s/g, "")) || 0;

  const handleMinInput = (event: Event) => {
    const value = parseInput((event.target as HTMLInputElement).value);
    minPrice.value = Math.max(minLimit.value, Math.min(value, maxPrice.value));
  };

  const handleMaxInput = (event: Event) => {
    const value = parseInput((event.target as HTMLInputElement).value);
    maxPrice.value = Math.min(maxLimit.value, Math.max(value, minPrice.value));
  };

  // Логика перетаскивания
  const startDrag = (type: "min" | "max") => {
    dragging.value = type;
  };

  const handleMove = (event: MouseEvent | TouchEvent) => {
    if (!dragging.value || !slider.value) return;

    const clientX = "touches" in event ? event.touches[0].clientX : event.clientX;
    const rect = slider.value.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.min(Math.max(x / rect.width, 0), 1);
    let newValue = minLimit.value + percentage * (maxLimit.value - minLimit.value);

    if (dragging.value === "min") {
      newValue = Math.max(minLimit.value, Math.min(newValue, maxPrice.value));
      minPrice.value = newValue;
    } else {
      newValue = Math.min(maxLimit.value, Math.max(newValue, minPrice.value));
      maxPrice.value = newValue;
    }

    if ("touches" in event) event.preventDefault();
  };

  const stopDrag = () => {
    dragging.value = null;
  };

  // Инициализация
  onMounted(() => {
    if (slider.value) {
      sliderWidth.value = slider.value.offsetWidth;
    }
    window.addEventListener("mousemove", handleMove);
    window.addEventListener("touchmove", handleMove, { passive: false });
    window.addEventListener("mouseup", stopDrag);
    window.addEventListener("touchend", stopDrag);
  });

  onUnmounted(() => {
    window.removeEventListener("mousemove", handleMove);
    window.removeEventListener("touchmove", handleMove);
    window.removeEventListener("mouseup", stopDrag);
    window.removeEventListener("touchend", stopDrag);
  });

  return {
    isInitialized,
    slider,
    minPrice,
    maxPrice,
    minPriceFormatted,
    maxPriceFormatted,
    minThumbStyle,
    maxThumbStyle,
    progressStyle,
    handleMinInput,
    handleMaxInput,
    startDrag,
    stopDrag,
  };
};
