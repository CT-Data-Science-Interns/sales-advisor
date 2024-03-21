import React from "react";

const Page = () => {
  return (
    <div>
      <div className="flex flex-col items-center mt-10 max-w-screen h-screen">
        <h1 className="text-5xl font-bold text-center text-gray-900 dark:text-white mt- 6 mb-4">Sales Visit Progress Tracker</h1>
    
          {/* First Column: Select Date Part */}
          <section className="bg-white dark:bg-gray-900">
            <div className="py-16 px-8 lg:py-20 lg:px-10 flex flex-col lg:flex-row lg:justify-start">
              <div className="grid grid-cols-3 gap-10 lg:gap-16">
                <form>
                  <label htmlFor="dates" className="block mb-4 text-base font-medium text-gray-900 dark:text-white">Select Date option</label>
                  <select id="dates" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" defaultValue="">
                    <option disabled value="">Select an option</option>
                    <option value="all">All Dates</option>
                    <option value="range">Date Range</option>
                    <option value="specific">Specific Date</option>
                  </select>
                  
                </form>

                <div className="flex items-center space-x-4 my-6">
                  <input name="start" type="date" id="start" placeholder="Select start date" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                    <span className="text-gray-500 text-xl">to</span>
                  <input name="end" type="date" placeholder="Select end date" className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" />
                </div>

                {/* Second Column: Progress Bar */}
                <div className="ml-5">
                  <div>
                    <div className="flex justify-between mb-1">
                      <span className="text-base font-medium text-blue-700 dark:text-white">Your Progress</span>
                      <span className="text-sm font-medium text-blue-700 dark:text-white">45%</span>
                    </div>
                    <div className="w-full h-10 bg-gray-200 rounded-full dark:bg-gray-700">
                      <div className="h-10 bg-blue-600 rounded-full dark:bg-blue-500" style={{ width: '45%' }}></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>


    {/* Second Row: Conversion Status */}
    <section className="bg-white dark:bg-gray-900">
      <div className="py-16 px-8 mx-auto max-w-screen-3xl lg:py-20 lg:px-10">
        <div className="grid grid-cols-3 gap-10 lg:gap-16">
          {/* Ongoing Column */}
          <div className="flex flex-col p-10 bg-white rounded-lg border border-gray-300 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-8 text-4xl font-semibold">Ongoing</h3>
            {/* Cards for companies in Ongoing status */}
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">21 CENTURY CORPORATION</h4>
                <p>Building 11, EZP Center Determine Street, CPIP, Barangay Batino Calamba, Laguna, 4027 Philippines</p>
                <p>Business Category: Tools, Cutters, Moulds, and Dies</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">3J METAL INDUSTRIES, INC.</h4>
                <p>16 Golden Lane Morningstar Heights Culiat Quezon, Manila, 1100 Philippines</p>
                <p>Business Category: Steel</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
              {/* Add more cards for companies as needed */}
            </div>
          </div>
          
          {/* Success Column */}
          <div className="flex flex-col p-10 bg-white rounded-lg border border-gray-300 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-8 text-4xl font-semibold">Success</h3>
            {/* Cards for companies in Success status */}
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">3M PHILIPPINES, INC.</h4>
                <p>10th and 11th Floors The Finance Center 26th Street corner 9th Avenue Taguig, Manila, 1634 Philippines</p>
                <p>Business Category: Transportation Equipment</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">Puyat Steel Corporation</h4>
                <p>2nd Floor Alegria Alta Building 2294 Don Chino Roces Extension, Magallanes Makati, Manila, 1232 Philippines</p>
                <p>Business Category: Fabricated Metal</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
              {/* Add more cards for companies as needed */}
            </div>
          </div>
                      
          {/* Failed Column */}
          <div className="flex flex-col p-10 bg-white rounded-lg border border-gray-300 shadow-lg dark:border-gray-600 dark:bg-gray-800 dark:text-white">
            <h3 className="mb-8 text-4xl font-semibold">Failed</h3>
            {/* Cards for companies in Failed status */}
            <div className="space-y-8">
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">A.S.RIVERA CORPORATION</h4>
                <p>Block 46, Lot 1, Pampano Street, Barangay Longos Malabon, Manila, 1470 Philippines</p>
                <p>Business Category: Fabricated Metal</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
              <div className="bg-gray-100 p-8 rounded-lg">
                <h4 className="font-bold mb-2">AAB BAKING GOODS & SUPPLIES INC.</h4>
                <p>2 Kitanlad Street corner Quezon Avenue, Barangay Dona Josefa Quezon, Manila, 1113 Philippines</p>
                <p>Business Category: Food</p>
                <a href="#" className="inline-flex items-center px-3 mt-6 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
                  Read more
                  <svg className="rtl:rotate-180 w-3.5 h-3.5 ms-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    
      {/* Fourth Row: Client List */}
      <div className="relative shadow-md sm:rounded-lg">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
            Client List
            <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Overview of the clients.</p>
          </caption>
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                  <tr>
                      <th scope="col" className="p-4">
                          <div className="flex items-center">
                              <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                          </div>
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Company
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Business Model
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Subcategory
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Address
                      </th>
                      <th scope="col" className="px-6 py-3">
                      Annual Sales
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Visit Status
                      </th>
                      <th scope="col" className="px-6 py-3">
                          Deal Status
                      </th>
                  </tr>
              </thead>
              <tbody>
                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      EPSON PRECISION (PHILIPPINES), INC.
                      </td>
                      <td className="px-6 py-4">
                      End-User
                      </td>
                      <td className="px-6 py-4">
                      Commercial And Service Industry Machinery
                      </td>
                      <td className="px-6 py-4">
                      Special Economic Processing Zone (SEPZ), Lima Technology Center Lipa City, Batangas, 4217 Philippines
                      </td>
                      <td className="px-6 py-4">
                      1,236,040,000
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            Visited
                          </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                            Failed
                          </div>
                      </td>     
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      3M PHILIPPINES, INC.
                      </td>
                      <td className="px-6 py-4">
                      End-User
                      </td>
                      <td className="px-6 py-4">
                      Transportation Equipment
                      </td>
                      <td className="px-6 py-4">
                      10th and 11th Floors The Finance Center 26th Street corner 9th Avenue Taguig, Manila, 1634 Philippines
                      </td>
                      <td className="px-6 py-4">
                      1,540,000
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            Visited
                          </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            Success
                          </div>
                      </td>     
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      21 CENTURY CORPORATION
                      </td>
                      <td className="px-6 py-4">
                      End-User
                      </td>
                      <td className="px-6 py-4">
                      Tools, Cutters, Moulds, and Dies
                      </td>
                      <td className="px-6 py-4">
                      Building 11, EZP Center Determine Street, CPIP, Barangay Batino Calamba, Laguna, 4027 Philippines
                      </td>
                      <td className="px-6 py-4">
                      803,000
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div>
                            Visited
                          </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-yellow-300 me-2"></div>
                            Ongoing
                          </div>
                      </td>     
                  </tr>

                  <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                      <td className="w-4 p-4">
                          <div className="flex items-center">
                              <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                              <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                          </div>
                      </td>
                      <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                      A.S.RIVERA CORPORATION
                      </td>
                      <td className="px-6 py-4">
                      End-User
                      </td>
                      <td className="px-6 py-4">
                      Fabricated Metal
                      </td>
                      <td className="px-6 py-4">
                      Block 46, Lot 1, Pampano Street, Barangay Longos Malabon, Manila, 1470 Philippines
                      </td>
                      <td className="px-6 py-4">
                      26,040,000
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                            Failed
                          </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center">
                          <div className="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div>
                            Failed
                          </div>
                      </td>     
                  </tr>
                  {/* Additional rows */}
              </tbody>
          </table>
          <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
              <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
              <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
                  <li>
                      <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
                  </li>
                  {/* Additional pagination links */}
              </ul>
          </nav>
      </div>

      {/*Suggested Schedule */}
    <div className="py-16 px-8 mx-auto max-w-screen-3xl lg:py-20 lg:px-10">
    <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
    <caption className="p-5 text-lg font-semibold text-left rtl:text-right text-gray-900 bg-white dark:text-white dark:bg-gray-800">
      Suggested Schedule
      <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Feel free to follow this schedule.</p>
    </caption>
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
                <th scope="col" className="p-4">
                    <div className="flex items-center">
                        <input id="checkbox-all-search" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-all-search" className="sr-only">checkbox</label>
                    </div>
                </th>
                <th scope="col" className="px-6 py-3">
                    Time
                </th>
                <th scope="col" className="px-6 py-3">
                    Activity
                </th>
                <th scope="col" className="px-6 py-3">
                    Company
                </th>
            </tr>
        </thead>
        <tbody>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  07:30 to 08:30 (2024-03-15 )
                </td>
                <td className="px-6 py-4">
                  🤝Meeting
                </td>
                <td className="px-6 py-4">
                  EPSON PRECISION (PHILIPPINES), INC.
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                  08:30 to 09:30 (2024-03-15 )
                </td>
                <td className="px-6 py-4">
                  🤝Meeting
                </td>
                <td className="px-6 py-4">
                JT INTERNATIONAL ASIA MANUFACTURING CORP.
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                09:40 to 10:40 (2024-03-15 )
                </td>
                <td className="px-6 py-4">
                  🤝Meeting
                </td>
                <td className="px-6 py-4">
                FIRST PHILEC, INC.
                </td>
            </tr>

            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                <td className="w-4 p-4">
                    <div className="flex items-center">
                        <input id="checkbox-table-search-1" type="checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                        <label htmlFor="checkbox-table-search-1" className="sr-only">checkbox</label>
                    </div>
                </td>
                <td className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                11:01 to 12:01 (2024-03-15 )
                </td>
                <td className="px-6 py-4">
                  🤝Meeting
                </td>
                <td className="px-6 py-4">
                ZAMA PRECISION INDUSTRY MANUFACTURING PHILIPPINES, INC.
                </td>
            </tr>
            {/* Additional rows */}
        </tbody>
    </table>
    <nav className="flex items-center flex-column flex-wrap md:flex-row justify-between pt-4" aria-label="Table navigation">
        <span className="text-sm font-normal text-gray-500 dark:text-gray-400 mb-4 md:mb-0 block w-full md:inline md:w-auto">Showing <span className="font-semibold text-gray-900 dark:text-white">1-10</span> of <span className="font-semibold text-gray-900 dark:text-white">1000</span></span>
        <ul className="inline-flex -space-x-px rtl:space-x-reverse text-sm h-8">
            <li>
                <a href="#" className="flex items-center justify-center px-3 h-8 ms-0 leading-tight text-gray-500 bg-white border border-gray-300 rounded-s-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">Previous</a>
            </li>
            {/* Additional pagination links */}
        </ul>
    </nav>
</div>
      </div>
    </div>


  );
};

export default Page;


