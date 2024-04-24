'use client';

import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from '../ui/card';
import { Button } from '../ui/button';
import { Checkbox } from '../ui/checkbox';
import { Slider } from "@/components/ui/slider"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

interface FilteringSectionProps {
    handleDepFilterChange: (value: string) => void;
}

export default function FilteringSection({ handleDepFilterChange }: FilteringSectionProps) {
    return (
        <Card className='p-5'>
            <CardTitle className='mb-5'>Filtreringsalternativ</CardTitle>

            <CardContent className='grid grid-cols-1'>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Departement</AccordionTrigger>
                        <AccordionContent>

                              <div className='flex mt-2'>
                                <Checkbox id="Arbetsmarknadsdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Arbetsmarknadsdepartementet")} />

                                <label htmlFor="Arbetsmarknadsdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Arbetsmarknadsdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Finansdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Finansdepartementet")} />
                                <label htmlFor="Finansdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Finansdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Försvars­­departementet" className='mr-3' onChange={() => handleDepFilterChange("Försvars­­departementet")} />
                                <label htmlFor="Försvars­­departementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Försvars­­departementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Justitiedepartementet" className='mr-3' onChange={() => handleDepFilterChange("Justitiedepartementet")} />
                                <label htmlFor="Justitiedepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Justitiedepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Klimat- och näringslivsdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Klimat- och näringslivsdepartementet")} />
                                <label htmlFor="Klimat- och näringslivsdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Klimat- och näringslivsdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Kulturdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Kulturdepartementet")} />
                                <label htmlFor="Kulturdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Kulturdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Landsbygds- och infrastrukturdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Landsbygds- och infrastrukturdepartementet")} />
                                <label htmlFor="Landsbygds- och infrastrukturdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Landsbygds- och infrastrukturdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Socialdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Socialdepartementet")} />
                                <label htmlFor="Socialdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Socialdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Statsråds­beredningen" className='mr-3' onChange={() => handleDepFilterChange("Statsråds­beredningen")} />
                                <label htmlFor="Statsråds­beredningen" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Statsråds­beredningen
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Utbildningsdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Utbildningsdepartementet")} />
                                <label htmlFor="Utbildningsdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Utbildningsdepartementet
                                </label>
                            </div>

                            <div className='flex mt-2'>
                                <Checkbox id="Utrikesdepartementet" className='mr-3' onChange={() => handleDepFilterChange("Utrikesdepartementet")} />
                                <label htmlFor="Utrikesdepartementet" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                    Utrikesdepartementet
                                </label>
                            </div>

                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <Accordion type="single" collapsible>
                    <AccordionItem value="item-1">
                        <AccordionTrigger>Styrform</AccordionTrigger>
                        <AccordionContent>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Styrelse
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Enrådighet
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    SBA
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Nämnd
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Kommitté
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Universitet eller högskola
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Regeringskansliet
                                </label>
                            </div>
                            <div className='flex mt-2'>
                                <Checkbox id="terms" className='mr-3' />
                                <label
                                    htmlFor="terms"
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 ">
                                    Övrigt
                                </label>
                            </div>
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>

                <div className='mt-10 w-2/3'>
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Inrättat år
                    </label>
                    <div className='flex items-center justify-end'>
                        <p className='mr-3'> 1300</p>
                        <Slider defaultValue={[2020]} max={2023} step={1} className='mt-3' />
                        <p className='ml-3'> 2023</p>
                    </div>
                </div>
            </CardContent>
            <Button className='bg-gradient-to-r from-cyan-500 to-blue-500 mt-5'>Rensa filter</Button>
        </Card >
    );
}