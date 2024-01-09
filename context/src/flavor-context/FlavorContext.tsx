import { createContext, useState } from "react";
import {
  FlavorContextPropsTypes,
  FlavorContextTypes,
} from "./FlavorContext.type";

export const FlavorContext = createContext<FlavorContextTypes>({
  selectedFlavor: "",
  setSelectedFlavor: () => "",
});

function FlavorContextProvider({ children }: FlavorContextPropsTypes) {
  const [selectedFlavor, setSelectedFlavor] = useState<string>("");

  console.log(selectedFlavor, "kjh");

  const value = { selectedFlavor, setSelectedFlavor };

  return (
    <FlavorContext.Provider value={value}>{children}</FlavorContext.Provider>
  );
}

export default FlavorContextProvider;
