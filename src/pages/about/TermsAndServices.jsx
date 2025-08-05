import React, { useState } from 'react';

const TermsAndServices = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [acceptedTerms, setAcceptedTerms] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const sections = [
    {
      id: 'refund',
      title: 'Return & Refund Policy',
      icon: '📦',
      color: 'from-red-500 to-red-600',
      items: [
        {
          title: 'No Refund After Delivery',
          content: 'Once an account is sold and credentials (ID & Password) are handed over, no refunds will be issued under normal circumstances.',
          icon: '❌',
          type: 'warning'
        },
        {
          title: 'Account Resell Option',
          content: 'Buyers can resell their purchased account back to us at a negotiated or suggested lower price depending on market demand and account condition.',
          icon: '🔄',
          type: 'info'
        },
        {
          title: 'Revoke or Lock Situations',
          content: 'If an account is revoked or locked due to the buyer\'s actions (e.g., region change, email login, behavior violations, etc.), no refund or replacement will be provided. If the issue occurs without the buyer\'s fault, a replacement or partial refund will be processed after investigation.',
          icon: '🔒',
          type: 'warning'
        },
        {
          title: 'Processing Time',
          content: 'Any refund or replacement may take up to 7 working days to process depending on the case complexity.',
          icon: '⏰',
          type: 'info'
        }
      ]
    },
    {
      id: 'disputes',
      title: 'Riot Disputes & Recovery Cases',
      icon: '⚖️',
      color: 'from-orange-500 to-red-500',
      items: [
        {
          title: 'Riot Intervention Cases',
          content: 'In cases where Riot Games intervenes (e.g., account bans, recovery requests from original owner), partial refunds of 50%–75% may be offered depending on market trends and situation analysis.',
          icon: '🎮',
          type: 'warning'
        }
      ]
    },
    {
      id: 'warranty',
      title: 'Warranty Conditions',
      icon: '🛡️',
      color: 'from-green-500 to-green-600',
      items: [
        {
          title: 'Direct Purchase Only',
          content: 'Warranty is only valid for accounts purchased directly from us.',
          icon: '✅',
          type: 'success'
        },
        {
          title: 'Non-Transferable',
          content: 'Warranty is non-transferable and applies only to the first buyer.',
          icon: '🔐',
          type: 'info'
        },
        {
          title: 'Modification Restrictions',
          content: 'Warranty becomes void if the buyer modifies sensitive details (email, password, region, etc.) without consulting us.',
          icon: '⚠️',
          type: 'warning'
        }
      ]
    },
    {
      id: 'thirdparty',
      title: 'Third-party & Middleman Deals',
      icon: '⚠️',
      color: 'from-red-600 to-red-700',
      items: [
        {
          title: 'No Third-Party Support',
          content: 'We are not responsible for accounts bought through third-party dealers or middleman services. Such purchases do not carry any warranty or support from us.',
          icon: '🚫',
          type: 'error'
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] via-[#2a3142] to-[#1e2532] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-red-500 to-red-600 rounded-full mb-8 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Terms & <span className="text-red-500">Services</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-red-500 to-red-600 mx-auto rounded-full mb-6"></div>
          <p className="text-2xl text-gray-300 font-light">
            Valorant Account Marketplace
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-2xl mx-auto">
            Please read our terms carefully before making any transactions. Your agreement to these terms is required for all services.
          </p>
        </div>

        {/* Quick Summary Card */}
        <div className="bg-gradient-to-r from-red-500/10 to-orange-500/10 rounded-2xl p-8 mb-12 border border-red-500/20">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Important Notice</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                By purchasing or selling accounts through our platform, you acknowledge that you have read, understood, and agree to comply with all terms and conditions outlined below. These terms are designed to protect both buyers and sellers in our marketplace.
              </p>
            </div>
          </div>
        </div>

        {/* Terms Sections */}
        <div className="space-y-8">
          {sections.map((section, index) => (
            <div
              key={section.id}
              className="bg-[#1e2532] rounded-2xl shadow-2xl border border-gray-700 overflow-hidden transition-all duration-300 hover:shadow-3xl"
            >
              {/* Section Header */}
              <div 
                className={`bg-gradient-to-r ${section.color} p-6 cursor-pointer`}
                onClick={() => toggleSection(section.id)}
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <span className="text-3xl">{section.icon}</span>
                    <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                  </div>
                  <svg 
                    className={`w-6 h-6 text-white transition-transform duration-300 ${
                      expandedSections[section.id] ? 'rotate-180' : ''
                    }`} 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
              </div>

              {/* Section Content */}
              <div className={`transition-all duration-500 ease-in-out ${
                expandedSections[section.id] ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'
              } overflow-hidden`}>
                <div className="p-6 space-y-6">
                  {section.items.map((item, itemIndex) => (
                    <div 
                      key={itemIndex}
                      className={`rounded-xl p-6 border transition-all duration-300 hover:scale-[1.02] ${
                        item.type === 'success' ? 'bg-green-500/10 border-green-500/30 hover:border-green-500/50' :
                        item.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30 hover:border-yellow-500/50' :
                        item.type === 'error' ? 'bg-red-500/10 border-red-500/30 hover:border-red-500/50' :
                        'bg-blue-500/10 border-blue-500/30 hover:border-blue-500/50'
                      }`}
                    >
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0">
                          <span className="text-2xl">{item.icon}</span>
                        </div>
                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-3">{item.title}</h3>
                          <p className="text-gray-300 leading-relaxed">{item.content}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Support Section */}
        <div className="mt-16 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl p-8 border border-purple-500/20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Need Help?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              For questions, clarifications, or support regarding your account transactions, our team is ready to assist you.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/918511037477?text=Hi%2C%20I%20need%20help%20regarding%20Terms%20%26%20Services', '_blank')}
                className="bg-green-500/20 border border-green-500/30 rounded-xl p-4 flex items-center space-x-3 hover:bg-green-500/30 hover:border-green-500/50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
              >
                <svg className="w-6 h-6 text-green-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893A11.821 11.821 0 0020.885 3.688" />
                </svg>
                <span className="text-white font-medium">WhatsApp Support</span>
              </button>
              <button
                onClick={() => window.open('https://www.instagram.com/teamfury.store/', '_blank')}
                className="bg-pink-500/20 border border-pink-500/30 rounded-xl p-4 flex items-center space-x-3 hover:bg-pink-500/30 hover:border-pink-500/50 transition-all duration-200 transform hover:scale-105 cursor-pointer"
              >
                <svg className="w-6 h-6 text-pink-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 2.011C6.529 2.011 2.011 6.529 2.011 12.017s4.518 10.006 10.006 10.006 10.006-4.518 10.006-10.006S17.505 2.011 12.017 2.011zm4.773 7.678l-.724.724c-.166.166-.166.433 0 .599l.724.724c.166.166.433.166.599 0l.724-.724c.166-.166.166-.433 0-.599l-.724-.724c-.166-.166-.433-.166-.599 0zm-9.546 0c-.166.166-.166.433 0 .599l.724.724c.166.166.433.166.599 0l.724-.724c.166-.166.166-.433 0-.599l-.724-.724c-.166-.166-.433-.166-.599 0l-.724.724zm4.773-2.655c-1.324 0-2.4 1.076-2.4 2.4s1.076 2.4 2.4 2.4 2.4-1.076 2.4-2.4-1.076-2.4-2.4-2.4z"/>
                </svg>
                <span className="text-white font-medium">Instagram DM</span>
              </button>
            </div>
          </div>
        </div>

        {/* Terms Agreement */}
        <div className="mt-12 bg-[#1e2532] rounded-2xl p-8 border border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={acceptedTerms}
                  onChange={(e) => setAcceptedTerms(e.target.checked)}
                  className="sr-only peer"
                />
                <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                  acceptedTerms ? 'bg-red-500' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-300 ${
                    acceptedTerms ? 'translate-x-5' : 'translate-x-0'
                  }`}></div>
                </div>
              </label>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Agreement:</span> By proceeding with any purchase or sale, you acknowledge that you have read, understood, and agree to all the terms and conditions stated above. These terms are subject to change without prior notice, and continued use of our services constitutes acceptance of any modifications.
              </p>
            </div>
          </div>
          
          {acceptedTerms && (
            <div className="mt-6 p-4 bg-green-500/10 border border-green-500/30 rounded-lg flex items-center space-x-3">
              <svg className="w-6 h-6 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-green-400 font-medium">Thank you for accepting our terms and conditions!</p>
            </div>
          )}
        </div>

        {/* Last Updated */}
        <div className="mt-8 text-center">
          <p className="text-gray-500 text-sm">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>

      </div>
    </div>
  );
};

export default TermsAndServices;