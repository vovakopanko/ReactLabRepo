import { CloseOutlined } from "@ant-design/icons";
import Button from "../../atoms/Button";
import ReactDOM from "react-dom";
import { useState } from "react";

export default function SignIn() {
  const [isOpen, setIsOpen] = useState(false);
  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0,0,0,.6)",
          zIndex: 1000,
        }}
      />
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%,-50%)",
          backgroundColor: "#0b0b21",
          padding: 30,
          zIndex: 1000,
          width: 400,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          borderRadius: 25,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            width: "100%",
            paddingBottom: 15,
          }}
        >
          <span style={{ color: "#FFF", fontSize: 27, width: "95%" }}>
            Authorization
          </span>
          <button onClick={() => {}} style={{ backgroundColor: "grey" }}>
            <CloseOutlined style={{ color: "#FFF" }} />
          </button>
        </div>

        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            width: "100%",
          }}
        >
          <span style={{ color: "#FFF", fontSize: 27, width: "50%" }}>
            Login
          </span>
          <div>
            <input placeholder="..." />
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            alignSelf: "flex-start",
            width: "100%",
            paddingBottom: 15,
          }}
        >
          <span style={{ color: "#FFF", fontSize: 27, width: "50%" }}>
            Password
          </span>
          <div>
            <input placeholder="..." />
          </div>
        </div>
        {/* <div style={{ paddingTop: 10 }}> */}
        <Button title={"Submit"} />
        {/* </div> */}
      </div>
    </>,
    document.getElementById("portal")
  );
}
