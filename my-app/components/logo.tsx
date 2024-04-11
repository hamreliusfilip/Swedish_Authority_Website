import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import logo from '../Assets/logga.svg';

export default function Logo() {
    return (
        <Link href="/">
            <div className="flex items-center ml-5 mt-5">
                <div className="mr-2 size-1/6">
                    <Image src={logo} alt="Svenska Myndigheter"/>
                </div>
            </div>
        </Link>
    );
}