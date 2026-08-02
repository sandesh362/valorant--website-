import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../components/context/shop-context";

export const Product = (props) => {
  const { id, name: productName, price, imageUrl: imageUrl } = props.data;
  const { addToCart, removeFromCart, cartItems } = useContext(ShopContext);
  const [showCartButton, setShowCartButton] = useState(false);
  const cartItemCount = cartItems[id] || 0;
  const originalPrice = price + 500;
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (cartItemCount > 0) {
      removeFromCart(id);
    } else {
      addToCart(id);
      setShowCartButton(true);
      setTimeout(() => setShowCartButton(false), 10000); // Hide after 10s
    }
  };

  return (
    <div className="bg-[#1c1f2a] rounded-xl overflow-hidden border border-white/10 shadow-xl shadow-black/20 transition duration-300 hover:-translate-y-1 hover:border-red-400/40 flex flex-col">
      {/* Image container */}
      <div className="w-full h-[220px] sm:h-[250px] bg-black/40 flex items-center justify-center p-4">
        <img
          src={imageUrl || "/images/default-product.png"} // fallback image
          alt={productName}
          className="max-h-full max-w-full object-contain transition-transform duration-300 hover:scale-105"
        />
      </div>

      {/* Info Section */}
      <div className="p-5 text-center text-white flex flex-1 flex-col">
        <h2 className="text-lg font-bold mb-2 min-h-[3.5rem] flex items-center justify-center">{productName}</h2>
        <div className="flex justify-center items-center gap-3 mb-4">
          <span className="text-red-400 line-through text-sm">₹{originalPrice}</span>
          <span className="text-green-400 font-bold text-xl">₹{price}</span>
        </div>

        {/* Add/Remove Button */}
        <button
          onClick={handleButtonClick}
          className={`w-full py-2.5 mt-auto font-bold rounded-md transition-colors duration-300 shadow-md ${
            cartItemCount > 0
              ? "bg-gray-700 hover:bg-gray-800 text-white"
              : "bg-[#FF4655] hover:bg-[#e03c49] text-white"
          }`}
        >
          {cartItemCount > 0 ? `REMOVE (${cartItemCount})` : "ADD TO CART"}
        </button>
      </div>

      {/* Floating Checkout Button */}
      {showCartButton && (
        <div
          
        className="fixed bottom-6 right-6 bg-[#FF4655] hover:bg-[#e03c49] text-white px-4 py-3 rounded-lg shadow-lg animate-fade-in cursor-pointer z-50"
        
        onClick={() => navigate("/cart")}
          
        >
          🛒 Checkout Cart
        </div>
      )}
    </div>
  );
};
