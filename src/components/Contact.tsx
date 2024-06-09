"use client";

import { contactData } from "@/constants";
import useAlert from "@/hooks/useAlert";
import emailjs from "@emailjs/browser";
import dotenv from "dotenv";
import { Mail, MapPinned, Phone } from "lucide-react";
import { useRef, useState } from "react";
import Alert from "./Alert";
dotenv.config();

const Contact = () => {
  const { title, info } = contactData;
  const formRef = useRef(null);
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const { alert, showAlert, hideAlert } = useAlert();
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = ({ target: { name, value } }: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsLoading(true);

    emailjs
      .send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID ?? "service_mcmz545",
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID ?? "template_hgo6g6e",
        {
          from_name: form.name,
          to_name: "Thomas Delangle",
          from_email: form.email,
          to_email: "andyparkersmith@hotmail.fr",
          message: form.message,
        },
        process.env.NEXT_PUBLIC_EMAILJS_USER_ID ?? "rJsUVj_TBCeuTKak4"
      )
      .then(() => {
        setIsLoading(false);
        showAlert({ text: "Merci pour votre message 😃", type: "success" });

        setTimeout(() => {
          hideAlert();
          setForm({ name: "", email: "", message: "" });
        }, 6000);
      })
      .catch((error) => {
        setIsLoading(false);
        console.log(error);
        showAlert({ text: "Merci pour votre message 😃", type: "danger" });
      });
  };

  return (
    <section className="section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-y-16">
          <div className="flex-1">
            <h2 className="h2 max-w-[490px]">{title}</h2>
            <div className="flex flex-col xl:flex-row gap-x-5 gap-y-16 xl:gap-y-0">
              {info.map((item, index) => {
                const { title, subtitle, address, phone, email } = item;

                return (
                  <div key={index}>
                    <div className="font-primary uppercase font-medium text-xl mb-3">{title}</div>
                    <div className="mb-6 text-[#333] leading-[187%] tracking-[0.02em]">
                      {subtitle}
                    </div>
                    <div className="flex flex-col gap-y-3 mb-8">
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <MapPinned />
                        </div>
                        <div className="font-medium">{address.name}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <Phone />
                        </div>
                        <div className="font-medium">{phone.number}</div>
                      </div>
                      <div className="flex items-center gap-[10px]">
                        <div>
                          <Mail />
                        </div>
                        <div className="font-medium">{email.address}</div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="flex-1 xl:pl-[40px] flex justify-center items-center">
            <form className="flex flex-col gap-y-10 w-full" onSubmit={handleSubmit}>
              {alert.show && <Alert {...alert} />}
              <input
                type="text"
                name="name"
                id="name"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder="Votre nom et prénom"
                value={form.name}
                onChange={handleChange}
              />
              <input
                type="email"
                name="email"
                id="email"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder="Votre adresse mail"
                value={form.email}
                onChange={handleChange}
              />
              <input
                type="text"
                name="message"
                className="border-b border-dark placeholder:text-[#555] italic tracking-[0.06rem] outline-none pb-4"
                placeholder="Votre message"
                value={form.message}
                onChange={handleChange}
              />
              <button type="submit" className="btn btn-sm btn-dark self-start" disabled={isLoading}>
                {isLoading ? "Envoi..." : "Envoyer "}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
