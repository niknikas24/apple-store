import { computed, ref } from "vue";
import { useStore } from "vuex";
import { createOrder } from "../services/orderService";
import { OrderData } from "../types/Order";

export const useOrder = () => {
  const store = useStore();
  const discountCode = ref("");
  const bonusCard = ref("");
  const showSuccessModal = ref(false);

  const cartItems = computed(() => store.getters["cart/cartItems"]);

  const total = computed(() => cartItems.value.reduce((acc: number, item: any) => acc + item.price * item.quantity, 0));

  const estimatedTax = computed(() => total.value * 0.13);
  const estimatedShipping = computed(() => total.value * 0.08);
  const subtotal = computed(() => total.value - estimatedTax.value - estimatedShipping.value);

  const prepareOrderData = (): OrderData => ({
    discountCode: discountCode.value,
    bonusCard: bonusCard.value,
    items: cartItems.value.map((item) => ({
      productId: item.id,
      quantity: item.quantity,
      price: item.price,
    })),
    totals: {
      subtotal: subtotal.value,
      tax: estimatedTax.value,
      shipping: estimatedShipping.value,
      total: total.value,
    },
  });

  const handleCheckout = async () => {
    await createOrder(prepareOrderData());
    showSuccessModal.value = true;
    store.dispatch("cart/clearCart");
  };

  return {
    discountCode,
    bonusCard,
    total,
    estimatedTax,
    estimatedShipping,
    subtotal,
    handleCheckout,
    cartItems,
    showSuccessModal
  };
};
