"use client";
import React, { useState } from "react";
import StaticPageNavbar from "@/components/static-page-navbar";
import StaticPageFooter from "@/components/static-page-footer";
import StarRating from "@/components/star-rating";
import FormModal from "@/components/form-modal";

const Page = () => {
  const [rating, setRating] = useState(0);

  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Submit rating to your backend or handle as needed
    console.log("Submitted rating:", rating);
    setIsModalOpen(true);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div>
      <StaticPageNavbar />
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center overflow-y-auto">
          <div className="absolute inset-0 flex items-center justify-center">
            <FormModal toggleModal={toggleModal} />
          </div>
        </div>
      )}
      <section className="bg-white dark:bg-gray-900">
        <div className="mx-auto max-w-screen-md px-4 py-8 lg:py-16">
          <h2 className="mb-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 dark:text-white">
            Rate Us
          </h2>
          <p className="mb-6 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-6">
            How is your experience so far? We&apos;d love to hear from you!
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div className="mt-2 flex flex-col items-center justify-center">
              <label className="block text-sm font-medium text-gray-900 dark:text-gray-300">
                Rate your Experience
              </label>
              <StarRating onChange={setRating} />
            </div>

            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                How can we Improve?
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>

            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email (Optional)
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-sm-light dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="name@nidec.com"
              />
            </div>

            <button
              type="submit"
              className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
            >
              Submit
            </button>
          </form>
        </div>
      </section>
      <StaticPageFooter />
    </div>
  );
};

export default Page;
