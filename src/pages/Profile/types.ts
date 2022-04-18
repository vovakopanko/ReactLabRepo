export type FormValues = {
  email: string;
  userName: string;
  description: string;
  address: string;
  phoneNumber: string;
};

export type Props = {
  userName: string;
  description: string;
  address: string;
  phoneNumber: string;
};

export type PropRef = {
  current: { value: string };
};
