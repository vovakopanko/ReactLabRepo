import { useNavigate } from "react-router-dom";
import closeImage from "@/assets/svgIcon/closeBtn.svg";
import ModalForm from "./ModalForm";
import { BackgroundContainer } from "../../portals/AuthPortal/styles";
import {
  Blur,
  CardInfoContainer,
  CloseButton,
  CloseOutlined,
  EditCardContainer,
  InfoContainer,
  Title,
  TitleContainer,
} from "./styles";

export function CreateCardModal() {
  const navigate = useNavigate();

  function onDismiss() {
    navigate(-1);
  }

  return (
    <EditCardContainer>
      <BackgroundContainer />
      <Blur>
        <TitleContainer>
          <Title>Create card</Title>
          <CloseButton>
            <CloseOutlined src={closeImage} onClick={onDismiss} />
          </CloseButton>
        </TitleContainer>
        <CardInfoContainer>
          <InfoContainer>
            <ModalForm />
          </InfoContainer>
        </CardInfoContainer>
      </Blur>
    </EditCardContainer>
  );
}
