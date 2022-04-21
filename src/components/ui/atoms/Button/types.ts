export type Props = {
  title: string;
  width: number | string;
  onClick?: () => void;
  type?: ButtonType;
  disabled?: boolean;
};

export type StyledProps = {
  buttonType: ButtonType;
};

export type ButtonType = "secondary" | "primary";
