"use client"

import React from 'react';
import Layout from '@/components/Layout/Layout';

export default function UsersLayout({ children }) {
  return (
      <Layout>
        {children}
      </Layout>
  );
}