import { InputHTMLAttributes } from "react";
import { FieldPath, Control } from "react-hook-form";

export type InputBaseProps = InputHTMLAttributes<HTMLInputElement>;

type TextAreaBaseProps = InputHTMLAttributes<HTMLTextAreaElement>;

export type InputProps<T> = {
  uniqueType: string;
  isDisplayEye?: boolean;
} & InputBaseProps &
  HookFormPropsBase<T>;

export type TextAreaProps<T> = {
  uniqueType: string;
} & TextAreaBaseProps &
  HookFormPropsBase<T>;

export type HookFormPropsBase<T> = {
  control: Control<T>;
  name: FieldPath<T>;
};
