import React from 'react'
import { motion } from 'framer-motion'
import { PageInfo } from '../typings'
import { urlFor } from '../sanity'

type Props = {
  pageInfo: PageInfo
}

function About({ pageInfo }: Props) {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center' 
    >
      <h3 className='title' >About</h3>

      <motion.img
        initial={{ 
          x: -200,
          opacity: 0
        }}
        whileInView={{ 
          x: 0,
          opacity: 1
        }}
        viewport={{  once: true }}
        transition={{ duration: 1.2 }}
        src={urlFor(pageInfo?.profilePic).url()} 
        alt={pageInfo?.name}
        className='-mb-24 md:mb-0 flex-shrink-0 w-32 h-32 rounded-full object-cover md:rounded-lg md:w-[300px] md:h-[400px]'
      />

      <div className='space-y-4 px-1 md:px-20' >
        <h4 className='text-2xl md:text-3xl font-semibold' >Here is a <span className='undeline decoration-[#F7AB0A]/50' >little</span> background</h4>

        <p className='text-sm md:text-md' >
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  )
}

export default About