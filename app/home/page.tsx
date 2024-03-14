import { UserButton } from "@clerk/nextjs";
import React from "react";

const Page = () => {
  return (
    <div className="h-screen">
      Home Page
      <UserButton afterSignOutUrl="/"></UserButton>
    </div>
  );
};

export default Page;
