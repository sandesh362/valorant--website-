import React, { useState, useEffect, useContext } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Product } from "./product";
import "./shop.css";
import { ShopContext } from "../../components/context/shop-context";

export const Shop = () => {
  // Get products from context instead of fetching separately
  const { products, loading: contextLoading } = useContext(ShopContext);
  
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortOption, setSortOption] = useState("default");
  const [localLoading, setLocalLoading] = useState(false);

  // Update price range based on available products
  useEffect(() => {
    if (products.length > 0) {
      const prices = products.map(p => p.price || 0);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      
      // Only update if we haven't set a custom range yet
      if (priceRange[0] === 0 && priceRange[1] === 100000) {
        setPriceRange([minPrice, Math.max(maxPrice, 1000)]);
      }

    }
  }, [products, priceRange]);

  // Apply filters and sorting
  useEffect(() => {
    if (!products.length) {
      setFilteredProducts([]);
      return;
    }

    setLocalLoading(true);

    // Small delay to show filtering in action for large datasets
    const timeoutId = setTimeout(() => {
      let result = products.filter(
        (product) =>
          (product.price || 0) >= priceRange[0] && 
          (product.price || 0) <= priceRange[1]
      );

      switch (sortOption) {
        case "priceAsc":
          result.sort((a, b) => (a.price || 0) - (b.price || 0));
          break;
        case "priceDesc":
          result.sort((a, b) => (b.price || 0) - (a.price || 0));
          break;
        case "nameAsc":
          result.sort((a, b) => (a.name || "").localeCompare(b.name || ""));
          break;
        default:
          // Keep original order from Firebase
          break;
      }

      setFilteredProducts(result);
      setLocalLoading(false);
    }, 100);

    return () => clearTimeout(timeoutId);
  }, [products, priceRange, sortOption]);

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "priceAsc", label: "Low to High" },
    { value: "priceDesc", label: "High to Low" },
    { value: "nameAsc", label: "Name A-Z" },
  ];

  const resetFilters = () => {
    if (products.length > 0) {
      const prices = products.map(p => p.price || 0);
      const minPrice = Math.min(...prices);
      const maxPrice = Math.max(...prices);
      setPriceRange([minPrice, Math.max(maxPrice, 1000)]);
    } else {
      setPriceRange([0, 100000]);
    }
    setSortOption("default");
  };

  // Main loading state (when context is loading products)
  if (contextLoading) {
    return (
      <div className="shop p-6 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-poppins text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
          <span className="ml-4 text-lg text-gray-600">Loading products...</span>
        </div>
      </div>
    );
  }

  // Error state (if no products loaded)
  if (!contextLoading && products.length === 0) {
    return (
      <div className="shop p-6 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-poppins text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">No products available at the moment.</p>
          <button
            onClick={() => window.location.reload()}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Refresh Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="shop p-6 min-h-screen flex flex-col justify-center items-center">
      <div className="shopTitle text-center">
        <h1 className="font-poppins text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
      </div>

      {/* Filters */}
      <div className="flex sm:flex-row flex-col w-full max-w-6xl justify-center items-start mb-6">
        <div className="sm:w-[30%] w-0"></div>

        {/* Price Range */}
        <div className="sm:w-[40%] w-full flex flex-col justify-center items-center my-4">
          <label className="text-xl font-bold m-5 text-red-500">
            Price Range: ₹{priceRange[0]} - ₹{priceRange[1]}
          </label>
          <div className="sm:w-[20rem] w-[70vw]">
            <RangeSlider
              min={0}
              max={Math.max(...products.map(p => p.price || 0), 100000)}
              step={100}
              value={priceRange}
              onInput={setPriceRange}
            />
          </div>
        </div>

        {/* Sort */}
        <div className="p-6 sm:w-[30%] w-full my-4">
          <label className="text-lg font-bold mr-2 text-red-500">Sort By:</label>
          <div className="flex flex-wrap gap-2 mt-2">
            {sortOptions.map((opt) => (
              <button
                key={opt.value}
                onClick={() => setSortOption(opt.value)}
                className={`px-3 py-1 text-sm rounded text-white shadow-sm transition-colors ${
                  sortOption === opt.value
                    ? "bg-red-500"
                    : "bg-gray-400 hover:bg-gray-500"
                }`}
              >
                {opt.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Product Count and Reset */}
      <div className="w-full flex justify-between items-center mb-4 px-4 max-w-6xl">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {products.length} products
          {localLoading && (
            <span className="ml-2 text-sm text-blue-500">
              (Filtering...)
            </span>
          )}
        </p>
        <div className="flex gap-2">
          <button
            onClick={resetFilters}
            className="text-blue-500 hover:text-blue-700 underline text-sm"
          >
            Reset Filters
          </button>
          <button
            onClick={() => window.location.reload()}
            disabled={contextLoading}
            className="text-red-500 hover:text-red-700 underline text-sm disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {contextLoading ? "Loading..." : "Refresh Products"}
          </button>
        </div>
      </div>

      {/* Products Grid */}
      {localLoading ? (
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-red-500"></div>
          <span className="ml-4 text-gray-600">Applying filters...</span>
        </div>
      ) : filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <div className="mb-6">
            <svg 
              className="mx-auto h-24 w-24 text-gray-400 mb-4" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" 
              />
            </svg>
            <p className="text-gray-500 text-lg mb-4">
              {products.length === 0
                ? "No products available"
                : "No products found in this price range"}
            </p>
            {products.length > 0 && (
              <button
                onClick={resetFilters}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition-colors"
              >
                Clear Filters
              </button>
            )}
          </div>
        </div>
      ) : (
        <div className="products grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl w-full">
          {filteredProducts.map((product) => (
            <Product key={product.id} data={product} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
