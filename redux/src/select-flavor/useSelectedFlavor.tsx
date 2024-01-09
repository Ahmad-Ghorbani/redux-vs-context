import { useEffect } from "react";
import { useAppDispatch } from "../redux/hooks";
import { useForm } from "react-hook-form";
import { setFlavor } from "../redux/slices/flavor-slice";

function useSelectedFlavor() {
  const { control, watch } = useForm();

  const dispatch = useAppDispatch();

  useEffect(() => {
    const subscription = watch(({ flavor }) =>
      dispatch(setFlavor(flavor.label))
    );
    return () => subscription.unsubscribe();
  }, [watch]);

  return { control };
}

export default useSelectedFlavor;
