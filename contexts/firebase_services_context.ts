import { FirebaseServices } from "@/core/types/firebase_services";
import { createContext } from "react";

const FirebaseServicesContext = createContext<FirebaseServices | null>(null);

export default FirebaseServicesContext;