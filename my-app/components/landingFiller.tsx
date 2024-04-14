import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

import bild from '../Assets/bild.png';
import bild2 from '../Assets/bild2.png';

export default function LandingFiller() {
    return (
        <div className='mt-40 mb-40'>
            <div className='mb-8'>
                <h1 className='text-center font-bold text-4xl'>
                    <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>Interaktiva verktyg </span>
                </h1>
                <p className='text-center font-nornal text-l mt-5'> Utforska Svenska statens byrokrati med interaktiva och intuitiva verktyg. <br></br> Flödesscheman och extensiva listor med filter. </p>
            </div>
            <div>
                <hr className="w-48 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
            </div>

            <div className='text-center'>
                <div className="inline-block ml-5 mt-1">
                    <Link href="/departement">
                        <div>
                            <Image src={bild} alt="Svenska Myndigheter" width={450} height={450} />
                        </div>
                    </Link>
                </div>

                <div className="inline-block ml-5 mt-1">
                    <Link href="/departement">
                        <div>
                            <Image src={bild} alt="Svenska Myndigheter" width={450} height={450} />
                        </div>
                    </Link>
                </div>

                <div className="inline-block ml-5 mt-1">
                    <Link href="/myndigheter">
                        <div>
                            <Image src={bild2} alt="Svenska Myndigheter" width={450} height={450} />
                        </div>
                    </Link>
                </div>
            </div>
        </div>
    );
}
