"use client";

const Page = () => {
  return (
    <section className="bg-white dark:bg-gray-900">
      <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
        <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">
          Itinerary Maker
        </h1>
        <div className="mb-6">
          <ol className="items-center sm:flex">
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                  <svg
                    className="size-3.5 text-blue-800 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden h-0.5 w-full bg-gray-800 dark:bg-gray-700 sm:flex" />
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white">
                  Set current location
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                  <svg
                    className="size-2.5 text-blue-200 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex" />
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Filter delegated companies
                </h3>
              </div>
            </li>
            <li className="relative mb-6 sm:mb-0">
              <div className="flex items-center">
                <div className="z-10 flex size-6 shrink-0 items-center justify-center rounded-full bg-blue-100 ring-0 ring-white dark:bg-blue-900 dark:ring-gray-900 sm:ring-8">
                  <svg
                    className="size-2.5 text-blue-200 dark:text-blue-300"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M20 4a2 2 0 0 0-2-2h-2V1a1 1 0 0 0-2 0v1h-3V1a1 1 0 0 0-2 0v1H6V1a1 1 0 0 0-2 0v1H2a2 2 0 0 0-2 2v2h20V4ZM0 18a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8H0v10Zm5-8h10a1 1 0 0 1 0 2H5a1 1 0 0 1 0-2Z" />
                  </svg>
                </div>
                <div className="hidden h-0.5 w-full bg-gray-200 dark:bg-gray-700 sm:flex" />
              </div>
              <div className="mt-3 sm:pe-8">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">
                  Generate and Save Itinerary
                </h3>
              </div>
            </li>
          </ol>
        </div>
        <form action="#">
          <div className="gap-4 sm:mb-2 sm:grid sm:grid-cols-2 sm:gap-6 xl:grid-cols-5">
            <div className="my-4 space-y-4 rounded-xl border-2 border-gray-300 p-4 xl:col-span-2">
              <div>
                <label
                  htmlFor="date_start"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select date for schedule creation
                </label>
                <div
                  date-rangepicker=""
                  className="items-center space-y-4 md:flex md:space-y-0"
                >
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        aria-hidden="true"
                        className="size-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="date_start"
                      name="start"
                      type="text"
                      className="datepicker-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Select date start"
                    />
                  </div>
                  <span className="hidden text-gray-500 md:mx-4 md:flex">
                    to
                  </span>
                  <div className="relative w-full">
                    <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                      <svg
                        aria-hidden="true"
                        className="size-5 text-gray-500 dark:text-gray-400"
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                    <input
                      id="date_end"
                      name="end"
                      type="text"
                      className="datepicker-input block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 pl-10 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Select date end"
                    />
                  </div>
                </div>
              </div>
              <h3 className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                Indicate Starting Location
              </h3>
              <div className="flex items-center space-x-3">
                <div className="flex items-center">
                  <input
                    id="event-duration-checkbox"
                    type="checkbox"
                    defaultValue=""
                    className="size-4 rounded border-gray-300 bg-gray-100 text-primary-600 focus:ring-2 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                  />
                  <label
                    htmlFor="event-duration-checkbox"
                    className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300"
                  >
                    Save to Favorite
                  </label>
                </div>
              </div>
              <div>
                <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Select method of entering coordinates
                </div>
                <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <div className="w-full">
                    <label htmlFor="reminder-type" className="sr-only">
                      Reminder type
                    </label>
                    <select
                      id="reminder-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="AL">via entering address</option>
                      <option value="EM">via pinning location in map</option>
                      <option value="SM">via selecting favorite</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <div className="w-full">
                    <label htmlFor="reminder-type" className="sr-only">
                      Reminder type
                    </label>
                    <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Country
                    </div>
                    <select
                      id="reminder-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="AL">Indonesia</option>
                      <option value="EM">Philippines</option>
                      <option value="SM">Thailand</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="reminder-length-type" className="sr-only">
                      State
                    </label>
                    <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      State
                    </div>
                    <select
                      id="reminder-length-type"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                    >
                      <option value="WE">Jakarta</option>
                      <option value="MO">Java</option>
                    </select>
                  </div>
                </div>
              </div>
              <div>
                <div className="space-y-4 md:flex md:space-x-4 md:space-y-0">
                  <div className="w-full">
                    <label htmlFor="reminder-type" className="sr-only">
                      Reminder type
                    </label>
                    <div className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                      Address
                    </div>
                    <input
                      type="text"
                      id="add-guests"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 pl-4 text-sm text-gray-900 focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                      placeholder="Your complete address"
                      required
                    />
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-4 space-y-4 xl:col-span-3">
              <img
                src="https://www.thestatesman.com/wp-content/uploads/2020/04/googl_ED.jpg"
                className="w-full object-scale-down"
              />
            </div>
          </div>
          <button
            type="submit"
            className="justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
          >
            Proceed to Filtering
          </button>
        </form>
      </div>
    </section>
  );
};

export default Page;
