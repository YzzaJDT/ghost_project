import React from 'react';
import { FaRobot } from 'react-icons/fa';

const FloatingMessageIcon = ({ onClick }) => {
  const iconStyle = {
    position: 'fixed',
    bottom: '20px',
    right: '20px',
    backgroundColor: '#007bff',
    color: 'white',
    borderRadius: '50%',
    width: '50px',
    height: '50px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.2)',
    cursor: 'pointer',
    zIndex: 1000,
  };

  return (
    <div style={iconStyle} onClick={onClick}>
      <FaRobot size={24} />
    </div>
  );
};

export default FloatingMessageIcon;
