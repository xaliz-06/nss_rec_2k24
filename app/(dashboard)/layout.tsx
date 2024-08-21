import Footer from "@/components/footer";
import Header from "@/components/header";

type Props = {
  children: React.ReactNode;
};

const DashboardLayout = ({ children }: Props) => {
  return (
    <main className="bg-gradient-to-r from-blue-500/30 via-cyan-500/30 to-teal-500/30">
      <Header />
      {children}
      <Footer />
    </main>
  );
};

export default DashboardLayout;
