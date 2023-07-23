import { useSelector } from "react-redux";

import CartItem from "../../components/CartItem";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <div className="mt-5 p-3 max-w-lg mx-auto bg-white rounded-md drop-shadow-lg">
        <h1 className="text-2xl font-semibold ">Basket</h1>
        <hr className="h-px mt-2 mb-3 bg-gray-200 border-2 dark:bg-gray-700" />
        {cartItems.length > 0 ? (
          cartItems.map((item) => <CartItem item={item} key={item.id} />)
        ) : (
          <p className="text-sm ">
            Empty Cart,{" "}
            <Link to="/" className="text-violet-500">
              let's fill it up!
            </Link>
          </p>
        )}
      </div>
      <div className="text-center">
        <Link to="/">
          <button className="text-violet-500 font-medium rounded-sm !mt-5 py-1 px-2 text-xs bg-gray-200 hover:bg-violet-600 hover:text-white">
            Go back
          </button>
        </Link>
      </div>
    </>
  );
};

export default Cart;
