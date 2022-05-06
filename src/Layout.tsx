import { Outlet } from "react-router-dom";
import { images } from "./constants/image";
import styled from "styled-components";
import {
  ChangePassword,
  Footer,
  Header,
  Notification,
  SignIn,
  SignUp,
} from "./components/ui";

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
  background-image: url(${images.BACKGROUND});
  min-height: 90vh;
  height: 100;
  background-size: cover;
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
