import React from 'react';
import Sidebar from '@/components/Sidebar/Sidebar';

const Layout = ({ children, showSidebar = true }) => {
  return (
    <div className='md:flex'>
      {showSidebar && (
        <div className='bg-[#F4F1EB]' style={{ borderRight: "1px solid #C3D0D4" }}>
          <Sidebar />
        </div>
      )}
      <div className='w-full'>
        {children}
      </div>
    </div>
  );
};

export default Layout;