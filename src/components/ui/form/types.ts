import { ChangeEvent, InputHTMLAttributes } from "react";
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

export type SelectedProps<T> = {
  uniqueType: string;
  array: { titleName: string; value: string }[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
} & TextAreaBaseProps &
  HookFormPropsBase<T>;

export type CheckedFormProps<T> = {
  imagePlatforms: {
    alt: string;
    id: number;
    src: string;
  }[];

  uniqueType: string;
  array: { titleName: string; value: string }[];
  handleChange: (event: ChangeEvent<HTMLSelectElement>) => void;
} & TextAreaBaseProps &
  HookFormPropsBase<T>;

export type HookFormPropsBase<T> = {
  control?: Control<T>;
  name: FieldPath<T>;
};
