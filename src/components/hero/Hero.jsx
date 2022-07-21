import React from "react";

export default function Hero() {
  return (
    <div>
      <div className="text-white text-center mt-[53px] mx-[284px] text-[70px] font-Poppins not-italic">
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
      <div className="play flex flex-col items-start py-6 px-[27px] gap-4 mx-[507px] rounded-lg bg-red-400 font-inter not-italic text-white">
        <p className="mt-6 mx-[155px] mb-4 font-bold text-base text-center leading-[160%]">
          🚀 How To Play
        </p>
        <div className="font-normal text-sm leading-[160px] ">
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
       <p className="text-center ml-4 pl-4 my-auto font-semibold text-sm">Play The Game</p>
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
    </div>
  );
}
