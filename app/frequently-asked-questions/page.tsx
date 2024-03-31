"use client";
import React, { useState } from "react";
import StaticPageNavbar from "@/components/static-page-navbar";
import StaticPageFooter from "@/components/static-page-footer";

const Page = () => {
  const [isOpen, setIsOpen] = useState<boolean[]>([]);

  const toggleAnswer = (index: number) => {
    setIsOpen((prev) => {
      const updatedIsOpen = [...prev];
      updatedIsOpen[index] = !updatedIsOpen[index];
      return updatedIsOpen;
    });
  };

  return (
    <div>
      <StaticPageNavbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="max-w-screen-xl px-4 py-8 mx-auto sm:py-16 lg:px-6">
          <div className="max-w-screen-md mx-auto text-center mb-8 lg:mb-16">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              What questions do you have in mind?
            </h2>
            <p className="mb-8 font-light text-gray-500 dark:text-gray-400 sm:text-xl">
              Here are a few of the questions we get the most. If you don&apos;t
              see what&apos;s on your mind, reach out to us anytime on phone,
              chat, or email.
            </p>
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
            <p className="mt-4 text-sm text-gray-500 dark:text-gray-400">
              You can also browse the topics below to find what you are looking
              for.
            </p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            <div>
              <h3 className="mb-4 text-xl font-bold dark:text-white">
                Progress Tracker
              </h3>
              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li>
                  <a href="#" className="hover:underline">
                    Software Updates
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to Use
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Project Management Features
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Errors
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">
                Itinerary Builder
              </h3>
              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li>
                  <a href="#" className="hover:underline">
                    Simplifying workflow
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Itinerary Inaccuracies
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to manage your notifications
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Labelling Itineraries
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">Admin</h3>
              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li>
                  <a href="#" className="hover:underline">
                    How to restore your sales history
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Data Privacy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Managing your dashboard
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Managing employees
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="mb-4 text-xl font-bold text-black">Account</h3>
              <ul
                role="list"
                className="space-y-4 text-gray-500 dark:text-gray-400"
              >
                <li>
                  <a href="#" className="hover:underline">
                    About Security
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to log in or out
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    How to edit your profile
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:underline">
                    Can&apos;t log out
                  </a>
                </li>
              </ul>
            </div>
            {/* Add similar divs for Android, iPhone, and Web & Desktop sections */}
          </div>
        </div>
      </section>
      <div className="bg-white min-h-screen py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-800 mb-8">
            Frequently Asked Questions
          </h1>
          <div className="space-y-8">
            {/* FAQ items */}
            {FAQ_DATA.map((faq, index) => (
              <div key={index}>
                {/* Question */}
                <button
                  onClick={() => toggleAnswer(index)}
                  className="flex justify-between items-center w-full px-4 py-2 text-left text-xl font-semibold text-gray-800 bg-gray-100 rounded-lg focus:outline-none"
                >
                  {faq.question}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-6 w-6 transition-transform ${isOpen[index] ? "transform rotate-180" : ""}`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
                {/* Answer */}
                {isOpen[index] && (
                  <p className="px-4 py-2 text-gray-600">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
      <StaticPageFooter />
    </div>
  );
};

// Sample FAQ data
const FAQ_DATA = [
  {
    question: "What is CT's mission?",
    answer:
      "CT's mission is to accelerate the sale's process for maximum revenue.",
  },
  {
    question: "How do I track my Sales?",
    answer: "You can track your sales through our Tracking website.",
  },
  {
    question: "What are the benefits of using this platform?",
    answer:
      "Our sales tracking and assistance offers metric tracking and a specialized AI assistant to help you in your sales journey",
  },
  // Add more FAQ items as needed
];

export default Page;
