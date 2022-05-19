import { Outlet } from "react-router-dom";
import styled from "styled-components";
import {
  ChangePassword,
  Footer,
  Header,
  Notification,
  SignIn,
  SignUp,
} from "../components/ui";

const Layout = () => {
  return (
    <Container>
      <Header />
      <Background>
        <Outlet />
        <SignIn />
        <SignUp />
        <ChangePassword />
        <Notification />
      </Background>
      <Footer />
    </Container>
  );
};

const Background = styled.div`
  background-image: url(${require("../assets/images/homeBG.jpeg")});
  height: 100%;
  min-height: 90vh;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  @media only screen and (max-width: 767px) {
    background-image: url(${require("../assets/images/smallBGImage.jpeg")});
    background-attachment: fixed;
  }
`;

const Container = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  margin: 0;
  padding: 0;
  width: 100%;
  overflow: hidden;
`;

export { Layout };
