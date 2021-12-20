import { colors } from "@/styles/paletteColors";
import { FC } from "react";

const Registration: FC<null> = () => {
  return (
    <div>
      <h1 style={{ color: colors.PURPURE, textAlign: "center" }}>
        Registration
      </h1>
      <div>
        <text>Login:</text>
      </div>
      <div>
        <text>Password:</text>
      </div>
    </div>
  );
};

export default Registration;
