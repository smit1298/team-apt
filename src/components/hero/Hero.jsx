import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Icon } from "@iconify/react";
import Spin from "../../assets/images/spinol.png";
import Left from "../../assets/images/coin left.png";
import Right from "../../assets/images/coin right.png";
import Coins from "../../assets/images/coin pot.png";

export default function Hero() {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div className="relative">
      <Icon
        className="absolute lg:right-[180px] top-[50px]"
        icon="mdi:star-four-points"
        width="14"
        color="white"
      />
      <Icon
        className="absolute left-[200px]"
        icon="mdi:star-four-points"
        color="#27ae60"
        width="12"
        height="12"
      />
      <Icon
        className="absolute right-[550px] top-[125px]"
        icon="mdi:star-four-points"
        color="#F49B0B"
        width="16"
        height="16"
      />
      <Icon
        className="absolute left-[480px] top-[600px]"
        icon="mdi:star-four-points"
        width="14"
        color="white"
      />
      <Icon
        className="absolute right-[550px] top-[225px]"
        icon="mdi:star-four-points"
        color="#F49B0B"
        width="16"
        height="16"
      />

      <div
        data-aos="fade-up"
        className="text-white text-center mt-[53px]  mx-5 text-[70px] font-Poppins not-italic lg:mx-[284px]"
      >
        <div className="font-light leading-[91%] tracking-[-1.5%]">
          Unlock to
        </div>
        <div className="font-bold leading-[63.7px] tracking-[-0.015em]">
          Power your dreams!
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-duration="1200"
        className="text-white text-center font-inter mt-[23px] mb-[24px] not-italic font-normal text-[29.4318px]"
      >
        <p className="leading-[111.5%] tracking-[ -0.06em]">
          Stand a chance to win <br />
          <span className="font-bold"> N3,000,000</span> everyday for the next 5
          days
        </p>
      </div>
      <div className="play flex flex-col items-start py-6 px-[27px] gap-4 rounded-lg mx-5 font-inter not-italic text-white lg:mx-[507px]">
        <p className="mt-6 mx-auto mb-4 font-bold text-base text-center leading-[160%]">
          🚀 How To Play
        </p>
        <div className="font-normal text-sm leading-[160px]">
          <ol className="ml-5 tracking-[-0.02em] ">
            <li className="ml-[27px] list-decimal">
              Guess the right combination of numbers
            </li>
            <li className="ml-[27px] list-decimal">
              Win <span className="font-bold">N3,000,000</span> instantly
            </li>
          </ol>
          <p className="ml-[27px] mb-4 mt-2">
            Sounds unbelievable? Well, guess right &amp; see for yourself!
          </p>
        </div>

        <div className="mx-[27px] rounded-[10px] text-xs font-normal leading-[160%] tracking-[-0.02em] bg-black-rgba flex flex-col justify-center items-end p-2.5 gap-3">
          <p>
            <span className="mr-26px">💡</span>
            <span className="m-[10px]">
              Think well before you guess. You have only 2 attempts per day and
              even after you wi, you can come back the next day to try for
              another jackpot!
            </span>
          </p>
        </div>
      </div>
      <a className="mt-[44px] mb-[300px] mx-auto text-white flex w-[225px] h-[56px] justify-between flex-row py-[7px] px-4 not-italic items-center bg-[#ECAB03] rounded gap-[3] font-inter">
        <p className="text-center ml-4 pl-4 my-auto font-semibold text-sm">
          Play The Game
        </p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
          role="img"
          width="1em"
          height="1em"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 24 24"
          className="mr-[23.5px]"
        >
          <path
            fill="none"
            stroke="white"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="m8 4l8 8l-8 8"
          />
        </svg>
      </a>

      <div className="relative flex">
        <div className="overflow-hidden h-[300px] bg-red-600">
           <img
          className="spinner absolute w-[300px] h-[600px] left-[555px]  top-[-300px]"
          src={Spin}
          alt="rectangle1"
        />
        </div>
       
        <img
          className="animate-bounce w-[62.51px] h-[94.92px] absolute left-[450px] top-[-100px]"
          src={Left}
          alt="left"
        />
        <img
          className="animate-bounce w-[62.51px] h-[94.92px] absolute right-[450px] top-[-103px]"
          src={Right}
          alt="left"
        />
        <img
          className="w-[200px] absolute h-[35px] left-[650px] mt-[-35px] mx-auto "
          src={Coins}
          alt="coin"
        />
      </div>
    </div>
  );
}
