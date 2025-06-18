import { Product } from "@/types/Product";
import { BASE_URL } from "./BaseUrl";
import { mapImages, mapCharacteristics } from "./mapProducts";

export const fetchProduct = async (productId: number): Promise<Product> => {
  const response = await fetch(`${BASE_URL}api/products/${productId}`);
  if (!response.ok) throw new Error("Product not found");

  const product: Product = await response.json();

  return {
    ...product,
    characteristics: mapCharacteristics(product),
    images: mapImages(product),
  };
};
