"use client"
import React, { useState, useEffect, Suspense } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { Loader2 } from "lucide-react"
import Logo from "@public/logo.png"
import SetupPassImage from "@public/setup password.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import BackIcon from '@/components/ui/BackIcon/BackIcon'
import axios from 'axios'
import InputError from '@/components/Input-Error/Input-Error'
const axiosInstance = axios.create({
    withCredentials: true,
    baseURL: process.env.NEXT_PUBLIC_API_URL,
  })

const SetupPassword = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showConfirmPassword, setShowConfirmPassword] = useState(false)
    const [password, setPassword] = useState('')
    const [hasEmail, setHasEmail] = useState(false)
    const [confirmPassword, setConfirmPassword] = useState('')
    const [email, setEmail] = useState('')
    const [code, setCode] = useState('')
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)
    
    const router = useRouter()
    const searchParams = useSearchParams()
    useEffect(() => {
        const emailParam = searchParams.get('email')
        const codeParam = searchParams.get('code')
        if (emailParam) setEmail(decodeURIComponent(emailParam))
        if (codeParam) setCode(codeParam)
        if(emailParam && codeParam) {
            setHasEmail(true)
        }
        if(!emailParam || !codeParam) {
            router.push('/login')
        }
      }, [searchParams])
  
      const togglePasswordVisibility = () => {
        setShowPassword(prev => !prev)
      }
  
      const toggleConfirmPasswordVisibility = () => {
        setShowConfirmPassword(prev => !prev)
      }
  
      const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        
        if (password !== confirmPassword) {
          setError('Passwords do not match')
          return
        }
  
        setLoading(true)
        try {
          const response = await axiosInstance.post('api/v1/users/reset-password', {
            email,
            code,
            password
          })
          
          localStorage.setItem('token', response.data.token)
          const changeToken = btoa(Date.now().toString())
          router.push(`/password-changed?token=${changeToken}`)
        } catch (error) {
          if (error.response) {
            setError(error.response.data.message || 'Failed to reset password. Please try again.')
          } else if (error.request) {
            setError('No response from server. Please try again.')
          } else {
            setError('An unexpected error occurred. Please try again.')
          }
          console.error('Password reset error:', error)
        } finally {
          setLoading(false)
        }
      }
  return (
    <Suspense>
        <div className="bg-[#FFF9EF] min-h-screen flex items-center justify-center">
            <div className='container mx-auto px-2 flex items-center justify-center p-4 sm:p-8'>
            <div className='p-8 md:p-12 lg:p-20 min-w-full md:min-w-[42rem] lg:min-h-[40rem] bg-[#F4F1EB] rounded-3xl border-[#F4F1EB]'>
                <div className='bg-[#FFFDFA] rounded-xl'>
                    <div className='p-4 md:p-12 flex flex-col gap-12'>
                    <div className='flex items-center justify-center'><Image src={Logo} className='w-40 h-8' alt='logo'/></div>
                    <div className='flex items-center gap-5'>
                    <BackIcon />
                    <div className='text-lg font-semibold'>Set Your Password</div>
                    </div>
                    <div className='flex items-center justify-center'>
                        <div className='flex flex-col items-center text-center'>
                        <div>
                            <Image src={SetupPassImage} className='w-[11.25rem] h-[11.25rem]' alt='opt image'/>
                        </div>
                        <div className='text-xl md:text-2xl font-semibold'>Set Your Password</div>
                        <div className='text-base max-w-[20rem] text-center'>Set your password for login</div>
                        </div>
                    </div>
                    <form className='flex flex-col gap-4' onSubmit={handleSubmit} autoComplete='false'>
                    {error && <InputError errorMessage={error}/>}
                    <div className='flex flex-col gap-6'>
                        <div className='border relative border-[#A9A9A9] px-4 rounded-lg flex items-center justify-start gap-2'>
                        <div className='px-2 absolute text-xs top-[-.5rem] bg-[#FFFDFA]'>
                        Enter your password
                        </div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M0.999023 11C0.999023 10.4696 1.20974 9.96086 1.58481 9.58579C1.95988 9.21071 2.46859 9 2.99902 9H12.999C13.5295 9 14.0382 9.21071 14.4132 9.58579C14.7883 9.96086 14.999 10.4696 14.999 11V17C14.999 17.5304 14.7883 18.0391 14.4132 18.4142C14.0382 18.7893 13.5295 19 12.999 19H2.99902C2.46859 19 1.95988 18.7893 1.58481 18.4142C1.20974 18.0391 0.999023 17.5304 0.999023 17V11Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.99902 9V5C3.99902 3.93913 4.42045 2.92172 5.1706 2.17157C5.92074 1.42143 6.93816 1 7.99902 1C9.05989 1 10.0773 1.42143 10.8275 2.17157C11.5776 2.92172 11.999 3.93913 11.999 5V9M6.99902 14C6.99902 14.2652 7.10438 14.5196 7.29192 14.7071C7.47945 14.8946 7.73381 15 7.99902 15C8.26424 15 8.51859 14.8946 8.70613 14.7071C8.89367 14.5196 8.99902 14.2652 8.99902 14C8.99902 13.7348 8.89367 13.4804 8.70613 13.2929C8.51859 13.1054 8.26424 13 7.99902 13C7.73381 13 7.47945 13.1054 7.29192 13.2929C7.10438 13.4804 6.99902 13.7348 6.99902 14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></span>
                        <input 
                            type={showPassword ? "text" : "password"} 
                            placeholder="Enter your password" 
                            className="border-none w-full py-[0.88rem] outline-none"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                            />
                        <span onClick={togglePasswordVisibility} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                        <path d="M8.77832 7.99993C8.77832 8.5893 9.01245 9.15453 9.42919 9.57128C9.84594 9.98803 10.4112 10.2222 11.0005 10.2222C11.5899 10.2222 12.1551 9.98803 12.5719 9.57128C12.9886 9.15453 13.2228 8.5893 13.2228 7.99993C13.2228 7.41056 12.9886 6.84533 12.5719 6.42858C12.1551 6.01184 11.5899 5.77771 11.0005 5.77771C10.4112 5.77771 9.84594 6.01184 9.42919 6.42858C9.01245 6.84533 8.77832 7.41056 8.77832 7.99993Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 8C18.3333 12.4444 15 14.6667 11 14.6667C7 14.6667 3.66667 12.4444 1 8C3.66667 3.55556 7 1.33333 11 1.33333C15 1.33333 18.3333 3.55556 21 8Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></span>
                        </div>
                        <div className='border relative border-[#A9A9A9] px-4 rounded-lg flex items-center justify-start gap-2'>
                        <div className='px-2 absolute text-xs top-[-.5rem] bg-[#FFFDFA]'>
                        Confirm your password
                        </div>
                        <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" viewBox="0 0 16 20" fill="none">
                        <path d="M0.999023 11C0.999023 10.4696 1.20974 9.96086 1.58481 9.58579C1.95988 9.21071 2.46859 9 2.99902 9H12.999C13.5295 9 14.0382 9.21071 14.4132 9.58579C14.7883 9.96086 14.999 10.4696 14.999 11V17C14.999 17.5304 14.7883 18.0391 14.4132 18.4142C14.0382 18.7893 13.5295 19 12.999 19H2.99902C2.46859 19 1.95988 18.7893 1.58481 18.4142C1.20974 18.0391 0.999023 17.5304 0.999023 17V11Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M3.99902 9V5C3.99902 3.93913 4.42045 2.92172 5.1706 2.17157C5.92074 1.42143 6.93816 1 7.99902 1C9.05989 1 10.0773 1.42143 10.8275 2.17157C11.5776 2.92172 11.999 3.93913 11.999 5V9M6.99902 14C6.99902 14.2652 7.10438 14.5196 7.29192 14.7071C7.47945 14.8946 7.73381 15 7.99902 15C8.26424 15 8.51859 14.8946 8.70613 14.7071C8.89367 14.5196 8.99902 14.2652 8.99902 14C8.99902 13.7348 8.89367 13.4804 8.70613 13.2929C8.51859 13.1054 8.26424 13 7.99902 13C7.73381 13 7.47945 13.1054 7.29192 13.2929C7.10438 13.4804 6.99902 13.7348 6.99902 14Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></span>
                        <input 
                            type={showConfirmPassword ? "text" : "password"} 
                            placeholder="Confirm your password" 
                            className="border-none w-full py-[0.88rem] outline-none"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            required
                            />
                        <span onClick={toggleConfirmPasswordVisibility} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                        <path d="M8.77832 7.99993C8.77832 8.5893 9.01245 9.15453 9.42919 9.57128C9.84594 9.98803 10.4112 10.2222 11.0005 10.2222C11.5899 10.2222 12.1551 9.98803 12.5719 9.57128C12.9886 9.15453 13.2228 8.5893 13.2228 7.99993C13.2228 7.41056 12.9886 6.84533 12.5719 6.42858C12.1551 6.01184 11.5899 5.77771 11.0005 5.77771C10.4112 5.77771 9.84594 6.01184 9.42919 6.42858C9.01245 6.84533 8.77832 7.41056 8.77832 7.99993Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M21 8C18.3333 12.4444 15 14.6667 11 14.6667C7 14.6667 3.66667 12.4444 1 8C3.66667 3.55556 7 1.33333 11 1.33333C15 1.33333 18.3333 3.55556 21 8Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg></span>
                        </div>
                    </div>
                    <div>
                    <div className='flex flex-col gap-4'>
                        <Button 
                            type="submit" 
                            className="w-full bg-[#151515] shadow-md py-3 px-6 flex items-center justify-center gap-2"
                            disabled={loading}
                        >
                            {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                            {loading ? 'Saving...' : 'Save'}
                        </Button>
                    </div>
                    </div>
                    </form>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </Suspense>
    
  )
}

export default SetupPassword
