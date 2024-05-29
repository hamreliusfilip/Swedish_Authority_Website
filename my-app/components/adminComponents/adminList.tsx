"use client"

import React, { useEffect, useState } from 'react';
import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card"

import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
} from "@/components/ui/alert-dialog"

import Link from 'next/link';
import { Button } from '../ui/button';
import { useToast } from "@/components/ui/use-toast"
import { AlertCard } from "./alert";

export default function AdminList({ prop }: { prop: string }) {

    const fetchData = async (type: String) => {
        try {
            const res = await fetch(`http://localhost:3000/api/${type}`);
            const data = await res.json();
            return data;
        } catch (error) {
            console.error("Error fetching data:", error);
            return [];
        }
    }

    const [myndigheter, setMyndigheter] = useState<any[]>([]);
    const [companies, setCompanies] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertFalse, setShowAlertFalse] = useState(false);

    useEffect(() => {
        if (prop == "myndigheter") {
            fetchData(prop).then((myndigheter) => {
                setMyndigheter(myndigheter.myndighet);
                setLoading(false);
            }).catch((error) => {
                console.error("Error setting myndigheter:", error);
            });
        }
        else if (prop == "companies"){
            fetchData(prop).then((companies) => {
                setCompanies(companies.company);
                setLoading(false);
            }).catch((error) => {
                console.error("Error setting companies:", error);
            });
        };

    }, []);

    useEffect(() => {
        let timerShowAlert: NodeJS.Timeout;
        
        if (showAlert) {
          timerShowAlert = setTimeout(() => {
            setShowAlert(false);
          }, 5000);
        }
    
        let timerShowAlertFalse: NodeJS.Timeout;
        
        if (showAlertFalse) {
          timerShowAlertFalse = setTimeout(() => {
            setShowAlertFalse(false);
          }, 5000);
        }
    
        return () => {
          clearTimeout(timerShowAlert);
          clearTimeout(timerShowAlertFalse);
        };
      }, [showAlert, showAlertFalse]);



    const groupedMyndigheter: { [key: string]: any[] } = myndigheter.reduce((acc: any, myndighet: any) => {
        const firstLetter = myndighet.name.charAt(0).toUpperCase();
        acc[firstLetter] = acc[firstLetter] || [];
        acc[firstLetter].push({
            id: myndighet._id,
            name: myndighet.name
        });
        return acc;
    }, {});

    const sortedKeys = Object.keys(groupedMyndigheter).sort();

    const cards = [];

    for (let i = 0; i < 30; i++) {
        cards.push(
            <div key={i}>
                <div className="animate-pulse">
                    <div className="h-6 bg-gray-200 rounded mb-3 h-16 mt-1"></div>
                </div>
            </div>
        );
    }

    const handleDelete = async (id: string) => {

        try {
            const res = await fetch(`http://localhost:3000/api/myndigheter/${id}`, {
                method: 'DELETE',
            });
            if (res.ok) {
                setShowAlert(true);
                setMyndigheter(myndigheter.filter(m => m._id !== id));
            } else {
                setShowAlertFalse(true);
                console.error('Failed to delete myndighet');

            }
        } catch (error) {
            setShowAlertFalse(true);
            console.error('Error deleting myndighet:', error);
        }

    };

    const { toast } = useToast()

    return (
        <div>
            <Card className="m-8 h-5/6 w-2/4 mx-auto">
                <CardContent className="m-1 my-10">
                    <CardTitle className="my-10">Myndigheter under regeringen utifrån alfabetisk ordning</CardTitle>
                    
                    {loading == true ? (
                        <div>
                            {cards}
                        </div>
                    ) : (
                    <div>
                        {sortedKeys.map((letter) => (
                            <div key={letter}>
                                <h2 className='font-bold'>{letter}</h2>
                                {groupedMyndigheter[letter].map((myndighet: any, index: any) => (
                                    <div className='grid grid-cols-2 pb-5' style={{ gridTemplateColumns: '4fr 1fr' }}>
                                        <p className="mt-auto mb-auto" key={index}>{myndighet.name}</p>
                                        <div className='grid grid-cols-2 gap-5 mt-0 content-start justify-self-end flex-none'>
                                            <Button variant="ghost">
                                                <Link href={`/admin/adminAddMyn/${myndighet.id}`}>
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10" />
                                                    </svg>
                                                </Link>
                                            </Button>
                                            <AlertDialog>
                                                <AlertDialogTrigger asChild>
                                                    <Button variant="ghost">
                                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="size-6">
                                                            <path strokeLinecap="round" strokeLinejoin="round" d="m14.74 9-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 0 1-2.244 2.077H8.084a2.25 2.25 0 0 1-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 0 0-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 0 1 3.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 0 0-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 0 0-7.5 0" />
                                                        </svg>
                                                    </Button>
                                                </AlertDialogTrigger>
                                                <AlertDialogContent>
                                                    <AlertDialogHeader>
                                                        <AlertDialogTitle>Är du säger att du vill radera {myndighet.name}?</AlertDialogTitle>
                                                        <AlertDialogDescription>
                                                            This action cannot be undone. This will delete {myndighet.name} and remove it's data from our servers.
                                                        </AlertDialogDescription>
                                                    </AlertDialogHeader>
                                                    <AlertDialogFooter>
                                                        <AlertDialogCancel>Avbryt</AlertDialogCancel>
                                                        <AlertDialogAction onClick={() => handleDelete(myndighet.id)}>
                                                            Radera
                                                        </AlertDialogAction>
                                                    </AlertDialogFooter>
                                                </AlertDialogContent>
                                            </AlertDialog>
                                            
                                        </div>
                                    </div>
                                ))}
                            </div>
                        ))}
                    </div>
                </CardContent>
            </Card>
        </div>
    );
}
