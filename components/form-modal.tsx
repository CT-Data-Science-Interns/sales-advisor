import React from "react";

interface FormModalProps {
  toggleModal: () => void; // Specify the type of toggleModal
}

const FormModal: React.FC<FormModalProps> = ({ toggleModal }) => {
  return (
    <div
      id="default-modal"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-0 z-50 overflow-y-auto"
    >
      <div className="flex min-h-screen items-center justify-center px-4">
        <div className="fixed inset-0 transition-opacity" onClick={toggleModal}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        <div className="relative mx-auto max-w-lg rounded-lg bg-white shadow dark:bg-gray-700">
          <div className="flex items-center justify-between rounded-t border-b p-4 dark:border-gray-600 md:p-5">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
              Thank you!
            </h3>
            <button
              type="button"
              onClick={toggleModal}
              className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              <svg
                className="size-3"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          <div className="space-y-4 p-4 md:p-5">
            <p>Thanks for filling out the form!</p>
          </div>
          <div className="flex items-center rounded-b border-t border-gray-200 p-4 dark:border-gray-600 md:p-5">
            <button
              onClick={toggleModal}
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <a href="/dashboard">Go to Home</a>
            </button>
            <button
              onClick={toggleModal}
              type="button"
              className="ms-3 rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
