import {
  useDispatch as useDispatchNative,
  useSelector as useSelectorNative,
} from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";
import type { RootState, AppDispatch } from "./store";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useDispatch: () => AppDispatch = useDispatchNative;
export const useSelector: TypedUseSelectorHook<RootState> = useSelectorNative;
