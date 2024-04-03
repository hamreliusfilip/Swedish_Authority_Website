import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
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
                        <p>Sök, filtrera, läs om, kommentera, gilla & hitta myndigheter.</p>
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
                        <p>Utforska departementen och hur allt sitter ihop.</p>
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
                        <p>Hur fungerar egentligen den svenska staten?</p>
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
                        <p>Vad är detta och varför finns den?</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
}
