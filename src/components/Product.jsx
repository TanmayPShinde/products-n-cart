import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addToCart,
  incrementQuant,
  decrementQuant,
  removeFromCart,
} from "../features/cartSlice";
import PrimaryButton from "./shared/PrimaryButton";

const Product = ({ product }) => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);

  const productsInCart = {};
  cartItems.forEach((item) => {
    productsInCart[item.id] = item.quantity;
  });

  console.log(productsInCart);

  const addProduct = (product) => {
    let item = { ...product, quantity: 1 };
    dispatch(addToCart(item));
  };

  return (
    <div className="flex justify-between py-3">
      <div className="ms-2 flex justify-center">
        <img
          src={product.image}
          alt="product"
          className="w-10 me-2 rounded-lg"
        />
        <span>
          <h2 className="font-medium">{product.name}</h2>
          {product.offer && (
            <h4 className="text-xs text-red-500 ">{product.offer}</h4>
          )}
        </span>
      </div>
      <div className="me-2">
        <span className="me-4">₹ {product.price}</span>
        {product.id in productsInCart ? (
          <span>
            <button
              onClick={() => dispatch(removeFromCart({ id: product.id }))}
              className="text-gray-100 font-medium rounded-sm h-6 w-6 me-2 text-xs bg-gray-400 hover:bg-red-400 active:bg-red-600 focus:outline-none focus:ring focus:ring-red-200"
            >
              ❌
            </button>
            <PrimaryButton
              onClickHandler={() =>
                dispatch(decrementQuant({ id: product.id }))
              }
              sx="text-xs h-6 w-6"
              text="➖"
            />
            <div className="bg-gray-200 border-1 !h-6 w-8 px-2 inline-flex items-center justify-center text-sm font-medium">
              {productsInCart[product.id]}
            </div>
            <PrimaryButton
              onClickHandler={() =>
                dispatch(incrementQuant({ id: product.id }))
              }
              sx="text-xs h-6 w-6"
              text="➕"
            />
          </span>
        ) : (
          <PrimaryButton
            onClickHandler={() => addProduct(product)}
            text="Add"
            sx="p-2.5"
          />
        )}
      </div>
    </div>
  );
};

export default Product;
