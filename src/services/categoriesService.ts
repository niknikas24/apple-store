import { Category } from "@/types/Category";
import { BASE_URL } from "./BaseUrl";

const defaultCategories: Category[] = [
  { id: 2, name: "Phones", imageUrl: "/images/Phones.svg" },
  { id: 5, name: "Smart Watches", imageUrl: "/images/SmartWatches.svg" },
  { id: 1, name: "Accessories", imageUrl: "/images/Cameras.svg" },
  { id: 6, name: "Headphones", imageUrl: "/images/Headphones.svg" },
  { id: 3, name: "Computers", imageUrl: "/images/Computers.svg" },
  { id: 4, name: "Tablets", imageUrl: "/images/Gaming.svg" },
];

export const fetchCategories = async (): Promise<Category[] | undefined> => {
  try {
    const response = await fetch(`${BASE_URL}api/category`);
    if (!response.ok) throw new Error('Failed to fetch categories');
    const data: Category[] = await response.json();
    
    // Добавляем imageUrl из дефолтных данных
    return data.map(category => ({
      ...category,
      imageUrl: defaultCategories.find(c => c.id === category.id)?.imageUrl || ''
    }));
  } catch (error) {
    console.error('Error fetching categories:', error);
    return undefined;
  }
};