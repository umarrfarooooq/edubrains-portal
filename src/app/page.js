"use client"

import HomeComponent from "@/components/Home/HomeComponent";
import AuthRedirect from "@/lib/AuthRedirect";

const Home = () => {
  return (
    <>
        <AuthRedirect requireAuth={true}>
            <HomeComponent />
        </AuthRedirect>
    </>
  );
}
export default Home;