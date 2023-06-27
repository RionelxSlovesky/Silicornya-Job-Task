import { AiOutlineFlag } from 'react-icons/ai';
import { BsAward } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa'
import { MdOutlineShowChart } from 'react-icons/md'

const DashboardCards = ({dashboardData}) => {
    console.log(dashboardData)
    return (
        <div className='flex gap-4 justify-center lg:justify-between flex-wrap'>
            <div className="card flex-grow py-8 px-4 shadow-lg rounded-lg">
                <div className='flex gap-3 mb-12 items-center'>
                    <div className='bg-indigo-500 flex items-center justify-center w-12 h-12 rounded-full text-white'>
                        <FaClipboardList></FaClipboardList>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>{dashboardData[0]?.total}</h1>
                        </div>
                        <p className='text-gray-500'>{dashboardData[0]?.title}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-indigo-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${dashboardData[0]?.progress}%] rounded`}>
                        {dashboardData[0]?.progress}%
                    </div>
                </div>
            </div>
            <div className="card flex-grow py-8 px-4 shadow-lg rounded-lg">
                <div className='flex gap-3 mb-12 items-center'>
                    <div className='bg-orange-500 flex items-center justify-center w-12 h-12 rounded-full text-white'>
                        <BsAward></BsAward>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>{dashboardData[1]?.total}</h1>
                        </div>
                        <p className='text-gray-500'>{dashboardData[1]?.title}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-orange-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${dashboardData[1]?.progress}%] rounded`}>
                        {dashboardData[1]?.progress}%
                    </div>
                </div>
            </div>
            <div className="card flex-grow py-8 px-4 shadow-lg rounded-lg">
                <div className='flex gap-3 mb-12 items-center'>
                    <div className='bg-yellow-500 flex items-center justify-center w-12 h-12 rounded-full text-white'>
                        <MdOutlineShowChart></MdOutlineShowChart>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>{dashboardData[2]?.total}</h1>
                        </div>
                        <p className='text-gray-500'>{dashboardData[2]?.title}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-yellow-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${dashboardData[2]?.progress}%] rounded`}>
                        {dashboardData[2]?.progress}%
                    </div>
                </div>
            </div>
            <div className="card flex-grow py-8 px-4 shadow-lg rounded-lg">
                <div className='flex gap-3 mb-12 items-center'>
                    <div className='bg-green-500 flex items-center justify-center w-12 h-12 rounded-full text-white'>
                        <AiOutlineFlag></AiOutlineFlag>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>{dashboardData[3]?.total}</h1>
                        </div>
                        <p className='text-gray-500'>{dashboardData[3]?.title}</p>
                    </div>
                </div>
                <p className='text-indigo-500'>View Courses -&gt;</p>
            </div>
        </div>
    );
};


export default DashboardCards;