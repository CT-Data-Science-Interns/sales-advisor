import { Itinerary } from "@/types/firebase/itinerary";

// interface CompaniesRefs {
//   companyRef: string;
//   schedule: {
//     start: Date;
//     end: Date;
//   };
//   status: "VISITED" | "NOT VISITED" | "ONGOING" | "STATUS" | null; // Included "STATUS"
// }

export function filterItinerariesByDate(
  itineraries: Itinerary[],
  startDate: Date,
  endDate: Date
) {
  return itineraries.flatMap((itinerary) =>
    itinerary.companiesRefs.filter((companyRef) => {
      // const startDateTimestamp = new Date(
      //   (companyRef.schedule.start.seconds +
      //     companyRef.schedule.start.nanos / 1000000000) *
      //     1000
      // );
      const startDateTimestamp = companyRef.schedule.start.toDate();
      const endDateTimestamp = companyRef.schedule.end.toDate();
      console.log(
        companyRef.schedule.start,
        "and",
        companyRef.schedule.end,
        "type of",
        typeof endDateTimestamp
      );
      // const startDateTimestamp = new Date(companyRef.schedule.start);
      // const endDateTimestamp = new Date(companyRef.schedule.end);
      console.log(
        "dates are",
        startDateTimestamp,
        endDateTimestamp,
        "type of",
        typeof endDateTimestamp
      );
      // const endDateTimestamp = new Date(
      //   (companyRef.schedule.end.seconds +
      //     companyRef.schedule.end.nanos / 1000000000) *
      //     1000
      // );
      return startDateTimestamp >= startDate && endDateTimestamp <= endDate;
    })
  );
}

// import { Timestamp } from "firebase/firestore";

// export function filterItinerariesByDate(
//   itineraries: Itinerary[],
//   startDate: Date,
//   endDate: Date
// ) {
//   return itineraries.flatMap((itinerary) =>
//     itinerary.companiesRefs.filter((companyRef) => {
//       console.log(typeof companyRef.schedule.start); // Should log 'object'
//       console.log(companyRef.schedule.start instanceof Date); // Should log 'true'
//       // Convert JavaScript Date objects to Firestore Timestamps
//       const startDateTimestamp = Timestamp.fromDate(companyRef.schedule.start.toDate());
// const endDateTimestamp = Timestamp.fromDate(companyRef.schedule.end.toDate());
//       // Convert Firestore Timestamps back to JavaScript Date objects for comparison
//       return (
//         startDateTimestamp.toDate() >= startDate &&
//         endDateTimestamp.toDate() <= endDate
//       );
//     })
//   );
// }

// export function filterItinerariesByDate(
//   itineraries: Itinerary[],
//   startDate: Date,
//   endDate: Date
// ) {
//   return itineraries.flatMap((itinerary) =>
//     itinerary.companiesRefs.filter((companyRef) => {
//       const startDateTimestamp = (
//         companyRef.schedule.start as firebase.firestore.Timestamp
//       ).toDate();
//       const endDateTimestamp = (
//         companyRef.schedule.end as firebase.firestore.Timestamp
//       ).toDate();
//       return startDateTimestamp >= startDate && endDateTimestamp <= endDate;
//     })
//   );
// }

// export function extractCompanyReferences(filteredItineraries: Itinerary[]) {
//   return filteredItineraries.map((itinerary) => itinerary.companyRef);
// }
