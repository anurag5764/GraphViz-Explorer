import React from 'react';
import { Undo2, Redo2 } from 'lucide-react';

interface UndoRedoControlsProps {
  canUndo: boolean;
  canRedo: boolean;
  onUndo: () => void;
  onRedo: () => void;
}

const UndoRedoControls: React.FC<UndoRedoControlsProps> = ({
  canUndo,
  canRedo,
  onUndo,
  onRedo,
}) => {
  return (
    <div className="absolute top-4 left-4 flex gap-2">
      <button
        className={`p-2 rounded-lg shadow-lg bg-white transition-colors ${
          canUndo ? 'hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
        }`}
        onClick={onUndo}
        disabled={!canUndo}
      >
        <Undo2 size={20} />
      </button>
      <button
        className={`p-2 rounded-lg shadow-lg bg-white transition-colors ${
          canRedo ? 'hover:bg-gray-50' : 'opacity-50 cursor-not-allowed'
        }`}
        onClick={onRedo}
        disabled={!canRedo}
      >
        <Redo2 size={20} />
      </button>
    </div>
  );
};

export default UndoRedoControls;