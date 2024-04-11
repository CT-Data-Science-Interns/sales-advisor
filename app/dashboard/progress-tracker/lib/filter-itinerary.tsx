import { Itinerary } from "@/types/firebase/itinerary";

export function filterItinerariesByDate(
  itineraries: Itinerary[],
  startDate: Date,
  endDate: Date
) {
  return itineraries.flatMap((itinerary) =>
    itinerary.companiesRefs.filter((companyRef) => {
      const startDateTimestamp = companyRef.schedule.start.toDate();
      const endDateTimestamp = companyRef.schedule.end.toDate();
      return startDateTimestamp >= startDate && endDateTimestamp <= endDate;
    })
  );
}

export function extractCompanyReferences(filteredItineraries: Itinerary[]) {
  return filteredItineraries.map((itinerary) => itinerary.companyRef);
}
