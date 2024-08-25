'use client';

import React, { useState } from 'react';

/**
 * Slider component.
 *
 * @component
 * @returns {JSX.Element} Slider component.
 */
const Slider = () => {
  const [value, setValue] = useState(50);

  const getBgColor = () => {
    if (value < 25) return 'bg-green-100'; // Bajo
    if (value >= 25 && value < 50) return 'bg-yellow-100'; // Medio bajo
    if (value >= 50 && value < 75) return 'bg-orange-100'; // Medio alto
    return 'bg-red-100'; // Alto
  };

  return (
    <div className="mx-auto w-full max-w-md p-4">
      <div className="mb-2 flex justify-between">
        <span className="text-green-600">Bajo</span>
        <span className="text-yellow-600">Medio bajo</span>
        <span className="text-orange-600">Medio alto</span>
        <span className="text-red-600">Alto</span>
      </div>
      <div className="relative">
        <input
          type="range"
          min="0"
          max="100"
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`h-2 w-full ${getBgColor()} cursor-pointer appearance-none rounded-lg`}
        />
        <div
          className="pointer-events-none absolute left-0 top-0 h-1 rounded-lg"
          style={{
            width: `${value}%`,
            backgroundColor: '#000',
          }}
        />
      </div>
      {/* <div className="flex justify-center mt-2">
        <span className="text-sm text-gray-700">Estás aquí</span>
      </div> */}
    </div>
  );
};

export default Slider;
