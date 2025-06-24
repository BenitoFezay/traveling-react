import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
// import "../../assets/style/App.css";

import Maki from "../../assets/images/03.webp";
import Mangily from "../../assets/images/04.webp";
import Isalo from "../../assets/images/Isalo.webp";
import Madagascar from "../../assets/images/Madagascar.webp";
import CircuitDayDetails from "../../views/client/pages/circuits/CircuitDayDetails";

const slides = [
  {
    title: "Introduction au Projet",
    image: Madagascar,
  },
  {
    title: "Objectifs et Problématique",
    image: Isalo,
  },
  {
    title: "Architecture Technique",
    image: Maki,
  },
  {
    title: "Architecture Technique",
    image: Mangily,
  },
  {
    title: "Architecture Technique",
    image: Isalo,
  },
];

export default function SlideSwiper() {
  const swiperWrapperRef = React.useRef(null);

  function adjustMargin() {
    const screenWidth = window.innerWidth;

    if (swiperWrapperRef.current) {
      swiperWrapperRef.current.style.marginLeft =
        screenWidth <= 520
          ? "0px"
          : screenWidth <= 650
          ? "-50px"
          : screenWidth <= 1000
          ? "-100px"
          : "-150px";
    }
  }

  useEffect(() => {
    adjustMargin();
    window.addEventListener("resize", adjustMargin);
    return () => {
      window.removeEventListener("resize", adjustMargin);
    };
  }, []);

  return (
    <React.Fragment>
      <main>
        <div className="container">
          <Swiper
            modules={[Pagination]}
            grabCursor
            initialSlide={2}
            centeredSlides
            slidesPerView={4}
            speed={700}
            slideToClickedSlide
            pagination={{ clickable: true }}
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperWrapperRef.current = swiper.wrapperEl;
            }}
          >
            {slides.map((slide, index) => (
              <SwiperSlide key={index}>
                <CircuitDayDetails
                  image={slide.image}
                  title={"Titre de sejour"}
                  description={"Description"}
                />
                {/* <Link to="#" className="group relative block bg-black">
                  <img
                    alt=""
                    src={slide.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="invisible text-sm font-bold tracking-widest text-pink-800 uppercase">
                      Maki
                    </p>
                    <p className="invisible text-sm font-bold tracking-widest text-pink-800 uppercase">
                      Maki
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">
                      Tony Wayne
                    </p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                      <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                        <p className="text-sm text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Omnis perferendis hic asperiores quibusdam
                          quidem voluptates doloremque reiciendis nostrum harum.
                          Repudiandae?
                        </p>
                      </div>
                    </div>
                  </div>
                </Link> */}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </React.Fragment>
  );
}
