"use client";

import React, { FormEvent, useEffect, useState } from "react";
import ItineraryMap from "@/components/itinerary-map";
import { CompanyFilter } from "../lib/filter-companies";
import {
  CompanyWithAddress,
  findNearestLocations,
} from "../lib/create-itinerary";
import FirebaseServicesInitialization from "@/lib/firebase/firebase_services_initialization";
import { Firestore, getDoc, doc } from "firebase/firestore";

const GenerateAndSave = ({
  startDate,
  endDate,
  address,
  latLng,
  filteredCompanies,
}: {
  startDate: Date;
  endDate: Date;
  address: string | null;
  latLng: { lat: number; lng: number } | null;
  filteredCompanies: CompanyFilter[] | null;
}) => {
  const db = FirebaseServicesInitialization.db as Firestore;
  const [companies, setCompanies] = useState<CompanyWithAddress[]>([]);
  const [sortedCompanies, setSortedCompanies] = useState<CompanyWithAddress[]>(
    []
  );

  // Access the companies collection and get address.
  useEffect(() => {
    filteredCompanies?.forEach(async (company) => {
      const docRef = doc(
        db,
        "companiesAddresses",
        company.companyAddressUuid[0]
      );
      const docSnapshot = await getDoc(docRef);
      if (docSnapshot.exists()) {
        setCompanies((prev) => [
          ...prev,
          {
            uuid: company.uuid,
            address: docSnapshot.data().addressText,
            latitude: docSnapshot.data().coordinates.latitude,
            longitude: docSnapshot.data().coordinates.longitude,
          },
        ]);
      }
    });
  }, [db, filteredCompanies]);

  useEffect(() => {
    if (!latLng) return;
    findNearestLocations(latLng.lat, latLng.lng, companies).then(
      (nearestCompanies) => setSortedCompanies(nearestCompanies)
    );
  }, [companies, latLng]);

  if (!db) throw new Error("Firestore not initialized");
  if (!latLng) throw new Error("No location selected");

  const handleFormSubmit = (event: FormEvent) => {
    event.preventDefault();
    // Save to Firestore
  };

  return (
    <form action="#" onSubmit={handleFormSubmit}>
      <div className="flex justify-center">
        <div className="mb-4 h-[500px] w-[800px] space-y-4 xl:col-span-3">
          <ItineraryMap
            startLatLng={latLng}
            nearestCompanies={sortedCompanies}
          />
        </div>
      </div>
    </form>
  );
};

export default GenerateAndSave;
