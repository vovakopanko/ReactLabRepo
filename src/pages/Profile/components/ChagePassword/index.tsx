import Button from "@/components/ui/atoms/Button";
import { onStatusPasswordChange } from "@/redux/reducers/profile";
import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ContentBlock } from "../../styles";
import { Props } from "./types";

const ChangePassword = ({ isOpen, setIsOpen }: Props) => {
  const dispatch = useDispatch();
  const changePasswordStatus = useCallback(
    () => dispatch(onStatusPasswordChange(true)),
    []
  );

  return (
    <ContentBlock>
      <Button
        title={"Change password"}
        width={180}
        onClick={changePasswordStatus}
        type="secondary"
      />
      {isOpen && (
        <Button
          title={"Change data"}
          width={180}
          onClick={() => setIsOpen(!isOpen)}
          type="secondary"
        />
      )}
    </ContentBlock>
  );
};

export default ChangePassword;
