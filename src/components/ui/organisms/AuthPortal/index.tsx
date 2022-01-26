import { CloseOutlined } from "@ant-design/icons";
import Button from "../../atoms/Button";
import ReactDOM from "react-dom";
import { colors } from "@/styles/palette";
import ValueInputContainer from "../../molecules/ValueInputContainer";
import {
  AuthContainer,
  AuthTitle,
  BackgroundContainer,
  CloseBtnStyle,
  HeaderStyle,
} from "./styles";

type Props = { title: string; type: string; id: number };

export default function AuthPortal({
  title,
  fields,
}: {
  title: string;
  fields: Props[];
}) {
  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <AuthContainer>
        <HeaderStyle>
          <AuthTitle>{title}</AuthTitle>
          <CloseBtnStyle onClick={() => {}}>
            <CloseOutlined style={{ color: colors.WHITE }} />
          </CloseBtnStyle>
        </HeaderStyle>
        {fields.map((field: Props) => (
          <ValueInputContainer
            title={field.title}
            type={field.type}
            key={field.id}
          />
        ))}
        <Button title={"Submit"} />
      </AuthContainer>
    </>,
    document.getElementById("portal")
  );
}
