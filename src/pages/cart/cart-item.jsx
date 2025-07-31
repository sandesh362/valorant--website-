import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } =
    useContext(ShopContext);

  const quantity = cartItems[data.id] || data.quantity || 0;

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    updateCartItemCount(newValue, data.id);
  };

  if (quantity === 0) return null;

  return (
    <div
      className="w-full flex flex-col lg:flex-row gap-6 p-6 rounded-xl border border-gray-700 hover:border-red-500 transition-all duration-300 transform hover:scale-[1.02]"
      style={{ background: "transparent" }}
    >
      {/* Product Image */}
      <div className="flex-shrink-0 lg:w-80">
        {data.imageUrl ? (
          <div className="relative group">
            <img
              src={data.imageUrl}
              alt={data.name}
              className="w-full max-h-60 object-contain rounded-lg border-2 border-red-500 bg-[#1e2532] p-2 group-hover:border-red-400 transition-colors duration-300"
            />
            <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-10 rounded-lg transition-all duration-300"></div>
          </div>
        ) : (
          <div className="w-full h-60 lg:h-48 bg-gray-800 rounded-lg border-2 border-red-500 flex items-center justify-center">
            <div className="text-center">
              <svg
                className="w-12 h-12 text-gray-500 mx-auto mb-2"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
                />
              </svg>
              <span className="text-gray-400 text-sm">No Image</span>
            </div>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="flex-grow flex flex-col justify-between">
        {/* Product Info */}
        <div className="mb-4">
          <h3 className="text-2xl font-bold text-white uppercase tracking-wide mb-2 leading-tight">
            {data.name || "Unknown Product"}
          </h3>

          {data.description && (
            <p className="text-gray-300 text-sm leading-relaxed mb-3">
              {data.description.length > 100
                ? `${data.description.substring(0, 100)}...`
                : data.description}
            </p>
          )}

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
            <p className="text-green-400 text-3xl font-bold">
              ₹{data.price || 0}
            </p>

            {quantity > 1 && (
              <div className="text-right">
                <p className="text-yellow-400 text-lg font-semibold">
                  Qty: {quantity}
                </p>
                <p className="text-green-400 text-xl font-bold">
                  Total: ₹{(data.price || 0) * quantity}
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Controls */}
        <div className="space-y-4">
          {/* Quantity Controls */}
          <div className="flex items-center gap-4">
            <span className="text-gray-300 font-medium">Quantity:</span>
            <div className="flex items-center gap-2">
              <button
                className="w-10 h-10 bg-red-600 hover:bg-red-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 font-bold text-lg"
                onClick={() => removeFromCart(data.id)}
              >
                −
              </button>

              <input
                type="number"
                min="0"
                value={quantity}
                onChange={handleQuantityChange}
                className="w-20 h-10 text-center border-2 border-gray-600 focus:border-red-500 rounded-lg bg-[#1e2532] text-white text-lg font-semibold outline-none transition-colors duration-200"
              />

              <button
                className="w-10 h-10 bg-green-600 hover:bg-green-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200 font-bold text-lg"
                onClick={() => addToCart(data.id)}
              >
                +
              </button>
            </div>
          </div>

          {/* Remove Button */}
          <div className="flex justify-end">
            <button
              onClick={() => updateCartItemCount(0, data.id)}
              className="bg-red-600 hover:bg-red-700 text-white px-6 py-3 rounded-lg transition-all duration-200 flex items-center space-x-2 font-semibold uppercase tracking-wide transform hover:scale-105"
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
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                />
              </svg>
              <span>Remove from Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
