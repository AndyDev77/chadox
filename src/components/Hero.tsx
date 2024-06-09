"use client";
import { heroData } from "@/constants";
import { ChevronRight } from "lucide-react";

const Hero = () => {
  const { title, subtitle, btnText } = heroData;
  const handleDownload = () => {
    // Créer le lien vers le fichier PDF
    const pdfPath = "/pdf/cv.pdf";
    const a = document.createElement("a");
    a.href = pdfPath;
    a.download = "Thomas_Delangle.pdf";
    // Déclencher le téléchargement du fichier PDF
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  return (
    <section
      className="bg-hero bg-cover bg-center min-h-[40vh] lg:h-[948px] bg-no-repeat relative mt-[120px] lg:mt-[150px]"
      id="hero"
    >
      <div className="container mx-auto min-h-[40vh] lg:h-full flex items-center justify-center xl:justify-end">
        <div className="text-white text-center lg:text-left lg:max-w-[640px]">
          <h1 className="h1">{title}</h1>
          <p className="mb-8 lg:mb-16 max-w-lg leading-relaxed">{subtitle}</p>
          <div>
            <button
              className="btn btn-sm lg:btn-lg btn-outline mx-auto lg:mx-0"
              onClick={handleDownload}
            >
              {btnText}
              <div className="text-xl">
                <ChevronRight />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
