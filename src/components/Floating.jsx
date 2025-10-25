import React, { useState } from 'react';
import FloatingMessageIcon from './FloatingMessageIcon';

const Floating = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleMessageClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      {/* Floating Icon */}
      <FloatingMessageIcon onClick={handleMessageClick} />

      {/* Chat Box */}
      {isOpen && (
        <div
          style={{
            position: 'fixed',
            bottom: '90px',
            right: '20px',
            width: '90%', // responsive width
            maxWidth: '350px', // don’t exceed desktop size
            height: '300px',
            backgroundColor: 'white',
            borderRadius: '10px',
            boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
            padding: '15px',
            zIndex: 1001,
            transition: 'all 0.3s ease',
          }}
        >
          <div
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: '10px',
            }}
          >
            <strong>Welcome!</strong>
            <button
              onClick={() => setIsOpen(false)}
              style={{
                background: 'none',
                border: 'none',
                fontSize: '16px',
                cursor: 'pointer',
              }}
            >
              ✖
            </button>
          </div>

          <p style={{ fontSize: '14px', color: '#333' }}>
            Hi there! 👋 Coming soon
          </p>
        </div>
      )}
    </div>
  );
};

export default Floating;
