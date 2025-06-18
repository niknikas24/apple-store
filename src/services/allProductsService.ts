import { Product } from '@/types/Product';
import { BASE_URL } from "./BaseUrl";
import { mapProducts } from './mapProducts';

export const fetchAllProducts = async (): Promise<Product[]> => {
  const response = await fetch(`${BASE_URL}api/products/`);
  if (!response.ok) throw new Error('Failed to fetch products');
  const data: Product[] = await response.json();

  return mapProducts(data);
};