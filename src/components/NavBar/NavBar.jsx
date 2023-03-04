import React from 'react';
import {Link} from 'react-router-dom';

export default function NavBar() {
    return (
        <nav className='flex flex-row justify-start justify-between flex-wrap mr-6 bg-transparent absolute top-5 left-5'>
            <div className='block lg:hidden bg-transparent'>
                <button className='flex items-center px-3 py-2 border rounded hover:text-black'>
                    Menu
                </button>
            </div>
            <div className='w-full block flex-grow lg:flex lg:items-start lg:w-auto'>
                <div className='text-lg lg:flex-grow'>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                          to='/portfolio'>
                            Home
                          </Link>
                </div>
                <div className='text-lg lg:flex-grow'>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                          to='/portfolio/resume'>
                            Resume
                    </Link>
                    <Link className='block mt-4 lg:inline-block lg:mt-0 hover:text-black mr-4'
                          to='/portfolio/contact'>
                            Get in Touch
                          </Link>
                </div>
            </div>

        </nav>
    )
}

{/* <nav class="flex items-center justify-between flex-wrap p-6">
  <div class="block lg:hidden">
    <button class="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
      <svg class="fill-current h-3 w-3" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><title>Menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/></svg>
    </button>
  </div>
  <div class="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
    <div class="text-sm lg:flex-grow">
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Docs
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white mr-4">
        Examples
      </a>
      <a href="#responsive-header" class="block mt-4 lg:inline-block lg:mt-0 text-teal-200 hover:text-white">
        Blog
      </a>
    </div>
    <div>
      <a href="#" class="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Download</a>
    </div>
  </div>
</nav> */}