'use client';

import { useState, useEffect } from 'react';
import { Chip } from '../Chip/Chip';

/**
 * ChipSelector component.
 *
 * @component
 * @returns {JSX.Element} The rendered ChipSelector component.
 */

export const ChipSelector = () => {
  const [selectedChips, setSelectedChips] = useState([]);

  useEffect(() => {
    let payload = localStorage.getItem('payload');
    payload = JSON.parse(payload);
    if (payload) {
      payload.userInfo.emotions = selectedChips;
      localStorage.setItem('payload', JSON.stringify(payload));
    }
  }, [selectedChips]);

  const handleSelect = (label) => {
    setSelectedChips((prevSelected) =>
      prevSelected.includes(label)
        ? prevSelected.filter((chip) => chip !== label)
        : [...prevSelected, label],
    );
    console.log(selectedChips);
  };

  const chipLabels = [
    'Ansiosa',
    'Relajada',
    'Responsable',
    'Impulsiva',
    'Optimista',
    'Indecisa',
    'Determinada',
    'Apasionada',
    'Creativa',
    'Ambiciosa',
    'Organizada',
    'Temerosa',
    'Motivada',
    'Aburrrida',
    'Cansada',
    'Estresada',
    'Desmotivada',
    'Segura',
    'Insegura',
  ];

  return (
    <div className="justify-left flex flex-wrap gap-3">
      {chipLabels.map((label) => (
        <Chip
          value={label}
          key={label}
          label={label}
          isSelected={selectedChips.includes(label)}
          onSelect={handleSelect}
        />
      ))}
    </div>
  );
};
