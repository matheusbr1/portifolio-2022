/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Experience } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  experience: Experience
}

export default function ExperienceCard({ experience }: Props) {
  return (
    <article
      className='flex flex-col rounded-lg items-center space-y-3 2xl:space-y-5 flex-shrink-0 w-[100%] md:w-[300px] xl:w-[500px] 2xl:w-[600px] snap-center bg-[#292929] p-8 2xl:p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'
    >
      <motion.img 
        initial={{
          y: -100,
          opacity: 0
        }}
        transition={{ duration: 1.2 }}
        whileInView={{ 
          opacity: 1,
          y:0
        }}
        viewport={{ once: true }}
        className='w-20 h-20 rounded-full xl:w-[100px] xl:h-[100px] 2xl:w-[120px] 2xl:h-[120px] object-cover object-center'
        src={urlFor(experience?.companyImage).url()}
      />

      <div className='px-0 md:px-10' >
        <h4 className='text-xl 2xl:text-2xl font-light' >
          {experience?.jobTitle}
        </h4>
        
        <div className='flex items-center gap-4 mb-2' >
          <p className='font-bold text-xl' >
            {experience?.company}
          </p>

          <p className='uppercase text-gray-300' >
            {new Intl.DateTimeFormat('en-US', { dateStyle: 'short' })
              .format(new Date(experience?.dateStarted))} - {""}
            
            {!!experience.isCurrentclyWorkingHere
              ? "Present"
              : new Intl.DateTimeFormat('en-US', { dateStyle: 'short' }) 
                .format(new Date(experience?.dateEnded))
            }
          </p>
        </div>
      
        
        <div className='flex space-x-2 py-2 mb-2' >
          {experience?.technologies?.map(technology => (
            <img
              key={technology?._id}
              className='h-8 w-8 rounded-full'
              src={urlFor(technology?.image).url()}
              alt={technology?.title}
            />
          ))}
        </div>
        
        <ul className='list-disc w-[100%] space-y-2 ml-2 text-sm 2xl:text-md h-40 overflow-y-scroll scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]' >
          {experience?.points?.map(point => (
            <li className='w-[90%]' key={point} >{point}</li>
          ))}
        </ul>
      </div>
    </article>
  )
}