import { socialData } from "@/constants";
import Image from "next/image";
import Link from "next/link";

const Socials = () => {
  return (
    <ul className="flex justify-center items-center gap-x-[30px]">
      {socialData.map((item, index) => {
        return (
          <li key={index}>
            <Link href={item.href} target={item.target}>
              <Image src={item.icon} alt="socialIcon" width={15} height={20} />
            </Link>
          </li>
        );
      })}
    </ul>
  );
};

export default Socials;
