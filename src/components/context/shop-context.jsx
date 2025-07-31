import { createContext, useEffect, useState } from "react";
import { fetchProducts } from "../../service/firebaseService";

export const ShopContext = createContext(null);

export const ShopContextProvider = (props) => {
  const [cartItems, setCartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  // Load products from Firebase
  useEffect(() => {
    const loadProducts = async () => {
      try {
        const data = await fetchProducts();
        setProducts(data);
        setLoading(false);
      } catch (error) {
        console.error("Error loading products in context:", error);
        setLoading(false);
      }
    };
    loadProducts();
  }, []);

  const getTotalCartAmount = () => {
    let totalAmount = 0;
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const itemInfo = products.find((product) => product.id === itemId);
        if (itemInfo) {
          totalAmount += itemInfo.price * cartItems[itemId];
        }
      }
    }
    return totalAmount;
  };

  const getCartItemCount = () => {
    let totalCount = 0;
    for (const itemId in cartItems) {
      totalCount += cartItems[itemId];
    }
    return totalCount;
  };

  const addToCart = (itemId) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [itemId]: (prev[itemId] || 0) + 1 
    }));
  };

  const removeFromCart = (itemId) => {
    setCartItems((prev) => {
      const newCount = (prev[itemId] || 0) - 1;
      return { 
        ...prev, 
        [itemId]: Math.max(0, newCount)
      };
    });
  };

  const updateCartItemCount = (newAmount, itemId) => {
    setCartItems((prev) => ({ 
      ...prev, 
      [itemId]: Math.max(0, newAmount) 
    }));
  };

  const clearCart = () => {
    setCartItems({});
  };

  const getCartItems = () => {
    const items = [];
    for (const itemId in cartItems) {
      if (cartItems[itemId] > 0) {
        const product = products.find((p) => p.id === itemId);
        if (product) {
          items.push({
            ...product,
            quantity: cartItems[itemId]
          });
        }
      }
    }
    return items;
  };

  const contextValue = {
    cartItems,
    products,
    loading,
    addToCart,
    updateCartItemCount,
    removeFromCart,
    getTotalCartAmount,
    getCartItemCount,
    clearCart,
    getCartItems,
    // Legacy method name for compatibility
    checkout: clearCart,
  };

  return (
    <ShopContext.Provider value={contextValue}>
      {props.children}
    </ShopContext.Provider>
  );
};