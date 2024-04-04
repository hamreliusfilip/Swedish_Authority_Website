import React from 'react';
import logo from '../Assets/book_white.svg';
import Image from 'next/image';
import CompleteMenu from './completeMenu';

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-end h-10% mt-64 bg-darkGreyBackgroundCustomColor pt-12 wit-auto">
            <div className="flex justify-center items-center">
                <div className="mr-2">
                    <Image src={logo} alt="Logo" width={100} height={100} />
                </div>
            </div>      
            <div className="flex justify-center items-center pt-8 mb-16">
                <CompleteMenu />   
            </div>
        </div>
    );
}
