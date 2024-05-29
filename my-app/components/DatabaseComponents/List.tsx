"use client"

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

type ListProps = {
    type: 'myndighet' | 'company';
};

export default function List({ type }: ListProps) {
    
    const [loading, setLoading] = useState(true);
    const [items, setItems] = useState<any[]>([]);

    const fetchItems = async () => {
        try {
            const endpoint = type === 'myndighet' ? 'myndigheter' : 'companies';
            const res = await fetch(`http://localhost:3000/api/${endpoint}?fields=name,_id`);
            const data = await res.json();
            return data[type];
        } catch (error) {
            console.error(`Error fetching ${type}:`, error);
            return [];
        }
    };

    useEffect(() => {
        fetchItems().then((items) => {
            setItems(items);
            setLoading(false);
        }).catch((error) => {
            console.error(`Error setting ${type}:`, error);
        });
    }, [type]);

    const groupedItems: { [key: string]: any[] } = items.reduce((acc: any, item: any) => {
        const firstLetter = item.name.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push(item);
        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedItems).sort();

    const cards = [];

    for (let i = 0; i < 30; i++) {
        cards.push(
            <div key={i}>
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-3 h-16 mt-1"></div>
                </div>
            </div>
        );
    }

    const backButtonHref = type === 'myndighet' ? '/myndighet' : '/company';
    const cardTitle = type === 'myndighet'
        ? 'Myndigheter under regeringen utifrån alfabetisk ordning'
        : 'Statliga företag i alfabetisk ordning.';

    return (
        <div>
            <Link href={backButtonHref}>
                <Button variant="outline" className="bg-gradient-to-r from-cyan-500 to-blue-500 text-white ml-8 mt-8">Tillbaka</Button>
            </Link>

            <Card className="h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">{cardTitle}</CardTitle>
                    {loading ? (
                        <div>{cards}</div>
                    ) : (
                        <div>
                            {sortedKeys.map((letter) => (
                                <div key={letter}>
                                    <h2 className='font-bold'>{letter}</h2>
                                    {groupedItems[letter].map((item: any, index: any) => (
                                        <p key={index}>{item.name}</p>
                                    ))}
                                </div>
                            ))}
                        </div>
                    )}
                </CardContent>
            </Card>
        </div>
    );
}
