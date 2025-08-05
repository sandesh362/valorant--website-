import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";

const CookiePreference = () => {
  const navigate = useNavigate();
  const [preferences, setPreferences] = useState({
    essential: true,
    analytics: false,
    marketing: false,
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Cookie Preferences:', preferences);
      setIsSubmitting(false);
      navigate("/");
    }, 1000);
  };

  const handleAcceptAll = () => {
    setPreferences({
      essential: true,
      analytics: true,
      marketing: true,
    });
  };

  const handleDeclineAll = () => {
    setPreferences({
      essential: true,
      analytics: false,
      marketing: false,
    });
  };

  const cookieTypes = [
    {
      name: 'essential',
      title: 'Essential Cookies',
      subtitle: 'Required',
      description: 'These cookies are necessary for the website to function properly and cannot be switched off.',
      icon: '🔒',
      required: true
    },
    {
      name: 'analytics',
      title: 'Analytics Cookies',
      subtitle: 'Optional',
      description: 'Help us understand how visitors interact with our website by collecting anonymous information.',
      icon: '📊',
      required: false
    },
    {
      name: 'marketing',
      title: 'Marketing Cookies',
      subtitle: 'Optional',
      description: 'Used to deliver personalized advertisements and track the effectiveness of our campaigns.',
      icon: '🎯',
      required: false
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] via-[#2a3142] to-[#1e2532] py-12 px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-6 shadow-lg">
            <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h1 className="text-5xl font-bold text-white mb-4">
            Cookie <span className="text-red-500">Preferences</span>
          </h1>
          <div className="w-24 h-1 bg-red-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            We respect your privacy. Choose which cookies you'd like to allow to enhance your browsing experience.
          </p>
        </div>

        {/* Main Content Card */}
        <div className="bg-[#1e2532] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden">
          <div className="p-8">
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Cookie Options */}
              <div className="space-y-6">
                {cookieTypes.map((cookie) => (
                  <div
                    key={cookie.name}
                    className={`group relative bg-[#2a3142] rounded-xl p-6 border transition-all duration-300 ${
                      preferences[cookie.name] 
                        ? 'border-red-500 bg-gradient-to-r from-red-500/10 to-transparent' 
                        : 'border-gray-600 hover:border-gray-500'
                    }`}
                  >
                    <div className="flex items-start justify-between">
                      <div className="flex items-start space-x-4 flex-1">
                        <div className="text-3xl">{cookie.icon}</div>
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-2">
                            <h3 className="text-xl font-bold text-white">{cookie.title}</h3>
                            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                              cookie.required 
                                ? 'bg-red-500 text-white' 
                                : 'bg-gray-600 text-gray-300'
                            }`}>
                              {cookie.subtitle}
                            </span>
                          </div>
                          <p className="text-gray-300 leading-relaxed">{cookie.description}</p>
                        </div>
                      </div>
                      
                      {/* Custom Toggle Switch */}
                      <div className="flex-shrink-0 ml-4">
                        <label className="relative inline-flex items-center cursor-pointer">
                          <input
                            type="checkbox"
                            name={cookie.name}
                            checked={preferences[cookie.name]}
                            onChange={handleChange}
                            disabled={cookie.required}
                            className="sr-only peer"
                          />
                          <div className={`relative w-14 h-7 rounded-full transition-colors duration-300 ${
                            preferences[cookie.name] 
                              ? 'bg-red-500' 
                              : 'bg-gray-600'
                          } ${cookie.required ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}`}>
                            <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-6 w-6 transition-transform duration-300 ${
                              preferences[cookie.name] ? 'translate-x-7' : 'translate-x-0'
                            }`}></div>
                          </div>
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Quick Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-600">
                <button
                  type="button"
                  onClick={handleAcceptAll}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Accept All</span>
                </button>
                
                <button
                  type="button"
                  onClick={handleDeclineAll}
                  className="flex-1 bg-gray-600 hover:bg-gray-700 text-white font-bold py-4 px-6 rounded-xl transition-all duration-200 transform hover:scale-105 flex items-center justify-center space-x-2"
                >
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                  <span>Essential Only</span>
                </button>
              </div>

              {/* Save Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-red-500 to-red-600 hover:from-red-600 hover:to-red-700 disabled:from-gray-600 disabled:to-gray-700 text-white font-bold py-4 px-8 rounded-xl transition-all duration-200 transform hover:scale-105 disabled:scale-100 flex items-center justify-center space-x-3 shadow-lg"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                    <span>Saving Preferences...</span>
                  </>
                ) : (
                  <>
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
                    </svg>
                    <span>Save My Preferences</span>
                  </>
                )}
              </button>
            </form>
          </div>

          {/* Footer Info */}
          <div className="bg-[#1a1f2e] px-8 py-6 border-t border-gray-700">
            <div className="flex items-center justify-center space-x-2 text-sm text-gray-400">
              <svg className="w-4 h-4 text-green-400" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
              </svg>
              <span>Your preferences are stored securely and can be changed anytime</span>
            </div>
          </div>
        </div>

        {/* Additional Info Cards */}
        <div className="grid md:grid-cols-2 gap-6 mt-12">
          <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Privacy First</h3>
            </div>
            <p className="text-gray-300 text-sm">We're committed to protecting your privacy and only collect data that improves your experience.</p>
          </div>

          <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700">
            <div className="flex items-center space-x-3 mb-4">
              <div className="w-10 h-10 bg-purple-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold text-white">Full Control</h3>
            </div>
            <p className="text-gray-300 text-sm">You can update your cookie preferences at any time through your account settings or browser.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CookiePreference;