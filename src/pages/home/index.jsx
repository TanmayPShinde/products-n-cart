import { useSelector } from "react-redux";

import Product from "../../components/Product";

const Home = () => {
  const { products } = useSelector((state) => state.product);

  return (
    <div className="mt-5 p-3 max-w-lg mx-auto bg-white rounded-md drop-shadow-lg">
      <h1 className="text-2xl font-semibold ">Products</h1>
      <hr className="h-px mt-2 mb-3 bg-orange-600 border-2 dark:bg-gray-700" />
      {products.map((product) => (
        <div key={product.id}>
          <Product product={product} />
          <hr className="h-px my-0 bg-gray-200 border-1 dark:bg-gray-700" />
        </div>
      ))}
    </div>
  );
};

export default Home;
