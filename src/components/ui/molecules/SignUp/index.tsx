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
        modalForm={"registration"}
        title={"Registration"}
        fields={fieldData}
        setIsOpen={setIsOpen}
        isOpen={isOpen}
      />
    )
  );
}
