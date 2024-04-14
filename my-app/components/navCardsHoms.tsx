import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"

export default function NavCardsHoms() {
    return (
        <div className="flex flex-wrap justify-center mt-40">

            <Link href="/myndighet">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Myndigheter</CardTitle>
                        <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till myndighetssida</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Filterera, sök och forska bland de svenska myndigheterna</p>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/departement">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Departement</CardTitle>
                        <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till departementsida</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Utforska departementen och hur allt sitter ihop genom en intuituv graf och filterings funktion.</p>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/statestik">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Statistik</CardTitle>
                        <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till statistiksida</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Lek med grafer och siffror, utforska hur staten spenderar pengar på myndigheterna.</p>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/staten">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Svenska Staten</CardTitle>
                        <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till svenska staten sida</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Läs om hur det svenska staten faktiskt fungerar.</p>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/om">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Om hemsidan</CardTitle>
                        <CardDescription> <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Gå till om hemsidan</span></CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Vad är det här för hemsida? Vart kommer informationen ifrån?</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}
