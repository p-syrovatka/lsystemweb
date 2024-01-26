import React from "react";
import { Link } from "react-router-dom";
import FractalTree from "../GeneratedLsystems/FractalTree";
import BufferTest from "../GeneratedLsystems/BufferTEst";


function Theoryhero() {
  return (
    <section>
      <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
        <div className="flex flex-wrap items-center mx-auto max-w-7xl">
          <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
            <div>
              <div className="relative w-full max-w-lg">
                <div className="absolute top-0 rounded-full bg-violet-300 -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                <div className="absolute rounded-full bg-fuchsia-300 -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                <div className="relative">
                  <div className="relative" style={{ userSelect: "none" }}>
                   {/* <FractalTree />*/}
                   <BufferTest />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <span className="mb-8 text-xs font-bold tracking-widest text-blue-600 uppercase">
              {" "}
              Your tagline{" "}
            </span>
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-600 md:text-7xl lg:text-5xl">
              L-systems convert strings into fractals
            </h1>
            <p className="mb-8 text-base leading-relaxed text-left text-gray-500">
              The recursive nature of the L-system rules leads to
              self-similarity and thereby, fractal-like forms are easy to
              describe with an L-system. Plant models and natural-looking
              organic forms are easy to define, as by increasing the recursion
              level the form slowly 'grows' and becomes more complex.
              Lindenmayer systems are also popular in the generation of
              artificial life.
            </p>
            <div className="mt-0 lg:mt-6 max-w-7xl sm:flex">
              <div className="mt-3 rounded-lg sm:mt-0">
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Theoryhero;
