"use client";
import React, { useState } from "react";
import navBar from "@/app/ui/nav-bar";
import teamCarousel from "@/app/ui/team-carousel";
import NavBar from "@/app/ui/nav-bar";
import TeamCarousel from "@/app/ui/team-carousel";

const FAQPage = () => {
  const [isOpen, setIsOpen] = useState([]);

  const toggleAnswer = (index) => {
    setIsOpen((prev) => {
      const updatedIsOpen = [...prev];
      updatedIsOpen[index] = !updatedIsOpen[index];
      return updatedIsOpen;
    });
  };

  return (
    <div>
      <NavBar />
      <div className="bg-gray-100 min-h-screen py-12 px-4 sm:px-6 lg:px-8">
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
                  className="flex justify-between items-center w-full px-4 py-2 text-left text-xl font-semibold text-gray-800 bg-white rounded-lg focus:outline-none"
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
      <TeamCarousel />
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

export default FAQPage;
