import Image from "next/image";
import NavConnect from "./NavConnect";
import { Separator } from "./ui/separator";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";

const NavMobile = () => {
  return (
    <nav className="md:hidden">
      <Sheet>
        <SheetTrigger className="align-middle">
          <Image
            src="/img/icons/menu.svg"
            alt="menu"
            width={24}
            height={24}
            className="cursor-pointer"
          />
        </SheetTrigger>
        <SheetContent className="flex flex-col gap-6 bg-white md:hidden">
          <Image src="/img/header/logo.svg" alt="logo" width={128} height={38} />
          <Separator className="border border-gray-50" />
          <NavConnect />
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default NavMobile;
