import Link from 'next/link';
import React, { FormEvent, useState } from 'react';

const Footer = () => {
    const [first, setFirst] = useState('');
    const [last, setLast] = useState('');
    const [email, setEmail] = useState('');
    const [showModal, setShowModal] = useState(false);
    const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const form = {
            first,
            last,
            email
        }

        //for api
        console.log(form)
        const rawResponse = await fetch('/api/submit', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form)
        });
        const content = await rawResponse.json();

        // print to screen

        // Reset the form fields
        setFirst('')
        setLast('')
        setEmail('')
    }


    return (
        <div className='bg-[#D8F8FF] flex flex-col mt-8 py-5 md:px-24 px-10'>
            <div className='md:px-24'>
                <div className='text-center pb-5'>
                    <span className='md:text-3xl text-xl font-semibold text-[#00ADFF]'>Join the Cure<span className='text-[#43F0D9]'>Buddie</span> revolution and be a part of the future of Healthcare</span>
                </div>
                <div className='text-center py-5'>
                <Link href='https://forms.gle/9Z28R7HqSz9LvMDx8'>
                    <div className='hover:scale-105 mx-auto'>
                        <span className='border-[2.5px] border-[#00ADFF] px-10 py-2 rounded-2xl bg-white
                                        cursor-pointer text-lg'>Join Waitlist</span>
                    </div>
                </Link>
                </div>
                {/* <form
                    className='lg:mx-24 mx-0 py-2'
                    onSubmit={handlesubmit}>
                    <label className='font-bold text-lg'>Name</label>
                    <div className='flex flex-row'>
                        <div className='py-2 pr-5 w-1/2'>
                            <input placeholder='First'
                                className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
                                type='text'
                                name='first'
                                onChange={(e) => setFirst(e.target.value)} value={first} />
                        </div>
                        <div className='py-2 w-1/2'>
                            <input placeholder='Last'
                                className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
                                type='text'
                                name='last'
                                onChange={(e) => setLast(e.target.value)} value={last} />
                        </div>
                    </div>
                    <label className='font-bold text-lg'>Email</label>
                    <div className='py-2'>
                        <input placeholder='Your email'
                            className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
                            type='email'
                            name='email'
                            required
                            onChange={(e) => setEmail(e.target.value)} value={email} />
                    </div>
                    <button className='hover:scale-105' type='submit'>
                        <div className='py-4 cursor-pointer'>
                            <span className='bg-[#00ADFF] text-white p-2 px-16 rounded-xl hover:scale-105'>Join</span>
                        </div>
                    </button>
                </form> */}
                <div className='py-5 flex flex-col text-center'>
                    <span className='mx-auto'>Thank you for your interest in CureBuddie</span>
                    <span className='mx-auto mt-2'>We cant wait to bring our personalized and compassionate healthcare platform to you soon !</span>
                </div>

            </div>
            <div className='flex flex-row items-center mx-auto mt-5'>
                <img
                    src='/img/logo.png'
                    className='w-14' />
                <span className='text-[#00ADFF] font-bold text-3xl pl-4'>Cure<span className='text-[#43F0D9]'>Buddie</span></span>
            </div>

        </div>
    )
}

export default Footer