import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bild1 from '../Assets/Images/1.svg';
import bild2 from '../Assets/Images/2.svg';
import bild3 from '../Assets/Images/3.svg';
import bild4 from '../Assets/Images/4.svg';

export default function LandingFiller() {
    return (
        <div className='mt-40 mb-40'>
            <div className='mb-8'>
                <h1 className='text-center font-bold text-4xl'>
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Interaktiva verktyg </span>
                </h1>
                <p className='text-center font-normal text-l mt-5'> Utforska Svenska statens byrokrati med interaktiva och intuitiva verktyg. <br></br> Flödesscheman och extensiva listor med filter. </p>
            </div>
            <div>
                <hr className="w-48 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>

            <div className='text-center'>
                <div className="flex flex-wrap justify-center items-center">
                    <Link href="/myndighet">
                        <div className='m-5'>
                            <Image src={bild1} alt="Svenska Myndigheter" className="w-96 mx-auto" />
                        </div>
                    </Link>
                    <Link href="/departement">
                        <div className='m-5'>
                            <Image src={bild2} alt="Svenska Myndigheter" className="w-96 mx-auto" />
                        </div>
                    </Link>
                    <Link href="/faktaover/statistik">
                        <div className='m-5'>
                            <Image src={bild3} alt="Svenska Myndigheter" className="w-96 mx-auto" />
                        </div>
                    </Link>
                    <Link href="/faktaover/statsbudget">
                        <div className='m-5'>
                            <Image src={bild4} alt="Svenska Myndigheter" className="w-96 mx-auto" />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
