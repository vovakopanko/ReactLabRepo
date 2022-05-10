import { useController } from "react-hook-form";
import { HookFormPropsBase, InputBaseProps } from "../../types";
import { CheckBoxContent, CheckBoxTitle } from "../styles";

type Props<T> = InputBaseProps & HookFormPropsBase<T>;

export function CheckBox<T>({ control, name, title }: Props<T>) {
  const {
    field: { onChange, onBlur, value },
  } = useController({ name, control });

  return (
    <CheckBoxContent>
      <input
        type="checkbox"
        onChange={onChange}
        onBlur={onBlur}
        checked={value as boolean}
      />
      <CheckBoxTitle>{title}</CheckBoxTitle>
    </CheckBoxContent>
  );
}
