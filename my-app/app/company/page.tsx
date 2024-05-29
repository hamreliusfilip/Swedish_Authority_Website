'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Card, CardContent, CardTitle } from '@/components/ui/card';
import { navigationMenuTriggerStyle } from "@/components/ui/navigation-menu";
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
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
} from "@/components/ui/navigation-menu"

import CompleteMenu from '../../components/Main/completeMenu';
import Logo from '../../components/Main/logo';
import Footer from '../../components/Main/footer';

import ListCard from '@/components/CompaniesSida/listCard';
import CheckboxFilter from '@/components/MyndigheterSida/CheckBoxFilter';

import company, { companies } from "@/lib/models/company";

export default function Page() {

    const [loading, setLoading] = useState(true);
    const [companies, setCompanies] = useState<companies[]>([]);

    const [searchQuery, setSearchQuery] = useState('');
    const [ruleFilters, setRuleFilters] = useState<Record<string, boolean>>({});
    const [relationFilters, setRelationFilters] = useState<Record<string, boolean>>({});
    const [filterReset, setFilterReset] = useState(false);
    const [filteredCompanies, setFilteredCompanies] = useState<companies[]>([]);
    const [slider1Value, setSlider1Value] = useState('1623');
    const [slider2Value, setSlider2Value] = useState('2024');

    const fetchCompanies = async () => {
        try {
            const res = await fetch("http://localhost:3000/api/companies");
            const data = await res.json();
            return data.company;
        } catch (error) {
            console.error("Error fetching companies:", error);
            return [];
        }
    }

    useEffect(() => {
        fetchCompanies().then((companies) => {
            setCompanies(companies);
            setTimeout(() => {
                setLoading(false);
            }, 500);
        }).catch((error) => {
            console.error("Error setting companies:", error);
        });
    }, []);

    const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchQuery(event.target.value);
    }

    const handleRuleFilterChange = (filters: Record<string, boolean>) => {
        setRuleFilters(filters);
    };

    function changeSorting(value: string) {
        if (value === 'alfa') {
            setCompanies([...companies].sort((a, b) => a.name.localeCompare(b.name)));
        }
        if (value === 'yearDec') {
            setCompanies([...companies].sort((a, b) => b.created.toString().localeCompare(a.created.toString())));
        }
        else if (value === 'yearInc') {
            setCompanies([...companies].sort((a, b) => a.created.toString().localeCompare(b.created.toString())));
        }
    }

    useEffect(() => {
        const filteredCompanies = companies.filter(company => {
            const nameMatch = company.name.toLowerCase().includes(searchQuery.toLowerCase());
            const orgMatch = company.org.toLowerCase().includes(searchQuery.toLowerCase());
            const minValue = parseInt(slider1Value);
            const maxValue = parseInt(slider2Value);
            const createdMatch = company.created >= minValue && company.created <= maxValue;

            const ruleMatch = Object.entries(ruleFilters).every(([rule, checked]) => !checked || checked && ruleFilters[company.owner]);

            return (nameMatch || orgMatch) && ruleMatch && createdMatch;
        });
        setFilteredCompanies(filteredCompanies);
    }, [companies, searchQuery, slider1Value, slider2Value, ruleFilters]);

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

    const handleInput1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider1Value(event.target.value);
    };

    const handleInput2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSlider2Value(event.target.value);
    };

    const cards = [];

    for (let i = 0; i < 7; i++) {
        cards.push(
            <Card key={i} className='m-4 p-5'>
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-2 h-16 mt-1"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
                    <div className="h-4 bg-gray-200 rounded mb-2 h-12 mt-5"></div>
                </div>
            </Card>
        );
    }
    return (
        <>
            <div>
                <Logo />
                <CompleteMenu />
                <div className="text-center">
                    <h1 className="font-bold text-4xl bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text mt-10 mb-2 px-1 pb-1"> Statliga företag </h1>
                    <p className="font-semibold text-small text-slate-300 mb-10">Alla svenska statliga eller delvis statliga företag</p>
                </div>
            </div>
            <div className='flex flex-column m-4 gap-5 justify-items-center h-30'>
                <div className='basis-1/3 ml-10'>
                    <Card className='p-5'>
                        <CardTitle className='mb-5'>Filtreringsalternativ</CardTitle>
                        <CardContent className='grid grid-cols-1'>
                            <Accordion type="single" collapsible>
                                <AccordionItem value="item-1">
                                    <AccordionTrigger>Statligt ägande</AccordionTrigger>
                                    <AccordionContent>
                                        <CheckboxFilter
                                            options={['Helt statligt ägt', 'Delvis statligt ägt']}
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
                    <div className='flex justify-start mt-5'>
                        <NavigationMenu>
                            <NavigationMenuList className="border border-bg-slate-300 rounded-md">
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger>Hjälp</NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <div className='w-96 h-68 p-7'>
                                            Detta är en sökmotor för svenska statliga företag. Du kan söka på samtliga statliga företag i Sverige och filtrera på olika kriterier. Det finns tio datapunkter för varje statligt företag, till exempel generell fakta, mailadress och logotyp. Använd Filtreringsalternativen till vänster eller sökrutan för att hitta ett specifikt statligt företag. Klickar du på knappen högst upp i högra hörnet på varje statligt företag kommer du till den specifika sidan för just det statliga företaget.
                                        </div>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                                <NavigationMenuItem>
                                    <Link href="company/listCompany" legacyBehavior passHref>
                                        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
                                            Generisk lista
                                        </NavigationMenuLink>
                                    </Link>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
                <div className='basis-1/2'>
                    <input
                        type="text"
                        placeholder="Hitta med namn eller organisationsnummer..."
                        value={searchQuery}
                        onChange={handleSearchChange}
                        className="border border-gray-200 rounded-md p-2 w-full mb-4 font-light font-sans text-sm"
                    />
                    <p className='font-slate-300 text-sm font-light'>Antal hittade företag hittade: {filteredCompanies.length} st</p>
                    
                    {loading == true ? (
                        <Card className="h-120 overflow-y-auto mt-4">
                            <>{cards}</>
                        </Card>
                    ) : (
                    <div className='overflow-y-auto mt-4'>
                        <Card className="h-120 overflow-y-auto">
                            {filteredCompanies.map((company: any) => (
                                <div key={company._id}>
                                    <ListCard company={company} loading={loading} />
                                </div>
                            ))}
                        </Card>
                    </div>)}
                </div>
                <div className='basis-1/6 pr-10'>
                    <div className=''>
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
                    </div>
                </div>
            </div >
            <Footer />
        </>
    );
}


