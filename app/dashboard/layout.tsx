import React from "react";
import DashboardNavbar from "./components/dashboard-navbar";
// import DashboardSidenav from "./components/dashboard-sidenav";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main>
      <DashboardNavbar />
      {/* <DashboardSidenav /> */}
      {children}
      {/* <SimpleDashboardFooter /> */}
    </main>
  );
};

export default Layout;
