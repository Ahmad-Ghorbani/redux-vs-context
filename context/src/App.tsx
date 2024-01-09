import "./App.css";
import DynamicPart from "./dynamic-part";
import FlavorContextProvider from "./flavor-context";
import SelectFlavor from "./select-flavor";
import StaticPart from "./static-part";

function App() {
  return (
    <FlavorContextProvider>
      <DynamicPart />
      <StaticPart />
      <SelectFlavor />
    </FlavorContextProvider>
  );
}

export default App;
