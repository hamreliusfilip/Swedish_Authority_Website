import React from 'react';
import Image from 'next/image';
import CompleteMenu from './completeMenu';
import Link from 'next/link';

import github from '../Assets/Icons/mail.svg';
import gitlab from '../Assets/Icons/gitlab.svg';
import logo from '../Assets/Icons/logga_vit.svg';

export default function Footer() {
    return (
        <div className="flex flex-col items-center justify-end h-10% mt-24 pt-12 wit-auto bg-gradient-to-r from-cyan-500 to-blue-500">
            <div className="flex justify-center items-center">
                <div className="mr-2">
                    <Image src={logo} alt="Logo" width={400} height={400} />
                </div>
            </div>
            <div className="flex justify-center items-center pt-8 mb-16">
                <CompleteMenu />
            </div>

            <div className='flex items left mb-10'>
                <Link href="https://github.com/hamreliusfilip/tddd27_2024" target="_blank">
                    <div className="flex items-center ml-5 mt-1">
                        <div className="size-5/6">
                            <Image src={github} alt="Github" />
                        </div>
                    </div>
                </Link>
                <Link href="https://gitlab.liu.se/advanced_web/tddd27_2024" target="_blank">
                    <div className="flex items-center ml-5 mt-1">
                        <div className="size-5/6">
                            <Image src={gitlab} alt="Gitlab" />
                        </div>
                    </div>
                </Link>

            </div>
            <div className='mb-10'>
                <p className='text-white font-bold '>
                    Utvecklad och designad av Filip Hamrelius & Anna Granberg
                </p>
            </div>
        </div>
    );
}
