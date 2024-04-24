"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Myndigheter from "@/lib/models/myndighet";
//import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";
import { json } from "stream/consumers";

export default function AddFields({ myndighet }: any) { // Correct function name and export

    const EDITMODE = myndighet.id === "new" ? false : true;
    const router = useRouter();
    const defaultData = { Myndigheter: {} }; // Default data for form

    if (EDITMODE) {
        defaultData.Myndigheter = myndighet;
    }

    const [formData, setFormData] = useState(defaultData);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const handleSubmit = async (e: any) => {
        e.preventDefault();
        if (EDITMODE) {
            await fetch(`/api/myndigheter/${myndighet.id}`, {
                method: "PUT",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        } else {
            await fetch(`/api/myndigheter`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
        router.refresh();
        router.push("/admin");
    }

    return (
        <div>Snart kommer de roliga saker hit2</div>

        // <div className="flex justify-center">
        //     <div className='grid grid-cols-2 gap-8 p-10'>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Namn på myndighet</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Departement</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Skapad (årtal)</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Ledningsform</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Information</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Logotyp i base64-format</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Organisations nummber</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Postadress</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Postort</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Besöksadress</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Besöksadress postnummer</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Besöksadress postort</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Mailadress</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>
        //         <div className='justify-center'>
        //             <p className='font-regular text-black text-l text-left ml-10 mb-2 mt-10'>Webbadress</p>
        //             <Textarea className='text-black w-96 ml-10' />
        //         </div>

        //     </div>
        // </div >
    );
}
