import React from 'react';
import { Link } from 'react-router-dom';

const Pricing = () => {
    return (
        <div className='px-5 md:px-10 py-10'>
            <h1 className='text-3xl text-pink-500 uppercase underline py-10 text-center'>Select Your Plan</h1>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-5 '>
                {/* Card - 1 */}
                <div className='border-2 rounded-lg border-pink-500 shadow-lg p-5 space-y-3'>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold'>Starter</h2>
                        <h2 className='text-3xl text-pink-500 font-bold'>Free</h2>
                    </div>
                    <div>
                        <ul className='list-disc list-inside space-y-2 text-xl'>
                            <li>7 days</li>
                            <li>720p Resolution</li>
                            <li>Limited Availability</li>
                            <li>Desktop Only</li>
                            <li>Limited Support</li>
                        </ul>
                        <Link to='/register'><button className="btn w-full bg-pink-500 text-white hover:bg-gray-800 mt-5">Regiter</button></Link>
                    </div>
                </div>

                {/* Card - 2 */}
                <div className='border-2 rounded-lg border-pink-500 shadow-lg p-5 space-y-3'>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold'>Premium</h2>
                        <h2 className='text-3xl text-pink-500 font-bold'>$19.99</h2>
                    </div>
                    <div>
                        <ul className='list-disc list-inside space-y-2 text-xl'>
                            <li>1 Month</li>
                            <li>Full HD</li>
                            <li>Lifetime Availability</li>
                            <li>TV & Desktop</li>
                            <li>24/7 Support</li>
                        </ul>
                        <Link to='/register'><button className="btn w-full bg-pink-500 text-white hover:bg-gray-800 mt-5">Choose Plan</button></Link>
                    </div>
                </div>

                {/* Card - 3 */}
                <div className='border-2 rounded-lg border-pink-500 shadow-lg p-5 space-y-3'>
                    <div className='flex justify-between'>
                        <h2 className='text-3xl font-bold'>Cinematic</h2>
                        <h2 className='text-3xl text-pink-500 font-bold'>$39.99</h2>
                    </div>
                    <div>
                        <ul className='list-disc list-inside space-y-2 text-xl'>
                            <li>2 Months</li>
                            <li>Ultra HD</li>
                            <li>Lifetime Availability</li>
                            <li>Any Device</li>
                            <li>24/7 Support</li>
                        </ul>
                        <Link to='/register'><button className="btn w-full bg-pink-500 text-white hover:bg-gray-800 mt-5">Choose Plan</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;