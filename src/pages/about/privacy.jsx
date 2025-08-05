import React, { useState } from 'react';

const PrivacyNotes = () => {
  const [expandedSections, setExpandedSections] = useState({});
  const [acknowledged, setAcknowledged] = useState(false);

  const toggleSection = (sectionId) => {
    setExpandedSections(prev => ({
      ...prev,
      [sectionId]: !prev[sectionId]
    }));
  };

  const privacySections = [
    {
      id: 'data-collection',
      title: 'Data Collection',
      icon: '📊',
      color: 'from-blue-500 to-blue-600',
      content: `We collect personal information such as your name, email address, and payment details to facilitate transactions on the Valorant ID Marketplace. This includes:
      
      • Account registration information (username, email, password)
      • Transaction details and payment information
      • Communication records (support tickets, messages)
      • Device information and IP addresses for security purposes
      
      By using our services, you consent to the collection and use of this information as outlined in this privacy policy.`,
      type: 'info'
    },
    {
      id: 'data-usage',
      title: 'How We Use Your Information',
      icon: '🔧',
      color: 'from-green-500 to-green-600',
      content: `Your personal information is used solely for the purpose of:
      
      • Providing our marketplace services
      • Processing transactions securely
      • Improving your user experience
      • Sending important updates regarding your account
      • Preventing fraud and ensuring platform security
      • Complying with legal obligations
      
      We never use your data for unauthorized marketing or share it without your consent.`,
      type: 'success'
    },
    {
      id: 'data-protection',
      title: 'Data Protection & Security',
      icon: '🛡️',
      color: 'from-purple-500 to-purple-600',
      content: `We implement industry-standard security measures to protect your data:
      
      • End-to-end encryption for sensitive information
      • Secure payment processing through trusted providers
      • Regular security audits and updates
      • Access controls and authentication protocols
      • Data backup and recovery systems
      
      While we strive to keep your data secure, no method of transmission over the internet is 100% secure. We continuously work to improve our security measures.`,
      type: 'security'
    },
    {
      id: 'data-sharing',
      title: 'Information Sharing',
      icon: '🤝',
      color: 'from-orange-500 to-red-500',
      content: `We maintain strict policies regarding your personal information:
      
      • We do NOT sell, trade, or rent your personal information to third parties
      • We may share data with trusted partners solely for service operation (payment processing, security)
      • Information may be disclosed if required by law or to protect our rights
      • Anonymous, aggregated data may be used for analytics and improvements
      
      Your privacy is our priority, and we only share information when absolutely necessary for service delivery.`,
      type: 'warning'
    },
    {
      id: 'cookies',
      title: 'Cookies & Tracking',
      icon: '🍪',
      color: 'from-yellow-500 to-orange-500',
      content: `Our website uses cookies to enhance your experience:
      
      • Essential cookies for website functionality
      • Analytics cookies to understand user behavior (optional)
      • Preference cookies to remember your settings
      • Security cookies to protect against fraud
      
      You can manage cookie preferences in your browser settings or through our cookie preference center. Disabling certain cookies may affect website functionality.`,
      type: 'info'
    },
    {
      id: 'policy-changes',
      title: 'Policy Updates',
      icon: '📝',
      color: 'from-indigo-500 to-purple-500',
      content: `We may update this privacy policy from time to time:
      
      • All changes will be posted on this page
      • Significant changes will be communicated via email
      • Continued use of our services constitutes acceptance
      • Previous versions will be archived for reference
      
      We encourage you to review this policy periodically to stay informed about how we protect your information.`,
      type: 'info'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1a1f2e] via-[#2a3142] to-[#1e2532] py-12 px-4">
      <div className="max-w-6xl mx-auto">
        
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-8 shadow-2xl">
            <svg className="w-12 h-12 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-1a2 2 0 00-2-2H6a2 2 0 00-2 2v1a2 2 0 002 2zM12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
            </svg>
          </div>
          <h1 className="text-6xl font-bold text-white mb-6 tracking-tight">
            Privacy <span className="text-blue-500">Policy</span>
          </h1>
          <div className="w-32 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto rounded-full mb-6"></div>
          <p className="text-2xl text-gray-300 font-light">
            Your Privacy Matters to Us
          </p>
          <p className="text-lg text-gray-400 mt-4 max-w-3xl mx-auto">
            We are committed to protecting your personal information and being transparent about how we collect, use, and safeguard your data on our Valorant account marketplace.
          </p>
        </div>

        {/* Quick Overview Card */}
        <div className="bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-2xl p-8 mb-12 border border-blue-500/20">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center">
                <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-3">Our Privacy Commitment</h3>
              <p className="text-gray-300 text-lg leading-relaxed">
                We believe privacy is a fundamental right. This policy explains how we handle your personal information with the utmost care and respect. We only collect what's necessary, protect it with industry-standard security, and never sell your data to third parties.
              </p>
            </div>
          </div>
        </div>

        {/* Privacy Sections */}
        <div className="space-y-8">
          {privacySections.map((section, index) => (
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
                    <div>
                      <h2 className="text-2xl font-bold text-white">{section.title}</h2>
                      <p className="text-white/80 text-sm">Click to expand details</p>
                    </div>
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
                <div className="p-8">
                  <div className={`rounded-xl p-6 border ${
                    section.type === 'success' ? 'bg-green-500/10 border-green-500/30' :
                    section.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500/30' :
                    section.type === 'security' ? 'bg-purple-500/10 border-purple-500/30' :
                    'bg-blue-500/10 border-blue-500/30'
                  }`}>
                    <div className="prose prose-invert max-w-none">
                      <p className="text-gray-300 leading-relaxed whitespace-pre-line text-lg">
                        {section.content}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Contact & Support Section */}
        <div className="mt-16 bg-gradient-to-r from-green-500/10 to-blue-500/10 rounded-2xl p-8 border border-green-500/20">
          <div className="text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-green-500 to-blue-500 rounded-full mb-6">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
            </div>
            <h2 className="text-3xl font-bold text-white mb-4">Privacy Questions?</h2>
            <p className="text-xl text-gray-300 mb-6 max-w-2xl mx-auto">
              If you have any questions or concerns about our privacy practices, we're here to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => window.open('https://wa.me/918511037477?text=Hi%2C%20I%20have%20questions%20about%20your%20Privacy%20Policy', '_blank')}
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

        {/* Privacy Acknowledgment */}
        <div className="mt-12 bg-[#1e2532] rounded-2xl p-8 border border-gray-700">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0 mt-1">
              <label className="relative inline-flex items-center cursor-pointer">
                <input
                  type="checkbox"
                  checked={acknowledged}
                  onChange={(e) => setAcknowledged(e.target.checked)}
                  className="sr-only peer"
                />
                <div className={`relative w-11 h-6 rounded-full transition-colors duration-300 ${
                  acknowledged ? 'bg-blue-500' : 'bg-gray-600'
                }`}>
                  <div className={`absolute top-0.5 left-0.5 bg-white rounded-full h-5 w-5 transition-transform duration-300 ${
                    acknowledged ? 'translate-x-5' : 'translate-x-0'
                  }`}></div>
                </div>
              </label>
            </div>
            <div className="flex-1">
              <p className="text-gray-300 leading-relaxed">
                <span className="text-white font-semibold">Privacy Acknowledgment:</span> I have read and understand this Privacy Policy. I acknowledge that by continuing to use the Valorant account marketplace services, I consent to the collection, use, and protection of my personal information as described above.
              </p>
            </div>
          </div>
          
          {acknowledged && (
            <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/30 rounded-lg flex items-center space-x-3">
              <svg className="w-6 h-6 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <p className="text-blue-400 font-medium">Thank you for reviewing our Privacy Policy!</p>
            </div>
          )}
        </div>

        {/* Footer Information */}
        <div className="mt-12 grid md:grid-cols-3 gap-6">
          <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-green-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-1a2 2 0 00-2-2H6a2 2 0 00-2 2v1a2 2 0 002 2zM12 8c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Data Protection</h3>
            <p className="text-gray-400 text-sm">Your information is encrypted and protected with industry-standard security measures.</p>
          </div>

          <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192L5.636 18.364M12 2.25a9.75 9.75 0 100 19.5 9.75 9.75 0 000-19.5z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">No Data Selling</h3>
            <p className="text-gray-400 text-sm">We never sell, rent, or trade your personal information to third parties.</p>
          </div>

          <div className="bg-[#1e2532] rounded-xl p-6 border border-gray-700 text-center">
            <div className="w-12 h-12 bg-purple-500 rounded-lg flex items-center justify-center mx-auto mb-4">
              <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
            </div>
            <h3 className="text-lg font-bold text-white mb-2">Full Control</h3>
            <p className="text-gray-400 text-sm">You have complete control over your data and can request access, updates, or deletion anytime.</p>
          </div>
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

export default PrivacyNotes;