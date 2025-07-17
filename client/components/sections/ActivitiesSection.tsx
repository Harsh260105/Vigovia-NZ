import React, { useState } from "react";

interface Activity {
  name: string;
  image: string;
  description: string;
  locations: string[];
  price: string;
  duration: string;
}

interface ActivitiesSectionProps {
  activities: Activity[];
}

export default function ActivitiesSection({ activities }: ActivitiesSectionProps) {
  const [selectedActivity, setSelectedActivity] = useState<string | null>(null);

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-left mb-12">
          <h2 className="text-3xl font-bold tracking-tight">
            <span className="text-black">Top </span>
            <span className="text-purple-700">Activites And Attractions</span>
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-x-4 sm:gap-x-6 gap-y-8">
          {activities.slice(0, 10).map((activity) => (
            <button
              key={activity.name}
              onClick={() => setSelectedActivity(activity.name)}
              className="group relative w-full h-36 rounded-3xl overflow-hidden shadow-lg transition-transform transform hover:-translate-y-1 duration-200"
            >
              {/* Background Image */}
              <img
                src={activity.image}
                alt={activity.name}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
              />

              {/* Gradient Overlay for Text Readability */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>

              {/* Text */}
              <span className="absolute bottom-4 left-0 right-0 text-white text-base font-semibold text-center">
                {activity.name}
              </span>
            </button>
          ))}
        </div>

        {/* Activity Popup */}
        {selectedActivity &&
          (() => {
            // Find the full activity object from the selected name
            const activity = activities.find((a) => a.name === selectedActivity);
            if (!activity) return null;

            return (
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="modal-title"
                className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm p-4"
                onClick={() => setSelectedActivity(null)} // Close modal on backdrop click
              >
                <div
                  className="relative w-full max-w-4xl max-h-[90vh] bg-white rounded-xl shadow-2xl flex flex-col md:flex-row overflow-hidden overflow-y-auto"
                  onClick={(e) => e.stopPropagation()} // Prevent modal content click from closing it
                >
                  {/* --- Image Column --- */}
                  <div className="w-full md:w-1/2">
                    <img
                      src={activity.image}
                      alt={activity.name}
                      className="w-full h-64 md:h-full object-cover"
                    />
                  </div>

                  {/* --- Content Column --- */}
                  <div className="w-full md:w-1/2 flex flex-col p-8 overflow-y-auto">
                    {/* Close Button */}
                    <button
                      aria-label="Close modal"
                      onClick={() => setSelectedActivity(null)}
                      className="absolute top-4 right-4 text-gray-400 hover:text-gray-800 transition-colors"
                    >
                      <svg
                        className="w-6 h-6"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M6 18L18 6M6 6l12 12"
                        ></path>
                      </svg>
                    </button>

                    {/* Header */}
                    <h3
                      id="modal-title"
                      className="text-3xl font-bold text-gray-900 mb-4"
                    >
                      {activity.name}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {activity.description}
                    </p>

                    {/* Details Grid */}
                    <div className="grid grid-cols-2 gap-x-6 gap-y-4 mb-6 border-t border-b border-gray-200 py-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          Price Range
                        </h4>
                        <p className="text-purple-700 text-xl font-bold">
                          {activity.price}
                        </p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
                          Duration
                        </h4>
                        <p className="text-gray-800 text-lg">
                          {activity.duration}
                        </p>
                      </div>
                    </div>

                    {/* Locations */}
                    <div className="mb-auto">
                      <h4 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-3">
                        Popular Locations
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {activity.locations.map((location, idx) => (
                          <span
                            key={idx}
                            className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {location}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                      <button className="flex-1 bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg font-semibold transition-all transform shadow-md">
                        Book Now
                      </button>
                      <button className="flex-1 border-2 border-gray-300 text-gray-700 hover:bg-gray-100 hover:border-gray-400 py-3 px-6 rounded-lg font-semibold transition-colors">
                        Learn More
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            );
          })()}
      </div>
    </section>
  );
}