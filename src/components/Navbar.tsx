"use client";
import { headerData } from "@/constants";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import Nav from "./Nav";
import NavConnect from "./NavConnect";
import NavMobile from "./NavMobile";
import { Button } from "./ui/button";

const Navbar = () => {
  const { logo } = headerData;
  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    });
  });

  return (
    <header
      className={`${
        isActive ? "h-[100px] lg:h-[100px] shadow-lg" : "h-[120px] lg:h-[150px]"
      } fixed bg-white left-0 right-0 z-10 max-w-[1920px] w-full mx-auto transition-all duration-300`}
    >
      <div className="flex justify-between items-center h-full pl-[50px] pr-[60px]">
        <Image src={logo} alt="logo" width={170} height={90} />

        <SignedOut>
          <div className="hidden xl:flex">
            <Nav />
          </div>
        </SignedOut>

        <SignedIn>
          <div className="hidden xl:flex">
            <NavConnect />
          </div>
        </SignedIn>

        <div className="hidden xl:flex">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <NavMobile />
          </SignedIn>
          <SignedOut>
            <Button asChild className="btn btn-dark" size="lg">
              <Link href="/sign-in">Connexion</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
