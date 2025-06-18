import React from "react";
import { Link } from "react-router-dom";

import MadaNomadsLarge from "../../assets/Logo/mada_nomads_large.png";

export default function LogoLarge() {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={MadaNomadsLarge} className="size-32" alt="logo" />
      </Link>
    </React.Fragment>
  );
}
