"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router: AppRouterInstance = useRouter();

  const handleSendApplicationClick = (e: Event) => {
    e.preventDefault();
    router.replace("/sign-in");
  };

  return (
    <section className="bg-gray-700 bg-opacity-60 bg-[url('https://flowbite.s3.amazonaws.com/blocks/marketing-ui/authentication/background.jpg')] bg-cover bg-center bg-no-repeat bg-blend-multiply">
      <div className="pt:mt-0 mx-auto flex flex-col items-center justify-center px-6 py-8 md:h-screen">
        <a
          href="/"
          className="mb-6 flex items-center text-2xl font-semibold text-white"
        >
          <Image
            className="mr-2 size-12"
            src="/logos/logo-1/favicon-32x32.svg"
            width={32}
            height={32}
            alt="The logo of Nidec Force."
          />
          Nidec Force
        </a>
        <div className="w-full rounded-lg bg-white shadow dark:bg-gray-800 sm:max-w-md md:mt-0 xl:p-0">
          <div className="space-y-4 p-6 sm:p-8 md:space-y-6 lg:space-y-8">
            <h2 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
              Apply for an Account
            </h2>
            <form className="space-y-4 md:space-y-6" action="#">
              <div>
                <label
                  htmlFor="email"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
                  placeholder="name@company.com"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="username"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Password
                </label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  placeholder="@bonnie"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
                  required
                />
              </div>
              <div>
                <label
                  htmlFor="confirm-password"
                  className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                >
                  Confirm password
                </label>
                <input
                  type="confirm-password"
                  name="confirm-password"
                  id="confirm-password"
                  placeholder="••••••••"
                  className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
                  required
                />
              </div>
              <div>
                <p className="mb-2 block text-sm font-medium text-gray-900 dark:text-white">
                  Birth Date
                </p>
                <div className="flex items-center">
                  <div className="mr-4 w-full">
                    <label htmlFor="day" className="sr-only">
                      Day
                    </label>
                    <select
                      id="day"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                      <option selected>Day</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className="mr-4 w-full">
                    <label htmlFor="month" className="sr-only">
                      Month
                    </label>
                    <select
                      id="month"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                      <option selected>Month</option>
                      <option value={1}>1</option>
                      <option value={2}>2</option>
                      <option value={3}>3</option>
                      <option value={4}>4</option>
                      <option value={5}>5</option>
                      <option value={6}>6</option>
                      <option value={7}>7</option>
                      <option value={8}>8</option>
                    </select>
                  </div>
                  <div className="w-full">
                    <label htmlFor="year" className="sr-only">
                      Year
                    </label>
                    <select
                      id="year"
                      className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
                    >
                      <option selected>Year</option>
                      <option value={1990}>1990</option>
                      <option value={1991}>1991</option>
                      <option value={1992}>1992</option>
                      <option value={1993}>1993</option>
                      <option value={1994}>1994</option>
                      <option value={1995}>1995</option>
                      <option value={1996}>1996</option>
                      <option value={1997}>1997</option>
                    </select>
                  </div>
                </div>
              </div>
              <div className="flex items-start">
                <div className="flex h-5 items-center">
                  <input
                    id="newsletter"
                    aria-describedby="newsletter"
                    type="checkbox"
                    className="focus:ring-3 size-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                    required
                  />
                </div>
                <div className="ml-3 text-sm">
                  <label
                    htmlFor="newsletter"
                    className="font-light text-gray-500 dark:text-gray-300"
                  >
                    I accept the{" "}
                    <Link
                      className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                      href="/work-in-progress"
                    >
                      Terms and Conditions
                    </Link>
                  </label>
                </div>
              </div>
              <button
                type="submit"
                className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                onClick={(e) =>
                  handleSendApplicationClick(e as unknown as Event)
                }
              >
                Send account application
              </button>
              <p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
                <Link
                  href="/sign-in"
                  className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                >
                  Already have an account?
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Page;
