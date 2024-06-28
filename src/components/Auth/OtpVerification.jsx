"use client"
import React, { useState, useEffect } from 'react'
import { useSearchParams, useRouter } from 'next/navigation'
import { Loader2 } from "lucide-react"
import axios from 'axios'
import Logo from "@public/logo.png"
import OtpImage from "@public/OTP verification.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import BackIcon from '@/components/ui/BackIcon/BackIcon'
import OtpInput from '@/components/OtpInput/OtpInput'
import InputError from '@/components/Input-Error/Input-Error'

const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const OtpVerification = () => {
  const [loading, setLoading] = useState(false)
  const [resendLoading, setResendLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [code, setCode] = useState('')
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')
  const [resendTimer, setResendTimer] = useState(30)
  const searchParams = useSearchParams()
  const router = useRouter()

  useEffect(() => {
    const emailParam = searchParams.get('email')
    if (emailParam) {
      setEmail(decodeURIComponent(emailParam))
    } else {
      router.push('/forget-password')
    }
  }, [searchParams, router])

  useEffect(() => {
    const timer = resendTimer > 0 && setInterval(() => setResendTimer(resendTimer - 1), 1000)
    return () => clearInterval(timer)
  }, [resendTimer])

  const handleOtpChange = (value) => {
    setCode(value)
    if (value.length === 6) {
      handleSubmit(value)
    }
  }

  const handleSubmit = async (submittedCode) => {
    setError('')
    setSuccess('')
    setLoading(true)
    try {
      const response = await axiosInstance.post('api/v1/users/verify-reset-code', { 
        email, 
        code: parseFloat(submittedCode) 
      })
      setSuccess('Code verified successfully')
      router.push(`/reset-password?email=${encodeURIComponent(email)}&code=${encodeURIComponent(submittedCode)}`)
    } catch (error) {
      if (error.response) {
        setError(error.response.data.message || 'Invalid or expired code')
      } else if (error.request) {
        setError('No response from server. Please try again.')
      } else {
        setError('An unexpected error occurred. Please try again.')
      }
      console.error('OTP verification error:', error)
    } finally {
      setLoading(false)
    }
  }

  const handleResendCode = async () => {
    setError('');
    setSuccess('');
    setResendLoading(true)
    try {
      const response = await axiosInstance.post('api/v1/users/resend-code', { email });
      setSuccess('New code sent successfully. Please check your email.');
      setResendLoading(false)
      setResendTimer(60);
    } catch (error) {
      setResendLoading(false)
      if (error.response) {
        setError(error.response.data.message || 'Failed to resend code. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
    }
  };

  return (
    <div className="bg-[#FFF9EF] min-h-screen flex items-center justify-center">
      <div className='container mx-auto px-2 flex items-center justify-center p-4 sm:p-8'>
        <div className='p-8 md:p-12 lg:p-20 min-w-full md:min-w-[42rem] lg:min-h-[40rem] bg-[#F4F1EB] rounded-3xl border-[#F4F1EB]'>
          <div className='bg-[#FFFDFA] rounded-xl'>
            <div className='p-4 md:p-12 flex flex-col gap-12'>
              <div className='flex items-center justify-center'><Image src={Logo} className='w-40 h-8' alt='logo'/></div>
              <div className='flex items-center gap-5'>
                <BackIcon />
                <div className='text-lg font-semibold'>OTP Verification</div>
              </div>
              <div className='flex items-center justify-center'>
                <div className='flex flex-col items-center text-center'>
                  <div>
                    <Image src={OtpImage} className='w-[11.25rem] h-[11.25rem]' alt='opt image'/>
                  </div>
                  <div className='text-xl md:text-2xl font-semibold'>Confirm Your Email</div>
                  <div className='text-base max-w-[20rem] text-center'>Enter the verification code that we have
                  sent to <span className='font-semibold'>{email && email}</span></div>
                </div>
              </div>
              <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-4' autoComplete='off'>
              {error && <InputError errorMessage={error}/>}
                <div className='flex flex-col gap-6'>
                  <div className='flex items-center justify-center'>
                    <OtpInput onChange={handleOtpChange} />
                  </div>
                </div>
                <div className='flex flex-col gap-4'>
                  <Button 
                    type="button" 
                    className="w-full bg-[#151515] shadow-md py-3 px-6 flex items-center justify-center gap-2" 
                    onClick={() => handleSubmit(code)}
                    disabled={loading || code.length !== 6}
                  >
                    {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    {loading ? 'Verifying...' : 'Continue'}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M9.5 18L15.5 12L9.5 6" stroke="#FFFDFA" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </Button>
                  <Button
                    type="button"
                    className="w-full bg-[#15151529] hover:bg-[#25252541] shadow-md py-3 px-6 flex items-center justify-center gap-2"
                    onClick={handleResendCode}
                    disabled={resendTimer > 0 || resendLoading}
                  >
                  {resendLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                    <span>
                      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                        <path d="M10.5 14L21.5 3M10.5 14L14 21C14.0439 21.0957 14.1143 21.1769 14.203 21.2338C14.2916 21.2906 14.3947 21.3209 14.5 21.3209C14.6053 21.3209 14.7084 21.2906 14.7971 21.2338C14.8857 21.1769 14.9561 21.0957 15 21L21.5 3M10.5 14L3.50001 10.5C3.40427 10.4561 3.32314 10.3857 3.26626 10.2971C3.20938 10.2084 3.17914 10.1053 3.17914 10C3.17914 9.89469 3.20938 9.79158 3.26626 9.70295C3.32314 9.61432 3.40427 9.54388 3.50001 9.5L21.5 3" stroke="#151515" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    <span className='text-[#151515]'>
                      {resendTimer > 0 ? `Re-send code in ${resendTimer}s` : 'Re-send code'}
                    </span>
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

export default OtpVerification