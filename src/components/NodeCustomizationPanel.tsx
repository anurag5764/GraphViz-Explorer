import React from 'react';
import ColorPicker from './ColorPicker';
import FontSizeControl from './FontSizeControl';
import { Node } from '../types';
import { Unplug } from 'lucide-react';
import { useDispatch, useSelector } from 'react-redux';
import { updateEdges } from '../store/graphSlice';
import { RootState } from '../store';

interface NodeCustomizationPanelProps {
  selectedNode: Node | null;
  onUpdateNode: (node: Node) => void;
}

const NodeCustomizationPanel: React.FC<NodeCustomizationPanelProps> = ({
  selectedNode,
  onUpdateNode,
}) => {
  const dispatch = useDispatch();
  const edges = useSelector((state: RootState) => state.graph.present.edges);

  if (!selectedNode) return null;

  const disconnectNode = () => {
    const newEdges = edges.filter(
      edge => edge.source !== selectedNode.id && edge.target !== selectedNode.id
    );
    dispatch(updateEdges(newEdges));
  };

  return (
    <div className="absolute top-20 right-4 bg-white rounded-lg shadow-lg p-4 min-w-[250px] z-40">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Customize Node</h3>
        <button
          onClick={disconnectNode}
          className="p-2 rounded-lg hover:bg-gray-100 text-gray-600 hover:text-red-600 transition-colors"
          title="Disconnect all edges from this node"
        >
          <Unplug size={20} />
        </button>
      </div>
      <div className="space-y-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Background Color
          </label>
          <ColorPicker
            color={selectedNode.data.color}
            label={selectedNode.data.label}
            onChange={(color) =>
              onUpdateNode({
                ...selectedNode,
                data: { ...selectedNode.data, color },
              })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Text Color
          </label>
          <ColorPicker
            color={selectedNode.data.textColor}
            label={selectedNode.data.label}
            onChange={(textColor) =>
              onUpdateNode({
                ...selectedNode,
                data: { ...selectedNode.data, textColor },
              })
            }
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Font Size
          </label>
          <FontSizeControl
            fontSize={selectedNode.data.fontSize}
            onChange={(fontSize) =>
              onUpdateNode({
                ...selectedNode,
                data: { ...selectedNode.data, fontSize },
              })
            }
          />
        </div>
      </div>
    </div>
  );
};

export default NodeCustomizationPanel;