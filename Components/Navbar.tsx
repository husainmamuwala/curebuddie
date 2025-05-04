import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const Navbar = () => {
    const [showModal, setShowModal] = useState(false);

    return (
        <div className='bg-[#DEF7FF] md:px-28 md:py-4 py-8 px-10'>
            <div className='flex flex-row justify-between items-center'>
                <div className=''>
                    <img
                        src='/img/logo.png'
                        className='w-20'
                        alt='logo' />
                </div>
            <Link href='https://forms.gle/9Z28R7HqSz9LvMDx8'>
                <div className='hover:scale-105'>
                <span className='border-[2.5px] border-[#00ADFF] px-5 py-2 rounded-2xl bg-white
               cursor-pointer'>Join Waitlist</span>
               </div>
            </Link>
            </div>
            <div className='mt-10'>
                <div className='flex flex-col'>
                    <span className='font-semibold text-4xl mx-auto'>Get Ready for a Better Healthcare Experience with <span className='text-[#00ADFF] font-bold'>Cure<span className='text-[#43F0D9]'>Buddie</span></span></span>
                    <span className='text-md opacity-70 mx-auto md:py-2 py-4'>{`We're creating a healthcare platform thatss personalized, compassionate and focused on human connection and emotional support.`}</span>
                    <img
                        src='/img/curebuddie_hero.png'
                        className='w-[30rem] mx-auto py-8' />
                </div>
            </div>
        </div>
    )
}

export default Navbar