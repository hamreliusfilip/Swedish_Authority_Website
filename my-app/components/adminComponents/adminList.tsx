"use client"

import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

export default function AdminList() {
    const fetchMyndigheter = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/myndigheter");
            const data = await res.json();
            return data.myndighet;
        } catch (error) {
            console.error("Error fetching myndigheter:", error);
            return [];
        }
    }

    const [myndigheter, setMyndigheter] = useState<any[]>([]);
    useEffect(() => {
        fetchMyndigheter().then((myndigheter) => {
            setMyndigheter(myndigheter);
        }).catch((error) => {
            console.error("Error setting myndigheter:", error);
        });
    }, []);

    const groupedMyndigheter: { [key: string]: any[] } = myndigheter.reduce((acc: any, myndighet: any) => {
        const firstLetter = myndighet.name.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push(myndighet);
        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedMyndigheter).sort();

    return (
        <div>
            <Card className="m-8 h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">Myndigheter under regeringen utifrån alfabetisk ordning</CardTitle>
                    <div>
                        {sortedKeys.map((letter) => (
                            <div key={letter}>
                                <h2 className='font-bold'>{letter}</h2>
                                {groupedMyndigheter[letter].map((myndighet: any, index: any) => (
                                    <div className='grid grid-cols-2 space-y-10' style={{ gridTemplateColumns: '4fr 1fr' }}>
                                        <p key={index}>{myndighet.name}</p>
                                        <div className='grid grid-cols-1 content-start justify-self-end flex-none'>
                                        <Link href={`/admin/adminAddMyn/${myndighet.name}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
