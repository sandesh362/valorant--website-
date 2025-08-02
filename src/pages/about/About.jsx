import React from 'react';
import styles, { layout } from "../../style";

const About = () => (
  <div className="bg-gray-900 px-6 md:px-16 flex justify-start">
    <div className="max-w-7xl w-full">
      <section id="agents" className="py-16 relative">
        <div className="relative flex md:flex-row-reverse flex-col md:py-8 py-0">
          <div className="flex-1 flex justify-start items-start flex-col relative md:mr-16">
            <div className="relative max-w-full">
              <h1 className="pt-8 relative">  
                <div className="relative font-bold md:text-[80px] text-[44px] text-red-500 leading-[4rem] md:my-10">
                🔥 TEAM FURY
                </div>
              </h1>
              <h5 className="font-semibold text-red-500 mb-8">
              About Us – TEAM FURY
              </h5>
              <div className="text-white space-y-4">
                <p className="text-lg leading-relaxed">
                  At <span className="text-red-500 font-semibold">TEAM FURY</span>, we're on a mission to bring trust, structure, and legitimacy to the Valorant account marketplace in India. We understand the uncertainty that often surrounds buying game accounts and we're here to change that.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Every account listed with us goes through a strict verification and background check to ensure it's sourced legally, ethically, and directly from original owners. We believe in a transparent and secure buying experience where customers know exactly what they're getting – no surprises, no shortcuts.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Over the past year, we've proudly sold <span className="text-red-500 font-semibold">1000+ accounts</span>, built a community of <span className="text-red-500 font-semibold">1000+ happy buyers</span>, and earned the trust of gamers across the country.
                </p>
                
                <p className="text-lg leading-relaxed">
                  Our goal is to remove the stigma around account reselling and make it a safer, smarter, and more accessible space for passionate players.
                </p>
              </div>
              <div className="md:flex-start flex md:justify-start justify-center">
                
              </div>
            </div>
          </div>
          <div className="flex justify-center items-center relative">
            {/* <div
              className="flex justify-center items-center relative w-[100%] h-[100%]"
            >
              <img
                src="https://playvalorant.com/static/agents-group-31d7ce5a3637e45d8b25d2fd03159e6c.png"
                alt="agents"
                className="w-[100%] h-[100%] relative"
              />
            </div> */}
          </div>
        </div>
      </section>

      {/* Why Choose TEAM FURY Section */}
      <section className="py-16 relative">
        <div className="relative flex flex-col py-8">
          <div className="relative">
            <h3 className="font-bold md:text-[40px] text-[28px] text-red-500 mb-8">
              ✅ Why Choose TEAM FURY?
            </h3>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-[20px] border border-gray-700">
                <h4 className="text-red-500 font-semibold text-xl mb-3">
                  🛡 Verified & Safe Accounts
                </h4>
                <p className="text-white leading-relaxed">
                  All accounts sold through TEAM FURY are legitimately acquired, with full consent of the original owners. We strictly oppose stolen, hacked, or grey-market listings.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-[20px] border border-gray-700">
                <h4 className="text-red-500 font-semibold text-xl mb-3">
                  🤝 We Take Responsibility
                </h4>
                <p className="text-white leading-relaxed">
                  We don't disappear after the sale. Our team provides active post-sale support, helps with disputes, and assists in case of lockouts because your trust means everything.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-[20px] border border-gray-700">
                <h4 className="text-red-500 font-semibold text-xl mb-3">
                  🚫 Anti-Scam Policy
                </h4>
                <p className="text-white leading-relaxed">
                  We've created TEAM FURY to combat the rise of scams in the gaming market. Every account is manually checked, and we work only with verified sources.
                </p>
              </div>

              <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-[20px] border border-gray-700">
                <h4 className="text-red-500 font-semibold text-xl mb-3">
                  💬 Real Support, Real People
                </h4>
                <p className="text-white leading-relaxed">
                  Our support team is available via WhatsApp and Discord, providing fast and reliable help whenever you need it. You're not just buying an account, you're joining a trusted network.
                </p>
              </div>
            </div>

            <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-6 rounded-[20px] border border-gray-700 mt-8">
              <h4 className="text-red-500 font-semibold text-xl mb-3">
                📈 Proven Track Record
              </h4>
              <p className="text-white leading-relaxed">
                With 1000+ successful sales and satisfied players, we've built a reputation on results, not promises. Our reviews speak for themselves.
              </p>
            </div>

            {/* Closing Statement */}
            <div className="bg-gradient-to-r from-red-500 to-blue-400 p-8 rounded-[20px] text-center mt-8">
              <p className="text-gray-900 font-semibold text-lg leading-relaxed">
                TEAM FURY is built by gamers, for gamers. We're not just a business – We're a dedicated team working to reshape the Valorant account space with honesty, passion, and player-first service.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About;
