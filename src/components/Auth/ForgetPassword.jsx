import React, { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Loader2 } from "lucide-react"
import Logo from "@public/logo.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import BackIcon from '@/components/ui/BackIcon/BackIcon'
import axios from 'axios'
import InputError from '@/components/Input-Error/Input-Error'


const axiosInstense = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })
const ForgetPassword = () => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [loading, setLoading] = useState(false)
  const router = useRouter()
  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')
    setLoading(true)

    try {
      const response = await axiosInstense.post('api/v1/users/forget-password', { email })
      setSuccess('Password reset code sent to your email.')
      setLoading(false)
      router.push(`/email-otp?email=${encodeURIComponent(email)}`)
    } catch (error) {
      setLoading(false)
      if (error.response) {
        setError(error.response.data.message || 'An error occurred. Please try again.')
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
    }
  }

  return (
    <div className="bg-[#FFF9EF] min-h-screen flex items-center justify-center">
      <div className='container mx-auto px-2 flex items-center justify-center p-4 sm:p-8'>
      <div className='p-8 md:p-12 lg:p-20 min-w-full md:min-w-[42rem] lg:min-h-[40rem] bg-[#F4F1EB] rounded-3xl border-[#F4F1EB]'>
            <div className='bg-[#FFFDFA] rounded-xl'>
              <div className='p-4 md:p-12 flex flex-col gap-12'>
                <div className='flex items-center justify-center'><Image src={Logo} className='w-40 h-8' alt='logo'/></div>
                <div className='flex items-center gap-5'>
                <BackIcon />
                <div className='text-lg font-semibold'>Forget Password</div>
                </div>
                <div>
                  <div className='flex items-center gap-5'>
                    <div className='text-base sm:text-xl md:text-2xl font-semibold'>Enter your contact info</div>
                  </div>
                </div>
                <form className='flex flex-col gap-4'  onSubmit={handleSubmit} autoComplete='false'>
                {error && <InputError errorMessage={error}/>}
                <div className='flex flex-col gap-6'>
                  <div className='border relative border-[#A9A9A9] px-4 rounded-lg flex items-center justify-start gap-2'>
                  <div className='px-2 absolute text-xs top-[-.5rem] bg-[#FFFDFA]'>
                    Enter your email
                  </div>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="16" viewBox="0 0 20 16" fill="none">
                    <path d="M1 3C1 2.46957 1.21071 1.96086 1.58579 1.58579C1.96086 1.21071 2.46957 1 3 1H17C17.5304 1 18.0391 1.21071 18.4142 1.58579C18.7893 1.96086 19 2.46957 19 3V13C19 13.5304 18.7893 14.0391 18.4142 14.4142C18.0391 14.7893 17.5304 15 17 15H3C2.46957 15 1.96086 14.7893 1.58579 14.4142C1.21071 14.0391 1 13.5304 1 13V3Z" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M1 3L10 9L19 3" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></span>
                  <input 
                        type="email" 
                        placeholder="Enter your email" 
                        className="border-none w-full py-[0.88rem] outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                  </div>
                </div>
                <div>
                    <Button disabled={loading} className="w-full bg-[#151515] shadow-md py-3 px-6">
                        {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                        Send Code
                    </Button>
                </div>
                </form>
              </div>
            </div>
      </div>
        
      </div>
    </div>
  )
}

export default ForgetPassword
