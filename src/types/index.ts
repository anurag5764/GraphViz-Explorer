export interface Node {
  id: string;
  position: { x: number; y: number };
  data: {
    label: string;
    color: string;
    textColor: string;
    fontSize: number;
  };
  type?: string;
}

export interface Edge {
  id: string;
  source: string;
  target: string;
}

export interface GraphState {
  nodes: Node[];
  edges: Edge[];
}

export interface HistoryState {
  past: GraphState[];
  present: GraphState;
  future: GraphState[];
}

export type ActionType = 
  | { type: 'UPDATE_NODE'; payload: Node }
  | { type: 'UPDATE_EDGES'; payload: Edge[] }
  | { type: 'UNDO' }
  | { type: 'REDO' };