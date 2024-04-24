'use client';

import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Button } from '@/components/ui/button';
import { Slider } from '@/components/ui/slider';

import { Myndigheter } from '@/lib/models/myndighet';
import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';
import ListCard from '@/components/MyndigheterSida/listCard';
import CheckboxFilter from '@/components/MyndigheterSida/CheckBoxFilter';

export default function Page() {

    const [loading, setLoading] = useState(true);
    const [myndigheter, setMyndigheter] = useState<Myndigheter[]>([]);
    const [searchQuery, setSearchQuery] = useState('');
    const [ruleFilters, setRuleFilters] = useState<Record<string, boolean>>({});
    const [relationFilters, setRelationFilters] = useState<Record<string, boolean>>({});
    const [filterReset, setFilterReset] = useState(false);
    const [filteredMyndigheter, setFilteredMyndigheter] = useState<Myndigheter[]>([]);
    const [slider1Value, setSlider1Value] = useState('1623');
    const [slider2Value, setSlider2Value] = useState('2024');

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

    useEffect(() => {
        fetchMyndigheter().then((myndigheter) => {
            setMyndigheter(myndigheter);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }).catch((error) => {
            console.error("Error setting myndigheter:", error);
        });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleRelationFilterChange = (filters: Record<string, boolean>) => {
        setRelationFilters(filters);
    };

    const handleRuleFilterChange = (filters: Record<string, boolean>) => {
        setRuleFilters(filters);
    };

    useEffect(() => {
        const filteredMyndigheter = myndigheter.filter(myndighet => {
            const nameMatch = myndighet.name.toLowerCase().includes(searchQuery.toLowerCase());
            const orgMatch = myndighet.org.toLowerCase().includes(searchQuery.toLowerCase());
            const minValue = parseInt(slider1Value);
            const maxValue = parseInt(slider2Value);
            const createdMatch = myndighet.created >= minValue && myndighet.created <= maxValue;
            const relationMatch = Object.entries(relationFilters).every(([relation, checked]) => !checked || myndighet.relation === relation);
            const ruleMatch = Object.entries(ruleFilters).every(([rule, checked]) => !checked || myndighet.rule === rule);
            return (nameMatch || orgMatch) && ruleMatch && relationMatch && createdMatch;
        });
        setFilteredMyndigheter(filteredMyndigheter);
    }, [myndigheter, searchQuery, slider1Value, slider2Value, relationFilters, ruleFilters]);

    const handleClearFilters = () => {
        setRuleFilters({});
        setRelationFilters({});
        setSearchQuery('');
        setFilterReset(true);
        setSlider1Value('1623');
        setSlider2Value('2024');

        setTimeout(() => {
            setFilterReset(false);
        }, 0);
    };

    // Slider 
    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider1Value(event.target.value);
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider2Value(event.target.value);
    };

    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
            </div>
            <div className='flex flex-column m-4 gap-5 justify-items-center h-30'>
                <div className='basis-1/3 ml-10'>
                    <Card className='p-5'>
                        <CardTitle className='mb-5'>Filtreringsalternativ</CardTitle>
                        <CardContent className='grid grid-cols-1'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Departement</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckboxFilter
                                            options={['Arbetsmarknadsdepartementet', 'Finansdepartementet', 'Försvarsdepartementet', 'Justitiedepartementet', 'Klimat- och näringslivsdepartementet', 'Kulturdepartementet', 'Landsbygds- och infrastrukturdepartementet', 'Socialdepartementet', 'Statsrådsberedningen', 'Utbildningsdepartementet', 'Utrikesdepartementet']}
                                            onChange={handleRelationFilterChange}
                                            reset={filterReset}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Styre</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckboxFilter
                                            options={['Styrelse', 'Enrådighet', 'SBA', 'Nämnd', 'Kommitté', 'Universitet eller högskola', 'Regeringskansliet', 'Övrigt']}
                                            onChange={handleRuleFilterChange}
                                            reset={filterReset}
                                        />
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Årtal</AccordionTrigger>
                                    <AccordionContent>
                                        <div className='flex items-center mt-3'>
                                            <div className='flex items-center text-sm font-semibold'>
                                                <p className='mr-4'>Från</p>
                                                <input
                                                    type="number"
                                                    min="1623"
                                                    max="1851"
                                                    value={slider1Value}
                                                    onChange={handleInput1Change}
                                                    className=' border border-bg-slate-300 rounded p-1'
                                                />
                                            </div>
                                            <div className='flex items-center ml-7 text-sm font-semibold'>
                                                <p className='mr-4 font-semibold text-sm'>Till&nbsp;&nbsp;</p>
                                                <input
                                                    type="number"
                                                    min="1851"
                                                    max="2024"
                                                    value={slider2Value}
                                                    onChange={handleInput2Change}
                                                    className=' border border-bg-slate-300 rounded p-1'
                                                />
                                            </div>
                                        </div>
                                    </AccordionContent>
                                </AccordionItem>
                            </Accordion>
                        </CardContent>
                        <Button className='bg-red-600 mt-5' onClick={handleClearFilters}>Rensa filter</Button>
                    </Card>
                </div>
                <div className='basis-1/2'>
                    <input
                        type="text"
                        placeholder="Hitta med namn eller organisationsnummer..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="border border-gray-200 rounded-md p-2 w-full mb-4 font-light font-sans text-sm"
                    />
                    <p className='font-slate-300 text-sm font-light'>Antal hittade myndigheter: {filteredMyndigheter.length} st</p>
                    <div className='overflow-y-auto mt-4'>
                        <Card>
                            {filteredMyndigheter.map((myndighet: any) => (
                                <div key={myndighet._id}>
                                    <ListCard myndighet={myndighet} loading={loading} />
                                </div>
                            ))}
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
                                <SelectItem value="yearDec">Nyast till äldst</SelectItem>
                                <SelectItem value="yearInc">Äldst till nyast</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
            </div >
            <Footer />
        </>
    );
}
