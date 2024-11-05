import React from "react";
import Footer from "@/components/common/footer/Footer";
import Header from "@/components/common/header/Header";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
