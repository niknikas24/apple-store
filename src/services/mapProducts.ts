import { Characteristic, IIconMap } from "./../types/Product";
import { Product } from "@/types/Product";
import { BASE_URL } from "./BaseUrl";

export const mapProducts = (data: Product[]) => {
  return data.map((product: Product) => ({
    ...product,
    images: mapImages(product),
  }));
};

export const mapImages = (product: Product) => {
  return product.images.length > 0
    ? product.images.map((image) => {
        if (product.id == 101 || product.id == 103) {
          // fix not existing images
          return `/images/no-image.jpg`;
        } else {
          return image.startsWith("http") ? image : BASE_URL + image;
        }
      })
    : [`/images/no-image.jpg`];
};

export const mapCharacteristics = (product: Product) => {
  return product.characteristics.map((characteristic: Characteristic) => ({
    ...characteristic,
    unit_type: characteristic.unit_type !== "значение" ? characteristic.unit_type : "",
    icon: iconMap.find(ic => ic.name === characteristic.characteristic)?.icon || ''
  }));
};

const iconMap: IIconMap[] = [
  {name: "Процессор", icon: "/images/spec-cpu.svg"},
  {name: "Объем встроенной памяти", icon: "/images/spec-mem.svg"},
  {name: "Аккумулятор", icon: "/images/spec-battery.svg"},
  {name: "Диагональ", icon: "/images/spec-screen.svg"},
  {name: "Разрешение", icon: "/images/spec-ras.svg"},
  {name: "Питание", icon: "/images/spec-battery.svg"},
  {name: "Материал корпуса", icon: "/images/spec-mat.svg"},
  {name: "Вес", icon: "/images/spec-ves.svg"},
  {name: "Циферблат", icon: "/images/spec-cif.svg"},
  {name: "Материал", icon: "/images/spec-mat.svg"},
  {name: "Для модели", icon: "/images/spec-screen.svg"},
  {name: "Время работы", icon: "/images/spec-cif.svg"},
  {name: "Время работы от аккумулятора в кейсет", icon: "/images/spec-cif.svg"},
  {name: "Система активного шумоподавления", icon: "/images/spec-head.svg"},
  {name: "Конструкция", icon: "/images/spec-head.svg"},
  {name: "Беспроводная зарядка", icon: "/images/spec-battery.svg"},
  {name: "Кол-во ядер", icon: "/images/spec-mem.svg"},
  {name: "Объем оперативной памяти", icon: "/images/spec-cpu.svg"},
]

