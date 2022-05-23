import { Outlet } from "react-router-dom";
import {
  ChangePassword,
  Footer,
  Header,
  Notification,
  SignIn,
  SignUp,
} from "../..";
import { Background, Container } from "./styles";

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

export { Layout };
