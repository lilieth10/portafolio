import React from 'react'

function Footer() {
    return (
        <footer className="bg-white dark:bg-gray-900">
          <div className="container px-6 py-12 mx-auto">
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 sm:gap-y-10 lg:grid-cols-4">
              <div className="sm:col-span-2">
                <h1 className="max-w-lg text-xl font-semibold tracking-tight text-gray-800 xl:text-2xl dark:text-white">
                  Subscribe to our newsletter to get updates.
                </h1>
    
                <div className="flex flex-col mx-auto mt-6 space-y-3 md:space-y-0 md:flex-row">
                  <input
                    id="email"
                    type="text"
                    className="px-4 py-2 text-gray-700 bg-white border rounded-md dark:bg-gray-900 dark:text-gray-300 dark:border-gray-600 focus:border-blue-400 dark:focus:border-blue-300 focus:outline-none focus:ring focus:ring-opacity-40 focus:ring-blue-300"
                    placeholder="Email Address"
                  />
    
                  <button className="w-full px-6 py-2.5 text-sm font-medium tracking-wider text-white transition-colors duration-300 transform md:w-auto md:mx-4 focus:outline-none bg-gray-800 rounded-lg hover:bg-gray-700 focus:ring focus:ring-gray-300 focus:ring-opacity-80">
                    Subscribe
                  </button>
                </div>
              </div>
    
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Quick Links</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Home</a>
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Who We Are</a>
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Our Philosophy</a>
                </div>
              </div>
    
              <div>
                <p className="font-semibold text-gray-800 dark:text-white">Industries</p>
                <div className="flex flex-col items-start mt-5 space-y-2">
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Retail & E-Commerce</a>
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Information Technology</a>
                  <a href="#" className="text-gray-600 transition-colors duration-300 dark:text-gray-300 dark:hover:text-blue-400 hover:underline hover:text-blue-500">Finance & Insurance</a>
                </div>
              </div>
            </div>
    
            <hr className="my-6 border-gray-200 md:my-8 dark:border-gray-700" />
    
            <div className="flex items-center justify-between">
              <a href="#">
                <img className="w-auto h-7" src="https://merakiui.com/images/full-logo.svg" alt="" />
              </a>
    
              <div className="flex -mx-2">
                {/* Social Media Icons */}
                <a href="#" className="mx-2 text-gray-600 transition-colors duration-300 dark:text-gray-300 hover:text-blue-500 dark:hover:text-blue-400" aria-label="Reddit">
                  <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C21.9939 17.5203 17.5203 21.9939 12 22ZM6.807 10.543C6.20862 10.5433 5.67102 10.9088 5.45054 11.465C5.23006 12.0213 5.37133 12.6558 5.807 13.066C5.92217 13.1751 6.05463 13.2643 6.199 13.33C6.18644 13.4761 6.18644 13.6229 6.199 13.769C6.199 16.009 8.814 17.831 12.028 17.831C15.242 17.831 17.858 16.009 17.858 13.769C17.8696 13.6229 17.8696 13.4761 17.858 13.33C18.4649 13.0351 18.786 12.3585 18.6305 11.7019C18.475 11.0453 17.8847 10.5844 17.21 10.593H17.157C16.7988 10.6062 16.458 10.7512 16.2 11C15.0625 10.2265 13.7252 9.79927 12.35 9.77L13 6.65L15.138 7.1C15.1931 7.60706 15.621 7.99141 16.131 7.992C16.1674 7.99196 16.2038 7.98995 16.2404 7.98604L16.525 7.65L14.115 6.8C13.984 6.64282 13.7267 6.53656 13.463 6.558C13.1993 6.57943 12.9812 6.74292 12.9 7.05L11.84 11.04C10.9826 10.8991 10.0847 10.9734 9.25 11.15C9.0805 10.6528 8.86774 10.2575 8.631 10.059C8.40269 9.85106 8.03963 9.83043 7.869 10.042C7.69861 10.254 7.59795 10.6953 7.807 11.27C8.4691 12.014 9.69342 12.0078 10.626 11.5855C11.1633 11.3149 11.5591 10.874 11.688 10.346C11.7452 10.1054 12.0125 9.96188 12.309 10.074C12.5915 10.1736 12.7552 10.5564 12.571 10.899C12.528 10.9732 12.4766 11.0357 12.415 11.083C12.4158 11.0837 12.4164 11.0842 12.417 11.0848C12.1985 11.2661 12.0175 11.4945 11.858 11.759C11.4574 12.5588 11.3026 12.6371 11.3026 12.6371C10.1641 12.9054 9.04488 12.4862 8.225 11.953C8.19883 11.9397 8.17672 11.9254 8.155 11.909C7.96211 12.082 7.64911 12.1591 7.364 11.977C7.06711 11.7718 6.91589 11.4328 6.807 11.136C6.807 10.543 6.807 10.543 6.807 10.543Z" />
                  </svg>
                </a>
                {/* Add more social media icons as needed */}
              </div>
            </div>
          </div>
        </footer>
      );
    };

 

export default Footer