import { useDispatch } from "react-redux";
import { decrementQuant, incrementQuant } from "../features/cartSlice";

const CartItem = ({ item }) => {
  const dispatch = useDispatch();

  return (
    <div className="flex justify-between py-3">
      <div className="ms-2">
        <h2>{item.name}</h2>
      </div>
      <div className="me-2">
        <span className="me-4">₹ {item.price}</span>
        <span>
          <button
            onClick={() => dispatch(decrementQuant({ id: item.id }))}
            className="text-gray-100 font-medium rounded-sm h-6 w-6 text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            -
          </button>
          <div className="bg-gray-200 border-1 !h-6 w-8 px-2 inline-flex items-center justify-center text-sm font-medium">
            {item.quantity}
          </div>
          <button
            onClick={() => dispatch(incrementQuant({ id: item.id }))}
            className="text-gray-100 font-medium rounded-sm text-xs h-6 w-6 bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            +
          </button>
        </span>
      </div>
    </div>
  );
};

export default CartItem;
