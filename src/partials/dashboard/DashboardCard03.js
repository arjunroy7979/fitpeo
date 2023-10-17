import React from 'react';
import { HiDatabase } from 'react-icons/hi';

function DashboardCard03() {

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-blue-200'>
                    <HiDatabase className='text-2xl text-blue-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Balance</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$2.4k</strong>
                        <span className='text-xs text-red-500 pl-2'>&darr;2%</span>
                        <span className='text-xs text-gray-500 text-sm pl-2'>month</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return <div className='bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}


export default DashboardCard03;
