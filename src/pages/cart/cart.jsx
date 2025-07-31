import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../../components/context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { 
    getTotalCartAmount, 
    clearCart, 
    getCartItems, 
    loading 
  } = useContext(ShopContext);
  
  const totalAmount = getTotalCartAmount();
  const cartItems = getCartItems();
  const navigate = useNavigate();

  // ✅ WhatsApp Order Function
  const whatsapp = () => {
    if (cartItems.length === 0) return;
    
    // Create order summary for WhatsApp
    let message = "🛒 *New Order Request*\n\n";
    message += "*Items:*\n";
    
    cartItems.forEach((item, index) => {
      message += `${index + 1}. ${item.name}\n`;
      message += `   Quantity: ${item.quantity}\n`;
      message += `   Price: ₹${item.price} each\n`;
      message += `   Subtotal: ₹${item.price * item.quantity}\n\n`;
    });
    
    message += `*Total Amount: ₹${totalAmount}*\n\n`;
    message += "Please confirm this order. Thank you!";
    
    const encodedMessage = encodeURIComponent(message);
    const url = `https://wa.me/918511037477?text=${encodedMessage}`;
    window.open(url, "_blank");
  };

  // Loading state
  if (loading) {
    return (
      <div className="cart flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-red-500"></div>
        <span className="ml-4 text-lg text-gray-600">Loading cart...</span>
      </div>
    );
  }

  return (
    <div className="cart">
      <div className="cart-header text-center mb-8">
        <h1 className="font-poppins text-4xl font-bold text-[#FF4655] m-4">
          Your Cart
        </h1>
      </div>

      {cartItems.length > 0 ? (
        <>
          {/* Cart Items */}
          <div className="cart-items">
            {cartItems.map((item) => (
              <CartItem key={item.id} data={item} />
            ))}
          </div>

          {/* Cart Summary */}
          <div className="cart-summary flex flex-col justify-center items-center mt-8 p-6 bg-gray-50 rounded-lg">
            <div className="mb-4">
              <p className="text-lg text-gray-600">
                Items in cart: {cartItems.reduce((sum, item) => sum + item.quantity, 0)}
              </p>
            </div>
            <div className="mb-6">
              <p className="text-2xl text-green-500 font-bold">
                Subtotal: ₹{totalAmount}
              </p>
            </div>
            
            <div className="flex gap-4">
              <button 
                className="btn" 
                onClick={whatsapp}
                disabled={cartItems.length === 0}
              >
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content text-secondary">
                    ORDER VIA WHATSAPP
                  </span>
                </span>
              </button>

              <button 
                className="btn bg-gray-500 hover:bg-gray-600" 
                onClick={clearCart}
              >
                <span className="btn__inner">
                  <span className="btn__slide"></span>
                  <span className="btn__content text-secondary">
                    CLEAR CART
                  </span>
                </span>

              </button>
            </div>
          </div>
        </>
      ) : (
        <div className="blankCart text-center py-12">
          <div className="mb-8">
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
                d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z" 
              />
            </svg>
            <h2 className="text-2xl font-semibold text-gray-600 mb-2">
              Your cart is empty
            </h2>
            <p className="text-gray-500 mb-8">
              Add some products to your cart to get started
            </p>
          </div>
          
          <button 
            className="btn mt-16" 
            onClick={() => navigate("/shop")}
          >
            <span className="btn__inner">
              <span className="btn__slide"></span>
              <span className="btn__content text-secondary">
                CONTINUE SHOPPING
              </span>
            </span>
          </button>
        </div>
      )}
    </div>
  );
};