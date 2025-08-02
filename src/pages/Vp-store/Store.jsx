import React, { useState } from 'react';
import { ShoppingCart, Plus, Minus, Trash2, MessageCircle, Phone } from 'lucide-react';

const Store = () => {
  const [notification, setNotification] = useState('');
  const [showNotification, setShowNotification] = useState(false);
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const vpPackages = [
    { id: 'vp_475', vp: 475, price: 350, type: 'VP' },
    { id: 'vp_1000', vp: 1000, price: 750, type: 'VP' },
    { id: 'vp_1475', vp: 1475, price: 1100, type: 'VP' },
    { id: 'vp_2050', vp: 2050, price: 1400, popular: true, type: 'VP' },
    { id: 'vp_2525', vp: 2525, price: 1750, type: 'VP' },
    { id: 'vp_3050', vp: 3050, price: 2150, type: 'VP' },
    { id: 'vp_3650', vp: 3650, price: 2550, type: 'VP' },
    { id: 'vp_4125', vp: 4125, price: 2900, type: 'VP' },
    { id: 'vp_4650', vp: 4650, price: 3300, type: 'VP' },
    { id: 'vp_5350', vp: 5350, price: 3500, type: 'VP' },
    { id: 'vp_5825', vp: 5825, price: 3850, type: 'VP' },
    { id: 'vp_6380', vp: 6380, price: 4250, type: 'VP' },
    { id: 'vp_7400', vp: 7400, price: 4900, bestValue: true, type: 'VP' },
    { id: 'vp_8400', vp: 8400, price: 5650, type: 'VP' },
    { id: 'vp_9000', vp: 9000, price: 6050, type: 'VP' },
    { id: 'vp_10000', vp: 10000, price: 6800, type: 'VP' },
    { id: 'vp_10700', vp: 10700, price: 6900, type: 'VP' },
    { id: 'vp_11175', vp: 11175, price: 7250, type: 'VP' },
    { id: 'vp_12750', vp: 12750, price: 8300, type: 'VP' },
    { id: 'vp_14350', vp: 14350, price: 9450, type: 'VP' },
    { id: 'vp_16050', vp: 16050, price: 10400, type: 'VP' }
  ];

  const radiPacks = [
    { id: 'rp_20', rp: 20, price: 200, type: 'RP' },
    { id: 'rp_40', rp: 40, price: 350, type: 'RP' },
    { id: 'rp_80', rp: 80, price: 650, popular: true, type: 'RP' },
    { id: 'rp_160', rp: 160, price: 1200, type: 'RP' }
  ];

  const battlePass = { id: 'bp_1000', name: 'Battle Pass', vp: 1000, price: 750, type: 'BP' };

  // Cart Functions
  const addToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    
    if (existingItem) {
      setCart(cart.map(cartItem => 
        cartItem.id === item.id 
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
    
    showNotificationMsg(`Added to cart!`);
  };

  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
    showNotificationMsg(`Removed from cart!`);
  };

  const updateQuantity = (itemId, newQuantity) => {
    if (newQuantity === 0) {
      removeFromCart(itemId);
      return;
    }
    
    setCart(cart.map(item => 
      item.id === itemId 
        ? { ...item, quantity: newQuantity }
        : item
    ));
  };

  const clearCart = () => {
    setCart([]);
    showNotificationMsg(`Cart cleared!`);
  };

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + (item.price * item.quantity), 0);
  };

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0);
  };

  // WhatsApp Order Function
  const handleWhatsAppOrder = (isCartOrder = false) => {
    const phoneNumber = '918511037477';
    
    let message;
    
    if (isCartOrder && cart.length > 0) {
      const itemsList = cart.map(item => {
        let itemName;
        if (item.type === 'BP') {
          itemName = `${item.name} (${item.vp} VP Value)`;
        } else if (item.type === 'RP') {
          itemName = `${item.rp} Radianite Points`;
        } else {
          itemName = `${item.vp} Valorant Points`;
        }
        return `• ${itemName} x${item.quantity} - ₹${(item.price * item.quantity).toLocaleString()}`;
      }).join('\n');
      
      message = `Hi! I want to purchase the following items:\n\n${itemsList}\n\nTotal: ₹${getTotalPrice().toLocaleString()}\n\nPlease help me with the payment process.`;
    } else {
      message = `Hi! I'm interested in purchasing Valorant Points. Please help me with the available options and payment process.`;
    }
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    showNotificationMsg(`Redirecting to WhatsApp...`);
    window.open(whatsappURL, '_blank');
  };

  const showNotificationMsg = (message) => {
    setNotification(message);
    setShowNotification(true);
    setTimeout(() => setShowNotification(false), 3000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-red-900 text-white">
      {/* Fixed Cart Button */}
      <div className="fixed top-6 right-6 z-50">
        <button
          onClick={() => setShowCart(!showCart)}
          className="bg-gradient-to-r from-red-500 to-red-600 p-4 rounded-full shadow-2xl hover:from-red-600 hover:to-red-700 transition-all duration-300 transform hover:scale-110 flex items-center gap-2"
        >
          <ShoppingCart size={24} />
          {getTotalItems() > 0 && (
            <span className="bg-yellow-400 text-black px-2 py-1 rounded-full text-sm font-bold min-w-[24px] text-center">
              {getTotalItems()}
            </span>
          )}
        </button>
      </div>

      {/* Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 z-40 flex">
          <div 
            className="flex-1 bg-black bg-opacity-50" 
            onClick={() => setShowCart(false)}
          ></div>
          <div className="w-full max-w-md bg-gray-800 h-full overflow-y-auto shadow-2xl">
            <div className="p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-white">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-400 hover:text-white text-2xl"
                >
                  ×
                </button>
              </div>

              {cart.length === 0 ? (
                <div className="text-center py-8">
                  <ShoppingCart size={64} className="mx-auto mb-4 text-gray-600" />
                  <p className="text-gray-400">Your cart is empty</p>
                </div>
              ) : (
                <>
                  <div className="space-y-4 mb-6">
                    <h3 className="text-lg font-semibold text-gray-300">
                      Cart Items ({getTotalItems()})
                    </h3>
                    
                    {cart.map((item) => (
                      <div key={item.id} className="bg-gray-700 p-4 rounded-lg">
                        <div className="flex justify-between items-start mb-3">
                          <div>
                            <h4 className="font-bold text-white">
                              {item.type === 'BP' ? item.name : 
                               item.type === 'RP' ? `${item.rp} Radianite Points` : 
                               `${item.vp} Valorant Points`}
                            </h4>
                            {item.type === 'BP' && (
                              <p className="text-sm text-gray-400">{item.vp} VP Value</p>
                            )}
                          </div>
                          <button
                            onClick={() => removeFromCart(item.id)}
                            className="text-red-400 hover:text-red-300"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                        
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="bg-red-500 hover:bg-red-600 w-8 h-8 rounded-full flex items-center justify-center"
                            >
                              <Minus size={16} />
                            </button>
                            <span className="w-12 text-center font-bold">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="bg-green-500 hover:bg-green-600 w-8 h-8 rounded-full flex items-center justify-center"
                            >
                              <Plus size={16} />
                            </button>
                          </div>
                          <div className="text-right">
                            <div className="text-lg font-bold text-red-400">
                              ₹{(item.price * item.quantity).toLocaleString()}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Order Summary */}
                  <div className="bg-gray-700 p-4 rounded-lg mb-6">
                    <h3 className="text-lg font-semibold text-white mb-3">Order Summary</h3>
                    <div className="flex justify-between text-gray-300 mb-2">
                      <span>Items ({getTotalItems()})</span>
                      <span>₹{getTotalPrice().toLocaleString()}</span>
                    </div>
                    <div className="border-t border-gray-600 pt-2">
                      <div className="flex justify-between text-xl font-bold text-white">
                        <span>Total</span>
                        <span className="text-red-400">₹{getTotalPrice().toLocaleString()}</span>
                      </div>
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="space-y-3">
                    <button
                      onClick={() => handleWhatsAppOrder(true)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 py-3 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={20} />
                      ORDER VIA WHATSAPP
                    </button>
                    <button
                      onClick={clearCart}
                      className="w-full bg-gradient-to-r from-red-500 to-red-600 py-3 rounded-xl font-bold hover:from-red-600 hover:to-red-700 transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Trash2 size={20} />
                      CLEAR CART
                    </button>
                  </div>

                  <div className="mt-4 text-center">
                    <p className="text-sm text-gray-400 flex items-center justify-center gap-1">
                      🔒 Secure ordering via WhatsApp
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative text-center py-20 px-4">
          <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-red-500 via-purple-500 to-blue-400 bg-clip-text text-transparent">
            VALORANT POINTS STORE
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get VP & Radianite Points instantly • Philippines ID Only • UPI/Crypto Accepted
          </p>
          <div className="mt-8 flex justify-center gap-4 flex-wrap">
            <span className="bg-gradient-to-r from-red-500 to-red-600 px-4 py-2 rounded-full text-sm font-bold">
              ⚡ INSTANT DELIVERY
            </span>
            <span className="bg-gradient-to-r from-blue-500 to-blue-600 px-4 py-2 rounded-full text-sm font-bold">
              🔒 SECURE PAYMENT
            </span>
            <span className="bg-gradient-to-r from-green-500 to-green-600 px-4 py-2 rounded-full text-sm font-bold">
              🎯 PHILIPPINES ONLY
            </span>
          </div>
        </div>
      </div>

      {/* VP Packages Section */}
      <div className="container mx-auto px-4 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-red-400">
          Valorant Points Packages
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {/* Battle Pass Special Card */}
          <div className="bg-gradient-to-br from-yellow-400 via-yellow-500 to-yellow-600 p-6 rounded-2xl text-black relative overflow-hidden transform hover:scale-105 transition-all duration-300 shadow-2xl">
            <div className="absolute top-0 right-0 w-32 h-32 transform translate-x-8 -translate-y-8">
              <div className="absolute inset-0 bg-yellow-300 opacity-50 rounded-full"></div>
            </div>
            <div className="relative z-10">
              <div className="text-sm font-bold text-yellow-800 mb-2">⚡ SPECIAL OFFER</div>
              <div className="text-3xl font-bold mb-2">Battle Pass</div>
              <div className="text-lg text-yellow-800 mb-4">1000 VP Value</div>
              <div className="text-3xl font-bold mb-6">₹750</div>
              
              <div className="space-y-2">
                <button 
                  onClick={() => addToCart(battlePass)}
                  className="w-full bg-black text-yellow-400 py-2.5 rounded-xl font-bold hover:bg-gray-800 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <ShoppingCart size={18} /> Add to Cart
                </button>
                <button 
                  onClick={() => handleWhatsAppOrder(false)}
                  className="w-full bg-green-600 text-white py-2.5 rounded-xl font-bold hover:bg-green-700 transition-colors duration-300 transform hover:scale-105 flex items-center justify-center gap-2"
                >
                  <MessageCircle size={18} /> Order Now
                </button>
              </div>
            </div>
          </div>

          {/* VP Packages */}
          {vpPackages.map((pack) => (
            <div 
              key={pack.id}
              className="bg-gradient-to-br from-red-500/10 to-blue-500/10 border-2 border-red-500/20 p-6 rounded-2xl hover:border-red-500/50 hover:shadow-2xl hover:shadow-red-500/20 transform hover:scale-105 transition-all duration-300 relative overflow-hidden backdrop-blur-sm"
            >
              {pack.popular && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-orange-400 to-red-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                  🔥 POPULAR
                </div>
              )}
              {pack.bestValue && (
                <div className="absolute -top-3 -right-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                  💎 BEST VALUE
                </div>
              )}
              
              <div className="absolute top-0 right-0 w-24 h-24 transform translate-x-6 -translate-y-6">
                <div className="absolute inset-0 bg-blue-500 opacity-20 rounded-full"></div>
              </div>
              
              <div className="relative z-10">
                <div className="text-4xl font-bold text-blue-400 mb-2">{pack.vp.toLocaleString()}</div>
                <div className="text-gray-300 mb-4">Valorant Points</div>
                <div className="text-3xl font-bold text-red-400 mb-6">₹{pack.price.toLocaleString()}</div>
                
                <div className="space-y-2">
                  <button 
                    onClick={() => addToCart(pack)}
                    className="w-full bg-gradient-to-r from-blue-500 to-blue-600 py-2.5 rounded-xl font-bold hover:from-blue-600 hover:to-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <ShoppingCart size={18} /> Add to Cart
                  </button>
                  <button 
                    onClick={() => handleWhatsAppOrder(false)}
                    className="w-full bg-gradient-to-r from-green-500 to-green-600 py-2.5 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                  >
                    <MessageCircle size={18} /> Order Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Radianite Section */}
        <div className="bg-gradient-to-r from-blue-500/5 to-purple-500/5 py-16 px-6 rounded-3xl mt-20 border border-blue-500/20">
          <h2 className="text-4xl font-bold text-center mb-12 text-blue-400">
            Radianite Points
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {radiPacks.map((pack) => (
              <div 
                key={pack.id}
                className="bg-gradient-to-br from-blue-500/10 to-purple-500/10 border-2 border-blue-500/20 p-6 rounded-2xl hover:border-blue-500/50 hover:shadow-2xl hover:shadow-blue-500/20 transform hover:scale-105 transition-all duration-300 relative backdrop-blur-sm"
              >
                {pack.popular && (
                  <div className="absolute -top-3 -right-3 bg-gradient-to-r from-purple-400 to-blue-500 text-white px-3 py-1 rounded-full text-xs font-bold transform rotate-12 shadow-lg">
                    ⭐ POPULAR
                  </div>
                )}
                
                <div className="text-center">
                  <div className="text-3xl font-bold text-blue-400 mb-2">{pack.rp}</div>
                  <div className="text-gray-300 mb-4">Radianite Points</div>
                  <div className="text-2xl font-bold text-red-400 mb-6">₹{pack.price}</div>
                  
                  <div className="space-y-2">
                    <button 
                      onClick={() => addToCart(pack)}
                      className="w-full bg-gradient-to-r from-blue-500 to-purple-600 py-2.5 rounded-xl font-bold hover:from-blue-600 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <ShoppingCart size={18} /> Add to Cart
                    </button>
                    <button 
                      onClick={() => handleWhatsAppOrder(false)}
                      className="w-full bg-gradient-to-r from-green-500 to-green-600 py-2.5 rounded-xl font-bold hover:from-green-600 hover:to-green-700 transition-all duration-300 transform hover:scale-105 shadow-lg flex items-center justify-center gap-2"
                    >
                      <MessageCircle size={18} /> Order Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Contact Section */}
        <div className="text-center mt-20 p-8 bg-gradient-to-r from-gray-800/50 to-gray-900/50 rounded-2xl border border-red-500/20">
          <h3 className="text-2xl font-bold text-red-400 mb-4">Ready to Purchase?</h3>
          <p className="text-gray-300 mb-6">Add items to cart for bulk orders or contact us directly!</p>
          
          <div className="flex justify-center gap-6 flex-wrap">
            <a 
              href="tel:+918511037477" 
              className="bg-green-500 hover:bg-green-600 px-6 py-3 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              <Phone size={18} /> +91 8511037477
            </a>
            <a 
              href="https://dsc.gg/teamfury" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-blue-500 hover:bg-blue-600 px-6 py-3 rounded-full font-bold transition-colors flex items-center gap-2"
            >
              💬 Discord
            </a>
          </div>
        </div>
      </div>

      {/* Notification */}
      {showNotification && (
        <div className="fixed top-6 left-6 bg-gradient-to-r from-green-500 to-green-600 text-white px-6 py-4 rounded-xl shadow-2xl z-50 transform animate-bounce">
          <div className="flex items-center gap-2">
            <span className="text-xl">✅</span>
            {notification}
          </div>
        </div>
      )}
    </div>
  );
};

export default Store;