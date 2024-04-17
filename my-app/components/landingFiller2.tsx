import React from 'react';
import Marquee from 'react-fast-marquee'
import Image from 'next/image';

import img1 from '../Assets/SampleImg/image138.png';
import img2 from '../Assets/SampleImg/image153.png';
import img3 from '../Assets/SampleImg/image164.png';
import img4 from '../Assets/SampleImg/image181.png';
import img5 from '../Assets/SampleImg/image188.png';
import img6 from '../Assets/SampleImg/image189.png';
import img7 from '../Assets/SampleImg/image209.png';
import img8 from '../Assets/SampleImg/image211.png';
import img9 from '../Assets/SampleImg/image215.png';
import img10 from '../Assets/SampleImg/image217.png';
import img11 from '../Assets/SampleImg/image222.png';
import img12 from '../Assets/SampleImg/image228.png';
import img13 from '../Assets/SampleImg/image256.png';
import img14 from '../Assets/SampleImg/image257.png';
import img15 from '../Assets/SampleImg/image258.png';
import img16 from '../Assets/SampleImg/image274.png';
import img17 from '../Assets/SampleImg/image280.png';
import img18 from '../Assets/SampleImg/image288.png';


export default function LandingFiller2() {
    return (
        <div className='mt-72 mb-72 bg-white h-96 flex justify-center items-center '>
            <div className='mt-20'>
                <h1 className='text-center font-bold text-4xl text-black mb-5'>
                    All <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text'>data</span> på ett och <span className='bg-gradient-to-r from-cyan-500 to-blue-500 inline-block text-transparent bg-clip-text font-extrabold'>samma ställe</span>
                </h1>
                <h1 className='text-center  font-normal text-l text-black mb-10 '>
                Behöver man verkligen söka igenom flera olika källor för att förstå vår statsapparat? <br></br> Nej, all information finns samlad här.
                </h1>
                <div className=' mb-10 '>
                    <Marquee>
                        <Image src={img1} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img2} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img3} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img4} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img5} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img6} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img7} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img8} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img9} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img1} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img2} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img3} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img4} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img5} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img10} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img11} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img12} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img13} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img14} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img15} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img16} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img17} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                        <Image src={img18} alt="Image not found - Error" width={75} height={75} className='ml-10 ' />
                    </Marquee>
                </div>
                <div>
                    <hr className="w-96 h-1 mx-auto my-4 bg-gradient-to-r from-cyan-500 to-blue-500 border-0 rounded md:my-10 dark:bg-gray-700"></hr>
                </div>

            </div>
        </div>
    );
}

