/* eslint-disable @next/next/no-img-element */
import Link from 'next/link'
import React from 'react'
import { Cursor, useTypewriter } from 'react-simple-typewriter'
import { urlFor } from '../sanity'
import { PageInfo } from '../typings'
import BackgroundCircles from './BackgroundCircles'

type Props = {
  pageInfo: PageInfo
}

export default function Hero({ pageInfo }: Props) {
  const [text, count] = useTypewriter({
    words: [
      `Hi, The Name's ${pageInfo?.name}`,
      "Guy-who-loves-Coffee.tsx",
      "<ButLovesToCodeMore />",
    ],
    loop: true,
    delaySpeed: 2000
  })

  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden' >
      <BackgroundCircles />

      <img 
        src={urlFor(pageInfo?.heroImage).url()}
        alt={pageInfo?.name}
        className='relative rounded-full h-32 w-32 mx-auto object-cover'
      />

      <div className='z-20' >
        <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]' >
          {pageInfo?.role}
        </h2>

        <h1 className='text-4xl lg:text-5xl font-semibold px-10' >
          <span className='ml-3 mr-3' >{text}</span>
          <Cursor cursorColor='#F7AB0A' />
        </h1>

        <div className='pt-5 grid gap-2 md:block' >
          <Link href="#about" >
            <button className='heroButton' >About</button>
          </Link>
          
          <Link href="#experience" >
            <button className='heroButton' >Expirience</button>
          </Link>
          
          <Link href="#skills" >
            <button className='heroButton' >Skills</button>
          </Link>
          
          <Link href="#projects" >
            <button className='heroButton' >Projects</button>
          </Link>
        </div>
      </div>
    </div>
  )
}