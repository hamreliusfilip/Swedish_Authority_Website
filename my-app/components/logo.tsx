import React from 'react';
import Image from 'next/image';
import logo from '../Assets/logo.png';
import Link from 'next/link'

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center pl-4 pt-4">
                <div className="mr-2">
                    <Image src={logo} alt="Logo" width={50} height={50} />
                </div>

                <div>
                    <h3 className="text-lg font-semibold">Svenska Myndigheter</h3>
                </div>
            </div>
        </Link>
    );
}