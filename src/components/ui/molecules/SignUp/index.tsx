import { useState } from "react";
import AuthPortal from "../../organisms/AuthPortal";

const fieldData = [
  { id: 0, title: "Login", type: "text" },
  { id: 1, title: "Password", type: "password" },
  { id: 2, title: "Repeat password", type: "password" },
];

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) return null;

  return <AuthPortal title={"Registration"} fields={fieldData} />;
}
