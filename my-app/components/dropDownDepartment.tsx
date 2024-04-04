import React from 'react';
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"

export default function DropDownDepartment() {
    return (
        <div className="flex justify-end mr-20 mt-10">
            <Select>
                <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Välj departement" />
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value="1">Arbetsmarknadsdepartementet</SelectItem>
                    <SelectItem value="2">Finansdepartementet</SelectItem>
                    <SelectItem value="3">Försvarsdepartementet</SelectItem>
                    <SelectItem value="4">Justitiedepartementet</SelectItem>
                    <SelectItem value="5">Klimat- och näringslivsdepartementet</SelectItem>
                    <SelectItem value="6">Kulturdepartementet</SelectItem>
                    <SelectItem value="7">Landsbygds- och infrastrukturdepartementet</SelectItem>
                    <SelectItem value="8">Socialdepartementet</SelectItem>
                    <SelectItem value="9">Statsrådsberedningen</SelectItem>
                    <SelectItem value="10">Utbildningsdepartementet</SelectItem>
                    <SelectItem value="11">Utrikesdepartementet</SelectItem>
                </SelectContent>
            </Select>
        </div>
    );
}
