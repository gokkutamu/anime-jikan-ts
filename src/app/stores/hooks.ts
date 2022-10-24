import { FC } from "react";
import { useDispatch, useSelector } from "react-redux";
import type { TypedUseSelectorHook } from "react-redux";

export const useAppSelector: TypedUseSelectorHook<FC> = useSelector;