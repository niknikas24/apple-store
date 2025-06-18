import { ref, onMounted, onBeforeUnmount } from "vue";

export const useBannersPopular = () => {
  const currentIndex = ref(0);
  const isMobile = ref(window.innerWidth <= 991);

  const banners = ref([
    {
      title: "Popular Products",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/banner1.png",
      categoryId: "2",
    },
    {
      title: "Ipad Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/banner2.png",
      categoryId: "4",
      class: "light",
    },
    {
      title: "Samsung Galaxy",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/banner3.png",
      categoryId: "2",
      class: "gray",
    },
    {
      title: "Macbook Pro",
      description:
        "iPad combines a magnificent 10.2-inch Retina display, incredible performance, multitasking and ease of use.",
      image: "/images/banner4.png",
      categoryId: "3",
      isDark: true,
    },
  ]);

  const checkIsMobile = () => {
    isMobile.value = window.innerWidth <= 991;
  };

  onMounted(() => {
    window.addEventListener("resize", checkIsMobile);
  });

  onBeforeUnmount(() => {
    window.removeEventListener("resize", checkIsMobile);
  });

  return {
    banners,
    currentIndex,
    isMobile,
  };
};
