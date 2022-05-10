import { selectIsShowNotification } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import NotificationPortal from "../../portals/NotificationPortal";

export default function Notification() {
  const isOpen = useSelector(selectIsShowNotification);
  return <>{isOpen && <NotificationPortal />}</>;
}
