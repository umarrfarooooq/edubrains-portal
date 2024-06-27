"use client"
import React, { useState } from 'react'
import { Loader2 } from "lucide-react"
import { useRouter } from 'next/navigation'
import Logo from "@public/logo.png"
import LogoWhite from "@public/logo white.png"
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from 'next/link'
import axios from 'axios';
import InputError from '@/components/Input-Error/Input-Error'

const axiosInstense = axios.create({
  withCredentials: true,
  baseURL: process.env.NEXT_PUBLIC_API_URL,
})

const LoginComponent = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [showPassword, setShowPassword] = useState(false)
  const togglePasswordVisibility = () => {
    setShowPassword(prevShowPassword => !prevShowPassword);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)
    setError('');
    if (!email.trim() || !password.trim()) {
      setLoading(false)
      setError('Email and Password is required');
      return;
    }

  
    try {
      const response = await axiosInstense.post('api/v1/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      setLoading(false)
      router.push('/');
    } catch (error) {
      setLoading(false)
      if (error.response) {
        if (error.response.status === 401) {
          setError('Invalid email or password');
        } else {
          setError(error.response.data.message || 'An error occurred during login');
        }
      } else if (error.request) {
        setError('No response from server. Please try again.');
      } else {
        setError('An unexpected error occurred. Please try again.');
      }
      console.error('Login error:', error);
    }
  };


  return (
    <div className="bg-[#FFF9EF] min-h-screen">
      <div className='container mx-auto px-2'>
        <div className='flex item-center justify-between p-4 sm:p-8 gap-4'>
            <div className='w-full lg:min-h-[60rem] bg-[#FFFDFA] rounded-3xl border-[#F4F1EB]'>
              <div className='p-4 md:p-12 lg:p-20 flex flex-col gap-12'>
                <div><Image src={Logo} className='w-40 h-8' alt='logo'/></div>
                <div>
                  <div>
                    <div className='text-xl md:text-2xl font-semibold'>Login into your account.</div>
                    <div className='text-base font-normal'>Only authorized accounts can log in. </div>
                  </div>
                </div>
                <form className='flex flex-col gap-4' onSubmit={handleSubmit} autoComplete='false'>
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
                  />
                  </div>
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
                    />
                    <span onClick={togglePasswordVisibility} className='cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" width="22" height="16" viewBox="0 0 22 16" fill="none">
                    <path d="M8.77832 7.99993C8.77832 8.5893 9.01245 9.15453 9.42919 9.57128C9.84594 9.98803 10.4112 10.2222 11.0005 10.2222C11.5899 10.2222 12.1551 9.98803 12.5719 9.57128C12.9886 9.15453 13.2228 8.5893 13.2228 7.99993C13.2228 7.41056 12.9886 6.84533 12.5719 6.42858C12.1551 6.01184 11.5899 5.77771 11.0005 5.77771C10.4112 5.77771 9.84594 6.01184 9.42919 6.42858C9.01245 6.84533 8.77832 7.41056 8.77832 7.99993Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M21 8C18.3333 12.4444 15 14.6667 11 14.6667C7 14.6667 3.66667 12.4444 1 8C3.66667 3.55556 7 1.33333 11 1.33333C15 1.33333 18.3333 3.55556 21 8Z" stroke="#333333" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg></span>
                  </div>
                  
                </div>
                <div className='flex items-center justify-end'>
                  <Link href="/forget-password">Forget Password?</Link>
                </div>
                <div>
                  <Button disabled={loading} className="w-full bg-[#151515] shadow-md">
                  {loading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
                  Login
                  </Button>
                </div>
                </form>
                <div className='flex flex-col gap-8'>
                <div className='flex items-center justify-between gap-4'>
                  <span className='w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-full' height="2" viewBox="0 0 194 2" fill="none">
                    <path d="M1 1L193 1.00002" stroke="#696969" strokeLinecap="round"/>
                  </svg>
                  </span>
                  <span className='text-sm w-fit text-nowrap'>Or Continue with</span>
                  <span className='w-full'>
                  <svg xmlns="http://www.w3.org/2000/svg" className='w-full' height="2" viewBox="0 0 194 2" fill="none">
                    <path d="M1 1L193 1.00002" stroke="#696969" strokeLinecap="round"/>
                  </svg>
                  </span>
                </div>
                <div className='flex items-center justify-between gap-2'>
                  <button className='flex cursor-not-allowed items-center justify-center border gap-2 w-full px-6 py-3 rounded-lg'>
                  <span><svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M9.99974 3.86667C11.8775 3.86667 13.1442 4.67778 13.8664 5.35556L16.6886 2.6C14.9553 0.988889 12.6997 0 9.99974 0C6.08863 0 2.71085 2.24444 1.06641 5.51111L4.29974 8.02222C5.11085 5.61111 7.3553 3.86667 9.99974 3.86667Z" fill="#EA4335"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M19.6 10.2224C19.6 9.4002 19.5333 8.8002 19.3889 8.17798H10V11.8891H15.5111C15.4 12.8113 14.8 14.2002 13.4667 15.1335L16.6222 17.578C18.5111 15.8335 19.6 13.2669 19.6 10.2224Z" fill="#4285F4"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M4.31111 11.9779C4.1 11.3556 3.97778 10.689 3.97778 10.0001C3.97778 9.3112 4.1 8.64453 4.3 8.02231L1.06667 5.5112C0.388889 6.86676 0 8.38898 0 10.0001C0 11.6112 0.388889 13.1334 1.06667 14.489L4.31111 11.9779Z" fill="#FBBC05"/>
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.0003 20.0001C12.7003 20.0001 14.967 19.1112 16.6226 17.5779L13.467 15.1335C12.6226 15.7224 11.4892 16.1335 10.0003 16.1335C7.3559 16.1335 5.11146 14.389 4.31146 11.9779L1.07812 14.489C2.72257 17.7557 6.08924 20.0001 10.0003 20.0001Z" fill="#34A853"/>
                  </svg></span>
                  <span>Google</span>
                  </button>
                  <button className='flex cursor-not-allowed items-center justify-center border gap-2 w-full px-6 py-3 rounded-lg'>
                    <span><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path d="M14.9402 5.19C15.3182 4.75428 15.6065 4.24817 15.7884 3.70074C15.9703 3.1533 16.0422 2.57533 16.0002 2C14.8395 2.09369 13.7622 2.63956 13.0002 3.52C12.6353 3.94198 12.3587 4.43288 12.187 4.96364C12.0152 5.49441 11.9517 6.05424 12.0002 6.61C12.5663 6.61472 13.1259 6.48909 13.6358 6.24286C14.1456 5.99662 14.5919 5.63637 14.9402 5.19ZM17.4602 12.63C17.4669 11.8637 17.6687 11.1118 18.0466 10.4452C18.4245 9.77859 18.9661 9.21926 19.6202 8.82C19.2074 8.22524 18.6617 7.73483 18.0264 7.38767C17.3911 7.04051 16.6836 6.84615 15.9602 6.82C14.4002 6.66 12.9602 7.73 12.1302 7.73C11.3002 7.73 10.1302 6.84 8.83016 6.86C7.98028 6.888 7.15218 7.13578 6.4266 7.57919C5.70103 8.02259 5.10276 8.64648 4.69016 9.39C2.93016 12.45 4.24016 17 6.00016 19.47C6.80016 20.68 7.80016 22.05 9.12016 22C10.4402 21.95 10.8702 21.18 12.4002 21.18C13.9302 21.18 14.4002 22 15.7002 21.97C17.0002 21.94 17.9202 20.73 18.7602 19.52C19.3552 18.6415 19.82 17.6816 20.1402 16.67C19.3476 16.332 18.6715 15.7693 18.1952 15.0513C17.7189 14.3333 17.4634 13.4916 17.4602 12.63Z" fill="#151515"/>
                    </svg></span>
                    <span>Apple</span>
                  </button>
                </div>
                <div className='flex items-center justify-start'>
                  <p className='text-sm'>Need Help? <span className='font-semibold'>Contact Us</span></p>
                </div>
                </div>
              </div>
            </div>
            <div className='hidden w-full lg:min-h-[60rem] loginImage rounded-3xl overflow-hidden p-20 xl:flex flex-col justify-between'>
              <div className='w-full flex items-center justify-center'>
                <Image src={LogoWhite} className='w-40 h-8' alt='logo'/>
              </div>
              <div className='w-full text-xl lg:text-3xl xl:text-5xl font-semibold text-[#FFFDFA]'>
                Seamlessly manage your entire school ecosystem.
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default LoginComponent

