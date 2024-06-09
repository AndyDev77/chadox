"use client";

import { interviewData } from "@/constants";
// import { useState } from "react";
// import ModalVideo from "react-modal-video";
// import "../app/modalVideo.scss";
// import { FaPlay } from "react-icons/fa";

const Interview = () => {
  const { title, btnText } = interviewData;
  // const [isOpen, setIsOpen] = useState(false);

  return (
    <section className="bg-dark section bg-interview bg-no-repeat bg-cover bg-center lg:h-[812px]">
      <div className="container mx-auto h-full">
        <div className="flex flex-col justify-center h-full">
          <div className="flex flex-col items-start max-w-[880px">
            <h3 className="text-white text-[40px] lg:text-[60px] leading-[1.1] font-tertiary -tracking-[1.5px] capitalize mb-8">
              {title}
            </h3>
            {/* <div>
              <div
                onClick={() => setIsOpen(true)}
                className="flex text-white items-center gap-x-5 cursor-pointer hover:opacity-80 transition"
              >
                <div className="w-[70px] h-[70px] lg:w-[91px] lg:h-[91px] border border-white/40 rounded-full text-dark p-[5px] lg:p-[8px]">
                  <div className="bg-white w-full h-full rounded-full flex justify-center items-center">
                    <div className="pl-1">
                      <FaPlay />
                    </div>
                  </div>
                </div>
                <div className="font-primary uppercase">{btnText}</div>
              </div>
            </div>
            <ModalVideo
              channel="youtube"
              isOpen={isOpen}
              videoId="_l1mqYQuNf8"
              onClose={() => setIsOpen(false)}
            /> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Interview;
