import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

function Header({ sidebarOpen, setSidebarOpen }) {

    return (
        <header className="sticky top-0 bg-white dark:bg-[#182235] border-b border-slate-200 dark:border-slate-700 z-30">
            <div className="px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16 -mb-px">
                    {/* Header: Left side */}
                    <div className="flex">
                        {/* Hamburger button */}
                        <button
                            className="text-slate-500 hover:text-slate-600 lg:hidden"
                            aria-controls="sidebar"
                            aria-expanded={sidebarOpen}
                            onClick={(e) => {
                                e.stopPropagation();
                                setSidebarOpen(!sidebarOpen);
                            }}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                                <rect x="4" y="5" width="16" height="2" />
                                <rect x="4" y="11" width="16" height="2" />
                                <rect x="4" y="17" width="16" height="2" />
                            </svg>
                        </button>
                        <div>
                            <strong className='sm:col-span-1 xl:col-span-1 sm:text-sm'>Hello Arjun👋,</strong>
                        </div>
                    </div>

                    {/* Header: Right side */}
                    <div className="flex items-center space-x-3">
                        <div className='relative'>
                            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                            <input type='search' placeholder=' Search...' className='text-sm focus:outline-none active:outline-none sm:col-span-6 xl:col-span-3 border border-gray-300 rounded-lg pl-11 pr-4 ' />
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
