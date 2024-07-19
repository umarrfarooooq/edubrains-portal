"use client"
import SetupPassword from "@/components/Auth/SetupPassword"
import AuthRedirect from "@/lib/AuthRedirect"

const ResetPassword = () => {
  return (
      <AuthRedirect requireAuth={false} redirectTo="/">
        <SetupPassword />
      </AuthRedirect>
    
  )
}

export default ResetPassword
