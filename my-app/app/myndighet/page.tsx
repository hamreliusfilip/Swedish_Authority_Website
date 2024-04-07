import React from 'react'
import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Link from 'next/link';
import Footer from '../../components/footer';
import SearchBar from '@/components/searchBar';
import ListCard from '@/components/listCard';
import { Card } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
  } from "@/components/ui/select"

export default function Page() {
    return (
        <><div>
            <Logo />
            <CompleteMenu />
        </div>

        <div className='flex flex-column m-4 gap-5 justify-items-center h-30'>
            <div className='basis-1/3 pl-10'>
                <Card>
                    HÄR SKA FILTER SEKTIONEN VARA!
                </Card>
            </div>
            <div className='basis-1/2'>
                <SearchBar />
                <div className='overflow-y-auto' >
                    <Card >
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                        <ListCard />
                    </Card>
                </div>
            </div>
            <div className='basis-1/6 pr-10'>
                <Select>
                    <SelectTrigger className="w-[180px]">
                        <SelectValue placeholder="Sorterings alternativ" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                        <SelectLabel>Sortering</SelectLabel>
                        <SelectItem value="alfa">Alfabetisk ordning</SelectItem>
                        <SelectItem value="size">Storlek</SelectItem>
                        <SelectItem value="year">Årtal</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                </Select>
                <Link href="/myndighet/listaMyndighet"> Klicka för sida för myndigheter lista </Link> <br />
                <Link href="/myndighet/specifikMyndighet"> Klicka för sida för specifik myndighet </Link>
            </div>
            
        </div>
        <Footer /></>
    );
}