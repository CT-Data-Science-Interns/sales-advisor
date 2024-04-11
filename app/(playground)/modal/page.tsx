"use client";

import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface, InstanceOptions } from "flowbite";
import { useEffect } from "react";

const Page = () => {
  useEffect(() => {
    const $modalElement = document.querySelector("#modalEl") as HTMLElement;

    const modalOptions: ModalOptions = {
      placement: "bottom-right",
      backdrop: "dynamic",
      backdropClasses: "bg-gray-900/50 dark:bg-gray-900/80 fixed inset-0 z-40",
      closable: true,
      onHide: () => {
        console.log("modal is hidden");
      },
      onShow: () => {
        console.log("modal is shown");
      },
      onToggle: () => {
        console.log("modal has been toggled");
      },
    };

    // instance options object
    const instanceOptions: InstanceOptions = {
      id: "modalEl",
      override: true,
    };

    const modal: ModalInterface = new Modal(
      $modalElement,
      modalOptions,
      instanceOptions
    );

    modal.show();
  }, []);

  return (
    <div
      id="modalEl"
      tabIndex={-1}
      aria-hidden="true"
      className="fixed inset-x-0 top-0 z-50 hidden h-[calc(100%-1rem)] max-h-full w-full overflow-y-auto overflow-x-hidden p-4 md:inset-0"
    >
      <div className="relative max-h-full w-full max-w-2xl">
        {/* Modal content */}
        <div className="relative rounded-lg bg-white shadow dark:bg-gray-700">
          {/* Modal header */}
          <div className="flex items-start justify-between rounded-t border-b p-5 dark:border-gray-600">
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white lg:text-2xl">
              Terms of Service
            </h3>
            <button
              type="button"
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
                  strokeWidth={2}
                  d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                />
              </svg>
              <span className="sr-only">Close modal</span>
            </button>
          </div>
          {/* Modal body */}
          <div className="space-y-6 p-6">
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              With less than a month to go before the European Union enacts new
              consumer privacy laws for its citizens, companies around the world
              are updating their terms of service agreements to comply.
            </p>
            <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
              The European Union’s General Data Protection Regulation (G.D.P.R.)
              goes into effect on May 25 and is meant to ensure a common set of
              data rights in the European Union. It requires organizations to
              notify users as soon as possible of high-risk data breaches that
              could personally affect them.
            </p>
          </div>
          {/* Modal footer */}
          <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600 rtl:space-x-reverse">
            <button
              type="button"
              className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              I accept
            </button>
            <button
              type="button"
              className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
            >
              Decline
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
