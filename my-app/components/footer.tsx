import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { RegisterLink, LoginLink } from "@kinde-oss/kinde-auth-nextjs/components";
import { Button } from "@/components/ui/button"

import github from '../Assets/Icons/mail.svg';
import gitlab from '../Assets/Icons/gitlab.svg';
import logo from '../Assets/Icons/logga_vit.svg';

export default function Footer() {
    return (
        <div>
            <div className="flex flex-col items-center justify-end h-10% mt-24 pt-12 wit-auto bg-gradient-to-r from-cyan-500 to-blue-500">
                <div className="flex justify-center items-center">
                    <div className="mr-2">
                        <Image src={logo} alt="Logo" width={400} height={400} />
                    </div>
                </div>
                <div className='flex items left mb-10'>
                    <Link href="https://github.com/hamreliusfilip/tddd27_2024" target="_blank">
                        <div className="flex items-center ml-5 mt-1">
                            <div className="size-5/6 transition-all duration-300 hover:scale-110">
                                <Image src={github} alt="Github" />
                            </div>
                        </div>
                    </Link>
                    <Link href="https://gitlab.liu.se/advanced_web/tddd27_2024" target="_blank">
                        <div className="flex items-center ml-5 mt-1">
                            <div className="size-5/6 transition-all duration-300 hover:scale-110">
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

            <div className='m-5 flex items-center justify-end'>
                <p className='text-black font-semibold mr-5'>Är du en administratör?</p>
                <LoginLink>
                    <Button variant="outline" className="bg-black text-white">
                        Logga in
                    </Button>
                </LoginLink>

                <RegisterLink>
                    <Button variant="outline" className="bg-black text-white ml-5">
                        Begär att bli administratör
                    </Button>
                </RegisterLink>
            </div>

        </div>
    );
}
