import React from "react";
import DragonCurve from "./GeneratedLsystems/DragonCurve";

function Hero() {
    const textData = " An L-system or Lindenmayer system is a parallel rewriting system and a type of formal grammar. They were introduced Aristid Lindenmayer, a Hungarian theoretical biologist and botanist at the University of Utrecht. Lindenmayer used L-systems to describe the behaviour of plant cells and to model the growth processes of plant development."
    return (
        <div className="h-screen">
            <div className="flex flex-col md:grid grid-cols-2 justify-center pt-4 h-screen">
                <div className="p-4 mt-10">
                    <h1 className="text-3xl font-bold text-center">L-System Generator</h1>
                    <p className="text-center text-lg text-balance mt-4">{textData}</p>
                </div>
                <div className="w-full h-full flex">
                    <DragonCurve />
                </div>
            </div>
        </div>
    )
}

export default Hero;