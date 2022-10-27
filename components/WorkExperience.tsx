import React from 'react'
import { motion } from 'framer-motion'
import ExperienceCard from './ExperienceCard'
import { Experience } from '../typings'

type Props = {
  experiences: Experience[]
}

function WorkExperience({ experiences }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='h-screen flex relative overflow-hidden flex-col text-left md:flex-row max-w-full px-5 2xl:px-10 justify-evenly mx-auto items-center' 
    >
      <h3 className='title' >Experience</h3>

      <div className='w-full flex space-x-5 overflow-x-scroll p-2 snap-x snap-mandatory scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]' >
        {experiences?.map(experience => (
          <ExperienceCard key={experience?._id} experience={experience} />
        ))}
      </div>
    </motion.div>
  )
}

export default WorkExperience