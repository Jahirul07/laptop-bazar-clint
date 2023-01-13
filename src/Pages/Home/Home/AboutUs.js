import React from 'react';

const AboutUs = () => {
    return (
        <div className='w-11/12 mx-auto my-28 lg:flex justify-center'>
            <div className=' w-5/6 lg:w-6/12'>
                <h1 className='text-5xl mb-3 font-semibold'>About Our Story</h1>
                <p>We are one of the leading laptop reselling companies in Bangladesh. We provide a wide range of refurbished laptops that include refurbished laptops, second hand/refurbished computers and original brand new laptops at incredible low prices.</p>
                <br />
                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi aliquip consequat.</p>
            </div>
            <div className='w-11/12 lg:w-6/12 ml-5 justify-center'>
                <img className=' h-80' src='https://www.freepnglogos.com/uploads/laptop-png/laptop-png-intertech-office-automations-distribution-inc-vancouver-11.png' alt="" />
            </div>
        </div>
    );
};

export default AboutUs;