import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Transition } from '@headlessui/react'
import { HashLink } from 'react-router-hash-link';

export default function NavBar({ isMainBanner }) {
    const [isOpen, setIsOpen] = useState(false);

    if (isMainBanner) {
        return (
            <nav className='flex flex-row text-white mr-6 bg-transparent absolute top-5 left-8' id='Top'>
                <div className='block flex-grow lg:flex lg:items-start lg:w-auto'>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            to='/portfolio'>
                            Home
                        </Link>
                    </div>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            smooth to={'/portfolio#AboutMe'}>
                            About Me
                        </HashLink>
                    </div>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            smooth to={'/portfolio#Skills'}>
                            Skills
                        </HashLink>
                    </div>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            smooth to={'/portfolio#Projects'}>
                            Projects
                        </HashLink>
                    </div>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            to='/portfolio/resume'>
                            Resume
                        </Link>
                    </div>
                    <div className='text-lg lg:flex-grow hidden lg:block'>
                        <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                            smooth to={'/portfolio/#Contact'}>
                            Get in Touch
                        </HashLink>
                    </div>

                    {/* Mobile Menu */}

                    <div className='-mr-2 flex lg:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black focus:outline-none  focus:ring-offset-2 focus:ring-offset-white focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='https://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h6 w-6'
                                    xmlns='https://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-100 transform'
                    enterFrom='opacity-0 scale-95'
                    enterTo='opacity-100 scale-100'
                    leave='transition ease-in duration-75 transform'
                    leaveFrom='opacity-100 scale-100'
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref) => (
                        <div className='md:hidden' id='mobile-menu'>
                            <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3'>
                                <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    to='/portfolio'>
                                    Home
                                </Link>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#AboutMe'}>
                                    About Me
                                </HashLink>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#Skills'}>
                                    Skills
                                </HashLink>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#Projects'}>
                                    Projects
                                </HashLink>
                                <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    to='/portfolio/resume'>
                                    Resume
                                </Link>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio/#Contact'}>
                                    Get in Touch
                                </HashLink>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
        )
    } return (
        <nav className='navbar-special'>
            <div className='px-4 sm:px-6 lg:px-8 text-white'>
                <div className='flex items-center justify-between h-16'>
                    <div className='hidden lg:block'>
                        <div className='flex items-start'>
                            <div className='text-lg lg:flex-grow'>
                                <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    to='/portfolio'>
                                    Home
                                </Link>
                            </div>
                            <div className='text-lg lg:flex-grow'>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#AboutMe'}>
                                    About Me
                                </HashLink>
                            </div>
                            <div className='text-lg lg:flex-grow'>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#Skills'}>
                                    Skills
                                </HashLink>
                            </div>
                            <div className='text-lg lg:flex-grow'>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio#Projects'}>
                                    Projects
                                </HashLink>
                            </div>
                            <div className='text-lg lg:flex-grow'>
                                <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    to='/portfolio/resume'>
                                    Resume
                                </Link>
                                <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                    smooth to={'/portfolio/#Contact'}>
                                    Get in Touch
                                </HashLink>

                            </div>
                        </div>
                    </div>
                    {/* Mobile Menu */}

                    <div className='-mr-2 flex lg:hidden'>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            type='button'
                            className='inline-flex items-center justify-center p-2 rounded-md text-white hover:text-black focus:outline-none  focus:ring-offset-2 focus:ring-offset-white focus:ring-white'
                            aria-controls='mobile-menu'
                            aria-expanded='false'
                        >
                            <span className='sr-only'>Open Main Menu</span>
                            {!isOpen ? (
                                <svg
                                    className='block h-6 w-6'
                                    xmlns='https://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M4 6h16M4 12h16M4 18h16'
                                    />
                                </svg>
                            ) : (
                                <svg
                                    className='block h6 w-6'
                                    xmlns='https://www.w3.org/2000/svg'
                                    fill='none'
                                    viewBox='0 0 24 24'
                                    stroke='currentColor'
                                    aria-hidden='true'
                                >
                                    <path
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        d='M6 18L18 6M6 6l12 12'
                                    />
                                </svg>
                            )}
                        </button>
                    </div>
                </div>
            </div>
            <Transition
                show={isOpen}
                enter='transition ease-out duration-100 transform'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='transition ease-in duration-75 transform'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
            >
                {(ref) => (
                    <div className='lg:hidden' id='mobile-menu'>
                        <div ref={ref} className='px-2 pt-2 pb-3 space-y-1 sm:px-3 text-white'>
                            <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                to='/portfolio'>
                                Home
                            </Link>
                            <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                smooth to={'/portfolio#AboutMe'}>
                                About Me
                            </HashLink>
                            <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                smooth to={'/portfolio#Skills'}>
                                Skills
                            </HashLink>
                            <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                smooth to={'/portfolio#Projects'}>
                                Projects
                            </HashLink>
                            <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                to='/portfolio/resume'>
                                Resume
                            </Link>
                            <HashLink className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                                smooth to={'/portfolio/#Contact'}>
                                Get in Touch
                            </HashLink>
                        </div>
                    </div>
                )}
            </Transition>
        </nav>
    )
}