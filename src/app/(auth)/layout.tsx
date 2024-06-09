import Image from "next/image";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="relative h-screen w-full">
      <div className="absolute size-full">
        <Image src="/img/hero/bg.jpg" alt="background" fill className="size-full" />
      </div>

      {children}
    </main>
  );
};

export default Layout;
