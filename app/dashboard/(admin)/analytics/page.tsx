"use client";

import FormSelect from "@/components/form-select";
import React, { useEffect, useRef, useState } from "react";

import DatePicker from "tailwind-datepicker-react";
import { IOptions } from "tailwind-datepicker-react/types/Options";

import "svgmap/dist/svgMap.min.css";
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";
import { initializeApp } from "firebase/app";
import firebaseConfig from "@/configs/firebase_config";
import { User } from "@/types/firebase/user/user";
import ClientListTable, { ClientListData } from "@/components/client-list-table";
import { Itinerary } from "@/types/firebase/itinerary";

type CompanyStatusData = {
  total: number;
  visited: number;
  notVisited: number;
  ongoing: number;
};

const Page = () => {
  // TODO: Move outside of this file for code reusability
  const app = initializeApp(firebaseConfig);
  const db = getFirestore(app);
  // Firebase functions
  const fetchUsers = async () => {
    const usersCol = collection(db, "users");
    const userSnapshot = await getDocs(usersCol);
    const users: User[] = [];
    userSnapshot.forEach((doc) => {
      const userData = doc.data();
      if (userData.username) {
        const user: User = {
          uuid: doc.id,
          name: userData.name,
          username: userData.username,
          birthdate: userData.birthdate,
          sex: userData.sex,
          accountRolesRefs: userData.accountRolesRefs,
          emailAddressesRefs: userData.emailAddressesRefs,
          contactNumbersRefs: userData.contactNumbersRefs,
          socialMediasRefs: userData.socialMediasRefs,
          managedUsersRefs: userData.managedUsersRefs,
          managedByRefs: userData.managedByRefs,
          delegationsRefs: userData.delegationsRefs,
          addedAt: userData.addedAt,
          addedByRef: userData.addedByRef,
          updatedAt: userData.updatedAt,
          updatedByRef: userData.updatedByRef,
          deletedAt: userData.deletedAt,
          deletedByRef: userData.deletedByRef,
          itinerariesRefs: userData.itinerariesRefs,
        };
        users.push(user);
      }
    });
    return users;
  };
  const fetchItineraries = async (userRef: string | null = null) => {
    const itinerariesRef = collection(db, "itineraries");
    const itinerariesSnapshot = userRef
      ? await getDocs(query(itinerariesRef, where("userRef", "==", userRef)))
      : await getDocs(itinerariesRef);

    const itineraries: Itinerary[] = [];
    itinerariesSnapshot.forEach((doc) => {
      const itineraryData = doc.data();
      const itinerary: Itinerary = {
        uuid: doc.id,
        userRef: itineraryData.userRef,
        companiesRefs: itineraryData.companiesRefs,

        // Metadata
        addedAt: itineraryData.addedAt,
        addedByRef: itineraryData.addedByRef,
        updatedAt: itineraryData.updatedAt,
        updatedByRef: itineraryData.updatedByRef,
        deletedAt: itineraryData.deletedAt,
        deletedByRef: itineraryData.deletedByRef,
      };
      itineraries.push(itinerary);
    });
    return itineraries;
  };

  // Dropdown options
  const [userOptions, setUserOptions] = useState<{ value: string; label: string }[]>([]);

  // Dropdown filters value
  // eslint-disable-next-line no-unused-vars
  const [salespersonId, setSalesPersonId] = useState<string | null>(null);
  // eslint-disable-next-line no-unused-vars
  const [dealStatusId, setDealStatusId] = useState<string | null>(null);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(startDate);

  // eslint-disable-next-line no-unused-vars
  enum DateType {
    // eslint-disable-next-line no-unused-vars
    All = "All",
    // eslint-disable-next-line no-unused-vars
    Today = "Today",
    // eslint-disable-next-line no-unused-vars
    Last7Days = "Last 7 days",
    // eslint-disable-next-line no-unused-vars
    Last30Days = "Last 30 days",
    // eslint-disable-next-line no-unused-vars
    Custom = "Custom",
  }

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

  // Datepicker states
  const [showDatepickers, setShowDatePickers] = useState<boolean>(false);
  const [showStartDate, setShowStartDate] = useState<boolean>(false);
  const [showEndDate, setShowEndDate] = useState<boolean>(false);

  // Datepicker functions
  const setDateType = (dateType: DateType) => {
    setShowDatePickers(dateType === DateType.Custom);

    // if (dateType === DateType.All) {
    //   setStartDate(new Date(0));
    //   setEndDate(new Date());
    // } else if (dateType === DateType.Today) {
    //   // eslint-disable-next-line prefer-const
    //   let startToday = new Date();
    //   startToday.setHours(0, 0, 0, 0);

    //   // eslint-disable-next-line prefer-const
    //   let endToday = startToday;
    //   endToday.setHours(24);

    //   setStartDate(startToday);
    //   setEndDate(endDate);
    // }
  };
  const onSelectedStartDateChanged = (date: Date) => {
    // Adjust end date if start date is greater
    if (date > endDate) {
      setEndDate(date);
    }

    setStartDate(date);
  };
  const onSelectedEndDateChanged = (date: Date) => {
    // Adjust start date if end date is greater
    if (startDate > date) {
      setStartDate(date);
    }

    setEndDate(date);
  };

  const statusPieChartRef = useRef<any>(null);
  // let statusPieChart: any;
  let areaChart: any;
  let choroplethMap: null;
  let clientInitialized = false;

  const [companyStatusData, setCompanyStatusData] = useState<CompanyStatusData>({
    total: 0,
    visited: 0,
    notVisited: 0,
    ongoing: 0,
  });
  const [clientListData, setClientListData] = useState<ClientListData>({ clients: [] });

  const applyFilters = () => {
    const salesPersonIdFilter = salespersonId === "ALL" ? null : salespersonId;
    fetchItineraries(salesPersonIdFilter).then((itineraries) => {
      // Update company status data
      const newCompanyStatusData = getCompanyStatusDataFromItineraries(itineraries);
      setCompanyStatusData(newCompanyStatusData);
      statusPieChartRef.current.updateSeries([
        newCompanyStatusData.visited,
        newCompanyStatusData.notVisited,
        newCompanyStatusData.ongoing,
      ]);

      // Update client list data
      fetchClientListDataFromItineraries(itineraries).then((clientListData) => {
        setClientListData(clientListData);
      });
    });

    // dealsChart.updateSeries([
    //   onGoingDealsCount,
    //   successfulDealsCount,
    //   failedDealsCount,
    // ]);
  };

  const getCompanyStatusDataFromItineraries = (itineraries: Itinerary[]) => {
    // Initialize counters
    let visitedCount = 0;
    let notVisitedCount = 0;
    let onGoingCount = 0;

    // Check all status from companiesRefs array
    itineraries.forEach((itinerary) => {
      itinerary.companiesRefs.forEach((companiesRef) => {
        // Check if the map has a status field
        if (companiesRef.status === "VISITED") {
          visitedCount++;
        } else if (companiesRef.status === "ONGOING") {
          onGoingCount++;
        } else {
          notVisitedCount++;
        }
      });
    });

    // Create CompanyStatusData object
    const data: CompanyStatusData = {
      total: visitedCount + notVisitedCount + onGoingCount,
      visited: visitedCount,
      notVisited: notVisitedCount,
      ongoing: onGoingCount,
    };

    return data;
  };
  const fetchClientListDataFromItineraries = async (itineraries: Itinerary[]) => {
    // Get all company ids and status from the itineraries
    const companyRefs: string[] = [];
    const companyStatus: string[] = [];
    itineraries.forEach((itinerary) => {
      itinerary.companiesRefs.forEach((companiesRef) => {
        companyRefs.push(companiesRef.companyRef);
        companyStatus.push(companiesRef.status ?? "NOT VISITED");
      });
    });

    // Retrieve companies from the list of ids
    const companiesSnapshot = await Promise.all(
      companyRefs.map((ref) => getDoc(doc(db, "companies", ref)))
    );
    const companiesData = companiesSnapshot.map((doc) => doc.data());

    // Create ClientListData object
    const clientListData: ClientListData = { clients: [] };
    companiesData.forEach((data, index) => {
      if (data) {
        clientListData.clients.push({
          company: data.name,
          businessModel: data.businessModel,
          subcategory: data.subcategory,
          address: data.address,
          annualSales: data.annualSales,
          visitStatus: companyStatus[index],
        });
      }
    });
    return clientListData;
  };

  useEffect(() => {
    if (!clientInitialized) {
      // Import client-only packages
      const ApexCharts = require("apexcharts");
      const svgMap = require("svgmap");

      // Fetch data from server and set the initial display values
      fetchUsers()
        .then((data) => {
          const newUserOptions = data.map((user) => ({
            value: user.uuid,
            label: user.name.firstName + " " + user.name.lastName,
          }));
          newUserOptions.unshift({ value: "ALL", label: "All" });
          setUserOptions(newUserOptions);
        })
        .catch((error) => {
          console.error("Error fetching users:", error);
        });
      fetchItineraries()
        .then((itineraries) => {
          const newCompanyStatusData = getCompanyStatusDataFromItineraries(itineraries);
          setCompanyStatusData(newCompanyStatusData);

          fetchClientListDataFromItineraries(itineraries).then((clientListData) => {
            setClientListData(clientListData);
          });

          // Pie chart
          const companyStatusChartOptions = {
            series: [
              newCompanyStatusData.visited,
              newCompanyStatusData.notVisited,
              newCompanyStatusData.ongoing,
            ],
            chart: {
              height: 352,
              width: "100%",
              type: "pie",
            },
            stroke: {
              colors: ["white"],
              lineCap: "",
            },
            plotOptions: {
              pie: {
                labels: {
                  show: true,
                },
                size: "100%",
                dataLabels: {
                  offset: -25,
                },
              },
            },
            labels: ["Visited", "Not Visited", "Ongoing"],
            dataLabels: {
              enabled: true,
              style: {
                fontFamily: "Inter, sans-serif",
              },
            },
            legend: {
              position: "bottom",
              fontFamily: "Inter, sans-serif",
            },
            yaxis: {
              labels: {
                formatter: function (value: string) {
                  return (
                    Math.round((parseInt(value) / companyStatusData.total) * 10000) / 100 + "%"
                  );
                },
              },
            },
          };
          const statusPieChart = new ApexCharts(
            document.getElementById("pie-chart"),
            companyStatusChartOptions
          );
          statusPieChart.render();
          statusPieChartRef.current = statusPieChart;
        })
        .catch((error) => {
          console.error("Error fetching itineraries:", error);
        });
      // fetchClientListData()
      //   .then((data) => {
      //     setClientListData(data);
      //   })
      //   .catch((error) => {
      //     console.error("Error fetching client list data:", error);
      //   });

      const areaChartOptions = {
        series: [
          {
            name: "Ongoing",
            data: [1500, 1418, 1456, 1526, 1356, 1256],
          },
          {
            name: "Successful",
            data: [643, 413, 765, 412, 1423, 1731],
          },
          {
            name: "Failed",
            data: [43, 43, 65, 412, 423, 731],
          },
        ],
        chart: {
          height: 320,
          width: "100%",
          type: "area",
          fontFamily: "Inter, sans-serif",
          dropShadow: {
            enabled: false,
          },
          toolbar: {
            show: false,
          },
        },
        tooltip: {
          enabled: true,
          x: {
            show: false,
          },
        },
        legend: {
          show: true,
        },
        fill: {
          type: "gradient",
          gradient: {
            opacityFrom: 0.55,
            opacityTo: 0,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 6,
        },
        grid: {
          show: false,
        },
        xaxis: {
          categories: [
            "01 February",
            "02 February",
            "03 February",
            "04 February",
            "05 February",
            "06 February",
            "07 February",
          ],
          labels: {
            show: false,
          },
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
        },
        yaxis: {
          show: false,
        },
      };

      // Area chart
      // eslint-disable-next-line react-hooks/exhaustive-deps
      areaChart = new ApexCharts(document.getElementById("area-chart"), areaChartOptions);
      areaChart.render();

      // Choropleth Map
      if (choroplethMap == null) {
        // eslint-disable-next-line new-cap
        choroplethMap = new svgMap({
          targetElementID: "choropleth-map",
          data: {
            data: {
              companies: {
                name: "Companies",
              },
              visited: {
                name: "Visited",
              },
              notVisited: {
                name: "Not Visited",
              },
              onGoing: {
                name: "Ongoing Deals",
              },
              success: {
                name: "Successful Deals",
              },
              failed: {
                name: "Failed Deals",
              },
            },
            applyData: "visited",
            values: {
              AF: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              AL: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              DZ: { companies: 587, visited: 4, notVisited: 7, onGoing: 2, success: 3, failed: 4 },
              // ...
            },
          },
        });
      }

      clientInitialized = true;
    }
  }, []);

  return (
    <div className="mx-auto px-4 py-8 md:max-w-6xl lg:py-16">
      <h1 className="mb-4 text-5xl font-bold text-gray-900 dark:text-white">Analytics</h1>

      {/* Dropdown filters */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">Filters</h5>
        <div className="mb-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          <FormSelect
            title="Salesperson:"
            onSelectChange={setSalesPersonId}
            options={userOptions}
          />
          <FormSelect
            title="Deal Status:"
            onSelectChange={setDealStatusId}
            options={["All", "Ongoing", "Failed", "Successful"]}
          />
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
        </div>
        <div className="flex justify-end">
          <button
            type="button"
            onClick={applyFilters}
            className="rounded-lg bg-blue-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-800 focus:outline-none focus:ring-4 focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Apply Filters
          </button>
        </div>
      </div>

      {/* Charts */}
      <div className="mb-8 grid gap-6 md:grid-cols-2">
        {/* Pie chart */}
        <div className="rounded-lg p-6 shadow">
          <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">Companies Status</h5>
          <div id="pie-chart" ref={statusPieChartRef}></div>
          <div className="mt-4 grid grid-cols-4 gap-2">
            <div>
              <div className="text-center text-sm">Total</div>
              <div className="text-center text-3xl">{companyStatusData?.total}</div>
            </div>
            <div>
              <div className="text-center text-sm">Visited</div>
              <div className="text-center text-3xl">{companyStatusData?.visited}</div>
            </div>
            <div>
              <div className="text-center text-sm">Not Visited</div>
              <div className="text-center text-3xl">{companyStatusData?.notVisited}</div>
            </div>
            <div>
              <div className="text-center text-sm">Ongoing</div>
              <div className="text-center text-3xl">{companyStatusData?.ongoing}</div>
            </div>
          </div>
        </div>
        {/* Area chart */}
        <div className="rounded-lg p-6 shadow">
          <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">Deals Status</h5>
          <div id="area-chart"></div>
          <div className="mt-4 grid grid-cols-3 gap-2">
            <div>
              <div className="text-center text-sm">Ongoing Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Successful Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
            <div>
              <div className="text-center text-sm">Failed Deals</div>
              <div className="text-center text-3xl">0</div>
            </div>
          </div>
        </div>
      </div>

      {/* Choropleth Map */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">World Overview</h5>
        <div id="choropleth-map"></div>
      </div>

      {/* Client List */}
      <div className="mb-8 rounded-lg p-6 shadow">
        <h5 className="pb-6 text-xl font-bold text-gray-900 dark:text-white">Client List</h5>
        <ClientListTable data={clientListData}></ClientListTable>
      </div>
    </div>
  );
};

export default Page;
