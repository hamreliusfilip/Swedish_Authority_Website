'use client';

import React from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import Link from 'next/link';
import { Bar, Doughnut } from 'react-chartjs-2';
import { Chart, ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement} from 'chart.js';

Chart.register(ArcElement, CategoryScale, LinearScale, Title, Tooltip, Legend, BarElement);


const data1 = {
    labels: ['2023', '2024', '2025', '2026', '2027'],
    datasets: [
        {
            label: 'Inkomster',
            data: [1243, 1329, 1351, 1419, 1468],
            backgroundColor: 'rgb(147 197 253)',
        },
        {
            label: 'Utgifter exkl. statskuldsräntor',
            data: [1214, 1332, 1350, 1362, 1359],
            backgroundColor: 'rgb(29 78 216)',
        },
    ],
};

const data2 = {
    labels: [
        'Allmänna bidrag till kommuner',
        'Ekonomisk trygghet vid sjukdom och funktionsnedsättning',
        'Hälsovård, sjukvård och social omsorg',
        'Ekonomisk trygghet för familjer och barn',
        'Arbetsmarknad och arbetsliv',
        'Utbildning och universitetsforskning',
        'Kommunikationer',
        'Försvar och samhällets krisberedskap',
        'Näringsliv',
        'Rättsväsendet',
        'Avgiften till Europeiska unionen',
        'Internationellt bistånd',
        'Ekonomisk trygghet vid ålderdom',
        'Studiestöd',
        'Kultur, medier, trossamfund och fritid',
        'Övrigt'
    ],
    datasets: [{
        label: 'Utgifter',
        data: [13.3, 9.9, 8.5, 8.4, 7.3, 7.0, 5.5, 5.3, 5.1, 4.4, 4.0, 3.9, 3.1, 2.1, 1.7, 10.5],
        backgroundColor: [
            'rgb(239 246 255)',
            'rgb(219 234 254)',
            'rgb(191 219 254)',
            'rgb(147 197 253)',
            'rgb(96 165 250)', 
            'rgb(59 130 246)',
            'rgb(37 99 235)', 
            'rgb(29 78 216)',
            'rgb(30 64 175)',
            'rgb(30 58 138)',
            'rgb(23 37 84)',
            'rgb(19, 25, 75)',
            'rgb(12, 18, 64)',
            'rgb(7, 9, 32)',
            'rgb(3, 5, 19)',
            'rgb(0, 0, 10)'
        ],
    }],
};

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
            text: 'Statens budgetsaldo 2023–2027 (miljarder kronor)',
        },
    },
};

const options2 = {
    responsive: true,
    plugins: {
        legend: {
            position: 'left',
        },
        title: {
            display: true,
            text: 'Utgifter - 2020, Wikipedia (procent)',
        },
    },
};


export default function Budget() {

    return (
        <div>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 gap-8">
                <Card className="mt-20 ml-10 mr-10 mb-12">
                    <CardHeader>
                        <CardTitle>Sammanfattning</CardTitle>
                        <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Ur Regeringens proposition 2023/24:1</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>
                            Utgiftsramarna för de 27 utgiftsområdena i statens budget beräknas uppgå till
                            totalt 1 347 miljarder kronor 2024. Det är 95 miljarder kronor mer än ramarna
                            för 2023 i den av riksdagen ursprungligen beslutade budgeten för 2023. Därefter
                            har dock riksdagen beslutat om ändringar i statens budget för 2023, som
                            tillsammans med regeringens förslag i propositionen Höständringsbudget för
                            2023 (prop. 2023/24:2) uppgår till 32 miljarder kronor.

                            <br></br>
                            <br></br>

                            De takbegränsade utgifterna beräknas uppgå till 1 688 miljarder kronor 2024.
                            Det är en ökning med 100 miljarder kronor jämfört med 2023. Ökningen beror
                            främst på den makroekonomiska utvecklingen, inte minst den höga inflationen.

                            <br></br>
                            <br></br>

                            För 2023 beräknas utgifterna i statens budget bli 10 miljarder kronor högre
                            jämfört med den av riksdagen ursprungligen beslutade budgeten för 2023,
                            framför allt till följd av högre statsskuldsräntor.
                        </p>
                    </CardContent>
                </Card>

                <div className="mt-10 mb-10 ml-10 mr-10">
                    {/* @ts-ignore */}
                    <Bar data={data1} options={options1} />
                </div>

            </div>

            <div className="flex justify-center pt-16">
                <div className="mt-10 mb-10 ml-10 mr-10 p-10">
                    {/* @ts-ignore */}
                    <Doughnut data={data2} options={options2} style={{ width: '900px', height: '900px' }}/>
                </div>
            </div>

            <div className="flex justify-center pt-16">
                <div className="w-full sm:w-3/4 lg:w-1/2">
                    <Card className="m-4 p+2">
                        <CardHeader>
                            <CardTitle>Om datan</CardTitle>
                            <CardDescription className="text-sm"><span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Vart kommer datan ifrån?</span></CardDescription>
                        </CardHeader>
                        <CardContent>
                            <p> Samtlig förutom data märkt på annat sätt är data tagen direkt ur Regeringens proposition 2023/24:1 - Budgetpropositionen för 2024. Stockholm den 15 september 2023.</p>
                        </CardContent>
                        <CardContent>
                            <Link href="https://www.regeringen.se/contentassets/e1afccd2ec7e42f6af3b651091df139c/budgetpropositionen-for-2024-hela-dokumentet-prop.2023241.pdf" target="_blank">
                                <Button variant="outline" className=' bg-gradient-to-r from-cyan-500 to-blue-500 text-white'>Statskontoret - Rapport</Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
}
