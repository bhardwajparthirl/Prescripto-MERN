import React from 'react';
import {assets} from '../assets/assets';
const About = () => {
  return (
    <div>
     <div className="max-w-5xl mx-auto px-4">

  <div className='text-center text-2xl pt-10 text-gray-500'>
    <p>ABOUT <span className='text-gray-700 font-medium'>US</span></p>
  </div>

  <div className='my-10 flex flex-col md:flex-row items-center gap-10'>
    
    <img 
      className='w-full md:w-[320px] rounded-lg' 
      src={assets.about_image} 
      alt=""
    />

    <div className='flex flex-col justify-center gap-5 md:w-1/2 text-sm text-gray-600'>
      <p>Welcome To Prescripto, Your Trusted Partner In Managing Your Healthcare Needs Conveniently And Efficiently...</p>

      <p>Prescripto Is Committed To Excellence In Healthcare Technology...</p>

      <b className='text-gray-800'>Our Vision</b>

      <p>Our Vision At Prescripto Is To Create A Seamless Healthcare Experience...</p>
    </div>

  </div>

</div>
    <div className='max-w-5xl mx-auto px-4'>

  <div className='text-xl my-6'>
    <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span></p>
  </div>

  <div className='flex flex-col md:flex-row gap-6 mb-20'>
    
    <div className='border rounded-lg px-8 py-8 flex flex-col gap-4 text-sm hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Efficiency:</b>
      <p>Streamlined appointment scheduling that fits into your busy lifestyle.</p>
    </div>

    <div className='border rounded-lg px-8 py-8 flex flex-col gap-4 text-sm hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Convenience:</b>
      <p>Access healthcare services from the comfort of your home or office.</p>
    </div>

    <div className='border rounded-lg px-8 py-8 flex flex-col gap-4 text-sm hover:bg-[#5F6FFF] hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
      <b>Personalization:</b>
      <p>Customized care plans tailored to your specific health needs.</p>
    </div>

  </div>

</div>

    </div>
  );
};

export default About;