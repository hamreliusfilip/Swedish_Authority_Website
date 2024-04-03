import React from 'react';
import {
    Command,
    CommandInput,
    CommandList,
    CommandEmpty,
    CommandGroup,
    CommandItem,
} from "@/components/ui/command";

export default function SearchBar() {
    return (
        <div className="flex justify-center">
            <div className="w-7/12">
                <div className="flex items-center pl-2 pt-12">
                    <Command>
                        <CommandInput placeholder="Sök efter något kul..." />
                        <CommandList>
                            <CommandEmpty>Inga resultat.</CommandEmpty>
                            <CommandGroup heading="Suggestions">
                                <CommandItem>Systembolaget</CommandItem>
                                <CommandItem>Finansdepartementet</CommandItem>
                                <CommandItem>Landsting</CommandItem>
                            </CommandGroup>
                        </CommandList>
                    </Command>
                </div>
            </div>
        </div>
    );
}
