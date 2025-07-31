import React, { useContext, useState } from "react";
import { ShopContext } from "../../components/context/shop-context";
import { CartItem } from "./cart-item";
import { useNavigate } from "react-router-dom";
import "./cart.css";

export const Cart = () => {
  const { getTotalCartAmount, clearCart, getCartItems, loading } =
    useContext(ShopContext);

  const totalAmount = getTotalCartAmount();
  const cartItems = getCartItems();
  const navigate = useNavigate();
  const [isClearing, setIsClearing] = useState(false);

  // ✅ WhatsApp Order Function
  const whatsapp = () => {
    if (cartItems.length === 0) return;

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

  // ✅ Enhanced clear cart with confirmation
  const handleClearCart = async () => {
    if (window.confirm("Are you sure you want to clear your cart?")) {
      setIsClearing(true);
      try {
        await clearCart();
      } finally {
        setIsClearing(false);
      }
    }
  };

  // ✅ Loading State
  if (loading) {
    return (
      <div className="min-h-screen bg-[#2a3142] flex items-center justify-center">
        <div className="flex flex-col items-center space-y-4">
          <div className="relative">
            <div className="w-16 h-16 border-4 border-gray-600 border-t-[#FF4655] rounded-full animate-spin"></div>
          </div>
          <p className="text-lg font-medium text-white">Loading your cart...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#2a3142] py-8 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Your Cart
          </h1>
          <div className="w-24 h-1 bg-[#FF4655] mx-auto rounded-full"></div>
        </div>

        {cartItems.length > 0 ? (
          <div className="space-y-8">
            {/* Cart Items */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-semibold text-white mb-6">
                  Cart Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                </h2>
                <div className="space-y-6">
                  {cartItems.map((item) => (
                    <div key={item.id} className="p-0 m-0">
                      <CartItem data={item} cleanUI />
                    </div>
                  ))}
                </div>
              </div>

              {/* Order Summary */}
              <div className="lg:col-span-1">
                <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700 sticky top-8 shadow-lg">
                  <h2 className="text-2xl font-semibold text-white mb-6">
                    Order Summary
                  </h2>

                  {/* Summary Details */}
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-gray-300">
                      <span>
                        Items ({cartItems.reduce((sum, item) => sum + item.quantity, 0)})
                      </span>
                      <span className="text-white">₹{totalAmount}</span>
                    </div>
                    <div className="flex justify-between text-gray-300">
                      <span></span>
                      <span className="text-green-400 font-medium"></span>
                    </div>
                    <div className="border-t border-gray-600 pt-4">
                      <div className="flex justify-between text-2xl font-bold">
                        <span className="text-white">Total</span>
                        <span className="text-green-400">₹{totalAmount}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-4">
                    <button
                      onClick={whatsapp}
                      disabled={cartItems.length === 0}
                      className="w-full bg-green-600 hover:bg-green-700 disabled:bg-gray-600 text-white font-bold py-4 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-3 transform hover:scale-105"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                      </svg>
                      <span>ORDER VIA WHATSAPP</span>
                    </button>

                    <button
                      onClick={handleClearCart}
                      disabled={isClearing}
                      className="w-full bg-[#FF4655] hover:bg-red-600 disabled:bg-gray-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 flex items-center justify-center space-x-2 transform hover:scale-105"
                    >
                      {isClearing ? (
                        <>
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                          <span>CLEARING...</span>
                        </>
                      ) : (
                        <>
                          <svg
                            className="w-5 h-5"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                            />
                          </svg>
                          <span>CLEAR CART</span>
                        </>
                      )}
                    </button>
                  </div>

                  {/* Security Badge */}
                  <div className="mt-6 pt-6 border-t border-gray-600">
                    <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
                      <svg
                        className="w-4 h-4 text-green-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span>🔒 Secure ordering via WhatsApp</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          /* Empty Cart State */
          <div className="text-center py-20">
            <div className="mb-8">
              <div className="w-32 h-32 mx-auto mb-6 bg-gray-700 rounded-full flex items-center justify-center">
                <svg
                  className="h-16 w-16 text-gray-500"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4m0 0L7 13m0 0l-1.5 1.5M7 13l1.5 1.5M17 21a2 2 0 100-4 2 2 0 000 4zM9 21a2 2 0 100-4 2 2 0 000 4z"
                  />
                </svg>
              </div>
              <h2 className="text-4xl font-bold text-white mb-4">
                Your cart is empty
              </h2>
              <p className="text-gray-400 text-lg mb-12">
                Add some products to your cart to get started
              </p>
            </div>

            <button
              onClick={() => navigate("/shop")}
              className="bg-[#FF4655] hover:bg-red-600 text-white font-bold py-4 px-8 rounded-lg transition-all duration-200 transform hover:scale-105 inline-flex items-center space-x-3"
            >
              <svg
                className="w-5 h-5"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 19l-7-7m0 0l7-7m-7 7h18"
                />
              </svg>
              <span>CONTINUE SHOPPING</span>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
