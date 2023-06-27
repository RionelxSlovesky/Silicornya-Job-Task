import { AiOutlineFlag } from 'react-icons/ai';
import { BsAward } from 'react-icons/bs';
import { FaClipboardList } from 'react-icons/fa'
import { MdOutlineShowChart } from 'react-icons/md'

const DashboardCards = ({options}) => {
    return (
        <div className='flex gap-4 justify-center lg:justify-between flex-wrap'>
            <div className="card flex-grow py-8 px-4 shadow-lg rounded-lg">
                <div className='flex gap-3 mb-12 items-center'>
                    <div className='bg-indigo-500 flex items-center justify-center w-12 h-12 rounded-full text-white'>
                        <FaClipboardList></FaClipboardList>
                    </div>
                    <div>
                        <div>
                            <h1 className='text-2xl'>{options[0].number}</h1>
                        </div>
                        <p className='text-gray-500'>{options[0].text}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-indigo-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${options[0].progress}%] rounded`}>
                        {options[0].progress}%
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
                            <h1 className='text-2xl'>{options[1].number}</h1>
                        </div>
                        <p className='text-gray-500'>{options[1].text}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-orange-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${options[1].progress}%] rounded`}>
                        {options[1].progress}%
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
                            <h1 className='text-2xl'>{options[2].number}</h1>
                        </div>
                        <p className='text-gray-500'>{options[2].text}</p>
                    </div>
                </div>
                <div className="w-full bg-neutral-200 dark:bg-neutral-300 rounded">
                    <div
                        className={`bg-yellow-500 text-white p-1  text-center text-xs font-medium leading-none text-primary-100 w-[${options[2].progress}%] rounded`}>
                        {options[2].progress}%
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
                            <h1 className='text-2xl'>{options[3].number}</h1>
                        </div>
                        <p className='text-gray-500'>{options[3].text}</p>
                    </div>
                </div>
                <p className='text-indigo-500'>View Courses -&gt;</p>
            </div>
        </div>
    );
};


export default DashboardCards;