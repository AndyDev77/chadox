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
        isActive ? "w-full border-b shadow-lg" : "w-full border-b"
      } fixed "w-full border-b bg-white z-10 mx-auto transition-all duration-300`}
    >
      <div className="wrapper flex items-center justify-between">
        <Link href="/" className="w-36">
          <Image src={logo} alt="logo" width={128} height={38} />
        </Link>

        <SignedOut>
          <div className="md:flex-between hidden w-full max-w-xs">
            <Nav />
          </div>
        </SignedOut>

        <SignedIn>
          <div className="md:flex-between hidden w-full max-w-xs">
            {isAdmin ? <NavConnect /> : <Nav />}
          </div>
        </SignedIn>

        <div className="flex w-32 justify-end gap-3">
          <SignedIn>
            <UserButton afterSignOutUrl="/" />
            <NavMobile />
          </SignedIn>
          <SignedOut>
            <Button asChild size="lg">
              <Link href="/sign-in">Connexion</Link>
            </Button>
          </SignedOut>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
