import React from 'react';
import Link from 'next/link';

import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"

export default function DisclaimerCard() {
    return (
        <div className="flex justify-end">
            <Link href="/om">
                <Card className="bg-yellowCustomColor ">
                    <CardContent>
                        <p className="font-normal text-slate-600 text-sm pt-1">Baserat på Statskontorets rapport: "Statsförvaltning i korthet" från 2023.</p>
                        <p className="font-normal text-slate-400 text-sm pt-1">Läs mer</p>
                    </CardContent>
                </Card>
            </Link>
        </div>
    );
} 