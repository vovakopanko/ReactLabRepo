import { contentAPI } from "@/api/ContentAPI";
import {
  isShowDeleteNotification,
  updateCurrentState,
} from "@/redux/reducers/product";
import { selectUniqueIdCard } from "@/redux/selectors/authSelector";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import {
  BackgroundContainer,
  CloseOutlined,
  HeaderContainer,
} from "../AuthPortal/styles";
import { CloseBtnContainer } from "../ChangePasswordPortal/styles";
import closeImage from "./../../../../assets/svgIcon/closeBtn.svg";
import {
  ButtonsContainer,
  HeaderName,
  NotificationContainer,
  NotificationTitle,
} from "./styles";

export default function NotificationPortal() {
  const idCard = useSelector(selectUniqueIdCard);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClick = () => {
    contentAPI.deleteGameCard(idCard)?.then((response: any) => {
      dispatch(updateCurrentState(response));
    });
    dispatch(isShowDeleteNotification(false));
    navigate(-1);
  };

  const onHandlerClick = () => {
    dispatch(isShowDeleteNotification(false));
    navigate(-1);
  };

  const closeNotificationWindow = () => {
    dispatch(isShowDeleteNotification(false));
  };
  return ReactDOM.createPortal(
    <>
      <BackgroundContainer />
      <NotificationContainer>
        <HeaderContainer>
          <HeaderName>Notification</HeaderName>
          <CloseBtnContainer onClick={closeNotificationWindow}>
            <CloseOutlined src={closeImage} />
          </CloseBtnContainer>
        </HeaderContainer>
        <NotificationTitle>
          Are you sure want you are to delete the card
        </NotificationTitle>
        <ButtonsContainer>
          <Button
            title={"Delete"}
            width={100}
            type="secondary"
            disabled={false}
            onClick={onClick}
          />
          <Button
            title={"Cancel"}
            width={100}
            type="secondary"
            disabled={false}
            onClick={onHandlerClick}
          />
        </ButtonsContainer>
      </NotificationContainer>
    </>,
    document.getElementById("notificationPortal")!
  );
}
