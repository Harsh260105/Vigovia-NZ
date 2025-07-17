import React, { useState } from "react";

interface Tour {
  name: string;
  duration: string;
  price: string;
  rating: number;
  type: string;
}

interface ToursSectionProps {
  tours: Tour[];
}

export default function ToursSection({ tours }: ToursSectionProps) {
  const [activeTab, setActiveTab] = useState("all");

  const filteredTours =
    activeTab === "all"
      ? tours
      : tours.filter((tour) => tour.type === activeTab);

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-7">
          <h2 className="text-3xl font-bold text-gray-900 mb-2">
            All <span className="text-primary">Tours</span>
          </h2>
          <p className="text-lg text-gray-600">
            Explore our curated selection of New Zealand tours and experiences
          </p>
        </div>

        {/* Tour Tabs */}
        <div className="flex justify-center mb-8">
          <div className="bg-gray-100 rounded-lg p-1 flex">
            {["all", "nature", "adventure", "food"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-md capitalize transition-colors ${
                  activeTab === tab
                    ? "bg-primary text-white"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Tours Table - Desktop */}
        <div className="hidden md:block bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm">
          {/* Table Header */}
          <div className="bg-primary text-white">
            <div className="grid grid-cols-5 gap-4 px-6 py-4">
              <div className="font-semibold text-sm uppercase tracking-wide">
                Tour Names
              </div>
              <div className="font-semibold text-sm uppercase tracking-wide text-center">
                Duration
              </div>
              <div className="font-semibold text-sm uppercase tracking-wide text-center">
                Price
              </div>
              <div className="font-semibold text-sm uppercase tracking-wide text-center">
                Rating
              </div>
              <div className="font-semibold text-sm uppercase tracking-wide text-center">
                Action
              </div>
            </div>
          </div>

          {/* Table Body */}
          <div>
            {filteredTours.map((tour, index) => (
              <div
                key={index}
                className={`grid grid-cols-5 gap-4 px-6 py-4 border-b border-gray-100 hover:bg-gray-50 transition-colors ${
                  index % 2 === 1 ? "bg-gray-25" : "bg-white"
                }`}
              >
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                  <span className="text-gray-900 font-medium">{tour.name}</span>
                </div>
                <div className="text-center text-gray-600">{tour.duration}</div>
                <div className="text-center text-primary font-bold">
                  {tour.price}
                </div>
                <div className="text-center">
                  <div className="flex items-center justify-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-600">{tour.rating}</span>
                  </div>
                </div>
                <div className="text-center">
                  <button className="bg-primary hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm transition-colors">
                    Book Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Tours Cards - Mobile */}
        <div className="md:hidden space-y-4">
          {filteredTours.map((tour, index) => (
            <div
              key={index}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm p-4"
            >
              <div className="flex items-center mb-3">
                <div className="w-3 h-3 bg-primary rounded-full mr-3 flex-shrink-0"></div>
                <span className="text-gray-900 font-medium">{tour.name}</span>
              </div>

              <div className="grid grid-cols-2 gap-2 text-sm mb-4">
                <div>
                  <span className="text-gray-500 block">Duration</span>
                  <span className="text-gray-700">{tour.duration}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Price</span>
                  <span className="text-primary font-bold">{tour.price}</span>
                </div>
                <div>
                  <span className="text-gray-500 block">Rating</span>
                  <div className="flex items-center">
                    <span className="text-yellow-400 mr-1">★</span>
                    <span className="text-gray-600">{tour.rating}</span>
                  </div>
                </div>
              </div>

              <button className="w-full bg-primary hover:bg-purple-800 text-white px-4 py-2 rounded-md text-sm transition-colors">
                Book Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
