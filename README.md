# Graph Visualization Explorer

An interactive graph visualization tool built with React, Redux, and React Flow. This application allows users to create, customize, and manipulate graph nodes with various features including undo/redo functionality, node customization, and mobile support.

![Graph Visualization Explorer](https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?auto=format&fit=crop&q=80&w=2000&h=600)

## Features

- **Interactive Graph Visualization**: Drag and drop nodes, create connections, and manipulate the graph layout
- **Node Customization**:
  - Change node background color
  - Adjust text color
  - Modify font size
  - Custom node labels
- **Edge Management**: 
  - Create connections between nodes
  - Disconnect nodes with one click
- **History Management**:
  - Undo/Redo functionality for all actions
  - Persistent state management
- **Mobile Support**:
  - Touch-friendly controls
  - Pinch-to-zoom
  - Pan and scroll support
  - Responsive design

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v16.0.0 or higher)
- npm (v7.0.0 or higher)

## Dependencies

### Core Dependencies
- **React (v18.3.1)**: UI framework for building the application interface
- **Redux Toolkit (v2.2.1)**: State management with built-in immutability and DevTools
- **React Flow (v11.10.4)**: Powers the interactive graph visualization
  - Handles node rendering
  - Manages edge connections
  - Provides zoom and pan functionality
- **TypeScript (v5.5.3)**: Adds static typing and improved developer experience

### UI Dependencies
- **Tailwind CSS (v3.4.1)**: Utility-first CSS framework for styling
- **Lucide React (v0.344.0)**: Modern icon set with React components
  - Used for UI controls and node actions
  - Provides consistent icon styling

### Development Dependencies
- **Vite (v5.4.2)**: Build tool and development server
- **ESLint (v9.9.1)**: Code linting and style enforcement
- **PostCSS (v8.4.35)**: CSS processing for Tailwind
- **Autoprefixer (v10.4.18)**: Automatic CSS vendor prefixing

## Assumptions

1. **Browser Support**:
   - Modern browsers with ES2020 support
   - Touch events support for mobile devices
   - CSS Grid and Flexbox support

2. **Performance**:
   - Optimized for graphs with up to 100 nodes
   - Smooth performance on mobile devices
   - Minimum viewport width of 320px

3. **User Interactions**:
   - Users have basic familiarity with graph visualization tools
   - Touch-enabled devices support multi-touch gestures
   - Keyboard shortcuts available on desktop devices

4. **State Management**:
   - All graph state is managed in-memory
   - No persistent storage between sessions
   - Undo/redo history is limited to the current session

5. **Accessibility**:
   - Basic keyboard navigation support
   - Color contrast compliance for text
   - Touch targets sized appropriately for mobile

## Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd graph-visualization-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and navigate to:
   ```
   http://localhost:5173
   ```

## Usage

### Basic Controls

- **Pan**: Click and drag on empty space, or use touchpad/touch gestures
- **Zoom**: Use mouse wheel or pinch gestures
- **Select Nodes**: Click on a node
- **Connect Nodes**: Drag from one node's handle to another
- **Delete**: Select node/edge and press Delete key

### Node Customization

1. Click on any node to open the customization panel
2. Use the color pickers to:
   - Change node background color
   - Modify text color
3. Adjust font size using the + and - controls
4. Disconnect a node using the unplug button

### History Management

- Use the undo/redo buttons in the top-left corner
- Keyboard shortcuts:
  - Undo: Ctrl/Cmd + Z
  - Redo: Ctrl/Cmd + Shift + Z

## Project Structure

```
src/
├── components/          # React components
├── store/              # Redux store and slices
├── types/              # TypeScript type definitions
├── App.tsx             # Main application component
└── main.tsx           # Application entry point
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Created with ❤️ by Anurag
- Icons provided by [Lucide](https://lucide.dev/)
- Graph visualization powered by [React Flow](https://reactflow.dev/)