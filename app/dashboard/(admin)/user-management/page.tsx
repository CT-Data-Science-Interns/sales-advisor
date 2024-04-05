"use client";

"use client";

import React from "react";

const Page = () => {
  return (
    <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">User Management</h1>

      <div className="mb-8 rounded-lg p-6 shadow">
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
            <option>Salesperson 1</option>
            <option>Salesperson 2</option>
            <option>Salesperson 3</option>
          </select>
        </div>
      </div>

      {/* Delegations dropdown */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="mb-6 me-1 text-xl font-bold text-gray-900 dark:text-white">Delegations</h5>
        <div className="mb-6 grid gap-6  sm:grid-cols-2">
          <div>
            <label
              htmlFor="country"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Country:
            </label>
            <select
              id="country"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="state"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              State:
            </label>
            <select
              id="state"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option>State 1</option>
              <option>State 2</option>
              <option>State 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="business-model"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Model:
            </label>
            <select
              id="business-model"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value={0}>Business Model 1</option>
              <option value={1}>Business Model 2</option>
              <option value={2}>Business Model 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="business-category"
              className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Category:
            </label>
            <select
              id="business-category"
              className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
            >
              <option value={0}>Business Category 1</option>
              <option value={1}>Business Category 2</option>
              <option value={2}>Business Category 3</option>
            </select>
          </div>
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            className="me-4 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
          >
            Reset
          </button>
          <button
            type="button"
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
