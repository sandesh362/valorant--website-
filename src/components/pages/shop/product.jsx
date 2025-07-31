import React, { useState, useEffect } from 'react';

export const PriceRangeFilter = ({ products, onFilterChange, minPrice = 0, maxPrice = 100000 }) => {
  const [priceRange, setPriceRange] = useState([minPrice, maxPrice]);
  const [isOpen, setIsOpen] = useState(false);

  // Calculate actual min/max from products
  useEffect(() => {
    if (products && products.length > 0) {
      const prices = products.map(product => product.price);
      const actualMin = Math.min(...prices);
      const actualMax = Math.max(...prices);
      setPriceRange([actualMin, actualMax]);
    }
  }, [products]);

  const handleRangeChange = (index, value) => {
    const newRange = [...priceRange];
    newRange[index] = parseInt(value);
    
    // Ensure min is not greater than max
    if (index === 0 && newRange[0] > newRange[1]) {
      newRange[0] = newRange[1];
    }
    if (index === 1 && newRange[1] < newRange[0]) {
      newRange[1] = newRange[0];
    }
    
    setPriceRange(newRange);
    onFilterChange(newRange);
  };

  const resetFilter = () => {
    const actualMin = products ? Math.min(...products.map(p => p.price)) : minPrice;
    const actualMax = products ? Math.max(...products.map(p => p.price)) : maxPrice;
    setPriceRange([actualMin, actualMax]);
    onFilterChange([actualMin, actualMax]);
  };

  const getFilteredCount = () => {
    if (!products) return 0;
    return products.filter(product => 
      product.price >= priceRange[0] && product.price <= priceRange[1]
    ).length;
  };

  return (
    <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700">
      {/* Header */}
      <div 
        className="flex items-center justify-between cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <h3 className="text-xl font-bold text-white flex items-center">
          <svg className="w-5 h-5 mr-2 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
          </svg>
          Price Filter
        </h3>
        <div className="flex items-center space-x-2">
          <span className="text-sm text-gray-400">({getFilteredCount()} items)</span>
          <svg 
            className={`w-5 h-5 text-gray-400 transform transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>

      {/* Filter Content */}
      <div className={`mt-4 space-y-6 transition-all duration-300 ${isOpen ? 'block' : 'hidden'}`}>
        {/* Price Range Display */}
        <div className="flex items-center justify-between">
          <div className="text-center">
            <p className="text-sm text-gray-400">Min Price</p>
            <p className="text-xl font-bold text-green-400">₹{priceRange[0]}</p>
          </div>
          <div className="text-gray-400">—</div>
          <div className="text-center">
            <p className="text-sm text-gray-400">Max Price</p>
            <p className="text-xl font-bold text-green-400">₹{priceRange[1]}</p>
          </div>
        </div>

        {/* Dual Range Slider */}
        <div className="relative">
          <div className="flex items-center space-x-4">
            {/* Min Range Slider */}
            <div className="flex-1 relative">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step="100"
                value={priceRange[0]}
                onChange={(e) => handleRangeChange(0, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb-red"
              />
            </div>
            
            {/* Max Range Slider */}
            <div className="flex-1 relative">
              <input
                type="range"
                min={minPrice}
                max={maxPrice}
                step="100"
                value={priceRange[1]}
                onChange={(e) => handleRangeChange(1, e.target.value)}
                className="w-full h-2 bg-gray-700 rounded-lg appearance-none cursor-pointer slider-thumb-green"
              />
            </div>
          </div>
        </div>

        {/* Manual Input */}
        <div className="grid grid-cols-2 gap-4">
          <div>
            <label className="block text-sm text-gray-400 mb-2">Min (₹)</label>
            <input
              type="number"
              value={priceRange[0]}
              onChange={(e) => handleRangeChange(0, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-red-500 outline-none"
              min={minPrice}
              max={maxPrice}
            />
          </div>
          <div>
            <label className="block text-sm text-gray-400 mb-2">Max (₹)</label>
            <input
              type="number"
              value={priceRange[1]}
              onChange={(e) => handleRangeChange(1, e.target.value)}
              className="w-full bg-gray-800 border border-gray-600 rounded-lg px-3 py-2 text-white focus:border-red-500 outline-none"
              min={minPrice}
              max={maxPrice}
            />
          </div>
        </div>

        {/* Quick Filter Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <button
            onClick={() => {
              setPriceRange([minPrice, 10000]);
              onFilterChange([minPrice, 10000]);
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
          >
            Under ₹10K
          </button>
          <button
            onClick={() => {
              setPriceRange([10000, 50000]);
              onFilterChange([10000, 50000]);
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
          >
            ₹10K - ₹50K
          </button>
          <button
            onClick={() => {
              setPriceRange([50000, 100000]);
              onFilterChange([50000, 100000]);
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
          >
            ₹50K - ₹1L
          </button>
          <button
            onClick={() => {
              setPriceRange([100000, maxPrice]);
              onFilterChange([100000, maxPrice]);
            }}
            className="bg-gray-700 hover:bg-gray-600 text-white py-2 px-4 rounded-lg text-sm transition-colors duration-200"
          >
            Above ₹1L
          </button>
        </div>

        {/* Reset Button */}
        <button
          onClick={resetFilter}
          className="w-full bg-red-500 hover:bg-red-600 text-white py-3 rounded-lg font-semibold transition-colors duration-200 flex items-center justify-center space-x-2"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
          </svg>
          <span>Reset Filter</span>
        </button>
      </div>

      <style jsx>{`
        .slider-thumb-red::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #ef4444;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .slider-thumb-green::-webkit-slider-thumb {
          appearance: none;
          height: 20px;
          width: 20px;
          border-radius: 50%;
          background: #10b981;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .slider-thumb-red::-moz-range-thumb,
        .slider-thumb-green::-moz-range-thumb {
          height: 20px;
          width: 20px;
          border-radius: 50%;
          cursor: pointer;
          border: 2px solid #ffffff;
          box-shadow: 0 2px 6px rgba(0, 0, 0, 0.3);
        }
        
        .slider-thumb-red::-moz-range-thumb {
          background: #ef4444;
        }
        
        .slider-thumb-green::-moz-range-thumb {
          background: #10b981;
        }
      `}</style>
    </div>
  );
};