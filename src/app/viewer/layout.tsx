import React from "react";
import Footer from "@/components/common/footer/Footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
