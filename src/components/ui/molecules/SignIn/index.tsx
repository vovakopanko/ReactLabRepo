import AuthPortal from "../../organisms/AuthPortal";
import { fieldData } from "./constant";

export default function SignIn({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean;
  setIsOpen: (val: boolean) => void;
}) {
  return (
    isOpen && (
      <AuthPortal
        modalForm={"authorization"}
        title={"Authorization"}
        fields={fieldData}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
    )
  );
}
