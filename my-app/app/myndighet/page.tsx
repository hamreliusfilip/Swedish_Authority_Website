"use client"
import React, { useEffect, useState } from 'react';
import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Link from 'next/link';
import Footer from '../../components/footer';
import SearchBar from '@/components/searchBar';
import ListCard from '@/components/listCard';
import { Card, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import { Myndigheter } from '@/lib/models/myndighet';

export default function Page() {
    const fetchMyndigheter = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/myndigheter");
            const data = await res.json();
            return data.myndighet; // Extract the array of agencies
        } catch (error) {
            console.error("Error fetching myndigheter:", error);
            return [];
        }
    }

    const [myndigheter, setMyndigheter] = useState<Myndigheter[]>([]);

    useEffect(() => {
        fetchMyndigheter().then((myndigheter) => {
            setMyndigheter(myndigheter);
        }).catch((error) => {
            console.error("Error setting myndigheter:", error);
        });
    }, []);

    function changeSorting(value: string){
        if (value === 'alfa') {
            setMyndigheter([...myndigheter].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (value === 'yearDec'){
            setMyndigheter([...myndigheter].sort((a, b) => b.created.toString().localeCompare(a.created.toString())));
        }
        else if (value === 'yearInc') {
            setMyndigheter([...myndigheter].sort((a, b) => a.created.toString().localeCompare(b.created.toString())));
        }
    }

    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
            </div>

            <div className='flex flex-column m-4 gap-5 justify-items-center h-30'>
                <div className='basis-1/3 ml-10'>
                    <Card className='p-5'>
                        <CardTitle>
                            Filtreringsalternativ
                        </CardTitle>
                    </Card>
                    
                </div>
                <div className='basis-1/2'>
                    <SearchBar />
                    <div className='overflow-y-auto' >
                        <Card >
                            {myndigheter.map((myndighet: any) => (
                            <div key={myndighet._id}>
                                <ListCard myndighet={myndighet} />
                            </div>
                            ))}
                        </Card>
                    </div>
                </div>
                <div className='basis-1/6 pr-10'>
                    <Select onValueChange={changeSorting} >
                        <SelectTrigger className="w-[180px]">
                            <SelectValue placeholder="Sorterings alternativ" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Sortering</SelectLabel>
                                <SelectItem value="alfa">Alfabetisk ordning</SelectItem>
                                <SelectItem value="yearDec">Nyast till äldst</SelectItem>
                                <SelectItem value="yearInc">Äldst till nyast</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                    <Link href="/myndighet/listaMyndighet"> Klicka för sida för myndigheter lista </Link> <br />
                    <Link href="/myndighet/specifikMyndighet"> Klicka för sida för specifik myndighet </Link>
                </div>
            </div>
            <Footer />
        </>
    );
}
