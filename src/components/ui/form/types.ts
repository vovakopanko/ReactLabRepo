import { InputHTMLAttributes } from "react";
import { FieldPath, Control } from "react-hook-form";

export type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

export type InputProps<T> = {
  uniqueType: string;
} & InputBaseProps &
  HookFormPropsBase<T>;

export type HookFormPropsBase<T> = {
  control: Control<T>;
  name: FieldPath<T>;
};
