import { footerData } from "@/constants";
import { Mail, MapPinned, Phone } from "lucide-react";

const Footer = () => {
  const { about, links, program } = footerData;
  return (
    <footer className="section bg-black">
      <div className="container mx-auto">
        <div className="text-white flex flex-col lg:flex-row lg:justify-between gap-x-5 gap-y-14">
          <div className="flex-1 flex flex-col gap-y-6">
            <div className="font-primary text-xl uppercase tracking-[0.08em]">{about.title}</div>
            <div className="leading-relaxed text-[#dbdbdb]">{about.subtitle}</div>
            <div className="flex flex-col gap-y-4 font-semibold text-[#dbdbdb]">
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <MapPinned />
                </div>
                <div>{about.address.name}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <Phone />
                </div>
                <div>{about.phone.number}</div>
              </div>
              <div className="flex items-center gap-x-[10px]">
                <div>
                  <Mail />
                </div>
                <div>{about.email.address}</div>
              </div>
            </div>
          </div>
          <div className="flex-1 flex flex-col xl:items-center">
            <div>
              <div className="font-primary text-xl uppercase tracking-[0.08em] mb-6">
                {links.title}
              </div>
              <ul className="flex flex-col gap-y-4 text-[#dbddbdb]">
                {links.items.map((item, index) => {
                  const { href, name } = item;
                  return (
                    <li key={index}>
                      <a href={href} className="hover:text-white transition">
                        {name}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex-1">
            <div className="font-primary text-xl uppercase tracking-[0.08] mb-6">
              {program.title}
            </div>
            <ul className="flex flex-col gap-y-4 text-[#dbdbdb]">
              {program.items.map((item, index) => {
                return <li key={index}>{item.name}</li>;
              })}
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
