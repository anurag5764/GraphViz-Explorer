import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Node, Edge, GraphState, HistoryState } from '../types';

const initialNodes: Node[] = Array.from({ length: 10 }, (_, i) => ({
  id: `node-${i}`,
  position: { 
    x: Math.random() * 800, 
    y: Math.random() * 600 
  },
  data: { 
    label: `Node ${i}`,
    color: '#4B5563',
    textColor: '#FFFFFF',
    fontSize: 14
  }
}));

const initialEdges: Edge[] = Array.from({ length: 15 }, (_, i) => ({
  id: `edge-${i}`,
  source: `node-${Math.floor(Math.random() * 10)}`,
  target: `node-${Math.floor(Math.random() * 10)}`
}));

const initialState: HistoryState = {
  past: [],
  present: {
    nodes: initialNodes,
    edges: initialEdges,
  },
  future: [],
};

const graphSlice = createSlice({
  name: 'graph',
  initialState,
  reducers: {
    updateNode: (state, action: PayloadAction<Node>) => {
      state.past.push(state.present);
      state.present.nodes = state.present.nodes.map(node =>
        node.id === action.payload.id ? action.payload : node
      );
      state.future = [];
    },
    updateEdges: (state, action: PayloadAction<Edge[]>) => {
      state.past.push(state.present);
      state.present.edges = action.payload;
      state.future = [];
    },
    undo: (state) => {
      if (state.past.length === 0) return;
      const previous = state.past[state.past.length - 1];
      state.future.unshift(state.present);
      state.present = previous;
      state.past.pop();
    },
    redo: (state) => {
      if (state.future.length === 0) return;
      const next = state.future[0];
      state.past.push(state.present);
      state.present = next;
      state.future.shift();
    },
  },
});

export const { updateNode, updateEdges, undo, redo } = graphSlice.actions;
export default graphSlice.reducer;