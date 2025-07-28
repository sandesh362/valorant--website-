import React, { useContext } from "react";
import { ShopContext } from "../../components/context/shop-context";

export const CartItem = (props) => {
  const { id, name: productName, price, imageUrl } = props.data;
  const { removeFromCart } = useContext(ShopContext);

  return (
    <div className="bg-[#1c1f2a] w-[90%] sm:w-[30%] p-4 m-4 rounded-xl flex flex-col shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
      {/* Product Image */}
      <div className="w-full h-[220px] bg-black flex items-center justify-center rounded-lg overflow-hidden mb-4">
        <img
          src={imageUrl}
          alt={productName}
          className="max-h-full max-w-full object-contain"
        />
      </div>

      {/* Product Info */}
      <div className="text-center">
        <p className="text-lg font-bold text-white uppercase tracking-wide mb-2">
          {productName}
        </p>
        <p className="text-green-400 text-2xl font-bold mb-4">₹{price}</p>

        {/* Remove Button */}
        <button
          onClick={() => removeFromCart(id)}
          className="w-full bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-md uppercase font-semibold transition duration-300"
        >
          Remove from Cart
        </button>
      </div>
    </div>
  );
};
