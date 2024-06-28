"use client"
import ForgetPassword from "@/components/Auth/ForgetPassword"
import AuthRedirect from "@/lib/AuthRedirect"

const ForgetPasswordPage = () => {
  return (
      <AuthRedirect requireAuth={false} redirectTo="/">
        <ForgetPassword />
      </AuthRedirect>
  )
}

export default ForgetPasswordPage
