import React from 'react';

const News = () => (
  <div className="min-h-screen bg-black relative">
    {/* Fixed Animated Valorant-style background */}
    <div className="fixed inset-0 opacity-10 pointer-events-none overflow-hidden">
      <div className="absolute top-20 left-10 w-32 h-32 md:w-64 md:h-64 border border-[#FF4655] transform rotate-45 animate-pulse"></div>
      <div className="absolute bottom-32 right-20 w-16 h-16 md:w-32 md:h-32 border border-[#00F5FF] transform rotate-12 animate-bounce"></div>
      <div className="absolute top-1/2 left-1/4 w-1 h-16 md:w-2 md:h-32 bg-gradient-to-b from-[#FF4655] to-transparent transform -rotate-12"></div>
      <div className="absolute top-1/3 right-1/3 w-0.5 h-10 md:w-1 md:h-20 bg-gradient-to-b from-[#00F5FF] to-transparent transform rotate-45"></div>
      <div className="absolute bottom-1/4 left-1/2 w-20 h-20 md:w-40 md:h-40 border border-[#FFAA00] rounded-full opacity-20 animate-spin" style={{animationDuration: '20s'}}></div>
      
      {/* Additional geometric elements */}
      <div className="absolute top-10 right-1/4 w-24 h-24 md:w-48 md:h-48">
        <div className="w-full h-full border-2 border-[#00F5FF]/30 transform rotate-45"></div>
        <div className="absolute inset-4 border border-[#FF4655]/20 transform -rotate-45"></div>
      </div>
      <div className="absolute bottom-10 left-1/3 w-16 h-16 md:w-32 md:h-32">
        <div className="w-full h-full bg-gradient-to-r from-[#FFAA00]/10 to-transparent transform rotate-12"></div>
      </div>
    </div>

    {/* Main content with proper scrolling */}
    <div className="relative z-0 px-4 md:px-8 lg:px-16 max-w-7xl mx-auto">
      <div className="py-8 sm:py-12 lg:py-16">
        <section>
          {/* Hero Section */}
          <div className="text-center mb-12 md:mb-20">
            <div className="relative inline-block mb-6 md:mb-8">
              <h1 className="relative text-white font-black text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl tracking-wider transform hover:scale-105 transition-transform duration-300 drop-shadow-2xl mb-2 md:mb-4">
                PREMIUM
              </h1>
              <div className="text-[#FFAA00] font-bold text-base sm:text-lg md:text-xl lg:text-2xl">
                VALORANT ACCOUNTS
              </div>
            </div>
            
            <p className="text-gray-300 text-sm sm:text-base md:text-lg lg:text-xl max-w-4xl mx-auto font-light tracking-wide mb-6 md:mb-8 px-4">
              Get your dream Valorant account with <span className="text-[#FF4655] font-bold">exclusive skins</span>, 
              <span className="text-[#00F5FF] font-bold"> rare knives</span>, and <span className="text-[#FFAA00] font-bold">premium collections</span>
            </p>

            {/* Quick Stats - Stack on mobile */}
            <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 md:gap-8 mb-8 md:mb-12">
              <div className="flex items-center justify-center gap-2 text-[#00FF88]">
                <div className="w-3 h-3 bg-[#00FF88] rounded-full animate-pulse"></div>
                <span className="font-bold text-sm md:text-base">1000+ Accounts Available</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#FF4655]">
                <div className="w-3 h-3 bg-[#FF4655] rounded-full animate-pulse"></div>
                <span className="font-bold text-sm md:text-base">Instant Delivery</span>
              </div>
              <div className="flex items-center justify-center gap-2 text-[#00F5FF]">
                <div className="w-3 h-3 bg-[#00F5FF] rounded-full animate-pulse"></div>
                <span className="font-bold text-sm md:text-base">24/7 Support</span>
              </div>
            </div>
          </div>

          {/* Account Categories - Responsive grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12 md:mb-20">
            {[
              {
                title: "Basic Collection",
                subtitle: "Great Starter Accounts",
                price: "₹1099 - ₹4,999",
                features: ["5-15 Premium Skins", "Battle Pass Items", "Verified Email", "Full Account Access"],
                color: "#FFAA00",
                icon: "🎮",
                popular: false,
                gradient: "from-[#FFAA00]/20 to-[#FFAA00]/5"
              },
              {
                title: "Premium Collection",
                subtitle: "Most Popular Choice",
                price: "₹6,999 - ₹19,999",
                features: ["20+ Exclusive Skins", "Rare Knife Collection", "Multiple Battle Passes", "High-Value Items"],
                color: "#00F5FF",
                icon: "💎",
                popular: true,
                gradient: "from-[#00F5FF]/20 to-[#00F5FF]/5"
              },
              {
                title: "Elite Collection",
                subtitle: "Ultimate Accounts",
                price: "₹20,999+",
                features: ["50+ Premium Skins", "Legendary Knives", "Rare Bundles", "VIP Account Status"],
                color: "#FF4655",
                icon: "👑",
                popular: false,
                gradient: "from-[#FF4655]/20 to-[#FF4655]/5"
              }
            ].map((category, index) => (
              <div key={index} className={`group relative bg-gradient-to-br from-[#1F1F1F] to-[#2A2A2A] rounded-2xl md:rounded-3xl overflow-hidden border-2 ${category.popular ? 'border-[#00F5FF]' : 'border-gray-800'} hover:border-opacity-70 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${category.popular ? 'md:col-span-1 lg:col-span-1' : ''}`}>
                {/* Popular badge */}
                {category.popular && (
                  <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="bg-[#00F5FF] text-black px-4 md:px-6 py-1 md:py-2 rounded-full font-bold text-xs md:text-sm">
                      MOST POPULAR
                    </div>
                  </div>
                )}

                {/* Glowing background */}
                <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                
                <div className="relative z-10 p-6 md:p-8 text-center">
                  <div className="text-4xl md:text-6xl mb-3 md:mb-4">{category.icon}</div>
                  <h3 className="font-black text-xl md:text-2xl mb-2" style={{color: category.color}}>
                    {category.title}
                  </h3>
                  <p className="text-gray-400 text-xs md:text-sm mb-3 md:mb-4 uppercase tracking-wider">{category.subtitle}</p>
                  <div className="text-2xl md:text-3xl font-bold text-white mb-4 md:mb-6">{category.price}</div>
                  
                  <ul className="space-y-2 md:space-y-3 mb-6 md:mb-8">
                    {category.features.map((feature, fIndex) => (
                      <li key={fIndex} className="flex items-center justify-center gap-2 text-gray-300 text-sm md:text-base">
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-[#00FF88] flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd"/>
                        </svg>
                        <span className="text-center">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <a 
                    href="/shop"
                    className={`block w-full py-3 md:py-4 rounded-xl font-bold text-sm md:text-base transition-all duration-300 hover:scale-105 hover:shadow-lg text-center no-underline ${
                      category.popular 
                        ? 'bg-gradient-to-r from-[#00F5FF] to-[#0080FF] text-black hover:shadow-[0_10px_30px_rgba(0,245,255,0.4)]'
                        : 'bg-gradient-to-r from-gray-700 to-gray-600 text-white hover:from-gray-600 hover:to-gray-500'
                    }`}
                  >
                    View Accounts
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Why Choose Us */}
          <div className="bg-gradient-to-r from-[#1A1A1A] via-[#2A2A2A] to-[#1A1A1A] rounded-2xl md:rounded-3xl p-6 md:p-12 border border-gray-700 mb-12 md:mb-20">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-8 md:mb-12">
              Why Choose <span className="text-[#FF4655]">TEAM FURY</span>?
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
              {[
                { 
                  title: "Instant Delivery", 
                  desc: "Get your account within 5 minutes of payment",
                  color: "#FFAA00"
                },
                { 
                  title: "100% Secure", 
                  desc: "All accounts are verified and safe to use",
                  color: "#00FF88"
                },
                { 
                  title: "Best Prices", 
                  desc: "Competitive pricing with regular discounts",
                  color: "#FF4655"
                },
                { 
                  title: "Premium Quality", 
                  desc: "Hand-picked accounts with valuable items",
                  color: "#00F5FF"
                }
              ].map((item, index) => (
                <div key={index} className="text-center group">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                    <div className={`absolute inset-0 ${item.color === '#FFAA00' ? 'bg-gradient-to-br from-[#FFAA00] to-[#FF8800]' : item.color === '#00FF88' ? 'bg-gradient-to-br from-[#00FF88] to-[#00CC66]' : item.color === '#FF4655' ? 'bg-gradient-to-br from-[#FF4655] to-[#FF2244]' : 'bg-gradient-to-br from-[#00F5FF] to-[#0080FF]'} rounded-full`}></div>
                    <div className="absolute inset-2 bg-black rounded-full flex items-center justify-center">
                      {index === 0 ? (
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FFAA00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M13,1L23,6V10.55C23,16.74 19.07,22.44 13.54,23.97L12,24.5L10.46,23.97C4.93,22.44 1,16.74 1,10.55V6L11,1L13,1M12,7L16.95,12L13.11,19H10.89L7.05,12L12,7Z"/>
                        </svg>
                      ) : index === 1 ? (
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#00FF88]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M21,7L9,19L3.5,13.5L4.91,12.09L9,16.17L19.59,5.59L21,7Z"/>
                        </svg>
                      ) : index === 2 ? (
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#FF4655]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M7,15H9C9,16.08 10.37,17 12,17C13.63,17 15,16.08 15,15C15,13.9 13.96,13.5 11.76,12.97C9.64,12.44 7,11.78 7,9C7,7.21 8.47,5.69 10.5,5.18V3H13.5V5.18C15.53,5.69 17,7.21 17,9H15C15,7.92 13.63,7 12,7C10.37,7 9,7.92 9,9C9,10.1 10.04,10.5 12.24,11.03C14.36,11.56 17,12.22 17,15C17,16.79 15.53,18.31 13.5,18.82V21H10.5V18.82C8.47,18.31 7,16.79 7,15Z"/>
                        </svg>
                      ) : (
                        <svg className="w-8 h-8 md:w-10 md:h-10 text-[#00F5FF]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12,2L13.09,8.26L22,9L13.09,15.74L12,22L10.91,15.74L2,9L10.91,8.26L12,2Z"/>
                        </svg>
                      )}
                    </div>
                  </div>
                  <h3 className="font-bold text-lg md:text-xl text-[#00F5FF] mb-2">{item.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <div className="bg-gradient-to-r from-[#FF4655]/20 via-[#FF4655]/10 to-[#FF4655]/20 rounded-2xl md:rounded-3xl p-6 md:p-12 border-2 border-[#FF4655]/30">
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-center text-white mb-4">
                Ready to Own Your <span className="text-[#FF4655]">Dream Account</span>?
              </h2>
              <p className="text-gray-300 text-sm md:text-base lg:text-lg mb-6 md:mb-8 max-w-2xl mx-auto px-4">
                Don't spend months collecting skins. Get your premium Valorant account with exclusive items today!
              </p>
              
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6">
                <a 
                  href="/shop" 
                  className="group/btn relative w-full sm:w-auto px-8 md:px-12 py-4 md:py-5 bg-gradient-to-r from-[#FF4655] to-[#FF6B7A] text-white font-bold text-base md:text-lg rounded-xl transform transition-all duration-300 hover:scale-110 hover:shadow-[0_15px_35px_rgba(255,70,85,0.6)] focus:outline-none no-underline"
                >
                  <span className="relative z-10 flex items-center justify-center gap-3">
                    <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M7 4V2C7 1.45 7.45 1 8 1H16C16.55 1 17 1.45 17 2V4H20C20.55 4 21 4.45 21 5S20.55 6 20 6H19V19C19 20.1 18.1 21 17 21H7C5.9 21 5 20.1 5 19V6H4C3.45 6 3 5.55 3 5S3.45 4 4 4H7M9 3V4H15V3H9M7 6V19H17V6H7Z"/>
                    </svg>
                    Browse All Accounts
                    <svg className="w-5 h-5 md:w-6 md:h-6 transform group-hover/btn:translate-x-2 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </span>
                </a>
                
                <a 
                  href="https://wa.me/918511037477?text=Hi%20TEAM%20FURY!%20I'm%20interested%20in%20purchasing%20a%20Valorant%20account.%20Could%20you%20please%20help%20me%20choose%20the%20right%20one?" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 w-full sm:w-auto px-6 md:px-10 py-3 md:py-4 border-2 border-[#00F5FF]/50 text-[#00F5FF] font-semibold text-base md:text-lg rounded-xl hover:bg-[#00F5FF]/10 transition-all duration-300 no-underline hover:scale-105"
                >
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.388"/>
                  </svg>
                  <span className="hidden sm:inline">Get Help Choosing</span>
                  <span className="sm:hidden">WhatsApp Help</span>
                </a>
              </div>

              {/* Trust badges - Stack on small screens */}
              <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-gray-700">
                <div className="flex items-center gap-2 text-[#00FF88]">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base">SSL Secured</span>
                </div>
                <div className="flex items-center gap-2 text-[#FFAA00]">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base">5 Star Rated</span>
                </div>
                <div className="flex items-center gap-2 text-[#FF4655]">
                  <svg className="w-4 h-4 md:w-5 md:h-5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z" clipRule="evenodd"/>
                  </svg>
                  <span className="font-semibold text-sm md:text-base">Money Back Guarantee</span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
);

export default News;