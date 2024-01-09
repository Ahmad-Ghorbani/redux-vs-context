import { Dispatch, SetStateAction } from "react";

export type FlavorContextTypes = {
  selectedFlavor: string;
  setSelectedFlavor: Dispatch<SetStateAction<string>>;
};

export type FlavorContextPropsTypes = {
  children: JSX.Element[];
};
