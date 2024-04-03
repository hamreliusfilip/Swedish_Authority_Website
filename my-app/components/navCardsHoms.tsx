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
        <div className="flex flex-wrap justify-center pt-16">

            <Link href="/myndighet">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Myndigheter</CardTitle>
                        <CardDescription className="text-sm">Gå till myndighetsida</CardDescription>
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
                        <CardDescription>Gå till departementsida</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Utforska departementen och hur allt sitter ihop genom en intuituv graf och filterings funktion.</p>
                    </CardContent>
                </Card>
            </Link>

            <Link href="/staten">
                <Card className="m-4 p+2 w-64 h-64">
                    <CardHeader>
                        <CardTitle>Svenska Staten</CardTitle>
                        <CardDescription>Gå till sidan staten</CardDescription>
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
                        <CardDescription>Gå till sidan om oss</CardDescription>
                    </CardHeader>
                    <CardContent>
                        <p>Vad är det här för hemsida? Vart kommer informationen ifrån?</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}
