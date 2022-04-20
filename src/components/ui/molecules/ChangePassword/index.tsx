import { selectIsChangePassword } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import ChangePasswordPortal from "../../organisms/ChangePasswordPortal";
import { fields } from "./constant";

export default function ChangePassword() {
  const isOpen = useSelector(selectIsChangePassword);
  return (
    <>
      {isOpen && (
        <ChangePasswordPortal title={"Change password"} fields={fields!} />
      )}
    </>
  );
}
