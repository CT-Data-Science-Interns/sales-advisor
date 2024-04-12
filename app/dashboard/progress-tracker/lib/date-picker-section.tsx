import React, { useState, useEffect } from "react";
import { DateType } from "./date-type"; // Import enums and interfaces related to dates
import DatePicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";
import FormSelect from "@/components/form-select";
import { Itinerary } from "@/types/firebase/itinerary";
import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import { Auth, onAuthStateChanged } from "firebase/auth";
import {
  query,
  collection,
  where,
  getDocs,
  getFirestore,
} from "firebase/firestore";
import firebaseConfig from "@/configs/firebase_config";
import { initializeApp } from "firebase/app";
import { filterItinerariesByDate } from "./filter-itinerary"; // Import functions

interface Props {
  onStartDateChange: (date: Date) => void;
  onEndDateChange: (date: Date) => void;
}

// If "STATUS" is a valid status, update the type definition
interface CompaniesRefs {
  companyRef: string;
  schedule: {
    start: Date;
    end: Date;
  };
  status: "VISITED" | "NOT VISITED" | "ONGOING" | "STATUS" | null; // Included "STATUS"
}
const DatePickerSection = ({ onStartDateChange, onEndDateChange }: Props) => {
  // State variables and functions related to dates
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);
  const [showDatepickers, setShowDatePickers] = useState<boolean>(false);
  const [showStartDate, setShowStartDate] = useState<boolean>(false);
  const [showEndDate, setShowEndDate] = useState<boolean>(false);
  const [filteredItineraries, setFilteredItineraries] = useState<
    CompaniesRefs[]
  >([]); // Fix type

  // Rest of the component code...

  // Datepicker options
  const startDatepickerOptions: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  };
  const endDatepickerOptions: IOptions = {
    autoHide: true,
    todayBtn: true,
    clearBtn: false,
    datepickerClassNames: "right-0",
    inputDateFormatProp: {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
    },
  };

  // Datepicker functions
  const setDateType = (dateType: DateType) => {
    setShowDatePickers(dateType === DateType.Custom);

    const today = new Date();
    const startDate = new Date();
    const endDate = new Date();

    switch (dateType) {
      case DateType.Today:
        break; // Today's date is already set
      case DateType.Last7Days:
        startDate.setDate(today.getDate() - 7); // 7 days ago
        break;
      case DateType.Last30Days:
        startDate.setDate(today.getDate() - 30); // 30 days ago
        break;
      default:
        return; // No need to change dates for other cases
    }

    setStartDate(startDate);
    setEndDate(endDate);
    // console.log(startDate, "and", endDate);
  };

  // Function to handle changes in start date
  const onSelectedStartDateChanged = (date: Date) => {
    if (date > endDate) {
      setEndDate(date);
    }
    setStartDate(date);
    // Call the callback function provided by the parent component
    onStartDateChange(date);
  };

  // Function to handle changes in end date
  const onSelectedEndDateChanged = (date: Date) => {
    if (startDate > date) {
      setStartDate(date);
    }
    setEndDate(date);
    // Call the callback function provided by the parent component
    onEndDateChange(date);
  };

  // For the Progress Bar

  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  const [visitedClients, setVisitedClients] = useState<CompaniesRefs[]>([]);
  const [itineraries, setItineraries] = useState<Itinerary[]>([]);

  useEffect(() => {
    const fetchItineraries = async (uid: string) => {
      try {
        const itineraryQuery = query(
          collection(db, "itineraries"),
          where("userRef", "==", uid)
        );

        const querySnapshot = await getDocs(itineraryQuery);
        const itinerariesData = querySnapshot.docs.map(
          (doc) => doc.data() as Itinerary
        ); // Fix type
        setItineraries(itinerariesData);
      } catch (error) {
        console.error("Error fetching documents: ", error);
      }
    };

    const auth = FirebaseServicesInitialization.auth as Auth;
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // const uid = user.uid;
        const uid = "9nBLeN62Zo4s1Y74Phez"; // Temporarily
        fetchItineraries(uid);
      }
    });
  }, []);

  useEffect(() => {
    const filteredCompanies = filterItinerariesByDate(
      itineraries,
      startDate,
      endDate
    ); // Use the filtering function

    // Map filtered companies to CompaniesRefs type
    const companiesRefs: CompaniesRefs[] = filteredCompanies.map((company) => ({
      companyRef: company.companyRef,
      schedule: {
        start: company.schedule.start,
        end: company.schedule.end,
      },
      status: company.status === "STATUS" ? null : company.status,
    }));

    setFilteredItineraries(companiesRefs);
  }, [itineraries, startDate, endDate]);

  useEffect(() => {
    const filteredClients = itineraries.flatMap((itinerary) =>
      itinerary.companiesRefs.filter((company) => company.status === "VISITED")
    );
    setVisitedClients(filteredClients);
  }, [itineraries]);

  const progressValue = Math.min(
    100,
    (visitedClients.length / filteredItineraries.length) * 100
  ).toFixed(2);

  return (
    // JSX code for DatePickerSection...
    <section className="bg-white dark:bg-gray-900">
      <div className="flex flex-col px-8 py-16 lg:flex-row lg:justify-start lg:px-10 lg:py-20">
        <div className="grid grid-cols-3 gap-10 lg:gap-16">
          {/* Dates */}
          <div className="sm:col-span-2">
            <FormSelect
              className="mb-2"
              title="Date:"
              onSelectChange={setDateType}
              options={[
                DateType.All,
                DateType.Today,
                DateType.Last7Days,
                DateType.Last30Days,
                DateType.Custom,
              ]}
            />
            {showDatepickers && (
              <div className="flex">
                <DatePicker
                  value={startDate}
                  options={startDatepickerOptions}
                  classNames="relative"
                  show={showStartDate}
                  setShow={setShowStartDate}
                  selectedDateState={[startDate, onSelectedStartDateChanged]}
                />
                <span className="mx-4 my-auto text-gray-500">to</span>
                <DatePicker
                  value={endDate}
                  options={endDatepickerOptions}
                  classNames="relative"
                  show={showEndDate}
                  setShow={setShowEndDate}
                  selectedDateState={[endDate, onSelectedEndDateChanged]}
                />
              </div>
            )}
          </div>

          {/* Second Column: Progress Bar */}
          <div className="ml-5">
            <div>
              <div className="mb-1 flex justify-between">
                <span className="text-base font-medium text-blue-700 dark:text-white">
                  Your Progress
                </span>
                <span className="text-sm font-medium text-blue-700 dark:text-white">
                  {progressValue} %
                </span>
              </div>
              <div className="h-10 w-full rounded-full bg-gray-200 dark:bg-gray-700">
                <div
                  className="h-10 rounded-full bg-blue-600 dark:bg-blue-500"
                  style={{ width: `${progressValue}%` }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DatePickerSection;
