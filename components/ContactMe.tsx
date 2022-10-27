import React from 'react'
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from '@heroicons/react/24/solid'
import { useForm, SubmitHandler } from "react-hook-form";

type Props = {}

type Inputs = {
  name: string
  email: string
  subject: string
  message: string
};

export default function ContactMe({}: Props) {
  const { register, handleSubmit } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = formData => {
    window.location.href = `mailto: matheusbaron10@gmail.com?subject=${formData.subject}&body=Hi, my name is ${formData.name}. ${formData.message} (${formData.email})`
  }

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-[100%] px-2 justify-evenly mx-auto items-center' >
      <h3 className='title' >Contact</h3>

      <div className='flex flex-col space-y-5 md:space-y-10 max-w-[100%] ' >
        <h4 className='text-1xl md:text-4xl font-semibold text-center' >
          I have got just what you need.{" "}
          <span className='decoration-[#F7AB0A]/50 underline' >Lets Talk</span>
        </h4>

        <div className='space-y-1' >
          <div className='flex items-center space-x-5 justify-center' >
            <PhoneIcon className='text-[#F7AB0A] h-4 w-4 md:h-8 md:w-8 animate-pulse' />
            <p className='text-sm md:text-lg' >+55 11 97803-5721</p>
          </div>
        
          <div className='flex items-center space-x-5 justify-center' >
            <EnvelopeIcon className='text-[#F7AB0A] h-4 w-4 md:h-8 md:w-8 animate-pulse' />
            <p className='text-sm md:text-lg' >matheusbaron10@gmail.com</p>
          </div>

          <div className='flex items-center space-x-5 justify-center' >
            <MapPinIcon className='text-[#F7AB0A] h-4 w-4 md:h-8 md:w-8 animate-pulse' />
            <p className='text-sm md:text-lg' >Osasco, SP - Brazil</p>
          </div>
        </div>

        <form 
          onSubmit={handleSubmit(onSubmit)} 
          className='flex flex-col space-y-2 w-[100%] md:w-fit mx-auto' 
        >
          <div className='flex flex-col md:flex-row space-y-2 md:space-y-0 md:space-x-2' >
            <input 
              className='contactInput' 
              type="text" 
              placeholder='Name' 
              {...register("name")}
            />
            <input 
              className='contactInput' 
              type="email" 
              placeholder='Email' 
              {...register("email")}
            />
          </div>

          <input 
            className='contactInput' 
            type="text" 
            placeholder='Subject'
            {...register("subject")}
          />

          <textarea 
            className='contactInput' 
            placeholder='Message' 
            {...register("message")}
          />

          <button className='bg-[#F7AB0A] px-3 py-2 md:px-5 md:py-3 rounded-md text-black font-bold text-sm' type="submit" >
            Submit
          </button>
        </form>
      </div>
    </div>
  )
}