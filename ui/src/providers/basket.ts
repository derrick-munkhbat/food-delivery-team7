import { create } from "zustand";

type Food = {
  name: "";
};
type Basket = {
  basketItems: Food[];
  totalAmount: string;
};

type DeliveryInfo = {
  additionalInfo: string;
  withCard: boolean;
  horoo: string;
  phoneNumber: string;
  apartment: string;
};

type State = {
  basket: Basket;
  deliveryInfo: DeliveryInfo;
};

type Action = {
  updateBasket: (basket: State["basket"]) => void;
  updateDeliveryInfo: (basket: State["deliveryInfo"]) => void;
};

// Create your store, which includes both state and (optionally) actions
const useBasketStore = create<Basket & DeliveryInfo & Action>((set) => ({
  basket: "",
}));

const { updateBasket, updateDeliveryInfo } = useBasketStore();

// const order = {
//   orderId: "1231",
//   totalPrice: 100,
//   status: "unpaid",
//   isDelivery: "",
// };

// const orderItem = {
//   orderId: "1231",
//   foodId: "skdjf",
//   userId: "12312",
//   quantity: 1,
// };

// const basket = {
//   totalAmount: 100,
//   basketItems: [
//     {
//       orderId: "1231",
//       foodId: "skdjf",
//       userId: "12312",
//       quantity: 1,
//     },
//     {
//       orderId: "1231",
//       foodId: "skdjf",
//       userId: "12312",
//       quantity: 1,
//     },
//   ],
// };
