import React, { useState, useEffect, useCallback } from "react";
import RangeSlider from "react-range-slider-input";
import "react-range-slider-input/dist/style.css";
import { Product } from "./product";
import "./shop.css";
import { fetchProducts } from "../../service/firebaseService";

export const Shop = () => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [sortOption, setSortOption] = useState("default");

  // Process raw product data safely
  const processProducts = useCallback((data) => {
    if (!Array.isArray(data)) return [];
    return data.map((product, index) => ({
      ...product,
      id: product.id || `product-${index}`,
      price: Math.max(0, Number(product.price) || 0),
      name: product.name || "Unnamed Product",
      image: product.image || product.imageUrl || product.img || null,
      description: product.description || "",
    }));
  }, []);

  // Fetch products
  const loadProducts = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const data = await fetchProducts();
      const processedProducts = processProducts(data);

      setAllProducts(processedProducts);
    } catch (err) {
      console.error("Error fetching products:", err);
      setError("Failed to load products. Please try again.");
      setAllProducts([]);
    } finally {
      setLoading(false);
    }
  }, [processProducts]);

  useEffect(() => {
    loadProducts();
  }, [loadProducts]);

  // Apply filters and sorting
  useEffect(() => {
    if (!allProducts.length) {
      setFilteredProducts([]);
      return;
    }

    let result = allProducts.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    );

    switch (sortOption) {
      case "priceAsc":
        result.sort((a, b) => a.price - b.price);
        break;
      case "priceDesc":
        result.sort((a, b) => b.price - a.price);
        break;
      case "nameAsc":
        result.sort((a, b) => a.name.localeCompare(b.name));
        break;
      default:
        break; // default order
    }

    setFilteredProducts(result);
  }, [allProducts, priceRange, sortOption]);

  const sortOptions = [
    { value: "default", label: "Default" },
    { value: "priceAsc", label: "Low to High" },
    { value: "priceDesc", label: "High to Low" },
    { value: "nameAsc", label: "Name A-Z" },
  ];

  // Loading state
  if (loading) {
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

  // Error state
  if (error) {
    return (
      <div className="shop p-6 min-h-screen flex flex-col justify-center items-center">
        <h1 className="font-poppins text-5xl font-bold text-[#FF4655] m-8 p-12">
          PRODUCT SHOP
        </h1>
        <div className="text-center py-12">
          <p className="text-red-500 text-lg mb-4">{error}</p>
          <button
            onClick={loadProducts}
            className="bg-red-500 text-white px-6 py-2 rounded hover:bg-red-600 transition-colors"
          >
            Try Again
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
              max={100000}
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

      {/* Product Count */}
      <div className="w-full flex justify-between items-center mb-4 px-4 max-w-6xl">
        <p className="text-gray-600">
          Showing {filteredProducts.length} of {allProducts.length} products
        </p>
        <button
          onClick={loadProducts}
          disabled={loading}
          className="text-red-500 hover:text-red-700 underline text-sm disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Loading..." : "Refresh Products"}
        </button>
      </div>

      {/* Products Grid */}
      {filteredProducts.length === 0 ? (
        <div className="text-center py-12">
          <p className="text-gray-500 text-lg mb-4">
            {allProducts.length === 0
              ? "No products available"
              : "No products found in this price range"}
          </p>
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
