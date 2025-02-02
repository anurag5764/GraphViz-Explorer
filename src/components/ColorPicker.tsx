import React from 'react';

interface ColorPickerProps {
  color: string;
  label: string;
  onChange: (color: string) => void;
}

const ColorPicker: React.FC<ColorPickerProps> = ({ color, label, onChange }) => {
  return (
    <div className="flex items-center gap-3">
      <input
        type="color"
        value={color}
        onChange={(e) => onChange(e.target.value)}
        className="w-12 h-12 p-1 rounded-lg cursor-pointer border border-gray-200 hover:border-blue-500 transition-colors"
      />
      <div className="flex flex-col">
        <span className="text-sm font-medium text-gray-600">Node: {label}</span>
        <span className="text-sm font-mono">{color.toUpperCase()}</span>
      </div>
    </div>
  );
};

export default ColorPicker