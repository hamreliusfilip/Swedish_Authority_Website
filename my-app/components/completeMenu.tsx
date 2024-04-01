import React from 'react';

import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function CompleteMenu() {
  return (
    <div className="flex justify-center mt-2">
      <Menubar>
        <MenubarMenu>
          <MenubarTrigger>Hem</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Myndigheter</MenubarTrigger>
          <MenubarContent>
            <MenubarItem>Filtera & Sök</MenubarItem>
            <MenubarSeparator />
            <MenubarItem>Generisk lista</MenubarItem>
          </MenubarContent>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Departement</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Svenska Staten</MenubarTrigger>
        </MenubarMenu>

        <MenubarMenu>
          <MenubarTrigger>Om Hemsidan</MenubarTrigger>
        </MenubarMenu>
      </Menubar>
    </div>
  );
}
