"use client"
import React from 'react';
import { Card, CardDescription, CardTitle } from './ui/card';
import { Button } from "@/components/ui/button"
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
  } from "@/components/ui/collapsible"


export default function ListCard({ myndighet }: { myndighet: any }) {
    const [isOpen, setIsOpen] = React.useState(false)

    return (
        
            <Card className='m-4 p-5'>
                <Collapsible open={isOpen} onOpenChange={setIsOpen}>
                    <div className='grid grid-cols-2' style={{ gridTemplateColumns: '3fr 1fr' }}>
                        <div className='flex-1'>
                            <CardTitle>{myndighet.name}</CardTitle>
                            <CardDescription>{myndighet.created}</CardDescription>
                            {isOpen ? (
                                <CollapsibleContent className="space-y-2">
                                    <p>{myndighet.info}</p>
                                </CollapsibleContent>
                            ) : (
                                <p>{myndighet.info.substring(0, 50)}...</p>
                            )}
                        </div>

                        <div className='grid grid-cols-1 gap-3 content-start justify-self-end flex-none'>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6 ">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 9V5.25A2.25 2.25 0 0 0 13.5 3h-6a2.25 2.25 0 0 0-2.25 2.25v13.5A2.25 2.25 0 0 0 7.5 21h6a2.25 2.25 0 0 0 2.25-2.25V15m3 0 3-3m0 0-3-3m3 3H9" />
                            </svg>
                            
                        </div>
                    </div>
                    <CollapsibleTrigger asChild className='w-full flex items-center'>
                        {isOpen ? (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
                            </svg>
                        ) : (
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                <path stroke-linecap="round" stroke-linejoin="round" d="m19.5 8.25-7.5 7.5-7.5-7.5" />
                            </svg>
                        )}
                    </CollapsibleTrigger>
                </Collapsible>
            </Card>
        
    );
}



/** Använd collapsable for utvidgning av texten */

/** Filled heart
https://heroicons.com*/
/**<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
  <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
</svg>
 */

// Arrow up
// <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
//   <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 15.75 7.5-7.5 7.5 7.5" />
// </svg>
