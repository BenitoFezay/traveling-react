import React from "react";
import { Outlet } from "react-router-dom";

// COMPONENTS
import IndexHeader from "../../../components/header/IndexHeader";
import IndexFooter from "../../../components/footer/IndexFooter";

// MAIN FUNCTION : CLIENT LAYOUT
export default function ClientLayout() {
  return (
    <React.Fragment>
      <div className="min-h-screen xl:flex bg-slate-50">
        <div className={`flex-1 transition-all duration-300 ease-in-out`}>
          <IndexHeader />

          <div className="mx-auto pb-24 lg:pb-0">
            <Outlet />
          </div>
          <IndexFooter />
        </div>
      </div>
    </React.Fragment>
  );
}
