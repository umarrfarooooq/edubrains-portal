import React, { useState, useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { VerifyStaffToken } from '@/lib/VerifyStaffToken'

const HomeRedirect = () => {
    const router = useRouter();
  const [isAuthenticated, setIsAuthenticated] = useState(null);
  useEffect(() => {
    const { valid } = VerifyStaffToken();
    if (valid) {
      router.push('/');
    } else {
      setIsAuthenticated(false);
    }
  }, [router]);

  if (isAuthenticated === null) {
    return <div>Loading...</div>;
  }
}

export default HomeRedirect
