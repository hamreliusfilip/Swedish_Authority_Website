"use client";

import React, { useCallback } from 'react';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  addEdge,
} from 'reactflow';
 
import 'reactflow/dist/style.css';
 
const initialNodes = [
  { id: '1', position: { x: 700, y: 200 }, data: { label: 'Arbetsmarknads departementet' } },

  { id: '2', position: { x: 100, y: 300 }, data: { label: 'Arbetsdomstolen' } },
  { id: '3', position: { x: 400, y: 300 }, data: { label: 'Arbetsförmedlingen' } },
  { id: '4', position: { x: 700, y: 300 }, data: { label: 'Arbetsmiljöverket' } },
  { id: '5', position: { x: 1000, y: 300 }, data: { label: 'Diskrimineringsombudsmannen' } },
  { id: '6', position: { x: 1300, y: 300 }, data: { label: 'Inspektionen för arbetslöshetsförsäkringen' } },

  { id: '2', position: { x: 100, y: 300 }, data: { label: 'Institutet för arbetsmarknads- och utbildningspolitisk utvärdering' } },
  { id: '3', position: { x: 400, y: 300 }, data: { label: 'Institutet för mänskliga rättigheter' } },
  { id: '4', position: { x: 700, y: 300 }, data: { label: 'Jämställdhets myndigheten' } },
  { id: '5', position: { x: 1000, y: 300 }, data: { label: 'Medlingsinstitutet' } },
  { id: '6', position: { x: 1300, y: 300 }, data: { label: 'Myndigheten för arbetsmiljökunskap' } },

  { id: '7', position: { x: 100, y: 570 }, data: { label: 'Nämnden för styrelserepresentations frågor' } },
  { id: '8', position: { x: 400, y: 570 }, data: { label: 'Nämnden mot diskriminering' } },
  { id: '9', position: { x: 700, y: 570 }, data: { label: 'Rådet för europeiska socialfonden i Sverige' } },
  { id: '10', position: { x: 1000, y: 570 }, data: { label: 'Statens nämnd för arbetstagares uppfinningar' } },
  { id: '11', position: { x: 1300, y: 570 }, data: { label: 'Svenska ILO-kommittén' } },
];
const initialEdges = [
  { id: 'e1-2', source: '1', target: '2' },
  { id: 'e1-3', source: '1', target: '3' },
  { id: 'e1-4', source: '1', target: '4' },
  { id: 'e1-5', source: '1', target: '5' },
  { id: 'e1-6', source: '1', target: '6' },

  { id: 'e1-7', source: '1', target: '7' },
  { id: 'e1-8', source: '1', target: '8' },
  { id: 'e1-9', source: '1', target: '9' },
  { id: 'e1-10', source: '1', target: '10' },
  { id: 'e1-11', source: '1', target: '11' },
];
 
export default function App() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params: any) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );

  const defaultEdgeOptions = {
    animated: true,
    type: 'smoothstep',
  };
 
  return (
    <div style={{ width: '100vw', height: '70vh' }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        defaultEdgeOptions={defaultEdgeOptions}
      >
        <Controls />
        <MiniMap />
        <Background gap={12} size={1} />
      </ReactFlow>
    </div>
  );
}


