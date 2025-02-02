import React, { useCallback, useMemo } from 'react';
import ReactFlow, {
  Background,
  Controls,
  NodeChange,
  Edge,
  Connection,
  EdgeChange,
  addEdge,
  applyNodeChanges,
  applyEdgeChanges,
  Panel,
} from 'reactflow';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { updateNode, updateEdges, undo, redo } from './store/graphSlice';
import CustomNode from './components/CustomNode';
import NodeCustomizationPanel from './components/NodeCustomizationPanel';
import UndoRedoControls from './components/UndoRedoControls';
import Header from './components/Header';
import Footer from './components/Footer';
import 'reactflow/dist/style.css';

const nodeTypes = {
  custom: CustomNode,
};

function App() {
  const dispatch = useDispatch();
  const { past, present, future } = useSelector((state: RootState) => state.graph);
  const [selectedNode, setSelectedNode] = React.useState<any>(null);

  const onNodesChange = useCallback(
    (changes: NodeChange[]) => {
      const nextNodes = applyNodeChanges(changes, present.nodes);
      if (changes[0].type === 'position') {
        const updatedNode = nextNodes.find((n) => n.id === changes[0].id);
        if (updatedNode) {
          dispatch(updateNode(updatedNode));
        }
      }
    },
    [dispatch, present.nodes]
  );

  const onEdgesChange = useCallback(
    (changes: EdgeChange[]) => {
      const nextEdges = applyEdgeChanges(changes, present.edges);
      dispatch(updateEdges(nextEdges));
    },
    [dispatch, present.edges]
  );

  const onConnect = useCallback(
    (connection: Connection) => {
      const newEdge: Edge = {
        id: `edge-${Date.now()}`,
        source: connection.source!,
        target: connection.target!,
      };
      dispatch(updateEdges([...present.edges, newEdge]));
    },
    [dispatch, present.edges]
  );

  const onNodeClick = useCallback((_: any, node: any) => {
    setSelectedNode(node);
  }, []);

  const onPaneClick = useCallback(() => {
    setSelectedNode(null);
  }, []);

  const { nodes, edges } = useMemo(() => ({
    nodes: present.nodes.map((node) => ({
      ...node,
      type: 'custom',
    })),
    edges: present.edges,
  }), [present]);

  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      
      <main className="flex-1 pt-16 pb-16">
        <div className="w-full h-[calc(100vh-8rem)]">
          <ReactFlow
            nodes={nodes}
            edges={edges}
            onNodesChange={onNodesChange}
            onEdgesChange={onEdgesChange}
            onConnect={onConnect}
            onNodeClick={onNodeClick}
            onPaneClick={onPaneClick}
            nodeTypes={nodeTypes}
            fitView
            deleteKeyCode="Delete"
            selectionKeyCode="Shift"
            multiSelectionKeyCode="Control"
            connectOnClick={false}
            panOnScroll={true}
            panOnDrag={true}
            zoomOnScroll={true}
            zoomOnPinch={true}
            panOnScrollMode="free"
            panOnScrollSpeed={0.5}
            minZoom={0.2}
            maxZoom={4}
            preventScrolling={false}
          >
            <Background />
            <Controls 
              showZoom={true}
              showFitView={true}
              showInteractive={true}
              className="react-flow__controls-mobile"
            />
            <Panel position="top-left" className="flex gap-2">
              <UndoRedoControls
                canUndo={past.length > 0}
                canRedo={future.length > 0}
                onUndo={() => dispatch(undo())}
                onRedo={() => dispatch(redo())}
              />
            </Panel>
          </ReactFlow>

          <NodeCustomizationPanel
            selectedNode={selectedNode}
            onUpdateNode={(node) => dispatch(updateNode(node))}
          />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;