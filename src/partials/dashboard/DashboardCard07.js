import React from 'react';
import { HiOutlineSearch } from 'react-icons/hi'

function DashboardCard07() {

    const customers = [
        {
            id: '0',
            image: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
            name: 'Abstract 3D',
            stock: '32 in Stock',
            total_sales: '20',
            price: '$2,890.66',
            details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: '1',
            image: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
            name: 'Abstract 3D',
            stock: '32 in Stock',
            total_sales: '20',
            price: '$2,890.66',
            details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: '2',
            image: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
            name: 'Abstract 3D',
            stock: '32 in Stock',
            total_sales: '20',
            price: '$2,890.66',
            details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: '3',
            image: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
            name: 'Abstract 3D',
            stock: '32 in Stock',
            total_sales: '20',
            price: '$2,890.66',
            details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
        {
            id: '4',
            image: 'https://cdn.dribbble.com/users/2207016/screenshots/15080083/media/c974cab9e76bb4cd04ae02d31ad37ec9.jpg?resize=400x0',
            name: 'Abstract 3D',
            stock: '32 in Stock',
            total_sales: '20',
            price: '$2,890.66',
            details: "lorem ipsum dolor sit amet, consectetur adipiscing elit.",
        },
    ];

    return (
        <div className="col-span-full xl:col-span-12 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4">
                <div className='flex justify-between pt-2'>
                    <h2 className="font-semibold text-slate-800 dark:text-slate-100">Product Sell</h2>
                    <div className='flex gap-4'>
                        <div className='relative'>
                            <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                            <input type='search' placeholder=' Search...' className='text-sm focus:outline-none active:outline-none h-9 w-[10rem] border border-gray-300 rounded-lg pl-11 pr-4 ' />
                        </div>
                        <select className='text-sm focus:outline-none active:outline-none h-9 w-[8rem] border border-gray-300 rounded-lg pl-2 '>
                            <option>Last 30 days</option>
                            <option>Last 20 days</option>
                            <option>Last 10 days</option>
                            <option>Last 05 days</option>
                        </select>
                    </div>
                </div>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-slate-400 dark:text-slate-500 bg-slate-50 dark:bg-slate-700 dark:bg-opacity-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Product Name</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Stock</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Price</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-center">Toatl Sales</div>
                                </th>
                            </tr>
                        </thead>
                        {/* Table body */}
                        <tbody className="text-sm divide-y divide-slate-100 dark:divide-slate-700">
                            {
                                customers.map(customer => {
                                    return (
                                        <tr key={customer.id}>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="flex items-center">
                                                    <div className="w-20 h-10 shrink-0 mr-2 sm:mr-3">
                                                        <img className="rounded-lg " src={customer.image} width="60" height="40" alt={customer.name} />
                                                    </div>
                                                    <div className='flex flex-col'>
                                                        <div className='font-bold'>{customer.name}</div>
                                                        <div>{customer.details}</div>
                                                    </div>
                                                </div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left">{customer.stock}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-left font-medium text-green-500">{customer.price}</div>
                                            </td>
                                            <td className="p-2 whitespace-nowrap">
                                                <div className="text-lg text-center">{customer.total_sales}</div>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
}

export default DashboardCard07;
