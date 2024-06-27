"use client"

import AuthRedirect from "@/lib/AuthRedirect";

const Home = () => {
  return (
    <>
      <AuthRedirect requireAuth={true}>
          Home
      </AuthRedirect>
    </>
  );
}
export default Home;