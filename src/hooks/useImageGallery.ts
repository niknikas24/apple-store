import { ref } from "vue";
import { ProductImage } from "../types/Product";

export const useImageGallery = (productImages: string[]) => {
  const mainImage: ProductImage = { url: productImages[0] };
  const images = ref(
    productImages.map((image, i) => ({
      url: image,
      isActive: i === 0,
    }))
  );

  const handleImageSelect = (index: number) => {
    images.value = images.value.map((thumb, i) => ({
      ...thumb,
      isActive: i === index,
    }));
    mainImage.url = images.value[index].url;
  };

  return { mainImage, images, handleImageSelect };
}