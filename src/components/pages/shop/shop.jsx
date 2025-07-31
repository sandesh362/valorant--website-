import React, { useState, useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/context/shop-context";
import { PRODUCTS } from "../../products";
import { Product } from "./product";
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css'; 
import './shop.css'; 

export const Shop = () => {
  const [priceRange, setPriceRange] = useState([0, 100000]);
  const [filteredProducts, setFilteredProducts] = useState(PRODUCTS);

  // Get cart and navigation
  const { cartItems } = useContext(ShopContext);
  const navigate = useNavigate();
  const hasItems = Object.values(cartItems).some((count) => count > 0);

  useEffect(() => {
    const filteredAndSortedProducts = PRODUCTS.filter(
      (product) =>
        product.price >= priceRange[0] && product.price <= priceRange[1]
    ).sort((a, b) => a.price - b.price);

    setFilteredProducts(filteredAndSortedProducts);
  }, [priceRange]);

  return (
    <div className="shop">
      {/* ...existing code... */}
      <div className="products">
        {filteredProducts.length > 0 ? (
          filteredProducts.map((product) => <Product key={product.id} data={product} />)
        ) : (
          <p>No products found in this price range.</p>
        )}
      </div>
      {/* GLOBAL FLOATING CHECKOUT BUTTON */}
      {hasItems && (
        <div
          className="fixed bottom-6 right-6 bg-[#FF4655] hover:bg-[#e03c49] text-white px-4 py-3 rounded-lg shadow-lg cursor-pointer z-50"
          onClick={() => navigate("/cart")}
        >
          🛒 Checkout Cart
        </div>
      )}
    </div>
  );
};
