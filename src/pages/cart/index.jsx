import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import CartItem from "../../components/CartItem";
import { check_for_offers, check_for_soup } from "../../utils/functions";

const Cart = () => {
  const { cartItems } = useSelector((state) => state.cart);
  console.log("success");

  const isSoupPresent = check_for_soup(cartItems);

  let itemsPricing = {};
  let subTotal = 0;
  let savings = 0;
  let amount = 0;
  cartItems.forEach((item) => {
    let itemPrice = item.price * item.quantity;
    let saving = check_for_offers(item, itemPrice, isSoupPresent);
    let itemCost = itemPrice - saving;

    subTotal += itemPrice;
    savings += saving;
    amount += itemCost;

    itemsPricing[item.id] = {
      itemPrice,
      saving,
      itemCost,
    };
  });

  itemsPricing = {
    ...itemsPricing,
    subTotal,
    savings,
    amount,
  };

  return (
    <>
      <div className="mt-5 p-3 max-w-lg mx-auto bg-white rounded-md drop-shadow-lg">
        <h1 className="text-2xl font-semibold ">Basket</h1>
        <hr className="h-px mt-2 mb-3 bg-gray-200 border-2 dark:bg-gray-700" />
        {cartItems.length > 0 ? (
          cartItems.map((item) => (
            <div key={item.id}>
              <CartItem item={item} />
              <hr className="h-px my-0 bg-gray-200 border-1 dark:bg-gray-700" />
            </div>
          ))
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
