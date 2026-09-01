import React from 'react'
import { assets } from '../../assets/assets_frontend/assets'

const About = () => {
  return (
    <div>

      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>ABOUT <span className='text-gray-700 font.medium'>US</span></p>
      </div>

      <div className='my-10 flex flex-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} alt="" />
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-600'>
          <p>Welcome to RIOS Medical Healthcare System, an AI-powered healthcare platform designed to make healthcare more accessible, intelligent, and convenient. Our platform connects patients with trusted doctors while providing intelligent healthcare assistance using modern Artificial Intelligence technologies.</p>
          <p>RIOS combines doctor appointment services with AI-driven healthcare support. Our system uses Retrieval-Augmented Generation (RAG) to retrieve relevant healthcare information, rule-based detection to identify potential health concerns, and open-source Large Language Models (LLMs) to provide intelligent responses.</p>
          <b>Our Vision</b>
          <p>Our vision is to create a smarter and more accessible healthcare experience by bringing together patients, doctors, and Artificial Intelligence in one reliable platform. We aim to support early health awareness, simplify access to healthcare information, and make finding and consulting doctors easier for everyone.</p> 
        </div>   
      </div>  

      <div className='text-xl my-4'>
        <p>WHY <span className='text-gray-700 font-semibold'>CHOOSE US</span> </p>
      </div>

      <div className='flex flex md:flex-row'>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='font-extrabold'>AI-POWERED INTELLIGENCE:</b>
          <p className='font-normal'>Intelligent Healthcare Assistance Using RAG And Open-Source Large Language Models.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='font-extrabold'>SMART HEALTH DETECTION:</b>
          <p className='font-normal'>Rule-Based Detection To Identify Potential Health Concerns And Support Early Awareness.</p>
        </div>
        <div className='border border-gray-300 px-10 md:px-16 py-8 sm:py-16 flex flex-col gap-5 text-[15px] hover:bg-primary hover:text-white transition-all duration-300 text-gray-600 cursor-pointer'>
          <b className='font-extrabold'>CONNECTED HEALTHCARE:</b>
          <p className='font-normal'>Easy Doctor Discovery And Appointment Scheduling With Trusted Healthcare Professionals.</p>
        </div>
      </div>

    </div>
  )
}

export default About
