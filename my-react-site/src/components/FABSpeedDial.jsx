import React, { useState, useEffect, useRef } from 'react';

const FABSpeedDial = () => {
  const [isOpen, setIsOpen] = useState(false);
  const fabRef = useRef();

  const toggleFAB = (e) => {
    e.stopPropagation();
    setIsOpen(prev => !prev);
  };

  const closeFAB = () => setIsOpen(false);

  const openChatFunction = () => {
    alert("💬 Live chat launching soon!");
  };

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (fabRef.current && !fabRef.current.contains(e.target)) {
        closeFAB();
      }
    };
    document.addEventListener('click', handleClickOutside);
    return () => document.removeEventListener('click', handleClickOutside);
  }, []);

  return (
    <div
      ref={fabRef}
      className={`fab-speed-dial ${isOpen ? 'open' : ''}`}
    >
      <button
        className="fab-main"
        aria-label="Open contact options"
        aria-expanded={isOpen}
        onClick={toggleFAB}
      >
        <img src="/images/questions.png" alt="Question Icon" className="fab-main-icon" />
        <span>Questions</span>
      </button>

      <div className="fab-items">
        <a href="tel:+1-800-555-1234" className="fab-item fab-call" aria-label="Call Us">
          <span className="fab-icon">
            <img src="/images/callus.png" alt="Phone Icon" />
          </span>
          <span className="fab-text">Let's Talk</span>
        </a>

        <a href="/contact" className="fab-item fab-contact" aria-label="Email Us">
          <span className="fab-icon">
            <img src="/images/email.png" alt="Email Icon" />
          </span>
          <span className="fab-text">Email Us</span>
        </a>

        <button onClick={openChatFunction} className="fab-item fab-chat" aria-label="Chat Now">
          <span className="fab-icon">
            <img src="/images/chat.png" alt="Chat Icon" />
          </span>
          <span className="fab-text">Let's Chat</span>
        </button>
      </div>
    </div>
  );
};

export default FABSpeedDial;
