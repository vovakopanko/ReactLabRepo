import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignIn({
  isOpen,
  setIsOpen,
  setIsAuth,
  setNameUser,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
  setIsAuth: (val: boolean) => void;
  setNameUser: (val: string) => void;
}) {
  return (
    isOpen && (
      <AuthPortal
        modalForm={"authorization"}
        title={"Authorization"}
        fields={fieldData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        setIsAuth={setIsAuth}
        setNameUser={setNameUser}
      />
    )
  );
}
