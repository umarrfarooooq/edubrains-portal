"use client"
import UserSide from "@/components/Users/UserSide";
import AuthRedirect from "@/lib/AuthRedirect";
const Users = () => {
  return (
    <>
        <AuthRedirect requireAuth={true}>
          <UserSide />
        </AuthRedirect>
    </>
  );
}
export default Users;