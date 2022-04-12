import { selectorStatusWindowRegistration } from "@/redux/selectors/AuthSelector";
import { useSelector } from "react-redux";
import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignUp() {
  const isOpen = useSelector(selectorStatusWindowRegistration);
  return (
    <>
      {isOpen && (
        <AuthPortal
          modalForm={"registration"}
          title={"Registration"}
          fields={fieldData}
          isOpen={isOpen}
        />
      )}
    </>
  );
}
