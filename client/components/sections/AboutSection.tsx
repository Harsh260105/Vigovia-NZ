import React from "react";

interface FeatureCard {
  title: string;
  description: string;
  icon: React.ReactNode;
}

interface AboutSectionProps {
  featureCards: FeatureCard[];
}

export default function AboutSection({ featureCards }: AboutSectionProps) {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Title */}
        <div className="mb-8 text-left">
          <h2 className="text-3xl font-bold text-gray-900 tracking-tight">
            <span className="text-purple-700">About</span> New Zealand
          </h2>
        </div>

        {/* Main container */}
        <div className="relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 sm:gap-8 items-start">
            {/* Left Column: Large Image */}
            <div className="lg:col-span-5 h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px] rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1504280317859-9c6cce36bca8?q=80&w=786&auto=format&fit=crop"
                alt="Hiker in New Zealand mountains"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Center/Right Column */}
            <div className="relative z-10 lg:col-span-7">
              <div className="relative bg-white shadow-sm rounded-2xl p-4 sm:p-6 overflow-hidden">
                <div
                  className="absolute top-[-6rem] right-[-2rem] w-[15rem] sm:w-[20rem] md:w-[25rem] h-[15rem] sm:h-[20rem] md:h-[25rem] rounded-full bg-cover z-0"
                  style={{
                    backgroundImage: `url('../mountain.png')`,
                  }}
                ></div>

                <div className="relative z-10">
                  <div className="ml-5 mt-2">
                    <div className="w-12 h-12 mt-3 scale-110 rounded-full flex-shrink-0 flex items-center justify-center overflow-hidden">
                      <img
                        src="../newzealand-logo.jpg"
                        alt="New Zealand Logo"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>
                  <div className="ml-3 mt-5">
                    <h3 className="text-xl font-bold text-violet-950 mb-3">
                      Your Gateway to New Zealand Adventures
                    </h3>
                    <p className="text-gray-600 leading-relaxed max-w-lg text-sm mb-3">
                      Welcome to New Zealand, a paradise of majestic mountains,
                      pristine beaches, and vibrant culture. From
                      adrenaline-pumping activities to tranquil natural wonders,
                      this land offers unforgettable experiences for every
                      traveler. Explore, indulge, and let New Zealand leave you
                      awestruck
                    </p>
                  </div>
                </div>
              </div>

              {/* Bottom Part: Feature Cards Grid */}
              {/* <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-5 mt-2">
                {featureCards.map((card, index) => (
                  <div key={index} className="bg-white p-6 rounded-2xl border border-gray-200 shadow-sm hover:shadow-md transition-shadow duration-300">
                    <div className="flex items-center justify-center mb-4">
                      <div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center">
                        {card.icon}
                      </div>
                    </div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2 text-center">
                      {card.title}
                    </h4>
                    <p className="text-sm text-gray-500 leading-relaxed text-center">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div> */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-5 gap-y-20 pt-16">
                {featureCards.map((card, index) => (
                  <div
                    key={index}
                    className="relative bg-white py-8 px-4 rounded-2xl border border-[#541C9C] text-center shadow-sm"
                  >
                    <div className="absolute top-0 left-1/2 -translate-y-[65%] -translate-x-1/2">
                      <div className="bg-white p-1 rounded-full">
                        <svg
                          version="1.0"
                          id="Layer_1"
                          xmlns="http://www.w3.org/2000/svg"
                          xmlnsXlink="http://www.w3.org/1999/xlink"
                          viewBox="0 0 64 64"
                          enableBackground="new 0 0 64 64"
                          xmlSpace="preserve"
                          fill="#321E5D"
                          className="w-16 h-16"
                        >
                          <path
                            fill="#321E5D"
                            d="M32,0C18.746,0,8,10.746,8,24c0,5.219,1.711,10.008,4.555,13.93c0.051,0.094,0.059,0.199,0.117,0.289l16,24 C29.414,63.332,30.664,64,32,64s2.586-0.668,3.328-1.781l16-24c0.059-0.09,0.066-0.195,0.117-0.289C54.289,34.008,56,29.219,56,24 C56,10.746,45.254,0,32,0z M32,32c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                          />
                        </svg>
                      </div>
                    </div>

                    <h4 className="font-bold text-violet-950 mb-2">
                      {card.title}
                    </h4>
                    <p className="text-xs text-gray-500 leading-relaxed">
                      {card.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
