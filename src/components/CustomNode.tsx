import React, { memo } from 'react';
import { Handle, Position } from 'reactflow';

interface CustomNodeProps {
  data: {
    label: string;
    color: string;
    textColor: string;
    fontSize: number;
  };
  selected: boolean;
}

const CustomNode: React.FC<CustomNodeProps> = memo(({ data, selected }) => {
  return (
    <div
      className={`px-4 py-2 rounded-lg shadow-lg transition-all duration-200 ${
        selected ? 'ring-2 ring-blue-500' : ''
      }`}
      style={{
        backgroundColor: data.color,
        fontSize: `${data.fontSize}px`,
        color: data.textColor,
      }}
    >
      <Handle type="target" position={Position.Top} className="w-2 h-2" />
      {data.label}
      <Handle type="source" position={Position.Bottom} className="w-2 h-2" />
    </div>
  );
});

CustomNode.displayName = 'CustomNode';

export default CustomNode;