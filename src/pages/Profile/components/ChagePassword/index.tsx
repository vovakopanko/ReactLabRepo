import OnClick from "@/components/ui/atoms/onClick";
import { onStatusPasswordChange } from "@/redux/reducers/profile";
import { colors } from "@/styles/palette";
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
      <OnClick
        title={"Change password"}
        color={colors.PURPURE}
        width={180}
        func={changePasswordStatus}
      />
      {isOpen && (
        <OnClick
          title={"Change data"}
          color={colors.PURPURE}
          width={180}
          func={() => setIsOpen(!isOpen)}
        />
      )}
    </ContentBlock>
  );
};

export default ChangePassword;
