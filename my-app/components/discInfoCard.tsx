import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"

export default function DisclaimerCard() {
    return (
        <div className="flex justify-end mr-4">
            <Link href="/om">
                <Card className="m-8 pt-6 bg-yellowCustomColor h-36 w-80 ">
                    <CardContent>
                    <CardTitle className='font-semibold text-slate-600 text-sm'>Om datan</CardTitle>
                        <p className="font-normal text-slate-600 text-sm pt-2">Baserat på Statskontorets rapport: "Statsförvaltning i korthet" från 2023.</p>
                        <p className="font-normal text-slate-400 text-sm pt-2">Läs mer</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
} 