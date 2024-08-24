"use client"
import FinanceMain from "@/components/Finance/Finance-Main";
import AuthRedirect from "@/lib/AuthRedirect";
const Finance = () => {
  return (
    <>
        <AuthRedirect requireAuth={true}>
          <FinanceMain />
        </AuthRedirect>
    </>
  );
}
export default Finance;