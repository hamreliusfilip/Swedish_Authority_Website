import React from 'react';
import Link from 'next/link';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function CompleteMenu() {
  return (
    <div className="flex justify-center ">
      <Menubar>
        <Link href="/">
          <MenubarMenu>
            <MenubarTrigger>Hem</MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href="/myndighet">
          <MenubarMenu>
            <MenubarTrigger>Myndigheter</MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href="/departement">
          <MenubarMenu>
            <MenubarTrigger>Departement</MenubarTrigger>
          </MenubarMenu>
        </Link>

        <MenubarMenu>
          <MenubarTrigger>
            Fakta
          </MenubarTrigger>
          <MenubarContent className="bg-white p-2 rounded-md">
            <Link href="/faktaover/statistik">
              <MenubarItem>Statistik</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/faktaover/statsbudget">
              <MenubarItem>Statsbudgeten</MenubarItem>
            </Link>
            <MenubarSeparator />
            <Link href="/faktaover/staten">
              <MenubarItem>Generell Fakta</MenubarItem>
            </Link>
          </MenubarContent>
        </MenubarMenu>

        <Link href="/om">
          <MenubarMenu>
            <MenubarTrigger>Om hemsidan</MenubarTrigger>
          </MenubarMenu>
        </Link>
      </Menubar>
    </div>
  );
}
