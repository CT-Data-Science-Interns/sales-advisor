"use client";

import FirebaseServicesContext from "@/contexts/firebase_services_context";
import { useContext, useState } from "react";
import DatePicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

const Page = () => {
  const [show, setShow] = useState<boolean>(false);
  const options: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: true,
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
    theme: {
      background: "",
      todayBtn: "",
      clearBtn: "",
      icons: "",
      text: "",
      disabledText: "",
      input: "",
      inputIcon: "",
      selected: "",
    },
  };

  // Test FirebaseServicesContext if it is being read here.
  const firebaseServicesContext = useContext(FirebaseServicesContext);
  console.log(firebaseServicesContext?.auth);

  return (
    <div className="mt-20 flex size-full flex-col items-center gap-5">
      <h1 className="text-2xl font-bold">Date Picker Demo</h1>
      <div className="relative w-1/4">
        <label
          htmlFor="date"
          className="mb-2 block text-sm font-medium text-gray-900 dark:text-gray-300"
        >
          Date
        </label>
        <DatePicker
          show={show}
          setShow={(state) => setShow(state)}
          options={options}
          classNames="absolute"
        />
      </div>
    </div>
  );
};

export default Page;
