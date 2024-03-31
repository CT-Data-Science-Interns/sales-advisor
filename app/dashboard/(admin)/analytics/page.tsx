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

  let pieChart: any;
  let areaChart: any;
  let choroplethMap: null;

  let clientInitialized = false;

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

  const pieChartOptions = {
    series: [52.8, 47.2],
    colors: ["#1C64F2", "#16BDCA"],
    chart: {
      height: 352,
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
    yaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "%";
        },
      },
    },
    xaxis: {
      labels: {
        formatter: function (value: string) {
          return value + "%";
        },
      },
      axisTicks: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
    },
  };

  const areaChartOptions = {
    series: [
      {
        name: "Ongoing",
        data: [1500, 1418, 1456, 1526, 1356, 1256],
      },
      {
        name: "Successful",
        data: [643, 413, 765, 412, 1423, 1731],
      },
      {
        name: "Failed",
        data: [43, 43, 65, 412, 423, 731],
      },
    ],
    chart: {
      height: 320,
      width: "100%",
      type: "area",
      fontFamily: "Inter, sans-serif",
      dropShadow: {
        enabled: false,
      },
      toolbar: {
        show: false,
      },
    },
    tooltip: {
      enabled: true,
      x: {
        show: false,
      },
    },
    legend: {
      show: true,
    },
    fill: {
      type: "gradient",
      gradient: {
        opacityFrom: 0.55,
        opacityTo: 0,
      },
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      width: 6,
    },
    grid: {
      show: false,
    },
    xaxis: {
      categories: [
        "01 February",
        "02 February",
        "03 February",
        "04 February",
        "05 February",
        "06 February",
        "07 February",
      ],
      labels: {
        show: false,
      },
      axisBorder: {
        show: false,
      },
      axisTicks: {
        show: false,
      },
    },
    yaxis: {
      show: false,
    },
  };

  useEffect(() => {
    if (!clientInitialized) {
      // Import client-only packages
      const ApexCharts = require("apexcharts");
      const svgMap = require("svgmap");

      // Pie chart
      pieChart = new ApexCharts(document.getElementById("pie-chart"), pieChartOptions);
      pieChart.render();

      // Area chart
      areaChart = new ApexCharts(document.getElementById("area-chart"), areaChartOptions);
      areaChart.render();

      // Choropleth Map
      if (choroplethMap == null) {
        // eslint-disable-next-line new-cap
        choroplethMap = new svgMap({
          targetElementID: "choropleth-map",
          data: {
            data: {
              companies: {
                name: "Companies",
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
            applyData: "visited",
            values: {
              AF: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              AL: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              DZ: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              // ...
            },
          },
        });
      }

      clientInitialized = true;
    }
  }, []);

  return (
    <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">Analytics</h1>

      {/* Dropdown filters */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="me-1 pb-6 text-xl font-bold text-gray-900 dark:text-white">Filters</h5>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <label
              htmlFor="salesperson"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Salesperson:
            </label>
            <select
              id="salesperson"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Deal Status:
            </label>
            <select
              id="salesperson"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Date:
            </label>
            <select
              id="datetype"
              onChange={setDateType}
              className="mb-2 block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
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
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Pie chart */}
        <div className="rounded-lg p-6 shadow">
          <h5 className="me-1 pb-6 text-xl font-bold text-gray-900 dark:text-white">
            Companies Status
          </h5>
          <div id="pie-chart"></div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div>
              <div className="text-center text-sm">Total</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Visited</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Not Visited</div>
              <div className="text-center text-3xl">0</div>
            </div>
          </div>
        </div>
        {/* Area chart */}
        <div className="rounded-lg p-6 shadow">
          <h5 className="me-1 pb-6 text-xl font-bold text-gray-900 dark:text-white">
            Deals Status
          </h5>
          <div id="area-chart"></div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div>
              <div className="text-center text-sm">Ongoing Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Successful Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Failed Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Choropleth Map */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="me-1 pb-6 text-xl font-bold text-gray-900 dark:text-white">
          World Overview
        </h5>
        <div id="choropleth-map"></div>
      </div>

      {/* Client List */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="me-1 p-6 text-xl font-bold text-gray-900 dark:text-white">Client List</h5>
        <div className="relative overflow-x-auto">
          <table className="w-full text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
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
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
                <td className="px-6 py-4">Test</td>
              </tr>
              <tr className="border-b odd:bg-white even:bg-gray-50 dark:border-gray-700 odd:dark:bg-gray-900 even:dark:bg-gray-800">
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
