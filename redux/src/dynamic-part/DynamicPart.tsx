import { useAppSelector } from "../redux/hooks";

function DynamicPart() {
  const flavor = useAppSelector((state) => state.flavor.value);

  return <h1>{flavor}</h1>;
}

export default DynamicPart;
