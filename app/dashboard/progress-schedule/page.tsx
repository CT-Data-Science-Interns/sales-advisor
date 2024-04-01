"use client";
import { useState } from "react";
import StaticPageFooter from "@/components/static-page-footer.tsx";

const Page = () => {
  const [visibleDays, setVisibleDays] = useState({
    day1: false,
    day2: false,
    day3: false,
  });

  const toggleVisibility = (day: keyof typeof visibleDays) => {
    console.log("Hi", visibleDays.day1, visibleDays.day2, visibleDays.day3);
    setVisibleDays((prevState) => ({
      ...prevState,
      [day]: !prevState[day],
    }));
  };

  return (
    <div>
      <div className="flex flex-col items-center mt-10 max-w-screen h-screen">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mt- 6 mb-4">
          Sales Visit Progress Tracker
        </h1>

        <section className="bg-white dark:bg-gray-900">
          <div className="py-16 px-8 lg:py-20 lg:px-10 flex flex-col lg:flex-row lg:justify-start">
            <div className="grid grid-cols-3 gap-10 lg:gap-16">
              <form>
                <label
                  htmlFor="dates"
                  className="block mb-4 text-base font-medium text-gray-900 dark:text-white"
                >
                  Select Date Range option
                </label>
                <select
                  id="dates"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select an option
                  </option>
                  <option value="all">Daily</option>
                  <option value="range">Weekly</option>
                  <option value="specific">Monthly</option>
                </select>
              </form>

              <div className="flex items-center space-x-4 my-6">
                <input
                  name="start"
                  type="date"
                  id="start"
                  placeholder="Select start date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
                <span className="text-gray-500 text-xl">to</span>
                <input
                  name="end"
                  type="date"
                  placeholder="Select end date"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                />
              </div>

              <div className="ml-5">
                <div>
                  <div className="flex justify-between mb-1">
                    <span className="text-base font-medium text-blue-700 dark:text-white">
                      Your Progress
                    </span>
                    <span className="text-sm font-medium text-blue-700 dark:text-white">
                      45%
                    </span>
                  </div>
                  <div className="w-full h-10 bg-gray-200 rounded-full dark:bg-gray-700">
                    <div
                      className="h-10 bg-blue-600 rounded-full dark:bg-blue-500"
                      style={{ width: "45%" }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="bg-white dark:bg-gray-900 antialiased">
          <div className="max-w-screen-xl px-4 py-8 mx-auto lg:px-6 sm:py-16 lg:py-24">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 dark:text-white">
                The schedule
              </h2>
              <p className="text-xl text-center text-gray-400 dark:text-white mt-6 mb-4">
                Click on the day below to reveal the schedule
              </p>
            </div>

            <div className="mt-8 lg:mt-12">
              <ul
                className="flex-wrap justify-center flex text-center text-gray-500 dark:text-gray-400"
                id="myTab"
                role="tablist"
              >
                <li className="mr-3 mb-3 lg:mb-0" role="presentation">
                  <button
                    className="inline-block px-4 py-3 text-base font-normal rounded-full"
                    id="day1-tab"
                    type="button"
                    role="tab"
                    aria-controls="day1"
                    aria-selected={visibleDays.day1 ? "true" : "false"}
                    onClick={() => toggleVisibility("day1")}
                  >
                    <span className="font-semibold">Day 1:</span> Wednesday, Oct
                    12th
                  </button>
                </li>

                <li className="mr-3 mb-3 lg:mb-0" role="presentation">
                  <button
                    className="inline-block px-4 py-3 text-base font-normal rounded-full"
                    id="day2-tab"
                    type="button"
                    role="tab"
                    aria-controls="day2"
                    aria-selected={visibleDays.day2 ? "true" : "false"}
                    onClick={() => toggleVisibility("day2")}
                  >
                    <span className="font-semibold">Day 2:</span> Thursday, Oct
                    13th
                  </button>
                </li>

                <li role="presentation">
                  <button
                    className="inline-block px-4 py-3 text-base font-normal rounded-full"
                    id="day3-tab"
                    type="button"
                    role="tab"
                    aria-controls="day3"
                    aria-selected={visibleDays.day3 ? "true" : "false"}
                    onClick={() => toggleVisibility("day3")}
                  >
                    <span className="font-semibold">Day 3:</span> Friday, Oct
                    14th
                  </button>
                </li>
              </ul>
            </div>

            <div id="myTabContent" className="mt-8 lg:mt-12">
              {visibleDays.day1 && (
                <div
                  className=""
                  id="day1"
                  role="tabpanel"
                  aria-labelledby="day1-tab"
                >
                  <h1 className="text-xl font-bold m-5">Day 1</h1>
                  <div className="grid max-w-5xl grid-cols-1 p-5 mx-auto border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-700">
                    <div className="pb-5 space-y-4 sm:pr-5">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        9:00 - 10:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          21 CENTURY CORPORATION
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Tools, Cutters, Moulds, and Dies
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Building 11, EZP Center Determine Street, CPIP,
                            Barangay Batino Calamba, Laguna, 4027 Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        10:00 - 11:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          3J METAL INDUSTRIES, INC.
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Steel
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            16 Golden Lane Morningstar Heights Culiat Quezon,
                            Manila, 1100 Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pr-5 sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        11:00 - 12:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          TechWise Solutions
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Information Technology
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            123 Main Street, Makati City, Metro Manila,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        13:00 - 14:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          GreenThumb Landscaping
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Landscaping Services
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            456 Garden Avenue, Quezon City, Metro Manila,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        14:00 - 15:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Sunrise Bakery
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Food & Beverage
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            789 Sunrise Boulevard, Cebu City, Cebu, Philippines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {visibleDays.day2 && (
                <div
                  className=""
                  id="day2"
                  role="tabpanel"
                  aria-labelledby="day2-tab"
                >
                  <h1 className="text-xl font-bold m-5">Day 2</h1>
                  <div className="grid max-w-5xl grid-cols-1 p-5 mx-auto border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-700">
                    <div className="pb-5 space-y-4 sm:pr-5">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        9:00 - 10:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          3M PHILIPPINES, INC.
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Transportation Equipment
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            10th and 11th Floors The Finance Center 26th Street
                            corner 9th Avenue Taguig, Manila, 1634 Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        10:00 - 11:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Puyat Steel Corporation
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Fabricated Metal
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            2nd Floor Alegria Alta Building 2294 Don Chino Roces
                            Extension, Magallanes Makati, Manila, 1232
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pr-5 sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        14:00 - 15:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          OceanBlue Diving Center
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Sports & Recreation
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            321 Coral Street, Puerto Galera, Oriental Mindoro,
                            Philippines
                          </p>
                        </div>
                      </div>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Karen Nelson
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            React developer at Flowbite
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        13:00 - 14:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Swift Courier Services
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Logistics & Delivery
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Address: 234 Speedy Lane, Davao City, Davao del Sur,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        14:00 - 15:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Peak Performance Gym
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Fitness & Wellness
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            567 Fitness Avenue, Taguig City, Metro Manila,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {visibleDays.day3 && (
                <div
                  className=""
                  id="day3"
                  role="tabpanel"
                  aria-labelledby="day3-tab"
                >
                  <h1 className="text-xl font-bold m-5">Day 3</h1>
                  <div className="grid max-w-5xl grid-cols-1 p-5 mx-auto border border-gray-100 rounded-lg bg-gray-50 sm:grid-cols-2 dark:bg-gray-800 dark:border-gray-700">
                    <div className="pb-5 space-y-4 sm:pr-5">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        9:00 - 10:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          A.S.RIVERA CORPORATION
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Fabricated Metal
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            Block 46, Lot 1, Pampano Street, Barangay Longos
                            Malabon, Manila, 1470 Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5 space-y-4 sm:pr-5">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        10:00 - 11:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          AAB BAKING GOODS & SUPPLIES INC.
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Food
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            2 Kitanlad Street corner Quezon Avenue, Barangay
                            Dona Josefa Quezon, Manila, 1113 Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        9:00 - 10:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Golden Harvest Rice Mill
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Agriculture & Farming
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            890 Rice Road, Nueva Ecija, Central Luzon,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pr-5 sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        11:00 - 12:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Azure Boutique Hotel
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Hospitality & Tourism
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            135 Beachfront Drive, Boracay Island, Malay, Aklan,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pl-5 sm:border-l sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        13:00 - 14:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Pacific Print Solutions
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Printing & Publishing
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            678 Printing Street, Pasig City, Metro Manila,
                            Philippines
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="pt-5 pb-5 space-y-4 border-gray-200 sm:pr-5 sm:border-t dark:border-gray-700">
                      <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-900 dark:text-primary-300">
                        <svg
                          aria-hidden="true"
                          className="w-3 h-3 mr-1"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fill-rule="evenodd"
                            d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z"
                            clip-rule="evenodd"
                          />
                        </svg>
                        14:00 - 15:00
                      </span>
                      <h4 className="text-xl font-bold text-gray-900 sm:text-xl dark:text-white">
                        <a href="#" className="hover:underline">
                          Sparkle Clean Laundry
                        </a>
                      </h4>
                      <div className="flex items-center gap-3">
                        <div>
                          <p className="text-lg font-medium leading-tight text-gray-900 dark:text-white">
                            Business Category: Laundry & Dry Cleaning
                          </p>
                          <p className="text-sm font-normal text-gray-500 dark:text-gray-400">
                            901 Freshness Avenue, Cagayan de Oro City, Misamis
                            Oriental, Philippines
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="mt-8 text-center">
              <a
                href="/dashboard/update-progress"
                title=""
                className="inline-flex items-center text-lg font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Update Sales Tracker
                <svg
                  className="w-6 h-6 text-primary-600 dark:text-primary-500 ml-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </section>
        <StaticPageFooter />
      </div>
    </div>
  );
};

export default Page;
