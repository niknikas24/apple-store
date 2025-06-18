import { Product } from "../types/Product";
import { BASE_URL } from "./BaseUrl";
import { mapProducts } from "./mapProducts";

export const fetchCategoryProducts = async (categoryId: number): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}api/category/${categoryId}`);
  if (!response.ok) throw new Error('Failed to fetch products');
  const data: Product[] = await response.json();
  
  return mapProducts(data);
};