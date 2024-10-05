import React, { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; // Ensure the styles for the range slider are imported
import { PRODUCTS } from "../../components/products";
import { Product } from "./product";
import "./shop.css"; // Your custom CSS file

export const Shop = () => {
  const [visibleProducts, setVisibleProducts] = useState(6);
  const [isFetching, setIsFetching] = useState(false);
  const [priceRange, setPriceRange] = useState([0, 15000]); // Initialize the price range
  const { ref, inView } = useInView({
    threshold: 1.0,
  });
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  const hasMoreProducts = visibleProducts < filteredProducts.length;

  // Filter products based on the price range
  useEffect(() => {
    const filteredAndSortedProducts = PRODUCTS.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    ).sort((a, b) => a.price - b.price); // Sorting by price in ascending order

    setFilteredProducts(filteredAndSortedProducts);
    setVisibleProducts(6); // Reset visible products when price range changes
  }, [priceRange]);

  // Load more products on scroll when inView
  useEffect(() => {
    if (inView && !isFetching && hasMoreProducts) {
      setIsFetching(true);
      const loadMoreProducts = () => {
        setTimeout(() => {
          setVisibleProducts((prevVisible) =>
            Math.min(prevVisible + 6, filteredProducts.length)
          );
          setIsFetching(false);
        }, 300);
      };
      loadMoreProducts();
    }
  }, [inView, isFetching, hasMoreProducts, filteredProducts.length]);

  // Handle price range changes
  const handlePriceRangeChange = (value) => {
    setPriceRange(value);
  };

  return (
    <div className="shop min-h-screen flex flex-col justify-center items-center">
      <div className="shopTitle text-center">
        <h1 className="font-poppins font-normal text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
      </div>

      {/* Range Slider for selecting price range */}
      <div className="price-filter flex flex-col justify-center items-center my-4">
        <label className="text-xl font-bold m-5 text-red-500">
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </label>
        <RangeSlider
          min={0}
          max={15000}
          step={3000}
          value={priceRange}
          onInput={setPriceRange}
          thumbsDisabled={[false, false]} // Both ends can be moved
          rangeSlideDisabled={false} // Enable range selection
        />
      </div>

      <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {filteredProducts.slice(0, visibleProducts).map((product) => (
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
