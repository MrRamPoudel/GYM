import React from 'react';

const Membership: React.FC = () => {
    return (
        <div className='min-h-screen flex justify-center items-center'>
            <div>
                <div className='text-center text-5xl font-semibold tracking-wide'>
                    <span className=' text-blue-700'>Flexible</span>
                    <span>Plans</span>
                </div>
                <div className='text-xl text-gray-500'>
                    <p className='pt-6 text-center w-full text-xl'>Choose a plan that is right for you</p>
                </div>
                <div className='pt-24 flex flex-row '>
                    <div className='relative w-80 p-8 pr-16 bg-red-300 text-center rounded-3xl '>
                        <p className='text-md text-black font-semibold'>Basic</p>
                        <p className='pt-2'>
                            <span className="text-black align-top">$ </span>
                            <span className="text-3xl font-semibold">10</span>
                            <span className="text-2xl font-semibold align-top">99</span>
                        </p>
                        <div className="pt-2">
                            <p className='text-white font-semibold text-sm'>Cardio, Weights, & Machines</p>
                            <p className='text-white font-semibold text-sm'>Locker Room with Showers</p>
                            <p className='text-white font-semibold text-sm'>Access to Home Club</p>
                            <p className='text-white font-semibold text-sm'>Free Wi-Fi</p>
                        </div>
                        <div className='rounded-3xl relative pt-4'>
                            <button className="bottom-0 w-full bg-blue-700 text-xl text-white px-4 rounded-3xl font-medium py-2">JOIN</button>
                        </div>
                    </div>
                    <div className='w-96 p-8 pr-16 bg-gray-900 text-white text-center rounded-3xl scale-125 '>
                        <div className='absolute top-4 right-4 rounded-full px-4 bg-blue-700'>Popular</div>
                        <p className='text-white font-semibold '>Pro</p>
                        <p className='pt-2'>
                            <span className="text-gray-400 align-top">$ </span>
                            <span className="text-3xl font-semibold">24</span>
                            <span className="text-2xl font-semibold align-top">99</span>
                        </p>
                        <div className="pt-2">
                            <p className='text-white font-semibold text-sm'>Everything in Basic plan</p>
                            <p className='text-white font-semibold text-sm'>Access to all 325 clubs</p>
                            <p className='text-white font-semibold text-sm'>Hydro massage</p>
                            <span className='text-white font-semibold text-sm'>25% Discounts on Select</span>
                            <span className ='text-white font-semibold text-xsm'>*</span> 
                            <span className=" text-white font-semibold text-sm"> merchandise and supplements</span>
                        </div>
                        <div className='rounded-3xl relative pt-4'>
                            <button className="bottom-0 w-4/5 bg-blue-700 text-xl text-white px-4 rounded-3xl font-medium py-1">JOIN</button>
                        </div>
                    </div>
                    <div className='w-80 p-8 pr-8 bg-blue-300 text-center rounded-3xl '>
                        <p className='text-md text-black font-semibold'>Elite</p>
                        <p className='pt-2'>
                            <span className="text-black align-top">$ </span>
                            <span className="text-3xl font-semibold">34</span>
                            <span className="text-2xl font-semibold align-top">99</span>
                        </p>
                        <div className="pt-2 text-center pl-8">
                            <p className='text-white font-semibold text-sm'>Everything in Pro plan</p>
                            <p className='text-white font-semibold text-sm'>Access to all 350 clubs</p>
                            <p className='text-white font-semibold text-sm'>Access to Premium gym equipment</p>
                            <span className='text-white font-semibold text-sm'>50% Discounts on Select</span>
                            <span className ='text-white font-semibold text-xsm'>*</span> 
                            <span className=" text-white font-semibold text-sm"> merchandise and supplements</span>                            
                            <p className='text-white font-semibold text-sm'>Guest passes</p>
                        </div>
                        <div className='rounded-3xl relative pt-4 '>
                            <button className="bottom-0 w-4/5 bg-blue-700 text-xl text-white px-4 rounded-3xl font-medium py-2">JOIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        )
}
export default Membership;
