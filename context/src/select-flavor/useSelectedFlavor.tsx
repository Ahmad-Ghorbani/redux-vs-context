import { useContext, useEffect } from "react";

import { useForm } from "react-hook-form";
import { FlavorContext } from "../flavor-context";

function useSelectedFlavor() {
  const { setSelectedFlavor } = useContext(FlavorContext);

  const { control, watch } = useForm();

  useEffect(() => {
    const subscription = watch(({ flavor }) => setSelectedFlavor(flavor.value));
    return () => subscription.unsubscribe();
  }, [watch]);

  return { control };
}

export default useSelectedFlavor;
