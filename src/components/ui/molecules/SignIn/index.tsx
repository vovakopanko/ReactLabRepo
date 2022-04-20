import { AuthPortalName, ModalForm } from "@/constants/types";
import { selectorStatusWindowRegistration } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignUp() {
  const isOpen = useSelector(selectorStatusWindowRegistration);
  return (
    <>
      {isOpen && (
        <AuthPortal
          modalForm={ModalForm.REGISTRATION}
          title={AuthPortalName.REGISTRATION}
          fields={fieldData}
        />
      )}
    </>
  );
}
