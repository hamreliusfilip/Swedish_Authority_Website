import React from 'react';
import Link from 'next/link';

import {
  Menubar,
  MenubarMenu,
  MenubarTrigger,
} from "@/components/ui/menubar";

export default function CompleteMenu() {
  return (
    <div className="flex justify-center mt-[-20]">
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

        <Link href="/staten">
          <MenubarMenu>
            <MenubarTrigger>Svenska staten</MenubarTrigger>
          </MenubarMenu>
        </Link>

        <Link href="/om">
          <MenubarMenu>
            <MenubarTrigger>Om hemsidan</MenubarTrigger>
          </MenubarMenu>
        </Link>

      </Menubar>
    </div>
  );
}
