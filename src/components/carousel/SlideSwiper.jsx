import PropType from "prop-types";
import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";
import "../../assets/style/App.css";

SlideSwiper.propTypes = {
  circuitPackages: PropType.array,
};

export default function SlideSwiper({ circuitPackages }) {
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
            modules={[Pagination, Autoplay]}
            grabCursor
            initialSlide={0}
            centeredSlides
            slidesPerView={1}
            speed={700}
            slideToClickedSlide
            pagination={{
              clickable: true,
            }}
            autoplay={{
              delay: 2400,
              disableOnInteraction: false,
            }}
            breakpoints={{
              320: { spaceBetween: 40 },
              650: { spaceBetween: 30 },
              1000: { spaceBetween: 20 },
            }}
            onSwiper={(swiper) => {
              swiperWrapperRef.current = swiper.wrapperEl;
            }}
          >
            {circuitPackages.map((circuitPackage, index) => (
              <SwiperSlide key={index}>
                <Link
                  key={index}
                  to={`/circuits/${circuitPackage.slug}`}
                  className={`group circuit-group relative circuit-group shadow-xl block bg-black rounded-3xl overflow-hidden ${
                    index % 2 === 0 ? "lg:rotate-2" : "lg:-rotate-2"
                  }`}
                >
                  <img
                    alt={circuitPackage.name}
                    src={circuitPackage.image}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                  />

                  <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-bold tracking-widest text-rose-600 uppercase">
                      {circuitPackage.name}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">
                      {circuitPackage.title}
                    </p>

                    <div className="mt-48 lg:mt-56">
                      <div className="circuit-content">
                        <p className="text-sm font-semibold text-white">
                          Lorem ipsum dolor, sit amet consectetur adipisicing
                          elit. Repudiandae?
                        </p>
                        <Link
                          to={`/circuits/${circuitPackage.slug}`}
                          className="text-slate-50 px-3 rounded-xl py-2 bg-rose-600"
                        >
                          Explorer
                        </Link>
                      </div>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </main>
    </React.Fragment>
  );
}
