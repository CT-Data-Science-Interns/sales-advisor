"use client";

// import React from "react";
import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
const Page = () => {
  // return <div className="h-screen">Delegation Page</div>;
  const router = useRouter();
  
  useEffect(() => {
    router.push("/dashboard")
  }, [router]);
  
  return null;
};

export default Page;
