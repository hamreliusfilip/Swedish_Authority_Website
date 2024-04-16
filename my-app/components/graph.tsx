'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';

import data from '../Assets/Data/StatisticsData.json';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface Options {
  responsive: boolean;
  scales: {
    x: {
      type: string;
    };
    y: {
      beginAtZero: boolean;
      ticks: {
        callback: (value: number) => string;
      };
    };
  };
  plugins: {
    legend: {
      position: string;
    };
    title: {
      display: boolean;
      text: string;
    };
  };
}

const options1 = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Antal män och kvinnor i statlig sektor per ålderskategori, 2021',
    },
  },
};

const options2: Options = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: number) {
          return value + '%';
        }
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Kvinnor och män i statlig sektor',
    },
  },
};

const options3: Options = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: number) {
          return value + '%';
        }
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Anställda i myndigheter under regeringen per arbetsområde 2022',
    },
  },
};

const options4: Options = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: number) {
          return value + '%';
        }
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Andel anställda i staten och övriga sektorer 2021',
    },
  },
};

const options5: Options = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
      ticks: {
        callback: function (value: number) {
          return value + '%';
        }
      }
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Andel anställda kvinnor och män inom olika verksamhetsområden, 2022',
    },
  },
};

const options6 = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Andel som instämmer i påståenden om Statens servicecenter, 2022',
    },
  },
};

const options7 = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Antal myndigheter under regeringen efter verksamhetsområde, 2023',
    },
  },
};

const options8 = {
  responsive: true,
  scales: {
    x: {
      type: 'category',
    },
    y: {
      beginAtZero: true,
    },
  },
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Myndigheternas ledningsform (antal) - 2023',
    },
  },
};

export default function Graph() {

  return (
    <div>
      <div className="grid grid-cols-2 gap-8s">
        {/* error but no change in functionality */}
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data1} options={options1} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data2} options={options2} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data3} options={options3} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data4} options={options4} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data5} options={options5} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data6} options={options6} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data7} options={options7} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data.data8} options={options8} />
        </div>
      </div>
      <div className="flex justify-center pt-16">
        <div className="w-full sm:w-3/4 lg:w-1/2">
          <Card className="m-4 p+2">
            <CardHeader>
              <CardTitle>Om datan</CardTitle>
              <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart kommer statistiken ifrån?</span></CardDescription>
            </CardHeader>
            <CardContent>
              <p> Samtlig data är tagen direkt ur statskontorets rapport: "Statsförvaltningen i korthet" - 2023. Graferna representeras på samma sätt som i rapporten. Klicka på knappen nedanför för att gå till rapporten. </p>
            </CardContent>
            <CardContent>
              <Link href="https://www.statskontoret.se/publicerat/publikationer/publikationer-2023/statsforvaltningen-i-korthet-2023/" target="_blank">
                <Button variant="outline" className=' bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Rapport</Button>
              </Link>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}
