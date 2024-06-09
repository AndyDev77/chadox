import Navbar from "@/components/Navbar";
import { ReactNode } from "react";

const RootLayout = ({ children }: { children: ReactNode }) => {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <main className="flex-1">{children}</main>
    </div>
  );
};

export default RootLayout;
