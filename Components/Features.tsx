import React from 'react'

const Features = () => {
    return (
        <div className='flex flex-col md:px-24 px-10'>
            <div className='text-center py-8'>
                <span className='text-[#00ADFF] tracking-wide md:text-3xl text-2xl font-bold'>Access to Quality Healthcare Should Be Simple</span>
            </div>
            <div>
                <div className='flex md:flex-row flex-col items-center text-center md:text-left border-[2.5px] border-[#00ADFF] rounded-2xl '>
                    <div className='mx-10 md:w-[30%]'>
                        <img
                            src='/img/Doctors-bro.png'
                            className='md:w-72 w-96' />
                    </div>
                    <div className='md:mx-10 mx-5 py-4 md:py-0'>
                        <span className='md:text-[1.6rem] text-xl font-light'>
                            Find nearby & affordable healthcare services like doctors, labs and ambulances with just a few clicks !
                        </span>
                    </div>
                </div>
            </div>


            <div className='flex flex-row mt-8'>
                <div className='border-[2.5px] border-[#00ADFF] rounded-2xl w-1/2 md:mr-20 mr-4'>
                    <div className='text-center mt-5 mx-2'>
                        <span className='md:text-[1.6rem] text-xl font-light md:mx-auto'>Manage your medications as well as your other health habits</span>
                    </div>
                    <div>
                        <img
                            src='/img/Medicine-bro.png'
                            className='w-64 mx-auto mt-5' />
                    </div>
                </div>
                <div className='border-[2.5px] border-[#00ADFF] rounded-2xl w-1/2'>
                    <div className='text-center mt-5 mx-2'>
                        <span className='md:text-[1.6rem] text-xl font-light mx-auto'>Keep track of your health records and family health accounts</span>
                    </div>
                    <div>
                        <img
                            src='/img/family.png'
                            className='w-72 mx-auto mt-5 pb-4 md:pb-0' />
                    </div>
                </div>
            </div>


            <div className='mt-8'>
            <div className='flex md:flex-row flex-col items-center text-center border-[2.5px] border-[#00ADFF] rounded-2xl '>
                    <div className='md:mx-10 mx-5 md:w-[30%]'>
                        <img
                            src='/img/ethics.png'
                            className='md:w-72 w-96' />
                    </div>
                    <div className='md:mx-10 mx-5 md:py-0 pb-4'>
                        <span className='md:text-[1.6rem] text-xl font-light mx-auto'>
                            Compare healthcare providers charges to make informed decisions about your care
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Features