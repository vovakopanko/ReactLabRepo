import { contentAPI } from "@/api/ContentAPI";
import {
  isShowDeleteNotification,
  setSelectedNameCard,
  updateCurrentState,
} from "@/redux/reducers/product";
import {
  selectDeleteCrdName,
  selectUniqueIdCard,
} from "@/redux/selectors/authSelector";
import { useCallback } from "react";
import ReactDOM from "react-dom";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Button from "../../atoms/Button";
import { ButtonWrapper } from "../../modal/EditCardModal/ModalForm/styles";
import {
  BackgroundContainer,
  CloseOutlined,
  HeaderContainer,
} from "../AuthPortal/styles";
import { CloseBtnContainer } from "../SecurityPortal/styles";
import closeImage from "./../../../../assets/svgIcon/closeBtn.svg";
import {
  ButtonsContainer,
  HeaderName,
  NotificationContainer,
  NotificationTitle,
} from "./styles";

export default function NotificationPortal() {
  const idCard = useSelector(selectUniqueIdCard);
  const nameCard = useSelector(selectDeleteCrdName);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onClick = useCallback(() => {
    contentAPI.deleteGameCard(idCard)?.then((response: any) => {
      dispatch(updateCurrentState(response));
    });
    dispatch(setSelectedNameCard(""));
    dispatch(isShowDeleteNotification(false));
    navigate(-1);
  }, [idCard]);

  const onHandlerClick = useCallback(() => {
    dispatch(isShowDeleteNotification(false));
    navigate(-1);
  }, []);

  const closeNotificationWindow = useCallback(() => {
    dispatch(isShowDeleteNotification(false));
  }, []);

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
          Are you sure want you are to delete the {nameCard}
        </NotificationTitle>
        <ButtonsContainer>
          <Button
            title={"Delete"}
            width={100}
            type="secondary"
            disabled={false}
            onClick={onClick}
          />
          <ButtonWrapper>
            <Button
              title={"Cancel"}
              width={100}
              type="primary"
              disabled={false}
              onClick={onHandlerClick}
            />
          </ButtonWrapper>
        </ButtonsContainer>
      </NotificationContainer>
    </>,
    document.getElementById("notificationPortal")!
  );
}
