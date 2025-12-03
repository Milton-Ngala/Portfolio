import React, { useState, useEffect } from 'react';
import { X } from 'lucide-react';
import { WhatsAppOutlined } from '@ant-design/icons';

const WhatsAppButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    // Show button after a short delay
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    // Show tooltip periodically to encourage engagement
    const tooltipTimer = setInterval(() => {
      setShowTooltip(false); //return to true if customer wants engagement
      setTimeout(() => setShowTooltip(false), 3000);
    }, 15000);

    return () => clearInterval(tooltipTimer);
  }, []);

  const openWhatsApp = () => {
    const message = "Hi! I'm interested in booking a safari with Makio Tours. Could you please help me with more information?";
    const encodedMessage = encodeURIComponent(message);
    window.open(`https://wa.me/25474176002?text=${encodedMessage}`, '_blank');
  };

  const dismissTooltip = () => {
    setShowTooltip(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Tooltip */}
      {showTooltip && (
        <div className="absolute bottom-20 right-0 bg-white shadow-lg rounded-lg p-4 max-w-64 animate-slide-in-up">
          <button
            onClick={dismissTooltip}
            className="absolute top-2 right-2 text-gray-400 hover:text-gray-600"
          >
            <X className="h-4 w-4" />
          </button>
          <div className="pr-6">
            <h4 className="font-montserrat font-semibold text-gray-900 mb-2">
              Need Help Planning Your Safari?
            </h4>
            <p className="font-opensans text-sm text-gray-600 mb-3">
              Chat with our safari experts for personalized recommendations and instant quotes!
            </p>
            <button
              onClick={openWhatsApp}
              className="bg-safari-green hover:bg-green-700 text-white font-opensans font-medium px-3 py-2 rounded-lg text-sm transition-colors"
            >
              Start Chat
            </button>
          </div>
          {/* Tooltip Arrow */}
          <div className="absolute bottom-0 right-8 transform translate-y-2">
            <div className="w-4 h-4 bg-white shadow-lg rotate-45"></div>
          </div>
        </div>
      )}

      {/* WhatsApp Button */}
      <button
        onClick={openWhatsApp}
        className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-110 group animate-bounce-slow"
        aria-label="Contact us on WhatsApp"
      >
        <WhatsAppOutlined 
          className="h-6 w-6 group-hover:scale-110 transition-transform" 
          style={{fontSize: "24px"}}
        />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 rounded-full bg-green-500 animate-ping opacity-20"></div>
        
        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-opensans font-bold">
          7
        </div>
      </button>

      {/* Quick Action Buttons (Hidden by default, can be expanded) */}
      <div className="absolute bottom-20 right-0 space-y-2 opacity-0 pointer-events-none group-hover:opacity-100 group-hover:pointer-events-auto transition-all duration-300">
        <button
          onClick={openWhatsApp}
          className="bg-white text-safari-green shadow-lg px-4 py-2 rounded-full font-opensans font-medium text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          Quick Quote
        </button>
        <button
          onClick={openWhatsApp}
          className="bg-white text-safari-green shadow-lg px-4 py-2 rounded-full font-opensans font-medium text-sm hover:bg-gray-50 transition-colors whitespace-nowrap"
        >
          Book Safari
        </button>
      </div>
    </div>
  );
};

export default WhatsAppButton;