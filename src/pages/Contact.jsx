import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
      
      <div className='text-center text-2xl pt-10 text-gray-500'> 
        <p>CONTACT <span className='text-gray-700 font-semibold'>US</span></p>
      </div>

      <div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>

        <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt='' />

        <div className='flex flex-col justify-center items-start gap-6'>
          <p className='font-semibold text-lg text-gray-600'>OUR OFFICE</p>
          <p className='text-gray-500'>RIOS Medical Healthcare System <br />Mumbai, Maharashtra, India</p>
          <p className='text-gray-500'>Tel: +91 9885 787 627 <br/>Email: rios.health.care@gmail.com</p>
          <p className='font-semibold text-lg text-gray-600'>Connect at RIOS for Careers</p>
          <p className='text-gray-500'>Have questions about our Healthcare Platform, Doctor Appointments and Team Guider and Job openings, or Intelligent Health Assistance? Our team is here to help you understand and use the platform effectively.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500'>Get in Touch </button>
        </div>

      </div>

    </div>
  )
}

export default Contact
