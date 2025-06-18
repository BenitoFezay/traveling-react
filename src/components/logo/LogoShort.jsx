import React from "react";
import { Link } from "react-router-dom";

import MadaNomadsShort from "../../assets/Logo/mada_nomads_short.png";

export default function LogoShort() {
  return (
    <React.Fragment>
      <Link to="/">
        <img src={MadaNomadsShort} className="size-16" alt="logo" />
      </Link>
    </React.Fragment>
  );
}
