import "./App.css";
import DynamicPart from "./dynamic-part";
import SelectFlavor from "./select-flavor";
import StaticPart from "./static-part";

function App() {
  return (
    <>
      <DynamicPart />
      <StaticPart />
      <SelectFlavor />
    </>
  );
}

export default App;
