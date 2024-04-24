import React from 'react';
import Image from 'next/image';
import img99 from '@/Assets/Karta/1.svg';

export default function LandingFiller2() {
    return (
        <div className='mt-72 mb-72 bg-white h-96 flex justify-center items-center '>
            <div className='mt-20'>
                <h1 className='text-center font-bold text-4xl text-black mb-5 '>
                    All <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>data</span> på ett och <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-extrabold'>samma ställe</span>
                </h1>
                <h1 className='text-center  font-normal text-l text-black mb-10 '>
                    Behöver man verkligen söka igenom flera olika källor för att förstå vår statsapparat? <br></br> Nej, all information finns samlad här.
                </h1>
                <div className='flex justify-center items-center'>
                    <Image src={img99} alt="Image not found - Error" width={400} height={400} />
                </div>
            </div>
        </div>
    );
}

