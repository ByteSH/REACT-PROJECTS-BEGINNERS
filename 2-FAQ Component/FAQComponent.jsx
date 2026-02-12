import React, { useState } from 'react';

const FAQComponent = ({ faqs }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="container" style={{ maxWidth: '700px' }}>
      <h2 className="text-center fw-bold mb-5" style={{ color: '#2d3436' }}>
        Common Questions
      </h2>
      
      {faqs.map((item, index) => {
        const isOpen = activeIndex === index;
        return (
          <div 
            key={item.id} 
            className="mb-3 border-0 shadow-sm"
            style={{
              borderRadius: '15px',
              backgroundColor: 'rgba(255, 255, 255, 0.9)',
              overflow: 'hidden',
              transition: 'all 0.3s ease'
            }}
          >
            <div 
              className="p-4 d-flex justify-content-between align-items-center" 
              style={{ cursor: 'pointer' }}
              onClick={() => setActiveIndex(isOpen ? null : index)}
            >
              <h5 className={`mb-0 ${isOpen ? 'text-primary' : 'text-dark'}`} style={{ transition: '0.3s' }}>
                {item.q}
              </h5>
              <span style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: '0.4s', fontSize: '1.5rem' }}>
                 {isOpen ? '−' : '+'} 
              </span>
            </div>

            <div 
              style={{ 
                maxHeight: isOpen ? '200px' : '0px', 
                transition: 'max-height 0.4s ease-in-out',
                opacity: isOpen ? 1 : 0
              }}
            >
              <div className="px-4 pb-4 text-muted">
                <hr className="mt-0" />
                {item.a}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FAQComponent;