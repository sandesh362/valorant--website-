import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const CartItem = ({ data }) => {
  const { cartItems, addToCart, removeFromCart, updateCartItemCount } = useContext(ShopContext);

  // Get quantity from cartItems or use the quantity passed in data
  const quantity = cartItems[data.id] || data.quantity || 0;

  const handleQuantityChange = (e) => {
    const newValue = parseInt(e.target.value) || 0;
    updateCartItemCount(newValue, data.id);
  };
  console.log(data)

  if (quantity === 0) return null;

  return (
    <div className="bg-gray-900 w-[90%] sm:w-[30%] p-6 m-6 rounded-xl flex sm:flex-row flex-col shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Product Image */}
      <div className="flex-shrink-0">
        {data.imageUrl ? (
          <img
            src={data.imageUrl}
            alt={data.name}
            className="w-100 h-60 object-cover rounded-lg border-2 border-red-500"
          />

        ) : (
          <div className="w-full h-48 bg-gray-800 rounded-lg border-2 border-red-500 flex items-center justify-center">
            <span className="text-gray-400 text-sm">No Image</span>
          </div>
        )}
      </div>

      {/* Product Details */}
      <div className="mt-4 p-4 m-4 flex-grow">
        <p className="text-xl font-bold text-white uppercase tracking-wide">
          {data.name || "Unknown Product"}
        </p>

        {data.description && (
          <p className="text-gray-300 text-sm mt-2 leading-relaxed">
            {data.description.length > 80
              ? `${data.description.substring(0, 80)}...`
              : data.description
            }
          </p>
        )}

        <p className="text-green-500 text-3xl font-bold mt-2">
          Price: ₹{data.price || 0}
        </p>

        {/* Quantity Display */}
        {quantity > 1 && (
          <p className="text-yellow-400 text-lg font-semibold mt-1">
            Quantity: {quantity} | Total: ₹{(data.price || 0) * quantity}
          </p>
        )}

        {/* Quantity Controls */}
        <div className="flex items-center gap-3 mt-4 mb-4">
          <button
            className="bg-red-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out uppercase tracking-wider font-semibold"
            onClick={() => removeFromCart(data.id)}
          >
            -
          </button>

          <input
            type="number"
            min="0"
            value={quantity}
            onChange={handleQuantityChange}
            className="w-16 text-center border border-gray-600 rounded px-2 py-1 bg-gray-800 text-white"
          />

          <button
            className="bg-green-600 text-white text-sm px-3 py-2 rounded-lg hover:bg-green-700 transition duration-300 ease-in-out uppercase tracking-wider font-semibold"
            onClick={() => addToCart(data.id)}
          >
            +
          </button>
        </div>

        {/* Remove from Cart Button */}
        <div className="mt-4">
          <button
            onClick={() => updateCartItemCount(0, data.id)}
            className="bg-red-600 text-white text-sm px-2 w-[13rem] py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out uppercase tracking-wider font-semibold"
          >
            Remove from Cart
          </button>
        </div>
      </div>
    </div>
  );
};
