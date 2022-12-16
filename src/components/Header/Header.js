import { faGlobe, faUniversalAccess } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';

const Header = () => {
    return (
        <div className='grid md:grid-cols-2 bg-green-300 p-3'>
            <div className='text-center'>
                <Link className='text-3xl font-bold font-mono text-gray-700' to={'/'}><FontAwesomeIcon icon={faGlobe} ></FontAwesomeIcon> Know The Nation</Link>
            </div>
            <div className='flex text-xl md:col-start-2'>
                <div className="basis-1/3 text-center font-semibold"><CustomLink to={'/'}>Home</CustomLink></div>
                <div className="basis-1/3 text-center font-semibold"><CustomLink to={'/about'}>About Us</CustomLink></div>
                <div className="basis-1/3 text-center font-semibold"><CustomLink to={'/contact'}>Contact Us</CustomLink></div>
                
            </div>
            
        </div>
    );
};

export default Header;