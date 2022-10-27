/* eslint-disable @next/next/no-img-element */
import React from 'react'
import { motion } from 'framer-motion'
import { Skill as SkillType } from '../typings'
import { urlFor } from '../sanity'

type Direction =  'top' | 'left' | 'bottom' | 'right'

type Props = {
  direction?: Direction
  skill: SkillType
}

function getDirection (direction: Direction) {
  switch (direction) {
    case 'top':
      return { y: -200 }
    case 'bottom':
      return { y: 200 }
    case 'left':
      return { x: -200 }
    case 'right':
      return { x: 200 }
    default:
      return { x: -200 }
  }
}

export default function Skill({ direction = 'top', skill }: Props) {
  return (
    <motion.div 
      initial={{
        ...getDirection(direction),
        opacity: 0
      }}
      transition={{
        duration: 1
      }}
      whileInView={{
        opacity: 1, 
        x: 0,
        y: 0
      }}
      className='group relative flex cursor-pointer' 
    >
      <img 
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className='rounded-full border border-gray-500 object-cover w-16 h-16 md:w-24 md:h-24 xl:w-26 xl:h-26 filter group-hover:grayscale transition duration-300 ease-in-out'
      />
      <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 easy-in-out group-hover:bg-white w-16 h-16 md:w-24 md:h-24 xl:w-26 xl:h-26 rounded-full z-0' >
        <div className='flex items-center justify-center h-full' >
          <p className='text-3xl font-bold text-black opacity-100' >
            {skill.progress}%
          </p>
        </div>
      </div>
    </motion.div>
  )
}