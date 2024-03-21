"use client";

import ApexCharts from "apexcharts";
import React, { useEffect } from "react";

// import Datepicker from 'flowbite-datepicker/Datepicker';
// import DateRangePicker from 'flowbite-datepicker/DateRangePicker';

const Page = () => {
  // let companiesCount: number = 0;
  // let visitedCount: number = 0;
  // let notVisitedCount: number = 0;
  // let onGoingDealsCount: number = 0;
  // let successfulDealsCount: number = 0;
  // let failedDealsCount: number = 0;

  let visitChart: ApexCharts;
  let dealsChart: ApexCharts;

  useEffect(() => {
    // Create visit chart
    if (visitChart == null && document.getElementById("visit-chart")) {
      visitChart = new ApexCharts(
        document.getElementById("visit-chart"),
        visitChartOptions
      );
      visitChart.render();
    }

    // Create deals chart
    if (dealsChart == null && document.getElementById("deals-chart")) {
      dealsChart = new ApexCharts(
        document.getElementById("deals-chart"),
        dealsChartOptions
      );
      dealsChart.render();
    }
  }, []);

  const visitChartOptions = {
    series: [1, 1],
    colors: ["#1C64F2", "#16BDCA"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Visited", "Not Visited"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
  };

  const dealsChartOptions = {
    series: [1, 1, 1],
    colors: ["#1C64F2", "#16BDCA", "#9061F9"],
    chart: {
      height: 420,
      width: "100%",
      type: "pie",
    },
    stroke: {
      colors: ["white"],
      lineCap: "",
    },
    plotOptions: {
      pie: {
        labels: {
          show: true,
        },
        size: "100%",
        dataLabels: {
          offset: -25,
        },
      },
    },
    labels: ["Ongoing", "Successful", "Failed"],
    dataLabels: {
      enabled: true,
      style: {
        fontFamily: "Inter, sans-serif",
      },
    },
    legend: {
      position: "bottom",
      fontFamily: "Inter, sans-serif",
    },
  };

  const setDate = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const option = event.target.value;
    console.log(option);
    if (option === "1") {
      // Show date picker
    } else if (option === "2") {
      // Show daterange picker
    }
  };

  const applyFilters = () => {
    // visitChart.updateSeries([visitedCount, notVisitedCount]);
    // dealsChart.updateSeries([
    //   onGoingDealsCount,
    //   successfulDealsCount,
    //   failedDealsCount,
    // ]);
  };

  return (
    <div className="container mx-auto sm:p-8 p-2">
      {/* <div className="h-screen">Analytics Page</div> */}

      {/* Dropdown filters */}
      <div className="p-6 rounded-lg shadow mb-8">
        <div className="grid gap-6 md:grid-cols-3 mb-6">
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
          <div>
            <label
              htmlFor="datetype"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Date:
            </label>
            <select
              id="datetype"
              onChange={setDate}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={0}>All</option>
              <option value={1}>Specific</option>
              <option value={2}>Range</option>
            </select>
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

      <div className="mb-8 grid gap-6 lg:grid-cols-2">
        {/* Visited pie chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-6">
          <div className="flex justify-between items-start w-full">
            <div className="flex-col items-center">
              <div className="flex items-center mb-1">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1">
                  Visit Progress
                </h5>
              </div>
            </div>
          </div>
          <div id="visit-chart"></div>
        </div>

        {/* Deal status pie chart */}
        <div className="bg-white rounded-lg shadow dark:bg-gray-800 p-6">
          <div className="flex justify-between items-start w-full">
            <div className="flex-col items-center">
              <div className="flex items-center mb-1">
                <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1">
                  Deal Status
                </h5>
              </div>
            </div>
          </div>
          <div id="deals-chart"></div>
        </div>
      </div>

      <div className="rounded-lg shadow mb-8">
        <h5 className="p-6 text-xl font-bold text-gray-900 dark:text-white me-1">
          Client List
        </h5>
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
