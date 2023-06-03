import React from 'react';

const Membership: React.FC = () => {
    return <div className='min-h-screen justify-center flex items-center'>
        <div className='w-80 bg-red-300 text-center '>
            <p className='text-md text-black'>Basic</p>
        </div>
        <div className='w-96 bg-green-300 text-center'>
        <p className='text-md text-black '>Pro</p>

        </div>
        <div className='w-80 bg-blue-300 text-center'>
        <p className='text-md text-black'>Elite</p>
        </div>
    </div>
}
export default Membership;