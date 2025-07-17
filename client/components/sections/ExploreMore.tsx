import React from "react";

interface Destination {
  name: string;
  image: string;
}

interface ExploreMoreProps {
  destinations: Destination[];
}

export default function ExploreMore({ destinations }: ExploreMoreProps) {
  return (
    <section className="py-14 min-h-[500px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-2xl font-bold">
            Explore <span className="text-purple-700">More</span>
          </h2>
        </div>

        <div className="relative">
          {/* Destinations Slider */}
          <div className="flex space-x-14 px-4 overflow-x-auto hide-scrollbar py-4 no-scrollbar">
            {destinations.map((destination, index) => (
              <div key={index} className="flex flex-col items-center flex-shrink-0">
                <div className="w-32 h-32 scale-125 rounded-full overflow-hidden mb-3 shadow-sm">
                  <img
                    src={destination.image}
                    alt={destination.name}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
                <span className="text-xs font-medium mt-3 uppercase tracking-wide text-violet-950 text-center">
                  {destination.name}
                </span>
              </div>
            ))}
          </div>
          
          {/* Right Arrow */}
          {/* <button className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full w-10 h-10 flex items-center justify-center shadow-md hover:bg-gray-100 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>
      </div>
    </section>
  );
}