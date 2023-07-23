import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import {
  addToCart,
  incrementQuant,
  decrementQuant,
} from "../features/cartSlice";

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
      <div className="ms-2">
        <h2>{product.name}</h2>
        {product.offer && <p>{product.offer}</p>}
      </div>
      <div className="me-2">
        <span className="me-4">₹ {product.price}</span>
        {product.id in productsInCart ? (
          <span>
            <button
              onClick={() => dispatch(incrementQuant({ id: product.id }))}
            >
              Up
            </button>
            <span>{productsInCart[product.id]}</span>

            <button
              onClick={() => dispatch(decrementQuant({ id: product.id }))}
            >
              Do
            </button>
          </span>
        ) : (
          <button
            onClick={() => addProduct(product)}
            className="text-gray-100 font-medium rounded-sm p-2.5 text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300"
          >
            Add
          </button>
        )}
      </div>
    </div>
  );
};

export default Product;
