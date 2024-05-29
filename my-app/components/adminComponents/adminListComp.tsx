"use client"

import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"
import Link from 'next/link';

export default function AdminListComp({ prop }: { prop: string }) {

    const fetchData = async (type: String) => {
        try {
            const res = await fetch(`http://localhost:3000/api/${type}`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    const [myndigheter, setMyndigheter] = useState<any[]>([]);
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    
    useEffect(() => {
        if(prop == "myndigheter"){
            fetchData(prop).then((myndigheter) => {
                setMyndigheter(myndigheter.myndighet);
                setLoading(false);
            }).catch((error) => {
                console.error("Error setting myndigheter:", error);
            });
        }
        else if (prop == "companies"){
            fetchData(prop).then((companies) => {
                setCompanies(companies.company);
                setLoading(false);
            }).catch((error) => {
                console.error("Error setting companies:", error);
            });
        };
        
    }, []);

    const groupedCompanies: { [key: string]: any[] } = companies.reduce((acc: any, company: any) => {
        const firstLetter = company.name.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push({
            id: company._id, // Ensure that myndighet object has an id property
            name: company.name
        });
        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedCompanies).sort();

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

    return (
        <div>
            <Card className="m-8 h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">Statliga företag utifrån alfabetisk ordning</CardTitle>
                    
                    {loading == true ? (
                        <div>
                            {cards}
                        </div>
                    ) : (
                    <div>
                        {sortedKeys.map((letter) => (
                            <div key={letter}>
                                <h2 className='font-bold'>{letter}</h2>
                                {groupedCompanies[letter].map((company: any, index: any) => (
                                    <div className='grid grid-cols-2' style={{ gridTemplateColumns: '4fr 1fr' }}>
                                        <p className = "mb-10 " key={index}>{company.name}</p>
                                        <div className='grid grid-cols-1 content-start justify-self-end flex-none'>
                                        <Link href={`/admin/adminAddComp/${company.id}`}>
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                            </svg>
                                        </Link>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>)}
                </CardContent>
            </Card>
        </div>
    );
}
