export type FormValues = {
  email: string;
  userName: string;
  description: string;
  address: string;
  phoneNumber: number | string;
};

export type Props = {
  userName: string;
  description: string;
  address: string;
  phoneNumber: number | string;
};

export type PropRef = {
  current: { value: string };
};
