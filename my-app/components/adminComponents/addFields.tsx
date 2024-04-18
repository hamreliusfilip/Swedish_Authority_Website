"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Myndigheter from "@/lib/models/myndighet";
import { useForm } from "react-hook-form";
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
        <div>
           {JSON.stringify(myndighet)}
        </div>
    )
}
