import React, { useEffect } from "react";
import Spin from "../../assets/images/spinol.png";
import Left from "../../assets/images/coin left.png";
import Right from "../../assets/images/coin right.png";
import Coins from "../../assets/images/coin pot.png";

export default function Footer() {
    return (
        <div className="relative">
            <img
                className="w-[25%]  mx-auto"
                src={Coins}
                alt="coin"
            />
            <img
                className="animate-bounce absolute left-[30%] bottom-[80%] w-[10%] h-[94.92px] "
                src={Left}
                alt="left"
            />
            <img
                className="animate-bounce absolute right-[30%] bottom-[30%] w-[10%] h-[94.92px] "
                src={Right}
                alt="right"
            />  
            <img
                className="spinner absolute h-[300px] w-[300px] top-[-140px] mb-0 left-[40px] lg:w-[300px] lg:h-[600px] lg:left-[555px] lg:top-[-250px]"
                src={Spin}
                alt="rectangle1"
            />
            
          
        </div>
    )
}