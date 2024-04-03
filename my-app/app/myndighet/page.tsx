import React from 'react'
import CompleteMenu from '../../components/completeMenu';
import Logo from '../../components/logo';
import Link from 'next/link';

export default function Page() {
    return (
        <div>
            <Logo />
            <CompleteMenu />
            <Link href="/myndighet/listaMyndighet"> Klicka för sida för myndigheter lista </Link> <br />
            <Link href="/myndighet/specifikMyndighet"> Klicka för sida för specifik myndighet </Link>
        </div>
    );
}