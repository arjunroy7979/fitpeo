import React from 'react';
import { HiCurrencyDollar} from 'react-icons/hi';

function DashboardCard01() {

    return (
        <div className="flex flex-col  md:flex-row gap-4 col-span-full sm:col-span-6 xl:col-span-3 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
            <BoxWrapper>
                <div className='rounded-full h-12 w-12 flex items-center justify-center bg-green-200'>
                    <HiCurrencyDollar className='text-2xl text-green-500' />
                </div>
                <div className='pl-4'>
                    <span className='text-sm text-gray-500 font-light'>Earning</span>
                    <div className='flex items-center'>
                        <strong className='text-xl text-gray-700 font-semibold'>$198k</strong>
                        <span className='text-xs text-green-500 pl-2'>&uarr;37.8%</span>
                        <span className='text-xs text-gray-500 text-sm pl-1'>month</span>
                    </div>
                </div>
            </BoxWrapper>
        </div>
    );
}

function BoxWrapper({ children }) {
    return <div className='bg-white rounded-lg p-4 flex-1 border border-gray-200 flex items-center'>{children}</div>
}


export default DashboardCard01;
