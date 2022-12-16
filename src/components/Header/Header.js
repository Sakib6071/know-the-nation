import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='grid md:grid-cols-2 bg-green-300 p-3'>
            <div className='text-center'>
                <Link className='text-3xl font-bold font-mono text-gray-700' to={'/'}>Know The Nation</Link>
            </div>
            <div className='flex text-xl md:col-start-2'>
                <div className="basis-1/4"><CustomLink to={'/'}>Home</CustomLink></div>
                <div className="basis-1/4"><CustomLink to={'/about'}>About Us</CustomLink></div>
                <div className="basis-1/4"><CustomLink to={'/contact'}>Contact Us</CustomLink></div>
                
            </div>
            
        </div>
    );
};

export default Header;