"use client";

import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

const Page = () => {
  const router: AppRouterInstance = useRouter();

  const handleResetPasswordClick = (e: Event) => {
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
        <div className="w-full rounded-lg bg-white p-6 shadow dark:border dark:border-gray-700 dark:bg-gray-800 sm:max-w-md sm:p-8 md:mt-0">
          <h2 className="mb-1 text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
            Forgot your password?
          </h2>
          <p className="font-light text-gray-500 dark:text-gray-400">
            Don&apos;t fret! Just type in your email and we will send you a code
            to reset your password!
          </p>
          <form className="mt-4 space-y-4 md:space-y-5 lg:mt-5" action="#">
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
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500 sm:text-sm"
                placeholder="name@company.com"
                required
              />
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
              onClick={(e) => handleResetPasswordClick(e as unknown as Event)}
            >
              Reset password
            </button>
            <p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
              <Link
                href="/sign-in"
                className="font-medium text-primary-600 hover:underline dark:text-primary-500"
              >
                Go back to sign in
              </Link>
            </p>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Page;
