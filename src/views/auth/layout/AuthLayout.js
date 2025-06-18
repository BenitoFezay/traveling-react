import React from "react";
import { Link, Outlet } from "react-router-dom";

export default function AuthLayout() {
  return (
    <React.Fragment>
      <div className="relative p-6 bg-slate-50 z-1 dark:bg-gray-900 sm:p-0">
        <div className="relative flex flex-col justify-center w-full h-screen lg:flex-row dark:bg-gray-900 sm:p-0">
          <Outlet />
          <div className="items-center hidden w-full h-full lg:w-1/2 bg-slate-100 dark:bg-slate-900/15 lg:grid">
            <div className="relative flex items-center justify-center z-1">
              <div className="flex flex-col items-center max-w-sm">
                <Link to="/" className="block">
                  Logo
                  {/* <img width={240} height={48} src={FoodinLogo} alt="Logo" /> */}
                </Link>
                <p className="relative mt-3 text-2xl text-center z-20 font-bold text-gray-400 dark:text-white/60 sm:text-3xl md:text-4xl">
                  The quick solution to your&nbsp;
                  <span className="text-rose-500">hunger!</span>
                </p>
              </div>
            </div>
          </div>
          <div className="fixed z-50 hidden bottom-6 right-6 sm:block">
            <button>change theme</button>
            {/* <UtilsAppThemeButton /> */}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
