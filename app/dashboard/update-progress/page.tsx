import kanbanBoards from "@/app/dashboard/update-progress/data/progress-contents.json";
import type { KanbanBoard } from "@/types/progress-contents.d.ts";
import KanbanPageContent from "./content.tsx";
import StaticPageFooter from "@/components/static-page-footer.tsx";

export interface KanbanPageData {
  kanbanBoards: KanbanBoard[];
}

async function getData() {
  return { kanbanBoards } as KanbanPageData;
}

export default async function KanbanPage() {
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
                  Select Date option
                </label>
                <select
                  id="dates"
                  className="bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-3 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  defaultValue=""
                >
                  <option disabled value="">
                    Select an option
                  </option>
                  <option value="all">All Dates</option>
                  <option value="range">Date Range</option>
                  <option value="specific">Specific Date</option>
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
        <section className="bg-white dark:bg-gray-900">
          <div
            style={{ maxWidth: "75%", margin: "0 auto" }}
            className="mb-8 lg:mb-16 text-center"
          >
            <h3 className="mb-8 font-bold text-gray-900 dark:text-gray-400 sm:text-xl">
              Search below to find the projects you are looking for.
            </h3>
            <label
              htmlFor="email-adress-icon"
              className="block mb-2 text-sm font-medium text-gray-900 sr-only dark:text-gray-300"
            >
              Your Email
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  className="w-6 h-6 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </div>
              <input
                type="text"
                id="email-adress-icon"
                className="block w-full p-4 pl-12 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder:text-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"
                placeholder="Type keywords to find answers"
              />
            </div>
          </div>
          <div className="py-16 px-8 mx-auto max-w-screen-3xl lg:py-20 lg:px-10">
            <KanbanPageContent {...await getData()} />
          </div>
        </section>

        <div className="mt-8 inline-flex items-center px-3 py-2 text-sm font-medium text-center">
          <a
            href="/dashboard/progress-schedule"
            title=""
            className="inline-flex items-center text-lg font-medium hover:underline text-primary-600 dark:text-primary-500"
          >
            View Schedule
            <svg
              className="w-6 h-6 hover:underline text-primary-600 dark:text-primary-500 ml-3"
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
                d="M4 10h16m-8-3V4M7 7V4m10 3V4M5 20h14a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1Zm3-7h.01v.01H8V13Zm4 0h.01v.01H12V13Zm4 0h.01v.01H16V13Zm-8 4h.01v.01H8V17Zm4 0h.01v.01H12V17Zm4 0h.01v.01H16V17Z"
              />
            </svg>
          </a>
        </div>
        <StaticPageFooter />
      </div>
    </div>
  );
}
