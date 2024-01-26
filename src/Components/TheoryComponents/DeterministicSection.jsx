import DragonCurve from "../GeneratedLsystems/DragonCurve";
import dragoncurveimg from "../../assets/dragoncurveimg.png";

function DeterministicSection() {
  return (
    <div className="relative isolate overflow-hidden bg-white px-4 py-12 sm:py-16  max-w-7xl mx-auto lg:overflow-visible md:px-12 lg:px-24lg:py-24">
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <svg
          className="absolute left-[max(50%,25rem)] top-0 h-[64rem] w-[128rem] -translate-x-1/2 stroke-gray-200 [mask-image:radial-gradient(64rem_64rem_at_top,white,transparent)]"
          aria-hidden="true">
          <defs>
            <pattern
              id="e813992c-7d03-4cc4-a2bd-151760b470a0"
              width="200"
              height="200"
              x="75%"
              y="-35"
              patternUnits="userSpaceOnUse">
              <rect
                rx="20"
                height="200"
                width="200"
                stroke="rgba(0,0,1,0.2)"
                fill="none"
              />
            </pattern>
          </defs>
          <svg x="45.72%" y="-35" className="overflow-visible hidden sm:block">
            <rect
              rx="20"
              height="200"
              width="200"
              stroke="#rgba(108, 18, 72)"
              fill="rgba(108, 18, 72,0.2)"
            />
          </svg>
          <rect
            width="100%"
            height="100%"
            strokeWidth="0"
            fill="url(#e813992c-7d03-4cc4-a2bd-151760b470a0)"
          />
        </svg>
      </div>
      <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2 lg:items-start lg:gap-y-10">
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-1 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="lg:max-w-lg">
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Deterministic X stochastic
              </h1>
              <p className="mt-6 text-xl leading-8 text-gray-700">
                Aliquet nec orci mattis amet quisque ullamcorper neque, nibh
                sem. At arcu, sit dui mi, nibh dui, diam eget aliquam. Quisque
                id at vitae feugiat egestas.
              </p>
            </div>
          </div>
        </div>
        <div className="-ml-12 -mt-12 p-12 lg:sticky lg:top-4 lg:col-start-2 lg:row-span-2 lg:row-start-1 lg:overflow-hidden">
          <img 
          className="relative mx-auto lg:max-w-none rounded-2xl shadow-xl"
          src={dragoncurveimg} alt="dragoncurve" />
        </div>
        <div className="lg:col-span-2 lg:col-start-1 lg:row-start-2 lg:mx-auto lg:grid lg:w-full lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8">
          <div className="lg:pr-4">
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Deterministic L-systems
              </p>
              <p>
                Deterministic L-Systems follow a precise set of rules with each
                iteration. The evolution of the system is entirely determined by
                these fixed rules, leading to a predictable and reproducible
                outcome. The deterministic nature makes them suitable for
                creating structured and geometric patterns. These systems are
                particularly well-suited for applications where repeatability
                and precision are crucial.
              </p>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Rules are strictly defined and deterministic.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Reproducible outcomes with each iteration.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Well-suited for geometric and structured patterns.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Often used in architectural design and formalized
                      simulations.
                    </strong>{" "}
                  </span>
                </li>
              </ul>
            </div>
            <div className="max-w-xl text-base leading-7 text-gray-700 lg:max-w-lg pt-10">
              <p className="text-base font-semibold leading-7 text-indigo-600">
                Stochastic L-Systems
              </p>
              <p>
                Stochastic L-Systems introduce an element of randomness into the
                rule-based evolution process. Unlike their deterministic
                counterparts, stochastic L-Systems incorporate probability
                distributions for rule applications. This introduces
                variability, leading to more organic and natural-looking
                patterns. Stochastic L-Systems are commonly employed in
                applications where randomness and irregularity contribute to the
                desired aesthetic or simulation.
              </p>
              <ul role="list" className="mt-8 space-y-4 text-gray-600">
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Rules include probabilities, introducing randomness.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Varied outcomes with each iteration.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Ideal for creating organic and natural-looking patterns.
                    </strong>{" "}
                  </span>
                </li>
                <li className="flex gap-x-3">
                  <svg
                    class="mt-1 h-5 w-5 flex-none text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    aria-hidden="true">
                    <path d="M12 23a1 1 0 0 1-.78-.38l-8-10c-.29-.37-.29-.88 0-1.25l8-9.99c.38-.47 1.18-.47 1.56 0l8 10c.29.37.29.88 0 1.25l-8 10a1 1 0 0 1-.78.38ZM5.28 12 12 20.4l6.72-8.4L12 3.6 5.28 12Z"></path>
                  </svg>
                  <span>
                    <strong className="font-semibold text-gray-900">
                      Widely used in generative art, natural simulations, and
                      procedural content generation.
                    </strong>{" "}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DeterministicSection;
