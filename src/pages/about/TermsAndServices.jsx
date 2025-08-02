import React from 'react';

const TermsAndServices = () => {
  return (
    <div className="bg-gradient-to-br from-black via-gray-900 to-gray-800 text-white py-16 px-6 lg:px-20 min-h-screen">
      
      {/* Hero Section */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-red-600 tracking-wider uppercase">
           Terms & Services
        </h1>
        <p className="text-xl mt-4 text-gray-300">
          Valorant Account Buy & Sell
        </p>
      </div>

      {/* Content Section */}
      <div className="space-y-12 max-w-4xl mx-auto">

        {/* Introduction */}
        <section>
          <div className="bg-gradient-to-r from-red-900/20 to-gray-800/20 p-6 rounded-lg border border-red-600/30">
            <p className="text-lg leading-relaxed">
              Please read our terms carefully before making a purchase. By buying or selling with us, you agree to the following conditions:
            </p>
          </div>
        </section>

        {/* Return & Refund Policy */}
        <section>
          <h2 className="text-3xl font-semibold text-red-500 mb-6 border-b-2 border-red-600 pb-2 flex items-center">
            📦 Return & Refund Policy
          </h2>
          
          <div className="space-y-6">
            {/* No Refund After Delivery */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">No Refund After Delivery</h3>
              <p className="text-lg leading-relaxed">
                Once an account is sold and credentials (ID & Password) are handed over, no refunds will be issued under normal circumstances.
              </p>
            </div>

            {/* Account Resell Option */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Account Resell Option</h3>
              <p className="text-lg leading-relaxed">
                Buyers can resell their purchased account back to us at a negotiated or suggested lower price depending on market demand and account condition.
              </p>
            </div>

            {/* Revoke or Lock Situations */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Revoke or Lock Situations</h3>
              <div className="space-y-3">
                <p className="text-lg leading-relaxed">
                  If an account is revoked or locked due to the buyer's actions (e.g., region change, email login, behavior violations, etc.), no refund or replacement will be provided.
                </p>
                <p className="text-lg leading-relaxed">
                  If the issue occurs without the buyer's fault, a replacement or partial refund will be processed after investigation.
                </p>
              </div>
            </div>

            {/* Processing Time */}
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
              <h3 className="text-xl font-semibold text-white mb-3">Refund/Replacement Processing Time</h3>
              <p className="text-lg leading-relaxed">
                Any refund or replacement may take up to <span className="text-red-500 font-semibold">7 working days</span> to process depending on the case complexity.
              </p>
            </div>
          </div>
        </section>

        {/* Riot Disputes & Recovery Cases */}
        <section>
          <h2 className="text-3xl font-semibold text-red-500 mb-6 border-b-2 border-red-600 pb-2">
            ⚖️ Riot Disputes & Recovery Cases
          </h2>
          <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700">
            <p className="text-lg leading-relaxed">
              In cases where Riot Games intervenes (e.g., account bans, recovery requests from original owner), partial refunds of <span className="text-red-500 font-semibold">50%–75%</span> may be offered depending on market trends and situation analysis.
            </p>
          </div>
        </section>

        {/* Warranty Conditions */}
        <section>
          <h2 className="text-3xl font-semibold text-red-500 mb-6 border-b-2 border-red-600 pb-2">
            🔧 Warranty Conditions
          </h2>
          <div className="space-y-4">
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <p className="text-lg leading-relaxed flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Warranty is only valid for accounts purchased directly from us.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <p className="text-lg leading-relaxed flex items-center">
                <span className="text-green-500 mr-3">✓</span>
                Warranty is non-transferable and applies only to the first buyer.
              </p>
            </div>
            <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700">
              <p className="text-lg leading-relaxed flex items-center">
                <span className="text-red-500 mr-3">✗</span>
                Warranty becomes void if the buyer modifies sensitive details (email, password, region, etc.) without consulting us.
              </p>
            </div>
          </div>
        </section>

        {/* Third-party & Middleman Deals */}
        <section>
          <h2 className="text-3xl font-semibold text-red-500 mb-6 border-b-2 border-red-600 pb-2">
            ⚠️ Third-party & Middleman Deals
          </h2>
          <div className="bg-red-900/20 p-6 rounded-lg border border-red-600/50">
            <p className="text-lg leading-relaxed">
              We are <span className="text-red-500 font-semibold">not responsible</span> for accounts bought through third-party dealers or middleman services. Such purchases do not carry any warranty or support from us.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section>
          <h2 className="text-3xl font-semibold text-red-500 mb-6 border-b-2 border-red-600 pb-2">
            💬 Support & Contact
          </h2>
          <div className="bg-gradient-to-r from-red-900/30 to-gray-800/30 p-8 rounded-lg border border-red-600/30 text-center">
            <p className="text-lg leading-relaxed mb-4">
              For questions, clarifications, or claims, feel free to contact our support team via WhatsApp or Instagram.
            </p>
            <p className="text-xl font-semibold text-red-500">
              We are here to assist you.
            </p>
          </div>
        </section>

        {/* Footer Notice */}
        <section>
          <div className="bg-gray-900/50 p-6 rounded-lg border border-gray-600 text-center">
            <p className="text-sm text-gray-400 leading-relaxed">
              By proceeding with any purchase or sale, you acknowledge that you have read, understood, and agree to all the terms and conditions stated above. These terms are subject to change without prior notice.
            </p>
          </div>
        </section>

      </div>
    </div>
  );
};

export default TermsAndServices;