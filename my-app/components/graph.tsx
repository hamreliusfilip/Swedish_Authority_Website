'use client';

import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import Link from 'next/link';

import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

const data1 = {
  labels: ['16-24 år', '25-34 år', '35-44 år', '45-54 år', '55-64 år', '65år +'],
  datasets: [
    {
      label: 'Män',
      data: [5000, 27000, 31000, 33000, 26000, 6000],
      backgroundColor: 'rgb(6 182 212)',
    },
    {
      label: 'Kvinnor',
      data: [4000, 31000, 37000, 37000, 29000, 4900],
      backgroundColor: 'rgb(0 0 0)',
    },
  ],
};

const data2 = {
  labels: ['2005', '2010', '2015', '2020', '2021'],
  datasets: [
    {
      label: 'Män',
      data: [52, 49, 48, 47, 47],
      backgroundColor: 'rgb(6 182 212)',
    },
    {
      label: 'Kvinnor',
      data: [48, 51, 52, 53, 53],
      backgroundColor: 'rgb(0 0 0)',
    },
  ],
};

const data3 = {
  labels: ['Ingen uppgift', 'Militärt arbete', 'Trafik- och transportarbete', 'Rättsligt arbete', 'Förvaltning, skötsel m.m.', 'FOU, utbildning och forskning m.m.', 'Administrativt, ekonomiskt m.m. arbete', 'Medicinskt, socialt m.m. arbete', 'Kulturarbete', 'Utredning m.m.', 'Kund- och medborgarservice'],
  datasets: [
    {
      label: 'Anställda - Båda kvinnor och män',
      data: [6, 4, 2, 6, 16, 2, 21, 18, 6, 2, 17, 1],
      backgroundColor: 'rgb(6 182 212)',
    },
  ],
};

const data4 = {
  labels: ['Staten', 'Regioner', 'Kommuner', 'Offentlig ägda företag', 'Privat sektor'],
  datasets: [
    {
      label: 'Andel anställda',
      data: [5, 5, 17, 4, 68],
      backgroundColor: 'rgb(6 182 212)',
    },
  ],
};

const data5 = {
  labels: ['Militärt arbete', 'Trafik- och transportarbete', 'Rättsligt arbete', 'Förvaltning, skötsel m.m.', 'FOU, utbildning och forskning m.m.', 'Administrativt, ekonomiskt m.m. arbete', 'Medicinskt, socialt m.m. arbete', 'Kulturarbete', 'Utredning m.m.', 'Kund- och medborgarservice'],
  datasets: [
    {
      label: 'Andel män',
      data: [86, 74, 66, 55, 54, 47, 41, 37, 36, 32, 26],
      backgroundColor: 'rgb(6 182 212)',
    },
    {
      label: 'Andel kvinnor',
      data: [14, 26, 34, 45, 46, 53, 59, 63, 64, 68, 74],
      backgroundColor: 'rgb(0 0 0)',
    },
  ],
};

const data6 = {
  labels: ['Väntetiden var acceptabel', 'Du fick den hjälp du behövde för att lösa ditt ärende', 'Kontoret låg tillräckligt nära ditt hem'],
  datasets: [
    {
      label: 'Instämmer helt',
      data: [38, 57, 45],
      backgroundColor: 'rgb(6 182 212)',
    },
    {
      label: 'Instämmer delvis',
      data: [32, 25, 35],
      backgroundColor: 'rgb(0 0 0)',
    },
    {
      label: 'Instämmer knappast',
      data: [16, 10, 10],
      backgroundColor: 'rgb(8 51 68)',
    },
    {
      label: 'Instämmer inte alls',
      data: [14, 8, 10],
      backgroundColor: 'rgb(207 250 254)',
    },
  ],
};

const data7 = {
  labels: ['Allmän offetnlig förvaltning', 'Försvar', 'Samhällsskydd', 'Näringslivfrågor', 'Miljöskydd', 'Skatteförvaltning', 'Bostadsförsörjning och samhällsutveckling', 'Hälso- och sjukvård', 'Fritidsverksamhet, kultur och religion', 'Utbildning', 'Socialt skydd'],
  datasets: [
    {
      label: 'Antal myndigheter',
      data: [63, 20, 98, 64, 6, 2, 9, 24, 45, 13],
      backgroundColor: 'rgb(6 182 212)',
    },
  ],
};

const data8 = {
  labels: ['Enrådighetsmyndigheter', 'Styrelsemyndigheter', 'Nämndmyndigheter', 'Universitet och högskolor', 'AP-fonder', 'Övriga*', 'Styrelse med begränsat ansvar, SBA**', 'Domstolar'],
  datasets: [
    {
      label: 'Antal myndigheter',
      data: [131, 40, 47, 31, 6, 6, 1, 82],
      backgroundColor: 'rgb(6 182 212)',
    },
  ],
};

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
          <Bar data={data1} options={options1} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data2} options={options2} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data3} options={options3} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data4} options={options4} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data5} options={options5} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data6} options={options6} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data7} options={options7} />
        </div>
        <div className="mt-10 mb-10 ml-10 mr-10">
          {/* @ts-ignore */}
          <Bar data={data8} options={options8} />
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
