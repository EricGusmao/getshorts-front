import React from 'react';
import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="w-full bg-[#111111] text-white py-4 text-center fixed bottom-0 ">
            <p>&copy; {new Date().getFullYear()} GetShorts. All rights reserved.</p>
            <div className='flex gap-5 justify-center mt-2'>
                <span className='inline'><Link href="/terms">Terms of Service</Link></span>
                <span className='inline'><Link href="/">Contact</Link></span>    
            </div> 

        </footer>
    );
};

export default Footer;
