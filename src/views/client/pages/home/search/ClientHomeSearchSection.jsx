import React from "react";

export default function ClientHomeSearchSection() {
  return (
    <React.Fragment>
      <section className="mx-auto max-w-screen-2xl flex justify-center -mt-24 ">
        <div className="z-30 gap-12 p-7 w-full lg:w-4/6 bg-slate-50 rounded-3xl shadow-xl">
          <h3 className=" text-center text-2xl lg:text-4xl font-semibold text-gray-900/90">
            Planifiez votre aventure
          </h3>
          <p className="uppercase text-center text-gray-700/90 font-semibold my-4">
            Trouvez votre circuit Par thème Par destination
          </p>
          <div className="grid items-end justify-center grid-cols-1 gap-4 lg:grid-cols-3 lg:gap-8">
            <div>
              <label htmlFor="Headline">
                <span className="text-sm font-medium text-gray-700">Thème</span>

                <select
                  name="Headline"
                  className="mt-0.5 w-full input-global input-color"
                >
                  <option value="">Please select</option>
                  <option value="JM">John Mayer</option>
                  <option value="SRV">Stevie Ray Vaughn</option>
                  <option value="JH">Jimi Hendrix</option>
                  <option value="BBK">B.B King</option>
                  <option value="AK">Albert King</option>
                  <option value="BG">Buddy Guy</option>
                  <option value="EC">Eric Clapton</option>
                </select>
              </label>
            </div>

            <div>
              <label htmlFor="Headline">
                <span className="text-sm font-medium text-gray-700">
                  Séjours
                </span>

                <select
                  name="Headline"
                  className="mt-0.5 w-full input-global input-color"
                >
                  <option value="">Please select</option>
                  <option value="JM">John Mayer</option>
                  <option value="SRV">Stevie Ray Vaughn</option>
                  <option value="JH">Jimi Hendrix</option>
                  <option value="BBK">B.B King</option>
                  <option value="AK">Albert King</option>
                  <option value="BG">Buddy Guy</option>
                  <option value="EC">Eric Clapton</option>
                </select>
              </label>
            </div>

            <button className="uppercase inline-block rounded-xl bg-rose-600 py-3 text-sm font-medium text-white transition hover:shadow-2xl focus:ring-3 focus:outline-hidden">
              Rechercher
            </button>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
}
