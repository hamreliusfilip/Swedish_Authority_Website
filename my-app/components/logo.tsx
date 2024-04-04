import React from 'react';
import Image from 'next/image';
import logo from '../Assets/book.svg';

export default function Logo() {
    return (
        <div className="flex items-center pl-4 pt-4">
            <div className="mr-2">
                <Image src={logo} alt="Logo" width={50} height={50} />
            </div>

            <div>
                <h3 className="text-lg font-semibold">Svenska Myndigheter</h3>
            </div>
        </div>
    );
}