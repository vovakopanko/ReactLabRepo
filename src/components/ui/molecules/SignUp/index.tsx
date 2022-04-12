import { selectorStatusWindowAuth } from "@/redux/selectors/AuthSelector";
import { useSelector } from "react-redux";
import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignIn() {
  const isOpen = useSelector(selectorStatusWindowAuth);
  return (
    <>
      {isOpen && (
        <AuthPortal
          modalForm={"authorization"}
          title={"Authorization"}
          fields={fieldData}
        />
      )}
    </>
  );
}
