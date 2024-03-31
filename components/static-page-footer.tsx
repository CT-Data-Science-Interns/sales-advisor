const StaticPageFooter = () => {
  return (
    <footer className="bg-white rounded-lg shadow m-4 dark:bg-gray-800">
      <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between mr-40">
        <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
          © 2024{" "}
          <a href="https://flowbite.com/" className="hover:underline">
            Nidec™
          </a>
          . All Rights Reserved.
        </span>
        <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
          <li>
            <a href="/about" className="hover:underline me-4 md:me-6">
              About
            </a>
          </li>
          <li>
            <a
              href="/frequently-asked-questions"
              className="hover:underline me-4 md:me-6"
            >
              FAQs
            </a>
          </li>
          <li>
            <a href="/feedback" className="hover:underline me-4 md:me-6">
              Rate Us
            </a>
          </li>
          <li>
            <a href="/bug-report" className="hover:underline me-4 md:me-6">
              Report
            </a>
          </li>
          <li>
            <a href="/dashboard/update-progress" className="hover:underline">
              Progress Tracker
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default StaticPageFooter;
