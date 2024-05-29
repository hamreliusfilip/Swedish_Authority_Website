"use client";
import { useRouter } from "next/navigation";
import React, { useState, useEffect } from "react";
import { Button } from "../ui/button";
import { Card, CardDescription, CardTitle } from "../ui/card";
import { AlertCard } from "./alert";

export default function AddFieldsComp({ company }: any) {
    const EDITMODE = company.company._id === "new" ? false : true;
    const router = useRouter();
    let defaultData = {
        name: "",
        created: "xxxx",
        owner: "",
        info: "",
        logo_url: "",
        epost: "",
        org: "",
        tele: "",
        web: "",
    };

    if (EDITMODE) {
        defaultData = company.company;
    }

    const [formData, setFormData] = useState(defaultData);
    const [showAlert, setShowAlert] = useState(false);
    const [showAlertFalse, setShowAlertFalse] = useState(false);

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


    const handleChange = (e: any) => {
        const { name, value } = e.target;

        setFormData((prevData: any) => ({
            ...prevData,
            [name]: value,
        }));
    }

    const validateFormData = (formData: any) => {
        const { name, info, created, owner, org } = formData;

        if (!name || !info || !created || !owner || !info || !org ) {
            return false;
        }

        if (isNaN(created) && isNaN(org)) {
            return false;
        }

        return true;
    }

    const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (!file) return;

        const reader = new FileReader();

        reader.onload = () => {
            const base64String = reader.result?.toString().replace(/^data:.+;base64,/, '');
            if (!base64String) return;

            setFormData((prevData: any) => ({
                ...prevData,
                logo_url: `data:${file.type};base64,${base64String}`,
            }));
        };

        reader.readAsDataURL(file);
    };


    const handleSubmit = async (e: any) => {
        e.preventDefault();

        if (!validateFormData(formData)) {
            setShowAlertFalse(true);
            return;
        } else {
            setShowAlert(true);
            setFormData(defaultData);
        }

        if (EDITMODE) {
            const res = await fetch(`/api/companies/${company.company._id}`, {
                method: "PUT",
                headers: {
                    "Content-type": "application/json",
                },
                body: JSON.stringify({ formData }),
            });
            if (!res.ok) {
                throw new Error("Failed to update ticket");
            }
            router.push("/admin/adminListPageComp")
        } else {
            await fetch(`/api/companies`, {
                method: "POST",
                body: JSON.stringify(formData),
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    }

    return (
        <div className="w-full sm:w-2/3 ml-auto mr-auto">
            <Card className='p-5 shadow-md'>
                <CardTitle className="text-center mb-10">{EDITMODE ? "Updatera " + defaultData.name : "Lägg till ett ny företag"}</CardTitle>

                <form
                    onSubmit={handleSubmit}
                    method="post"
                    className="grid grid-cols-1 sm:grid-cols-2 gap-3 justify-stretch">

                    {/* NAMN */}
                    <div className="m-5">
                        <CardDescription>Namn</CardDescription>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.name}
                            placeholder="Myndighetens namn"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* SKAPADES */}
                    <div className="m-5">
                        <CardDescription>Skapades</CardDescription>
                        <input
                            id="created"
                            name="created"
                            type="number"
                            onChange={handleChange}
                            required={true}
                            value={formData.created}
                            placeholder="xxxx"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* ORG */}
                    <div className="m-5">
                        <CardDescription>Organisationsnummer</CardDescription>
                        <input
                            id="org"
                            name="org"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.org}
                            placeholder="xxxxxx-xxxx"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* ÄGARE */}
                    <div className="m-5">
                        <CardDescription>Ägare</CardDescription>
                        <input
                            id="owner"
                            name="owner"
                            type="text"
                            onChange={handleChange}
                            required={true}
                            value={formData.owner}
                            placeholder="Ägare av myndigheten"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* WEB */}
                    <div className="m-5">
                        <CardDescription>Webbplats</CardDescription>
                        <input
                            id="web"
                            name="web"
                            type="url"
                            onChange={handleChange}
                            required={true}
                            value={formData.web}
                            placeholder="myndighet.se"
                            className="border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                        />
                    </div>

                    {/* INFORMATION */}
                    <div className="col-span-1 sm:col-span-2 m-5 ">
                        <CardDescription>Information</CardDescription>
                        <textarea
                            className="w-full border-solid border-2 border-slate-300 rounded-sm p-1 pl-2 mt-1"
                            id="info"
                            name="info"
                            onChange={handleChange}
                            required={true}
                            value={formData.info}
                            rows={5}
                            placeholder="Information om myndigheten"
                        />
                    </div>
                    {/* logo_url */}
                    <div className="col-span-1 sm:col-span-2 m-5 justify-center">
                        {formData.logo_url ? (
                            <CardDescription>Uppdatera logotyp</CardDescription>
                        ) : (
                            <CardDescription>Lägg till logotyp</CardDescription>
                        )}

                        <div className="flex items-center mt-1">

                            <label htmlFor="logoInput" className="border-solid border-1 border-slate-300 rounded-sm p-2 mr-5 cursor-pointer shadow-md">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M9 8.25H7.5a2.25 2.25 0 0 0-2.25 2.25v9a2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25v-9a2.25 2.25 0 0 0-2.25-2.25H15m0-3-3-3m0 0-3 3m3-3V15" />
                                </svg>
                            </label>
                            <input
                                id="logoInput"
                                name="logo_url"
                                type="file"
                                className="border-solid border-2 border-slate-300 rounded-sm p-1 mr-2"
                                accept="image/png, image/jpeg"
                                onChange={handleLogoUpload}
                                style={{ display: 'none' }}
                            />
                            {formData.logo_url ? (
                                <p className="text-green-600">Logotyp tillagd</p>
                            ) : (
                                <p className="text-red-600">Ingen logotyp tillagd</p>
                            )}
                        </div>
                    </div>
                </form>
            </Card>

            <div className="flex justify-center mt-20 mb-20">
                <Button variant="outline" className="bg-green-500 text-white ml-5" onClick={handleSubmit}>
                    {EDITMODE ? "Updatera" : "Lägg till"}
                    {showAlertFalse && <AlertCard isSuccess={false} />}
                    {showAlert && <AlertCard isSuccess={true} />}
                </Button>
            </div>
        </div>
    );
}
