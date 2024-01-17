import React from "react";
import { useState } from "react";
import DragonCurve from "./GeneratedLsystems/DragonCurve";
import { smoothScroll } from "../Utils/SmoothScroll";

export const MousePositionContext = React.createContext([0, 0]);


function Hero() {
    const textData = " An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. They were introduced Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. Lindenmayer used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development."
    const [mousePosition, setMousePosition] = useState([0, 0]);

    const handleMouseMove = (e) => {
        const x = (e.clientX / window.innerWidth) * 2 - 1;
        const y = -(e.clientY / window.innerHeight) * 2 + 1;
        setMousePosition([x, y]);
    }


    return (
        <MousePositionContext.Provider value={mousePosition}>
            <main onMouseMove={handleMouseMove} className=" bg-white relative overflow-hidden h-screen w-full">

                <div className="bg-white mx-auto flex relative z-20 items-center overflow-hidden">
                    <div className=" px-6 flex relative py-16">
                        <div className="sm:w-2/5 lg:w-2/5 flex flex-col relative z-20 md:pt-16 lg:pt-20">
                            <span className="w-20 h-2 mb-12">
                            </span>
                            <h1 className="font-bebas-neue uppercase text-6xl sm:text-7xl font-black flex flex-col leading-none text-gray-800">
                                L-systems
                            </h1>
                            <p className="text-sm sm:text-base text-gray-700 pt-2">
                                {textData}
                            </p>
                            <div className="flex mt-8 gap-4">
                                <div className='flex items-center'>
                                    <button
                                        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                        type="button"

                                    >
                                        Learn more
                                    </button>
                                </div>
                                <div className='flex items-center'>
                                    <a >
                                        <button
                                            onClick={(e) => smoothScroll(e, 'lsysSection')}
                                            className="select-none rounded-lg bg-amber-950 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                            type="button"

                                        >
                                            try it
                                        </button>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="hidden sm:block sm:w-3/5 lg:w-3/5 relative">
                            <DragonCurve />
                        </div>
                    </div>
                </div>
            </main>
        </MousePositionContext.Provider>
    )
}

export default Hero;