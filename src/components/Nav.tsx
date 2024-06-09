import { navData } from "@/constants";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NavConnect = () => {
  const path = usePathname();

  return (
    <nav>
      <ul className="flex gap-x-[58px]">
        {navData.map((link) => {
          const isActive = path === link.route;
          return (
            <li key={link.route}>
              <Link
                className={`${isActive} link hover:border-b-2 hover:border-dark transition duration-300`}
                href={link.route}
              >
                {link.label}
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default NavConnect;
