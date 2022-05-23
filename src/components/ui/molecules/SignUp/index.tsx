import { PortalNames, ModalForm } from "@/constants/types";
import { selectorStatusWindowAuth } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import AuthPortal from "../../portals/AuthPortal";
import { fieldData } from "./constant";

export default function SignIn() {
  const isOpen = useSelector(selectorStatusWindowAuth);

  return (
    <>
      {isOpen && (
        <AuthPortal
          modalForm={ModalForm.AUTHORIZATION}
          title={PortalNames.AUTHORIZATION}
          fields={fieldData}
        />
      )}
    </>
  );
}
