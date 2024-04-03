const StaticPageFooter = () => {
  return (
    <footer className="m-4 rounded-lg bg-white shadow dark:bg-gray-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
        <span className="text-sm text-gray-500 dark:text-gray-400 sm:text-center">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Nidec™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="mt-3 flex flex-wrap items-center text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="me-4 hover:underline md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="/frequently-asked-questions"
              className="me-4 hover:underline md:me-6"
            >
              FAQs
            </a>
          </li>
          <li>
            <a href="/feedback" className="me-4 hover:underline md:me-6">
              Rate Us
            </a>
          </li>
          <li>
            <a href="/bug-report" className="hover:underline">
              Report
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default StaticPageFooter;
