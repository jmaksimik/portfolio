import React from 'react';
import { HashLink } from 'react-router-hash-link';

export default function Contact() {
    return (
        <div className='container max-w-full bg-slate-200 drop-shadow-sm py-10 text-center' id='Contact'>
            <p className='text-3xl font-thin'>Get in Touch</p>
            <div className='flex flex-row justify-center'>
                <p className='text-2xl w-8/12 font-thin mt-10'>
                    I'm currently open to work as a full-time full stack, back-end, or front-end engineer. I can also help make your website dreams a reality! Feel free
                    to reach out to me at <a href='mailto:jmaks@me.com' className='text-blue-600'>jmaks@me.com</a> or give me a call at (863)397-1122.
                </p>
            </div>
            <div className='flex flex-row justify-center'>
                <HashLink smooth to={'/portfolio#Top'}>
                    <button className='bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow mt-5'>Go to Top</button>
                </HashLink>
            </div>

        </div>
    )
}