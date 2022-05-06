import { ImagePlatforms } from "@/pages/Home/components/CategoryList/types";
import { useState } from "react";
import { CheckBoxContent, CheckBoxTitle } from "../styles";
// import { PC, Playstation5, Xbox } from "./constants";

type Props = {
  checkbox: { value: string; titleName: string };
  isChecked: boolean;
  platform: ImagePlatforms[];
  setPlatform: (value: ImagePlatforms[]) => void;
  onChange: (val: any) => void;
  onBlur: (val: any) => void;
};

const InputCheckBox = ({
  checkbox,
  isChecked,
  platform,
  setPlatform,
  onChange,
  onBlur,
}: Props) => {
  const [check, setCheck] = useState(isChecked);
  const unFollowPlatform = platform.filter(
    (check) => check.alt !== checkbox.value
  );

  const followPlatform = platform.filter(
    (check) => check.alt !== checkbox.value
  );

  // const array = [];

  // console.log(
  //   platform
  //     .filter((check) => check.alt !== checkbox.value)
  //     .map((a) => {
  //       if (a.alt === "Xbox") {
  //         return array.push(Xbox);
  //       }
  //       if (a.alt === "Playstation 5") {
  //         return array.push(Playstation5);
  //       }
  //       if (a.alt === "PC") {
  //         return array.push(PC);
  //       }
  //     })
  // );

  // console.log(array);

  const onClickCheckBox = () => {
    onChange(check ? unFollowPlatform : followPlatform);
    onBlur(check ? unFollowPlatform : followPlatform);
    setPlatform(check ? unFollowPlatform : followPlatform);
    setCheck(!check);
  };

  return (
    <CheckBoxContent>
      <input type="checkbox" onChange={onClickCheckBox} checked={check} />
      <CheckBoxTitle>{checkbox.value}</CheckBoxTitle>
    </CheckBoxContent>
  );
};

export default InputCheckBox;
