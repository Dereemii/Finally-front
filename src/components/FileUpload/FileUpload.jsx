'use client';
import { useState } from 'react';
import { FloatingButton } from '../FloatingButton';

export const FileUpload = () => {
  const [fileName, setFileName] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file && file.type === 'application/pdf') {
      setFileName(file.name);
    } else {
      alert('Por favor, sube un archivo PDF');
    }
  };

  const handleRemoveFile = () => {
    setFileName(null);
  };

  return (
    <div className="flex items-center space-x-4">
      <FloatingButton onChange={handleFileChange} />

      {fileName && (
        <>
          <input
            type="text"
            value={fileName || 'No se ha seleccionado ningún archivo'}
            disabled
            className="flex-1 rounded-lg border border-gray-300 px-4 py-2"
          />
          <button
            onClick={handleRemoveFile}
            className="rounded-lg bg-red-600 px-4 py-2 text-white hover:bg-red-700"
          >
            Eliminar archivo
          </button>
        </>
      )}
    </div>
  );
};
