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

    const filteredMyndigheter = myndigheter.filter(myndighet => {

        const nameMatch = myndighet.name.toLowerCase().includes(searchQuery.toLowerCase());
        const orgMatch = myndighet.org.toLowerCase().includes(searchQuery.toLowerCase());

        const relationMatch = Object.entries(relationFilters).every(([relation, checked]) => !checked || myndighet.relation === relation);
        const ruleMatch = Object.entries(ruleFilters).every(([rule, checked]) => !checked || myndighet.rule === rule);

        return (nameMatch || orgMatch) && ruleMatch && relationMatch;
    });

    const handleClearFilters = () => {
        setRuleFilters({});
        setRelationFilters({});
        setSearchQuery('');
        setFilterReset(true);

        setTimeout(() => {
            setFilterReset(false);
        }, 0);
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
                    <div className='overflow-y-auto'>
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
