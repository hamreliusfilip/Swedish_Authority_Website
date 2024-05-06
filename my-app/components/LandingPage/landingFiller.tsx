import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function LandingFiller() {
    return (
        <div className='mt-40 mb-40'>
            <div className='mb-8'>
                <h1 className='text-center font-bold text-4xl'>
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Interaktiva verktyg </span>
                </h1>
                <p className='text-center font-normal text-l mt-5'> Utforska Svenska statens byrokrati med interaktiva och intuitiva verktyg. <br></br> Flödesscheman och extensiva listor med filter. </p>
            </div>
            <div>
                <hr className="w-48 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>
            <div className="flex justify-center">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 mt-10">

                    <Link href="/myndighet">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Unik utförlig databas över myndigheterna</CardTitle>
                            </CardHeader>
                        </Card>
                        </div> 
                    </Link>

                    <Link href="/departement">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Karta över departementen</CardTitle>
                            </CardHeader>
                        </Card>
                        </div> 
                    </Link>

                    <Link href="/faktaover/statsbudget">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Statsbudgeten i grafer</CardTitle>
                            </CardHeader>
                        </Card>
                        </div> 
                    </Link>

                    <Link href="/company">
                    <div className='transition-all duration-300 hover:scale-105'>
                        <Card className="w-96 h-48 flex flex-col justify-center items-center bg-white">
                            <CardHeader>
                                <CardTitle className='text-center text-darkGreyBackgroundCustomColor'>Databas över statliga företag</CardTitle>
                            </CardHeader>
                        </Card>
                        </div> 
                    </Link>
                </div>
            </div>
        </div>
    );
}


