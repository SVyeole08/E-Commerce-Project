import axios from "../api/axiosconfig";
import { Suspense, useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroll-component";
import Loader from "../components/Loader";
import ProductTemplate from "@/components/ProductTemplate";

const Products = () => {
  const [products, setproducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);
  const fetchproducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=8&_start=${products.length}`
      );
      if (data.length == 0) {
        sethasMore(false);
      } else {
        sethasMore(true);
      }
      setproducts([...products, ...data]);
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchproducts();
  }, []);

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-6">Products</h2>
      <InfiniteScroll
        dataLength={products.length}
        next={fetchproducts}
        hasMore={hasMore}
        loader={
          <h4 className="text-center py-4 text-muted">
            <Loader />
          </h4>
        }
        endMessage={
          <p style={{ textAlign: "center" }} className="mt-6 text-muted">
            <b>Yay! You have seen it all!</b>
          </p>
        }
      >
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products && Array.isArray(products)
            ? products.map((product) => (
                <Suspense fallback={<Loader />}>
                  <ProductTemplate key={product.id} product={product} />
                </Suspense>
              ))
            : []}
        </div>
      </InfiniteScroll>
    </div>
  );
};

export default Products;
