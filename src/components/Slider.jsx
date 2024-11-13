import React, { useState, useEffect } from 'react'
import { IoChevronBack } from "react-icons/io5";
import { IoChevronForward } from "react-icons/io5";
import { Link } from 'react-router-dom';

const Slider = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const sliders = [
        {
            url: "https://premium.goauto.com.au/wp-content/uploads/2021/01/Driva-offers-car-loan-options_FEATURE-1024x301.jpg",
        },
        {
            url: "https://s3.amazonaws.com/cka-dash/071-0822-CJ145/slider2.jpg",
        },
        {
            url: "https://wallpapers.com/images/hd/smoky-black-jaguar-car-mo8qcbtmrlsq54ca.jpg",
        },
    ];
    useEffect(() => {
        setTimeout(() => {
            const IsFirsst = currentIndex === 0;
            const newvalue = IsFirsst ? 1 : 0;
            setCurrentIndex(newvalue);
        }, 3000);
    }, [currentIndex]);
    const ChangeSlide = () => {
        const IsFirsstSlide = currentIndex === 0;
        const newIndex = IsFirsstSlide ? 1 : 0;
        setCurrentIndex(newIndex);
    };

    return (
        <div className='max-w-[1540px] h-[550px] w-full group'>
            <div style={{ backgroundImage: `url(${sliders[currentIndex].url})`, backgroundSize: "cover" }} className='w-full h-full bg-center bg-cover transition-all duration-1000 ease-in-out'>
                <div className='bg-gradient-to-r from-black/80 via-black/50 to-primary/50 h-full'>
                {/* <div className="search-button relative group pt-40 ms-4">
                    <input type="text" className="rounded-3xl p-4 w-[560px] ms-32 mt-5" placeholder="Search here..."></input>
                    <button className="absolute bg-primary rounded-[50px] ease-in-out duration-500 py-4 px-8 text-white -translate-x-[100px] mt-5 group-hover:-translate-x-[50px]">
                        {" "}
                        Search
                    </button>
                </div> */}
                {/* <div className="slider-heading w-[560px]"
                    style={{ filter: "brightness(1.5)" }}>
                    <h2 className="text-[30px] text-secondary font-extrabold duration-1000">
                        Click here to buy & sell
                    </h2>
                </div> */}
                <div className="buy-sell-car relative group flex justify-center pt-52 space-x-5">
                    <Link to="/buy-car"><button class="bg-secondary hover:bg-primary text-black font-extrabold py-4 px-8 border-b-4 border-primary hover:border-primary hover:text-secondary rounded text-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                        Buy Car
                    </button></Link>
                    <Link to="/sell-car"><button class="bg-secondary hover:bg-primary text-black font-extrabold py-4 px-8 border-b-4 border-primary hover:border-primary hover:text-secondary rounded text-2xl hover:-translate-y-1 hover:scale-110 duration-300">
                        Sell Car
                    </button></Link>
                </div>
            </div>
            <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%]  p-1  cursor-pointer">
                <IoChevronBack
                    className="p-1 group-hover:translate-x-10 -translate-x-[10px] duration-500 text-black bg-white rounded-full "
                    size={30}
                    onClick={ChangeSlide}
                />
            </div>
            <div className="opacity-0 group-hover:opacity-100  duration-700 ease-in-out absolute -translate-y-[810%] p-1 ms-5 right-5 cursor-pointer">
                <IoChevronForward
                    className="p-1  text-black bg-white rounded-full group-hover:-translate-x-10 translate-x-[10px] duration-500"
                    size={30}
                    onClick={ChangeSlide}
                />
            </div>
        </div>
        </div>
    )
}

export default Slider
