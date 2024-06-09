"use client";
import { ProjectsData } from "@/constants";
import { ChevronRight } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import ModalVideo from "react-modal-video";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "../app/modalVideo.scss";
import ProjectsCard from "./ProjectsCard";

const Projects = () => {
  const { title, images } = ProjectsData;
  const pathname = usePathname();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");

  const openModal = (src: string) => {
    setIsModalOpen(true);
    setVideoSrc(src);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setVideoSrc("");
  };

  return (
    <section className="relative mb-12 xl:mb-48" id="projects">
      <div className="container mx-auto">
        <div className="max-w-[400px] mx-auto xl:mx-0 text-center xl:text-left mb-12 xl:h-[400px] flex flex-col justify-center items-center xl:items-start">
          <h2 className="h2 max-w-[370px]">{title}</h2>
          <p className="mb-8">Découvrez mes différents réalisations</p>
          <Link href="/projects">
            <button className="btn btn-sm btn-dark">
              Tous les projets
              <div className="text-xl">
                <ChevronRight />
              </div>
            </button>
          </Link>
        </div>
      </div>

      <div className="xl:max-w-[1000px] xl:absolute right-0 top-0">
        <Swiper
          className="h-[480px]"
          slidesPerView={1}
          breakpoints={{
            640: {
              slidesPerView: 2,
            },
          }}
          spaceBetween={30}
          modules={[Pagination]}
          pagination={{ clickable: true }}
        >
          {images.slice(0, 4).map((project, index) => (
            <SwiperSlide key={index}>
              <ProjectsCard project={project} openModal={openModal} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <ModalVideo channel="custom" isOpen={isModalOpen} url={videoSrc} onClose={closeModal} />
    </section>
  );
};

export default Projects;
