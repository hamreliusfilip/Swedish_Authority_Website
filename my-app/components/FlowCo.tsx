"use client";
import React, { useCallback, useState, useEffect } from 'react';
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import ReactFlow, {
  MiniMap,
  Controls,
  Background,
  useNodesState,
  useEdgesState,
  BackgroundVariant,
} from 'reactflow';
import 'reactflow/dist/style.css';
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const App: React.FC = () => {
  const [selectedDepartment, setSelectedDepartment] = useState<string>("");
  const [myndigheter, setMyndigheter] = useState<any[]>([]);

  const fetchMyndigheter = async () => {
    try {
      const res = await fetch("http://localhost:3000/api/myndigheter");
      const data = await res.json();
      setMyndigheter(data.myndighet);
    } catch (error) {
      console.error("Error fetching myndigheter:", error);
    }
  }

  useEffect(() => {
    fetchMyndigheter().catch((error) => {
      console.error("Error setting myndigheter:", error);
    });
  }, []);

  const changeSorting = useCallback((value: string) => {
    if (!value) return;

    const initialNodes = [
      { id: '1', position: { x: 700, y: 300 }, data: { label: value } },
      ...myndigheter
        .filter(myndighet => myndighet.relation === value)
        .map((myndighet, index) => ({
          id: (index + 2).toString(),
          position: {
            x: 100 + (index % 7 * 200),
            y: index < 7 ? 150 : 450,
          },
          data: { label: myndighet.name },
        })),
    ];
    setNodes(initialNodes);
  }, [myndigheter]);

  const [nodes, setNodes, onNodesChange] = useNodesState([
    { id: '1', position: { x: 750, y: 300 }, data: { label: 'Välj ett departement att visualisera' } },
  ]);

  let [edges, setEdges, onEdgesChange] = useEdgesState([{ id: 'e1-2', source: '1', target: '2' }]);

  const generateEdges = useCallback(() => {
    const newEdges = myndigheter.map((myndighet, index) => ({
      id: `e${index + 2}-1`,
      source: (index + 2).toString(),
      target: '1',
    }));
    return newEdges;
  }, [myndigheter]);

  useEffect(() => {
    setEdges(generateEdges());
  }, [myndigheter, generateEdges]);

  const defaultEdgeOptions = {
    animated: true,
    type: 'smoothstep',
  };

  return (
    <div className=''>
      <div className='flex justify-between'>
        <div>
          <Link href="/myndighet">
            <Button variant="outline" className='ml-3 mt-3 mb-3 '>Tillbaka</Button>
          </Link>
        </div>
        <div className='mr-auto ml-3 mt-3 mb-3'>
          <Select onValueChange={changeSorting} >
            <SelectTrigger className="w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
              <SelectValue placeholder="Välj ett departement" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectLabel>Departementkarta som visas</SelectLabel>
                <SelectItem value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</SelectItem>
                <SelectItem value="Finansdepartementet">Finansdepartementet</SelectItem>
                <SelectItem value="Försvarsdepartementet">Försvarsdepartementet</SelectItem>
                <SelectItem value="Justitiedepartementet">Justitiedepartementet</SelectItem>
                <SelectItem value="Klimat- och näringslivsdepartementet">Klimat- och näringslivsdepartementet</SelectItem>
                <SelectItem value="Kulturdepartementet">Kulturdepartementet</SelectItem>
                <SelectItem value="Landsbygds- och infrastrukturdepartementet">Landsbygds- och infrastrukturdepartementet</SelectItem>
                <SelectItem value="Socialdepartementet">Socialdepartementet</SelectItem>
                <SelectItem value="Statsrådsberedningen">Statsrådsberedningen</SelectItem>
                <SelectItem value="Utbildningsdepartementet">Utbildningsdepartementet</SelectItem>
                <SelectItem value="Utrikesdepartementet">Utrikesdepartementet</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Link href="/om">
            <Button variant="outline" className='ml-3 mt-3 mb-3 mr-3'>Källa: Statsförvaltning i korthet 2023 - Läs mer</Button>
          </Link>
        </div>
      </div>
      <div style={{ height: "700px" }} className="w-auto border-solid">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          defaultEdgeOptions={defaultEdgeOptions}
          panOnScroll
          selectionOnDrag
        >
          <Controls />
          <MiniMap />
          <Background
            id="1"
            gap={10}
            color="#f1f1f1"
            variant={BackgroundVariant.Lines}
          />
          <Background
            id="2"
            gap={100}
            color="#ccc"
            variant={BackgroundVariant.Lines}
          />
        </ReactFlow>
      </div>
    </div>
  );
}

export default App;
