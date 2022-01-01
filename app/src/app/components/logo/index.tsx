import React from "react";
import CarLogoImg from "../../../assets/images/car-logo.png";

export default function Logo() {
  return (
    <div className="flex items-center">
      <div className="w-auto h-6 md:h-9">
        <img className="w-auto h-full" src={CarLogoImg} alt="logo" />
      </div>
      <div className="text-xl md:text-2xl font-bold text-black m-1">
        Yourcar.
      </div>
    </div>
  );
}
