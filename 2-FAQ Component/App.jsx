import React from 'react';
import FAQComponent from './FAQComponent';

const App = () => {
  const faqsData = [
    { id: 1, q: "How fast is delivery?", a: "We typically deliver within 3-5 business days." },
    { id: 2, q: "Can I get a refund?", a: "Yes! We offer a 30-day money-back guarantee." },
    { id: 3, q: "Is there a mobile app?", a: "Currently, our platform is responsive for web, app coming in 2026." }
  ];

  return (
    <div className="container-fluid py-5" style={{ 
      background: 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)', 
      minHeight: '100vh' 
    }}>
      <FAQComponent faqs={faqsData} />
    </div>
  );
};

export default App;
