"use client";

import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="bg-white">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default DashboardLayout;
