import React, { useState } from "react";

export default function InformationSection() {
  const [selectedInfoTab, setSelectedInfoTab] = useState("important-info");

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold">
            Must-Know <span className="text-purple-800">Information</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="mb-8">
          <div className="flex space-x-2">
            {[
              { id: "important-info", label: "Important Info" },
              { id: "documents-required", label: "Documents Required" },
              { id: "airline-guidelines", label: "Airline Guidelines" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setSelectedInfoTab(tab.id)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                  selectedInfoTab === tab.id
                    ? "bg-purple-800 text-white"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        {selectedInfoTab === "important-info" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <div className="space-y-6">
              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 text-purple-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20 4H4C2.89543 4 2 4.89543 2 6V18C2 19.1046 2.89543 20 4 20H20C21.1046 20 22 19.1046 22 18V6C22 4.89543 21.1046 4 20 4Z" />
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Visa Validity Period:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        How long the visa is valid from the date of issue.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        The difference between single-entry, double-entry, and
                        multiple-entry visas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 text-purple-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <circle cx="12" cy="12" r="10"></circle>
                      <polyline
                        points="12 6 12 12 16 14"
                        stroke="white"
                        strokeWidth="2"
                      ></polyline>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Duration of Stay:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        Maximum length of stay per visit (e.g., 90 days within
                        a 180-day period for some visas).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        Rules for short stays, long stays, and temporary
                        residence visas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 text-purple-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Permitted Activities:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        What activities are allowed under the visa (e.g.,
                        work, study, tourism).
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        Restrictions on working on tourist or student visas.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="flex items-start">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-6 h-6 text-purple-800">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z"></path>
                      <line
                        x1="4.93"
                        y1="4.93"
                        x2="19.07"
                        y2="19.07"
                        stroke="white"
                        strokeWidth="2"
                      ></line>
                    </svg>
                  </div>
                </div>
                <div>
                  <h3 className="text-base font-semibold text-gray-900 mb-1">
                    Entry Ban or Restrictions:
                  </h3>
                  <ul className="text-sm text-gray-600 space-y-1">
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        Certain nationalities or individuals may face
                        restrictions, including travel bans or limited stay
                        periods.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-purple-800 mr-2">•</span>
                      <span>
                        Conditions for transit visas and whether they allow
                        temporary entry into the country.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        )}

        {selectedInfoTab === "documents-required" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>
                  Valid passport with at least 6 months validity beyond your
                  planned stay
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>Completed visa application form</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>Proof of sufficient funds for your stay</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>Return or onward ticket</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>Travel insurance documentation</span>
              </li>
            </ul>
          </div>
        )}

        {selectedInfoTab === "airline-guidelines" && (
          <div className="bg-white rounded-lg shadow-sm border border-gray-100 p-6">
            <ul className="text-sm text-gray-600 space-y-3">
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>
                  Check-in typically opens 3 hours before international
                  flights
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>
                  Baggage allowance varies by airline and ticket class
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>
                  Liquids in carry-on must be in containers of 100ml or less
                </span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-800 mr-2 font-bold">•</span>
                <span>
                  New Zealand has strict biosecurity rules - declare all food,
                  plant material, and animal products
                </span>
              </li>
            </ul>
          </div>
        )}
      </div>
    </section>
  );
}