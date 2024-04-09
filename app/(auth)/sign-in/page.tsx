"use client";

import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import { Auth, signInWithEmailAndPassword } from "firebase/auth";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

import { Modal } from "flowbite";
import type { ModalOptions, ModalInterface, InstanceOptions } from "flowbite";

const Page = () => {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const auth = FirebaseServicesInitialization.auth as Auth;

  // Modal Prep
  const [title, setTitle] = useState("Default Title");
  const [message, setMessage] = useState("Default Message");
  const modalInterfaceRef = useRef<ModalInterface | null>(null);

  useEffect(() => {
    const $modalElement = document.querySelector("#modalEl") as HTMLElement;

    const modalOptions: ModalOptions = {
      backdrop: "static",
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

    modalInterfaceRef.current = new Modal(
      $modalElement,
      modalOptions,
      instanceOptions
    );
    // modalInterfaceRef.current.show();
  }, []);

  const handleModalTryAgainButtonClick = (e: Event) => {
    e.preventDefault();
    modalInterfaceRef.current?.hide();
  };

  const handleModalCloseButtonClick = (e: Event) => {
    e.preventDefault();
    modalInterfaceRef.current?.hide();
  };

  const handleModalContactSupportButtonClick = (e: Event) => {
    e.preventDefault();
    modalInterfaceRef.current?.hide();

    // Open this url link in a new tab.
    window.open("https://github.com/Qubits-01", "_blank");
  };

  const handleEmailOnChange = (e: Event) => {
    setEmail((e.target as HTMLInputElement).value);
  };

  const handlePasswordOnChange = (e: Event) => {
    setPassword((e.target as HTMLInputElement).value);
  };

  const handleSignInClick = (e: Event) => {
    e.preventDefault();

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user);

        if (user) {
          router.push("/dashboard");
        }
      })
      .catch((error) => {
        let errorCode = error.code;
        let errorMessage = error.message;
        console.log(errorCode, errorMessage);

        // Convert to english readable error code.
        switch (errorCode) {
          case "auth/invalid-email":
            errorCode = "Invalid email address";
            break;
          case "auth/user-not-found":
            errorCode = "User not found";
            break;
          case "auth/wrong-password":
            errorCode = "Wrong password";
            break;
          case "auth/too-many-requests":
            errorCode = "Too many requests";
            break;
          default:
            errorCode = "Something went wrong";
            break;
        }

        // Convert to english readable error message.
        switch (errorMessage) {
          case "Firebase: Error (auth/invalid-email).":
            errorMessage =
              "The email address is badly formatted. Please enter a valid email address.";
            break;
          case "The email address is badly formatted.":
            errorMessage = "The email address is badly formatted.";
            break;
          case "The password is invalid or the user does not have a password.":
            errorMessage =
              "The password is invalid or the user does not have a password.";
            break;
          case "There were too many unsuccessful login attempts. Please try again later.":
            errorMessage =
              "There were too many unsuccessful login attempts. Please try again later.";
            break;
          default:
            errorMessage = "An error occurred. Please try again later.";
            break;
        }

        // Display the error message modal.
        setTitle(errorCode);
        setMessage(errorMessage);
        modalInterfaceRef.current?.show();
      });
  };

  return (
    <>
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
              <h1 className="text-center text-xl font-bold leading-tight tracking-tight text-gray-900 dark:text-white md:text-2xl">
                Sign in to your account
              </h1>
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
                    onChange={(e) => handleEmailOnChange(e as unknown as Event)}
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="mb-2 block text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="confirm-password"
                    placeholder="••••••••"
                    className="block w-full rounded-lg border border-gray-300 bg-gray-50 p-2.5 text-gray-900 focus:border-primary-600 focus:ring-primary-600 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder:text-gray-400 sm:text-sm"
                    onChange={(e) =>
                      handlePasswordOnChange(e as unknown as Event)
                    }
                    required
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex h-5 items-center">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="focus:ring-3 size-4 rounded border border-gray-300 bg-gray-50 focus:ring-primary-300 dark:border-gray-600 dark:bg-gray-700 dark:ring-offset-gray-800 dark:focus:ring-primary-600"
                        required
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label
                        htmlFor="remember"
                        className="text-gray-500 dark:text-gray-300"
                      >
                        Remember me
                      </label>
                    </div>
                  </div>
                  <Link
                    href="/forgot-password"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </Link>
                </div>
                <button
                  type="submit"
                  className="w-full rounded-lg bg-primary-600 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-primary-700 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
                  onClick={(e) => handleSignInClick(e as unknown as Event)}
                >
                  Sign in to your account
                </button>
                <p className="text-center text-sm font-light text-gray-500 dark:text-gray-300">
                  <Link
                    href="/sign-up"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Don&apos;t have an account?
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Modal */}
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
                {title}
              </h3>
              <button
                type="button"
                className="ms-auto inline-flex size-8 items-center justify-center rounded-lg bg-transparent text-sm text-gray-400 hover:bg-gray-200 hover:text-gray-900 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={(e) =>
                  handleModalCloseButtonClick(e as unknown as Event)
                }
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
                {message} If the problem persists, please contact our support
                team.
              </p>
            </div>
            {/* Modal footer */}
            <div className="flex items-center space-x-2 rounded-b border-t border-gray-200 p-6 dark:border-gray-600 rtl:space-x-reverse">
              <button
                type="button"
                className="rounded-lg bg-blue-700 px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                onClick={(e) =>
                  handleModalTryAgainButtonClick(e as unknown as Event)
                }
              >
                Try again
              </button>
              <button
                type="button"
                className="rounded-lg border border-gray-200 bg-white px-5 py-2.5 text-sm font-medium text-gray-500 hover:bg-gray-100 hover:text-gray-900 focus:z-10 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:border-gray-500 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white"
                onClick={(e) =>
                  handleModalContactSupportButtonClick(e as unknown as Event)
                }
              >
                Contact support
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Page;
