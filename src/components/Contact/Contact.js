import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Contact = () => {
    return (
        <div className='h-screen'>
           <p className=' text-4xl text-green-700 text-center p-2 my-3 font-semibold'>Get In Touch</p>
           <div className='flex items-center justify-center my-10'>
            <Link to={'bangladesh'} className=' px-3 py-1 bg-green-300 text-black border border-black rounded-lg mx-2 text-xl'>Bangladesh</Link>
            <Link to={'usa'} className=' px-3 py-1 bg-green-700 text-white border border-black rounded-lg mx-2 text-xl'>USA</Link>
            </div> 
            <Outlet></Outlet>
        </div>
    );
};

export default Contact;