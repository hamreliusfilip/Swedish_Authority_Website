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
import Image from 'next/image';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import data from '../Assets/Data/Ministers.json';



const App: React.FC = () => {

  const nodeClasses = "";
  const firstNodeClass = "bg-gradient-to-r from-cyan-500 to-blue-500";

  const [myndigheter, setMyndigheter] = useState<any[]>([]);
  const [d1, setD1] = useState<any>(null);


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

    const labelWidth = value.length * 10;

    const initialNodes = [
      {
        id: '1',
        position: { x: 700, y: 300 },
        data: { label: value },
        style: { width: `${labelWidth}px` },
        className: firstNodeClass
      },
      ...myndigheter
        .filter(myndighet => myndighet.relation === value)
        .map((myndighet, index) => {

          const label = myndighet.name;
          const labelWidth = label.length * 10;

          return {
            id: (index + 2).toString(),
            position: {
              x: 100 + (index % 7 * 290),
              y: index < 7 ? 150 : 450,
            },
            data: { label: label },
            style: { width: `${labelWidth}px` },
            className: nodeClasses,
          };
        }),
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


  const changeSorting2 = useCallback((value: string) => {
    if (!value) return;

    const selectedData = data[value as keyof typeof data];

    if (selectedData) {
      setD1(selectedData[0]);
    }
  }, [data]);

  const handleValueChange = (value: string) => {
    changeSorting(value);
    changeSorting2(value);

    const selectedData = data[value as keyof typeof data];

    if (selectedData) {
      setD1(selectedData[0]);
    }
  };

  return (
    <div>
      <div className='flex flex-col justify-center md:flex-row' >
      <div className="w-full md:w-1/2 mt-10 md:ml-10 md:mr-10 flex">
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>{d1 ? d1.name : 'Välj ett departement'}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className=''>{d1 ? d1.info : 'Välj ett department med den blåa knappen nedanför.'}</p>
              <Link href="https://www.riksdagen.se/sv/sa-fungerar-riksdagen/demokrati/sa-bildas-regeringen/regeringen/" target="_blank">
              <Button variant="outline" className='mt-5 bg-black text-white'>Källa: Information & Bilder</Button>
            </Link>
            </CardContent>
          </Card>
        </div>
       <div className="w-full md:w-1/2 mt-10 md:ml-10 md:mr-10 flex">
          <Card className='w-full'>
            <CardHeader>
              <CardTitle>Ansvariga ministrar</CardTitle>
            </CardHeader>
            <CardContent>
              <div className='flex justify-left'>
                {d1 && Object.keys(d1).map((key, index) => (
                  <div key={index} className={index > 2 ? 'ml-5' : ''}>
                    {d1[key] && (
                      <>
                        <h2 className="font-bold">{d1[key].name} </h2>
                        <p className="font-regular mt-1">{d1[key].role}</p>
                        {d1[key].image && (
                          <Image src={d1[key].image} width={190} height={108} alt={d1[key].name} className="rounded-md mt-3" />
                        )}
                        {d1[key].p && (
                          <Image src={d1[key].p} width={30} height={30} alt={d1[key].name} className="rounded-md mt-3" />
                        )}
                      </>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>


      <Card className='m-10'>
        <div className='flex justify-between'>
          <div className='mr-auto ml-3 mt-3 mb-3'>
            <Select onValueChange={handleValueChange}>
              <SelectTrigger className="w-auto bg-gradient-to-r from-cyan-500 to-blue-500 text-white">
                <SelectValue placeholder="Välj ett departement" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectLabel>Departementkarta som visas</SelectLabel>
                  <SelectItem value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</SelectItem>
                  <SelectItem value="Finansdepartementet">Finansdepartementet</SelectItem>
                  <SelectItem value="Försvars­­departementet">Försvarsdepartementet</SelectItem>
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
      </Card>
    </div>
  );
}

export default App;
