import { useContext } from "react";
import { FlavorContext } from "../flavor-context";

function DynamicPart() {
  const { selectedFlavor } = useContext(FlavorContext);

  console.log(selectedFlavor);

  return <h1>{selectedFlavor}</h1>;
}

export default DynamicPart;
