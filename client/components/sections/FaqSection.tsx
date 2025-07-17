import React from "react";

interface FAQ {
  question: string;
  answer: string;
}

interface FaqSectionProps {
  faqs: FAQ[];
}

export default function FaqSection({ faqs }: FaqSectionProps) {
  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl font-bold mb-10">
          Frequently Asked <span className="text-purple-700">Questions</span>
        </h2>

        <div className="grid md:grid-cols-2 gap-y-6 justify-items-center">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white hover:scale-101 duration-300 max-w-[550px] hover:shadow-xl rounded-lg shadow-md p-6">
              <div className="flex items-start mb-3">
                <div className="flex-shrink-0 mr-4">
                  <div className="w-8 h-8 bg-purple-100 rounded-md flex items-center justify-center">
                    <svg
                      className="w-5 h-5 text-purple-800"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </div>
                </div>
                <h3 className="text-base font-medium text-gray-800">{faq.question}</h3>
              </div>
              <p className="text-sm text-gray-600 ml-12">{faq.answer}</p>
            </div>
          ))}
        </div>

        <div className="flex justify-center mt-10">
          <button className="bg-purple-700 hover:bg-purple-800 text-white px-8 py-3 rounded-full font-medium transition-colors">
            Explore Tours
          </button>
        </div>
      </div>
    </section>
  );
}