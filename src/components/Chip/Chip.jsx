'use client';

import React, { useState } from 'react';

export const Chip = ({ label }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = () => {
    setIsSelected(!isSelected);
  };

  return (
    <button
      onClick={handleClick}
      className={`rounded-full border-2 px-4 py-2 text-lg font-bold transition-colors ${
        isSelected ? 'border-black bg-black text-white' : 'border-black bg-white text-black'
      }`}
    >
      {label}
    </button>
  );
};
