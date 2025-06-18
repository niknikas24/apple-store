export interface OrderItem {
  productId: number;
  quantity: number;
  price: number;
}

export interface OrderTotals {
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
}

export interface OrderData {
  discountCode: string;
  bonusCard: string;
  items: OrderItem[];
  totals: OrderTotals;
}