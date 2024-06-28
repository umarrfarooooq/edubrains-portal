"use client";

import { useEffect, useState } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'

import PasswordChangedSuccess from "@/components/Auth/PasswordChangedSuccess";
import AuthRedirect from '@/lib/AuthRedirect';

const PasswordChanged = () => {
  const router = useRouter()
  const searchParams = useSearchParams()
  const [isValidAccess, setIsValidAccess] = useState(false)

  useEffect(() => {
    const token = searchParams.get('token')
    if (!token) {
      router.push('/login')
    } else {
      const tokenTimestamp = atob(token)
      const currentTime = Date.now()
      const tokenTime = parseInt(tokenTimestamp, 10)
      
      if (currentTime - tokenTime <= 60000) {
        setIsValidAccess(true)
      } else {
        router.push('/login')
      }
    }
  }, [router, searchParams])

  if (!isValidAccess) {
    return null
  }
  return (
    <AuthRedirect requireAuth={true} redirectTo="/">
      <PasswordChangedSuccess />
    </AuthRedirect>
  );
};

export default PasswordChanged;
