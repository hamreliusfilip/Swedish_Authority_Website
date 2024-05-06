"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Input } from "../ui/input";


export default function AddFields({ myndighet }: any) { // Correct function name and export¨
    const EDITMODE = myndighet.myndighet._id === "new" ? false : true;
    const router = useRouter();
    let defaultData = {
        name: "",
        relation: "",
        created: "xxxx",
        rule: "",
        info: "",
        logo_url: "",
        epost: "",
        org: "",
        tele: "",
        web: "",
    }; // Default data for form

    if (EDITMODE) {
        defaultData = myndighet.myndighet;
    }

    const [formData, setFormData] = useState(defaultData);

    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevData: any) => ({
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
        <div className="w-full sm:w-1/2 ml-auto mr-auto">
            <Card className='p-5'>
                <CardTitle className="text-center mb-10">{EDITMODE ? "Updatera " + defaultData.name : "Lägg till en ny myndighet"}</CardTitle>

                <form
                onSubmit={handleSubmit}
                method="post"
                className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-stretch">

                    {/* NAMN */}
                    <div>
                        <CardDescription>Namn</CardDescription>
                        <input
                        id="name"
                        name = "name"
                        type = "text"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.name}
                        />
                    </div>

                    {/* SKAPADES */}
                    <div>
                        <CardDescription>Skapades</CardDescription>
                        <input
                        id="created"
                        name = "created"
                        type= "number"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.created}
                        />
                    </div>

                    {/* DEPARTEMENT */}
                    <div>
                        <CardDescription>Departement</CardDescription>
                        <select
                        id="relation"
                        name = "relation"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.relation}
                        >
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                        </select>
                    </div>

                    {/* LEDNING */}
                    <div>
                        <CardDescription>Ledning</CardDescription>
                        <select
                        id="rule"
                        name = "rule"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.rule}
                        >
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                            <option value="Arbetsmarknadsdepartementet">Arbetsmarknadsdepartementet</option>
                        </select>
                    </div>

                    {/* EPOST */}
                    <div>
                        <CardDescription>Mailadress</CardDescription>
                        <input
                        id="epost"
                        name = "epost"
                        type = "email"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.epost}
                        />
                    </div>

                    {/* ORG */}
                    <div>
                        <CardDescription>Organisationsnummer (xxxxxx-xxxx)</CardDescription>
                        <input
                        id="org"
                        name = "org"
                        type = "text"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.org}
                        />
                    </div>

                    {/* TELE */}
                    <div>
                        <CardDescription>Telefonnummer</CardDescription>
                        <input
                        id="tele"
                        name = "tele"
                        type = "tel"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.tele}
                        />
                    </div>

                    {/* WEB */}
                    <div>
                        <CardDescription>Webbplats</CardDescription>
                        <input
                        id="web"
                        name = "web"
                        type = "url"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.web}
                        />
                    </div>

                    {/* INFORMATION */}
                    <div className="col-span-1 sm:col-span-2">
                        <CardDescription>Information</CardDescription>
                        <textarea
                        className="w-full"
                        id="info"
                        name = "info"
                        onChange={handleChange}
                        required = {true}
                        value = {defaultData.info}
                        rows = {5}
                        />
                    </div>
                </form>
            </Card>

            <div className="flex justify-center mt-20 mb-20">
                <Button variant="outline" className="bg-green-500 text-white ml-5">
                    {EDITMODE ? "Updatera" : "Lägg till"}
                </Button>
            </div>
        </div>
        
    );
}
