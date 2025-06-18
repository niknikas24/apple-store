import { OrderData } from '@/types/Order';

export const createOrder = async (orderData: OrderData) => {
  const response = await fetch('http://localhost:1452/api/order', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(orderData),
  });
};