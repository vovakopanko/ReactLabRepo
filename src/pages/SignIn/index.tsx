import { colors } from "@/styles/palette";
import { FC } from "react";

const Registration: FC = () => {
  return (
    <div>
      <h1 style={{ color: colors.PURPURE, textAlign: "center" }}>
        Registration
      </h1>
      <div>
        <p>Login:</p>
      </div>
      <div>
        <p>Password:</p>
      </div>
    </div>
  );
};

export default Registration;
