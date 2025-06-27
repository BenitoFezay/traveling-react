import React from "react";
import Madagascar from "../../../../../assets/images/island.jpg";

const ParallaxSection = () => {
  return (
    <div className="w-full h-auto">
      <div className="absolute inset-0 bg-black/10 z-0"></div>
      <section
        className="h-[52vh] md:h-[70vh] bg-fixed bg-center bg-cover text-white flex items-center justify-center text-3xl"
        style={{
          backgroundImage: `url('${Madagascar}')`,
        }}
      >
        <div className="w-full h-full bg-black/50">
          <div className="mx-auto mt-7 md:mt-12 text-center max-w-2xl">
            <div className="w-full flex justify-center items-center">
              <figure className="max-w-screen-md mx-auto px-1">
                <svg
                  className="h-12 mx-auto mb-3 text-rose-600"
                  viewBox="0 0 24 27"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
                    fill="currentColor"
                  ></path>
                </svg>
                <p className="text-sm font-semibold lg:text-lg text-white">
                  Voyager avec Mada Nomads a été une expérience inoubliable. Dès
                  notre arrivée à Antananarivo, l'équipe était là, accueillante,
                  souriante, et toujours aux petits soins. Chaque étape de notre
                  circuit – des Tsingy de Bemaraha aux plages paradisiaques de
                  Mangily – était parfaitement organisée. Les guides étaient
                  passionnés et connaissaient Madagascar comme leur poche. Nous
                  avons découvert une culture riche, une nature époustouflante
                  et des moments de partage authentiques avec la population
                  locale. Merci à toute l’équipe de Mada Nomads pour ce voyage
                  hors du temps. On reviendra, c’est sûr !
                </p>
                <figcaption className="flex items-center justify-center mt-6 space-x-3">
                  <img
                    className="w-7 h-7 rounded-full"
                    src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/michael-gouch.png"
                    alt="Michael Gough"
                  />
                  <div className="flex items-center divide-x-2 divide-slate-50">
                    <div className="pr-3 font-medium text-white">
                      <h4>Micheal Gough</h4>
                    </div>
                  </div>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ParallaxSection;
