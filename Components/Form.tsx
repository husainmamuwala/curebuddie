// import React, { FormEvent, useState } from 'react';


// const Form = () => {
//     const [first, setFirst] = useState('');
//     const [last, setLast] = useState('');
//     const [email, setEmail] = useState('');
//     const [showModal, setShowModal] = useState(false);

//     const handlesubmit = async (e: FormEvent<HTMLFormElement>) => {
//         e.preventDefault();
//         //for api
//         console.log(first,last,email)
//         const rawResponse = await fetch('/api/submit', {
//             method: 'POST',
//             headers: {
//                 'Content-Type': 'application/json',
//             },
//             body: JSON.stringify({first,last,email}),
//         });
//         if (rawResponse.ok) {
//             console.log('Form submission successful');
//           } else {
//             console.error('Form submission failed');
//           }
//         let content = await rawResponse.json();
//         // print to screen
//             content = console.log(content)
//         // Reset the form fields
//         setFirst('')
//         setLast('')
//         setEmail('')
//     }

//     return (
//         <>
//             <button onClick={() => setShowModal(true)}><div className='hover:scale-105'>
//                 <span className='border-[2.5px] border-[#00ADFF] px-5 py-2 rounded-2xl bg-white
//                  cursor-pointer'>Join Waitlist</span>

//             </div></button>
//             {showModal &&
//                 <div className='fixed lg:w-[50rem] top-0 mx-auto my-auto z-10 p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full'>
//                     <div className=' bg-white top-0 z-10 border-[2.5px] border-[#00ADFF] rounded-xl pb-8 pt-4 max-w-max px-10 relative w-full max-h-full'>

//                         <div className='flex flex-row justify-between'>
//                             <span></span>
//                             <button onClick={() => setShowModal(false)}>
//                                 <svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
//                             </button>
//                         </div>
//                         <div className='text-center py-2 flex flex-col md:px-24'>
//                             <span className='text-2xl text-[#00ADFF] font-bold pb-2'>Join Waitlist</span>
//                             <span className='opacity-70'>Join our mailing list to be the first to know when we launch and to receive exclusive updates and offers</span>
//                         </div>
//                         <form
//                             className='md:px-24 py-2'
//                             onSubmit={handlesubmit}>
//                             <label className='font-bold text-lg'>Name</label>
//                             <div className='flex flex-row'>
//                                 <div className='py-2 pr-5 w-1/2'>
//                                     <input placeholder='First'
//                                         className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
//                                         type='text'
//                                         name='first'
//                                         onChange={(e) => setFirst(e.target.value)} value={first} />
//                                 </div>
//                                 <div className='py-2 w-1/2'>
//                                     <input placeholder='Last'
//                                         className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
//                                         type='text'
//                                         name='last'
//                                         onChange={(e) => setLast(e.target.value)} value={last} />
//                                 </div>
//                             </div>
//                             <label className='font-bold text-lg'>Email</label>
//                             <div className='py-2'>
//                                 <input placeholder='Your email'
//                                     className='p-2 border-3 w-full border-[2.5px] border-[#00ADFF] rounded-lg'
//                                     type='email'
//                                     name='email'
//                                     required
//                                     onChange={(e) => setEmail(e.target.value)} value={email} />
//                             </div>
//                             <button className='hover:scale-105' type='submit'>
//                                 <div className='py-4 cursor-pointer'>
//                                     <span className='bg-[#00ADFF] text-white p-2 px-16 rounded-xl hover:scale-105'>Join</span>
//                                 </div>
//                             </button>
//                         </form>
//                     </div>
//                 </div>
//             }
//         </>
//     )
// }

// export default Form