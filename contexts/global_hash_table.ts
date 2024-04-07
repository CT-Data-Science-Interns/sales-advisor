import { createContext } from "react";

const GlobalHashTableContext = createContext<{ [key: string]: any } | null>(null);

export default GlobalHashTableContext;
