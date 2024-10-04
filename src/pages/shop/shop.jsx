import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { PRODUCTS } from "../../components/products";
import { Product } from "./product";
import { useNavigate } from "react-router-dom";
import "./shop.css";

export const Shop = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isFetching, setIsFetching] = useState(false);
  const { ref, inView } = useInView({
    threshold: 1.0,
  });

  const hasMoreProducts = visibleProducts < PRODUCTS.length;

  useEffect(() => {
    if (inView && !isFetching && hasMoreProducts) {
      setIsFetching(true);
      const loadMoreProducts = () => {
        setTimeout(() => {
          setVisibleProducts((prevVisible) => Math.min(prevVisible + 6, PRODUCTS.length));
          setIsFetching(false);
        }, 300);
      };
      loadMoreProducts();
    }
  }, [inView, isFetching, hasMoreProducts]);

  return (
    <div className="shop bg-gray-100 min-h-screen flex flex-col justify-center items-center">
      <div className="shopTitle text-center">
        <h1 className="font-poppins font-normal text-5xl font-bold text-[#FF4655] m-8 p-12">PRODUCT SHOP</h1>
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {PRODUCTS.slice(0, visibleProducts).map((product) => (
          <Product key={product.id} data={product} />
        ))}
      </div>

      {isFetching && hasMoreProducts && (
        <div className="loading-message fixed bottom-0 left-0 w-full bg-yellow-300 text-gray-900 text-center py-2">
          Loading...
        </div>
      )}

      {hasMoreProducts && (
        <div ref={ref} className="invisible h-8"></div>
      )}
    </div>
  );
};
