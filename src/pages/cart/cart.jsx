import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../components/context/shop-context";
import { PRODUCTS } from "../../components/products";
import { useNavigate } from "react-router-dom";

import "./cart.css";

export const Cart = () => {
  const { cartItems, getTotalCartAmount } = useContext(ShopContext);
  const totalAmount = getTotalCartAmount();
  const navigate = useNavigate();
  const [cartProductList, setCartProductList] = useState([]);

  // ✅ Update cartProductList whenever cartItems changes
  useEffect(() => {
    const selectedProducts = PRODUCTS.filter((product) => cartItems[product.id] > 0).map((product) => ({
      id: product.id,
      name: product.name,
      price: product.price,
      imageUrl: product.imageUrl,
      quantity: cartItems[product.id],
    }));

    setCartProductList(selectedProducts);
    localStorage.setItem("cart-products", JSON.stringify(selectedProducts));
  }, [cartItems]);

  // ✅ WhatsApp Order Function
  const whatsapp = () => {
    const messageLines = cartProductList.map(
      (item) => `${item.name} (x${item.quantity}) - ₹${item.price * item.quantity}`
    );
    const message = `Hello! I want to order:\n\n${messageLines.join("\n")}\n\nSubtotal: ₹${totalAmount}`;
    const url = `https://wa.me/918511037477?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank");
  };

  return (
    <div className="min-h-screen bg-[#1c1f2a] text-white px-4 sm:px-10 pt-8">
      <h1 className="text-3xl font-bold text-center mb-8">🛒 Your Cart</h1>

      {cartProductList.length > 0 ? (
        <>
          {/* ✅ Product List */}
          <div className="space-y-4">
            {cartProductList.map((item) => (
              <div
                key={item.id}
                className="flex items-center bg-[#2a2d3e] p-4 rounded-lg shadow-md"
              >
                <img
                  src={item.imageUrl}
                  alt={item.name}
                  className="w-20 h-20 object-contain rounded-md mr-4"
                />
                <div className="flex-1">
                  <h2 className="text-lg font-semibold">{item.name}</h2>
                  <p className="text-sm text-gray-300">Price: ₹{item.price}</p>
                  <p className="text-sm text-gray-300">Qty: {item.quantity}</p>
                </div>
                <p className="text-lg font-bold text-green-400">
                  ₹{item.price * item.quantity}
                </p>
              </div>
            ))}
          </div>

          {/* ✅ Subtotal + Buttons */}
          <div className="mt-10 text-center space-y-4">
            <p className="text-xl font-semibold text-green-400">
              Subtotal: ₹{totalAmount}
            </p>

            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <button
                onClick={whatsapp}
                className="px-8 py-3 bg-[#FF4655] hover:bg-[#e03c49] text-white font-bold rounded-md shadow-md transition"
              >
                Place Order on WhatsApp
              </button>

              <button
                onClick={() => navigate("/shop")}
                className="px-8 py-3 bg-gray-700 hover:bg-gray-600 text-white font-semibold rounded-md transition"
              >
                Continue Shopping
              </button>
            </div>
          </div>
        </>
      ) : (
        // ✅ Empty cart message
        <div className="text-center mt-20">
          <p className="text-lg text-gray-400 mb-6">Your cart is empty.</p>
          <button
            onClick={() => navigate("/shop")}
            className="px-6 py-3 bg-[#FF4655] hover:bg-[#e03c49] text-white font-semibold rounded-md transition"
          >
            Continue Shopping
          </button>
        </div>
      )}
    </div>
  );
};
