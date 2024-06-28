"use client"

import OtpVerification from "@/components/Auth/OtpVerification"
import AuthRedirect from "@/lib/AuthRedirect"

const EmailOtp = () => {
  return (
    <AuthRedirect requireAuth={false} redirectTo="/">
      <OtpVerification />
    </AuthRedirect>
  )
}

export default EmailOtp
