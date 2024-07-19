"use client";
import SignupComponent from "@/components/Auth/Signup";
import AuthRedirect from "@/lib/AuthRedirect";
import { GoogleOAuthProvider } from "@react-oauth/google";

const Signup = ({ params }) => {

  return (
    <GoogleOAuthProvider clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID}>
      <AuthRedirect requireAuth={false} redirectTo="/">
        <SignupComponent token={params.token} />
      </AuthRedirect>
    </GoogleOAuthProvider>
  );
};

export default Signup;
