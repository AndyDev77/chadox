"use client";
import { headerData } from "@/constants";
import { SignedIn, SignedOut, UserButton, useUser } from "@clerk/nextjs";
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
  const [mounted, setMounted] = useState(false);
  const pathname = usePathname();
  const { user } = useUser();

  useEffect(() => {
    setMounted(true);
  }, []);

  const adminEmail = process.env.NEXT_PUBLIC_ADMIN_EMAIL;

  useEffect(() => {
    if (user) {
      // console.log("User data:", user);
      // console.log("Admin Email:", adminEmail);
      // console.log("Is Admin:", user.primaryEmailAddress?.emailAddress === adminEmail);
    }
  }, [user, adminEmail]);

  const isAdmin = user?.primaryEmailAddress?.emailAddress === adminEmail;

  useEffect(() => {
    const handleScroll = () => {
      window.scrollY > 50 ? setIsActive(true) : setIsActive(false);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  if (!mounted) {
    return null; // Render nothing on the server
  }

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
          <div className="hidden xl:flex">{isAdmin ? <NavConnect /> : <Nav />}</div>
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
