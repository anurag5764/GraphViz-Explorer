import React from 'react';
import { Minus, Plus } from 'lucide-react';

interface FontSizeControlProps {
  fontSize: number;
  onChange: (size: number) => void;
}

const FontSizeControl: React.FC<FontSizeControlProps> = ({ fontSize, onChange }) => {
  return (
    <div className="flex items-center gap-2 p-2">
      <button
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onChange(Math.max(12, fontSize - 2))}
        disabled={fontSize <= 12}
      >
        <Minus size={16} />
      </button>
      <span className="min-w-[3ch] text-center">{fontSize}</span>
      <button
        className="p-1 rounded hover:bg-gray-100 disabled:opacity-50"
        onClick={() => onChange(Math.min(24, fontSize + 2))}
        disabled={fontSize >= 24}
      >
        <Plus size={16} />
      </button>
    </div>
  );
};

export default FontSizeControl;