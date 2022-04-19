import { AuthPortalName, ModalForm } from "@/api/types";
import { selectorStatusWindowAuth } from "@/redux/selectors/authSelector";
import { useSelector } from "react-redux";
import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignIn() {
  const isOpen = useSelector(selectorStatusWindowAuth);
  return (
    <>
      {isOpen && (
        <AuthPortal
          modalForm={ModalForm.AUTHORIZATION}
          title={AuthPortalName.AUTHORIZATION}
          fields={fieldData}
        />
      )}
    </>
  );
}
