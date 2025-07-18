import { useState, useRef, useEffect } from "react";

// Data for selectors
const countries = [{ code: "IND", name: "India", flag: "🇮🇳" }];
const languages = [{ code: "ENG", name: "English" }];

// A small component for the dropdown arrow to keep the code clean
const DropdownArrow = () => (
  <svg
    width="10"
    height="6"
    viewBox="0 0 10 6"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className="opacity-60"
  >
    <path
      d="M1 1L5 5L9 1"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function Header() {
  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0]);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [countryDropdownOpen, setCountryDropdownOpen] = useState(false);
  const [languageDropdownOpen, setLanguageDropdownOpen] = useState(false);
  
  const countryDropdownRef = useRef<HTMLDivElement>(null);
  const languageDropdownRef = useRef<HTMLDivElement>(null);
  
  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (countryDropdownRef.current && !countryDropdownRef.current.contains(event.target as Node)) {
        setCountryDropdownOpen(false);
      }
      if (languageDropdownRef.current && !languageDropdownRef.current.contains(event.target as Node)) {
        setLanguageDropdownOpen(false);
      }
    }
    
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header className="backdrop-blur-md py-0.5 bg-white/70 sticky top-0 z-40 border-b border-gray-100/30 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-3">
          {/* Left Side: Logo */}
          <div className="flex items-center">
            <img src="/vigovia-logo.svg" alt="Vigovia" className="h-8 sm:h-10 md:h-12" />
          </div>

          {/* Center: Navigation & Selectors - Desktop Only */}
          <div className="hidden md:flex items-center space-x-6">
            <nav className="flex items-center space-x-6">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm flex items-center space-x-2"
              >
                <span>Instant Visa</span> <DropdownArrow />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm flex items-center space-x-2"
              >
                <span>One Week Visa</span> <DropdownArrow />
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm flex items-center space-x-2"
              >
                <span>One Month Visa</span> <DropdownArrow />
              </a>
            </nav>

            {/* Country and Language Selectors */}
            <div className="flex items-center space-x-4 text-xs font-medium">
              <div className="relative" ref={countryDropdownRef}>
                <button 
                  className="flex flex-col items-start text-gray-600 hover:text-gray-800"
                  onClick={() => setCountryDropdownOpen(!countryDropdownOpen)}
                >
                  <div className="flex items-center space-x-1">
                    <span>Country</span> <DropdownArrow />
                  </div>
                  <div className="flex items-center space-x-1 pt-0.5">
                    <span className="text-lg">
                      <svg
                        width="17"
                        height="12"
                        viewBox="0 0 57 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_17_108)">
                          <rect
                            x="0.295471"
                            y="0.364258"
                            width="56.5819"
                            height="39.1353"
                            rx="4.89191"
                            fill="white"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.295532 27.2686H56.8775V39.4983H0.295532V27.2686Z"
                            fill="#00B731"
                          />
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M0.295532 0.364258H56.8775V12.594H0.295532V0.364258Z"
                            fill="#FF6C2D"
                          />
                          <path
                            d="M28.5817 23.8456C30.8138 23.8456 32.6232 22.0935 32.6232 19.9321C32.6232 17.7707 30.8138 16.0186 28.5817 16.0186C26.3496 16.0186 24.5401 17.7707 24.5401 19.9321C24.5401 22.0935 26.3496 23.8456 28.5817 23.8456Z"
                            fill="#507FF8"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_17_108">
                            <rect
                              x="0.295471"
                              y="0.364258"
                              width="56.5819"
                              height="39.1353"
                              rx="4.89191"
                              fill="white"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-500">
                      {selectedCountry.code}
                    </span>
                  </div>
                </button>
                
                {/* Country Dropdown */}
                {countryDropdownOpen && (
                  <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-gray-100">
                    <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">Select Country</div>
                    <div className="max-h-48 overflow-y-auto">
                      {countries.map((country) => (
                        <button
                          key={country.code}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50 flex items-center space-x-2"
                          onClick={() => {
                            setSelectedCountry(country);
                            setCountryDropdownOpen(false);
                          }}
                        >
                          <span>{country.flag}</span>
                          <span>{country.name}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="h-6 w-px bg-gray-200"></div>

              <div className="relative" ref={languageDropdownRef}>
                <button 
                  className="flex flex-col items-start text-gray-600 hover:text-gray-800"
                  onClick={() => setLanguageDropdownOpen(!languageDropdownOpen)}
                >
                  <div className="flex items-center space-x-1">
                    <span>Language</span> <DropdownArrow />
                  </div>
                  <div className="flex items-center space-x-1 pt-0.5">
                    <span>
                      <svg
                        width="18"
                        height="14"
                        viewBox="0 0 46 40"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M43.5709 11.6967C43.5709 4.1659 39.4558 2.2832 31.2257 2.2832H14.7655C6.53543 2.2832 2.42038 4.1659 2.42038 11.6967V33.2315C2.42038 35.9387 4.61917 38.1312 7.3264 38.1234L31.2257 38.0545C39.4558 38.0545 43.5709 34.2891 43.5709 26.7583V19.2275"
                          stroke="#171717"
                          strokeWidth="2.93515"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M30.2305 20.6214L31.5679 19.3977C31.6502 19.3224 31.7325 19.247 31.8148 19.1529C33.4814 17.5338 34.1398 15.6323 31.5679 13.2789C28.852 10.7937 26.7121 11.6033 24.8809 13.2789L14.2024 23.0501C13.7909 23.4266 13.4 24.1609 13.3177 24.688L12.7416 28.4158C12.5358 29.7713 13.5646 30.7127 15.046 30.5244L19.1198 29.9973C19.6959 29.922 20.4984 29.5642 20.9099 29.1877L24.9015 25.5353"
                          stroke="#171717"
                          strokeWidth="2.93515"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M23.3448 14.6719C24.2501 17.6277 26.7808 19.9623 30.0317 20.7906"
                          stroke="#171717"
                          strokeWidth="2.93515"
                          strokeMiterlimit="10"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </span>
                    <span className="font-semibold text-gray-500">
                      {selectedLanguage.code}
                    </span>
                  </div>
                </button>
                
                {/* Language Dropdown */}
                {languageDropdownOpen && (
                  <div className="absolute top-full mt-1 left-0 bg-white shadow-lg rounded-md py-2 w-48 z-50 border border-gray-100">
                    <div className="px-3 py-2 text-xs text-gray-500 border-b border-gray-100">Select Language</div>
                    <div className="max-h-48 overflow-y-auto">
                      {languages.map((language) => (
                        <button
                          key={language.code}
                          className="w-full text-left px-4 py-2 text-sm hover:bg-gray-50"
                          onClick={() => {
                            setSelectedLanguage(language);
                            setLanguageDropdownOpen(false);
                          }}
                        >
                          {language.name}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Right Side: Icons & Login */}
          <div className="flex items-center space-x-2 sm:space-x-3">
            <button className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600 hover:bg-gray-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth={1.5}
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
                />
              </svg>
            </button>
            <button className="hidden sm:flex items-center space-x-2 bg-purple-100 text-purple-800 rounded-full pl-1.5 pr-3 py-1 text-xs font-medium hover:bg-purple-200">
              <div className="w-6 h-6 rounded-full flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                  />
                </svg>
              </div>
              <span>Harsh</span>
            </button>
            <button className="hidden sm:block bg-white text-purple-700 border border-purple-600 rounded-full px-5 py-2 text-xs font-semibold hover:bg-purple-50">
              Login / Sign Up
            </button>
            
            {/* Mobile menu button */}
            <button 
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden text-gray-700 focus:outline-none"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>
      
      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <nav className="flex flex-col space-y-3">
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm py-2 border-b border-gray-100"
              >
                Instant Visa
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm py-2 border-b border-gray-100"
              >
                One Week Visa
              </a>
              <a
                href="#"
                className="text-gray-700 hover:text-purple-700 text-sm py-2 border-b border-gray-100"
              >
                One Month Visa
              </a>
            </nav>
            
            <div className="flex justify-between items-center py-2">
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-gray-500">Country:</span>
                <span className="font-semibold text-gray-700">{selectedCountry.code}</span>
              </div>
              <div className="flex items-center space-x-2 text-xs">
                <span className="text-gray-500">Language:</span>
                <span className="font-semibold text-gray-700">{selectedLanguage.code}</span>
              </div>
            </div>
            
            <div className="pt-2 flex justify-center">
              <button className="w-full bg-primary text-white rounded-full py-2 text-sm font-semibold">
                Login / Sign Up
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
