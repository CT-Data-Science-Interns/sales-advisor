"use client";

import React, { useState } from "react";
import StaticPageNavbar from "@/components/static-page-navbar";
import StaticPageFooter from "@/components/static-page-footer";
import FormModal from "@/components/form-modal";
import { collection, Firestore, getDocs } from "firebase/firestore";
import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";

// eslint-disable-next-line @next/next/no-async-client-component
const Page = async () => {
  const [rating, setRating] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const db = FirebaseServicesInitialization.db as Firestore;

  const someFunction = async () => {
    const querySnapshot = await getDocs(collection(db, "test"));
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      console.log(doc.id, " => ", doc.data());
    });
  };

  await someFunction();

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Submit rating to your backend or handle as needed

    someFunction();
    console.log("Submitted rating:", rating);
    setRating(rating);
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
            Got an Issue?
          </h2>
          <p className="mb-8 text-center font-light text-gray-500 dark:text-gray-400 sm:text-xl lg:mb-16">
            Got a technical issue? Want to send feedback about a beta feature?
            Need details about our Business plan? Let us know.
          </p>
          <form action="#" className="space-y-8" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="email"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-sm-light dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="name@nidec.com"
                required
              />
            </div>
            <div>
              <label
                htmlFor="subject"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-3 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:shadow-sm-light dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Let us know how we can help you"
                required
              />
            </div>
            <div className="sm:col-span-2">
              <label
                htmlFor="message"
                className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-400"
              >
                Your message
              </label>
              <textarea
                id="message"
                rows={6}
                className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 shadow-sm focus:border-primary-500 focus:ring-primary-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 dark:focus:border-primary-500 dark:focus:ring-primary-500"
                placeholder="Leave a comment..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="rounded-lg bg-primary-700 px-5 py-3 text-center text-sm font-medium text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 sm:w-fit"
            >
              Report
            </button>
          </form>
        </div>
      </section>
      <StaticPageFooter />
    </div>
  );
};

// // This function gets called at build time on server-side.
// // It won't be called on client-side, so you can even do
// // direct database queries.
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await fetch("https://.../posts");
//   const posts = await res.json();

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       posts,
//     },
//   };
// }

export default Page;
