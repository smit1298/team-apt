import React from "react";
import Logo from "../../assets/images/Logo.png";

export default function Nav() {
  return (
    <div className="flex sticky top-0 justify-between px-[19px] py-[1px] lg:px-[104px] lg:pt-[37px] ">
      <img className="w-[40.24px] h-10" src={Logo} alt="logo" />

      <div className="flex">
        <div className="bg-[#9b51e0] rounded-lg outline-slate-700 outline-4 mr-[10px]">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            role="img"
            width="40"
            height="40"
            preserveAspectRatio="xMidYMid meet"
            viewBox="0 0 24 24"
            className="mx-[6.75px] my-[6px] "
          >
            <path
              fill="white"
              d="M19 3h-1V1h-2v2H8V1H6v2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14c1.11 0 2-.89 2-2V5c0-1.11-.89-2-2-2m0 16H5V9h14v10m0-12H5V5h14M7 11h5v5H7"
            />
          </svg>
        </div>

        <div className="">
          <p className="text-white font-inter not-italic font-bold leading-[109%] text-center text-large">Day 1</p>
          <p className="text-white-rgba text-sm font-normal">of 5</p>
        </div>
      </div>
    </div>
  );
}
