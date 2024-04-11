"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import { Button } from "@/components/ui/button"

export default function MynList() {
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
            <Link href="/myndighet">
                <Button variant="outline" className='m-8'>Tillbaka</Button>
            </Link>

            <Card className="m-8 h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">Myndigheter under regeringen utifrån alfabetisk ordning</CardTitle>
                    <div>
                        {sortedKeys.map((letter) => (
                            <div key={letter}>
                                <h2 className='font-bold'>{letter}</h2>
                                {groupedMyndigheter[letter].map((myndighet: any, index: any) => (
                                    <p key={index}>{myndighet.name}</p>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
