import React from "react";
import { Icon } from "@iconify/react";
import Rectangle1 from "../../assets/images/Rectangle1.png";
import Rectangle2 from "../../assets/images/Rectangle2.png";
import Rectangle3 from "../../assets/images/Rectangle3.png";
import Rectangle4 from "../../assets/images/Rectangle4.png";
import Rectangle5 from "../../assets/images/Rectangle5.png";
import Left from "../../assets/images/coin left.png";
import Right from "../../assets/images/coin right.png";
import Coins from "../../assets/images/coin pot.png";

export default function Hero() {
  return (
    <div className="relative">
      {/* <Icon
        className="absolute right-[180px] top-[50px]"
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
      /> */}
      <div className="text-white text-center mt-[53px]  mx-5 text-[70px] font-Poppins not-italic lg:mx-[284px]">
        <div className="font-light leading-[91%] tracking-[-1.5%]">
          Unlock to
        </div>
        <div className="font-bold leading-[63.7px] tracking-[-0.015em]">
          Power your dreams!
        </div>
      </div>
      <div className="text-white text-center font-inter mt-[23px] mb-[24px] not-italic font-normal text-[29.4318px]">
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
      <a className="mt-[44px] mx-auto text-white flex w-[225px] h-[56px] justify-between flex-row py-[7px] px-4 not-italic items-center bg-[#ECAB03] rounded gap-[3] font-inter">
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
      <div className="">
        {/* <div className="spinner relative rounded-full h-[60vh] w-[60vh]"> */}
        {/* <div className="one absolute w-[121.14px] h-[744.46px] top-[-120px] left-[96.57px]"></div> */}
        {/* <img className="absolute " src={Rectangle1} alt="rectangle1" /> */}
        {/*<img className="absolute" src={Rectangle2} alt="rectangle2" />
           <img className="absolute" src={Rectangle3} alt="rectangle3" />
          <img className="absolute" src={Rectangle4} alt="rectangle4" />
          <img className="absolute" src={Rectangle5} alt="rectangle5" /> */}
        {/* </div> */}

        <div className="relative">
          <img className="animate-bounce w-[62.51px] h-[94.92px] absolute left-[450px]" src={Left} alt="left" />
          <img className="animate-bounce w-[62.51px] h-[94.92px] absolute right-[450px] top-[40px]" src={Right} alt="left" />
        </div>

        <div className="">
          <img className="w-[200px] h-[35px] mx-auto" src={Coins} alt="coin" />
        </div>
      </div>
    </div>
  );
}
