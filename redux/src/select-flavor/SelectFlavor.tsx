import Select from "react-select";
import styles from "./SelectedFlavor.module.css";
import { Controller } from "react-hook-form";
import useSelectedFlavor from "./useSelectedFlavor";

const options = [
  { value: "chocolate", label: "Chocolate" },
  { value: "strawberry", label: "Strawberry" },
  { value: "vanilla", label: "Vanilla" },
];

function SelectFlavor() {
  const { control } = useSelectedFlavor();

  return (
    <div className={styles.container}>
      <Controller
        name="gender"
        control={control}
        render={({ field }) => (
          <Select
            {...field}
            className="basic-single"
            classNamePrefix="select"
            options={options}
          />
        )}
      />
    </div>
  );
}

export default SelectFlavor;
