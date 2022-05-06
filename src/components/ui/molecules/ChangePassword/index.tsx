import { selectIsChangePassword } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import SecurityPortal from "../../portals/SecurityPortal";

export default function ChangePassword() {
  const isOpen = useSelector(selectIsChangePassword);
  return <>{isOpen && <SecurityPortal title={"Change password"} />}</>;
}
