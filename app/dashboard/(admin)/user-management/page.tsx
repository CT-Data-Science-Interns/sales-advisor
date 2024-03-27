"use client";

import React from "react";

const Page = () => {
  return (
    <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">User Management</h1>

      <div className="p-6 rounded-lg shadow mb-8">
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
            <option>Salesperson 1</option>
            <option>Salesperson 2</option>
            <option>Salesperson 3</option>
          </select>
        </div>
      </div>

      {/* Delegations dropdown */}
      <div className="p-6 rounded-lg shadow mb-8">
        <h5 className="text-xl font-bold text-gray-900 dark:text-white me-1 mb-6">Delegations</h5>
        <div className="grid gap-6 sm:grid-cols-2  mb-6">
          <div>
            <label
              htmlFor="country"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Country:
            </label>
            <select
              id="country"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>Country 1</option>
              <option>Country 2</option>
              <option>Country 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="state"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              State:
            </label>
            <select
              id="state"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option>State 1</option>
              <option>State 2</option>
              <option>State 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="business-model"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Model:
            </label>
            <select
              id="business-model"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option value={0}>Business Model 1</option>
              <option value={1}>Business Model 2</option>
              <option value={2}>Business Model 3</option>
            </select>
          </div>
          <div>
            <label
              htmlFor="business-category"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Business Category:
            </label>
            <select
              id="business-category"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
            className="py-2.5 px-5 me-4 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
          >
            Reset
          </button>
          <button
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
          >
            Apply
          </button>
        </div>
      </div>
    </div>
  );
};

export default Page;
