const Product = ({ product }) => {
  return (
    <div className="flex justify-between py-3">
      <div className="ms-2">
        <h2>{product.name}</h2>
        {product.offer && <p>{product.offer}</p>}
      </div>
      <div className="me-2">
        <span className="me-4">₹ {product.price}</span>
        <button className="text-gray-100 font-medium rounded-sm p-2.5 text-xs bg-violet-500 hover:bg-violet-600 active:bg-violet-700 focus:outline-none focus:ring focus:ring-violet-300">
          Add
        </button>
      </div>
    </div>
  );
};

export default Product;
