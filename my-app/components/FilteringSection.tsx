import React from 'react';
import { Card, CardContent, CardDescription, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Checkbox } from './ui/checkbox';

export default function FilteringSection() {
    return (
        <Card className='p-5'>
            <CardTitle>Filtreringsalternativ</CardTitle>
            <CardDescription>Egenskaper</CardDescription>
            <CardDescription>Data</CardDescription>
            <CardContent className='grid grid-cols-1'>
                <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Accept terms and conditions
                    </label>
                    <Checkbox id="terms" />
                    <label
                        htmlFor="terms"
                        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                        Accept terms and conditions
                    </label>
            </CardContent>
            <CardDescription>Intervall</CardDescription>
            <Button className='bg-darkGreyBackgroundCustomColor'>Rensa filter</Button>
        </Card>
    );
}