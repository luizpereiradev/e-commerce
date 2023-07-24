import { FiShoppingCart } from "react-icons/fi";

type OrderUpdateProps = {
    orderNumber: string;
    amount: string;
};

const OrderUpdate = ({ orderNumber, amount }: OrderUpdateProps) => {
  return (
    <div className="flex items-center justify-between pt-5">
      <div className="flex items-center">
        <div className="w-12 h-12 flex items-center justify-center rounded bg-purple-200">
          <FiShoppingCart size={24} color="#A78BFA" />
        </div>
        <p className="text-gray-600 text-sm font-medium pl-3">
          Order #{orderNumber}
        </p>
      </div>
      <p className="text-sm font-medium text-indigo-500">${amount}</p>
    </div>
  );
};

export default OrderUpdate;