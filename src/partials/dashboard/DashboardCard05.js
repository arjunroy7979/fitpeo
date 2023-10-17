import React from 'react';
import Chart from 'react-apexcharts'


function DashboardCard05() {

    return (
        <div className="flex flex-col col-span-full sm:col-span-6 xl:col-span-4 bg-white dark:bg-slate-800 shadow-lg rounded-lg border border-slate-200 dark:border-slate-700">
            <header className="px-5 py-4 ">
                <h2 className="font-semibold text-slate-800 dark:text-slate-100">Customers</h2>
                <span className='text-xs text-gray-500 text-sm '>Customers that buy products</span>
            </header>
            <div className="mt-1 w-full flex-1 text-xs ">
                <Chart
                    type="donut"
                    width={320}
                    height={300}
                    series={[10, 40, 20]}

                    options={{
                        labels: ['USA', 'IND', 'PAK'],
                        plotOptions: {
                            pie: {
                                donut: {
                                    labels: {
                                        show: true,
                                        total: {
                                            show: true,
                                            label: "Total New Customers",
                                            fontSize: 9,
                                            color: 'red'
                                        }
                                    }
                                }
                            }
                        },
                        dataLabels: {
                            enabled: false,
                        }
                    }}

                />
            </div>
        </div>
    );
}

export default DashboardCard05;
