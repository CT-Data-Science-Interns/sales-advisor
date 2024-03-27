"use client";

import React, { useEffect, useState } from "react";

import DatePicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

import "svgmap/dist/svgMap.min.css";

const Page = () => {
  // let companiesCount: number = 0;
  // let visitedCount: number = 0;
  // let notVisitedCount: number = 0;
  // let onGoingDealsCount: number = 0;
  // let successfulDealsCount: number = 0;
  // let failedDealsCount: number = 0;

  // Datepicker options
  const startDatepickerOptions: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  };
  const endDatepickerOptions: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    datepickerClassNames: "right-0",
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  };

  // Datepicker useStates
  const [startDate, setStartDate] = useState(new Date(Date.now()));
  const [endDate, setEndDate] = useState(startDate);
  const [showDatepickers, setShowDatePickers] = useState<boolean>(false);
  const [showStartDate, setShowStartDate] = useState<boolean>(false);
  const [showEndDate, setShowEndDate] = useState<boolean>(false);

  // Datepicker functions
  const setDateType = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;

    setShowDatePickers(option === "4");

    if (option === "1") {
      // Show date picker
    } else if (option === "2") {
      // Show daterange picker
    }
  };
  const onSelectedStartDateChanged = (date: Date) => {
    // Adjust end date if start date is greater
    if (date > endDate) {
      setEndDate(date);
    }

    setStartDate(date);
  };
  const onSelectedEndDateChanged = (date: Date) => {
    // Adjust start date if end date is greater
    if (startDate > date) {
      setStartDate(date);
    }

    setEndDate(date);
  };

  const applyFilters = () => {
    // visitChart.updateSeries([visitedCount, notVisitedCount]);
    // dealsChart.updateSeries([
    //   onGoingDealsCount,
    //   successfulDealsCount,
    //   failedDealsCount,
    // ]);
  };

  let map: null;

  useEffect(() => {
    if (map == null) {
      const svgMap = require("svgmap");
      map = new svgMap({
        targetElementID: "svgMap",
        data: {
          data: {
            companies: {
              name: "Companies",
              thresholdMax: 100000,
              thresholdMin: 1000,
            },
            visited: {
              name: "Visited",
            },
            notVisited: {
              name: "Not Visited",
            },
            onGoing: {
              name: "Ongoing Deals",
            },
            success: {
              name: "Successful Deals",
            },
            failed: {
              name: "Failed Deals",
            },
          },
          applyData: "companies",
          values: {
            AF: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
            AL: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
            DZ: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
            // ...
          },
        },
      });
    }
  }, []);

  return (
    <div className="container mx-auto p-2 sm:p-8">
      {/* Dropdown filters */}
      <div className="rounded-lg p-6 mb-8 shadow">
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 mb-6">
          <div>
            <label
              htmlFor="salesperson"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Salesperson:
            </label>
            <select
              id="salesperson"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>All</option>
              <option>Salesperson 1</option>
              <option>Salesperson 2</option>
              <option>Salesperson 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="salesperson"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Deal Status:
            </label>
            <select
              id="salesperson"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>All</option>
              <option>Ongoing</option>
              <option>Failed</option>
              <option>Successful</option>
            </select>
          </div>
          {/* Dates */}
          <div className="sm:col-span-2">
            <label
              htmlFor="datetype"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date:
            </label>
            <select
              id="datetype"
              onChange={setDateType}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 mb-2"
            >
              <option value={0}>All</option>
              <option value={1}>Today</option>
              <option value={2}>Last 7 days</option>
              <option value={3}>Last 30 days</option>
              <option value={4}>Custom</option>
            </select>
            {showDatepickers && (
              <div className="flex">
                <DatePicker
                  value={startDate}
                  options={startDatepickerOptions}
                  classNames="relative"
                  show={showStartDate}
                  setShow={setShowStartDate}
                  selectedDateState={[startDate, onSelectedStartDateChanged]}
                />
                <span className="mx-4 my-auto text-gray-500">to</span>
                <DatePicker
                  value={endDate}
                  options={endDatepickerOptions}
                  classNames="relative"
                  show={showEndDate}
                  setShow={setShowEndDate}
                  selectedDateState={[endDate, onSelectedEndDateChanged]}
                />
              </div>
            )}
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={applyFilters}
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Numerical values */}
      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        <div className="p-6 rounded-lg shadow grid lg:gap-6 grid-cols-3">
          <div>
            <div className="text-sm text-right">Companies</div>
            <div className="text-3xl text-right">0</div>
          </div>
          <div>
            <div className="text-sm text-right">Visited</div>
            <div className="text-3xl text-right">0</div>
          </div>
          <div>
            <div className="text-sm text-right">Not Visited</div>
            <div className="text-3xl text-right">0</div>
          </div>
        </div>
        <div className="p-6 rounded-lg shadow grid lg:gap-6 grid-cols-3">
          <div>
            <div className="text-sm text-right">Ongoing Deals</div>
            <div className="text-3xl text-right">0</div>
          </div>
          <div>
            <div className="text-sm text-right">Successful Deals</div>
            <div className="text-3xl text-right">0</div>
          </div>
          <div>
            <div className="text-sm text-right">Failed Deals</div>
            <div className="text-3xl text-right">0</div>
          </div>
        </div>
      </div>

      {/* Choropleth Map */}
      <div className="rounded-lg shadow mb-8 p-2 sm:p-6">
        <div id="svgMap"></div>
      </div>

      {/* Client List */}
      <div className="rounded-lg shadow mb-8">
        <h5 className="p-6 text-xl font-bold text-gray-900 dark:text-white me-1">Client List</h5>
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Business Model
                </th>
                <th scope="col" className="px-6 py-3">
                  Category
                </th>
                <th scope="col" className="px-6 py-3">
                  Address
                </th>
                <th scope="col" className="px-6 py-3">
                  Contact No.
                </th>
              </tr>
            </thead>
            <tbody>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
              </tr>
              <tr className="odd:bg-white odd:dark:bg-gray-900 even:bg-gray-50 even:dark:bg-gray-800 border-b dark:border-gray-700">
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Page;
