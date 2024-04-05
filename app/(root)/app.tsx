"use client";

import FirebaseServicesContext from "@/contexts/firebase_services_context";
import initializeFirebaseServices from "@/lib/firebase/initialize_firebase_services";
import React from "react";

export default function App({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <FirebaseServicesContext.Provider value={initializeFirebaseServices()}>
      {children}
    </FirebaseServicesContext.Provider>
  );
}
