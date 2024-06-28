"use client"
import React from 'react'
import Logo from "@public/logo.png"
import PasswordChangedImage from "@public/password-changed.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'


const PasswordChangedSuccess = () => {
  return (
    <div className="bg-[#FFF9EF] min-h-screen flex items-center justify-center">
      <div className='container mx-auto px-2 flex items-center justify-center p-4 sm:p-8'>
      <div className='p-8 md:p-12 lg:p-20 min-w-full md:min-w-[42rem] lg:min-h-[40rem] bg-[#F4F1EB] rounded-3xl border-[#F4F1EB]'>
            <div className='bg-[#FFFDFA] rounded-xl'>
              <div className='p-4 md:p-12 flex flex-col gap-12'>
                <div className='flex items-center justify-center'><Image src={Logo} className='w-40 h-8' alt='logo'/></div>
                <div className='flex items-center justify-center text-center gap-5'>
                <div className='text-lg font-semibold'>Account Successfully Recovered!</div>
                </div>
                <div className='flex items-center justify-center'>
                  <div className='flex flex-col items-center text-center'>
                    <div>
                        <Image src={PasswordChangedImage} className='w-[11.25rem] h-[11.25rem]' alt='opt image'/>
                    </div>
                    <div className='text-xl md:text-2xl font-semibold'>Account Successfully <br></br> Recovered!</div>
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <Link href="/">
                        <Button className="w-full bg-[#151515] shadow-md py-3 px-6 flex items-center justify-center gap-2">Go to Home Page</Button>
                    </Link>
                </div>
              </div>
            </div>
      </div>
        
      </div>
    </div>
  )
}

export default PasswordChangedSuccess
