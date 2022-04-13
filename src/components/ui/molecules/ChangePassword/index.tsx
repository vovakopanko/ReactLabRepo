import { selectorStatusWindowChangePassword } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import ChangePasswordPortal from "../../organisms/ChangePasswordPortal";
import { fieldData } from "./constant";

export default function ChangePassword() {
  const isOpen = useSelector(selectorStatusWindowChangePassword);
  return (
    <>
      {isOpen && (
        <ChangePasswordPortal
          modalForm={"changePassword"}
          title={"Change password"}
          fields={fieldData}
        />
      )}
    </>
  );
}
