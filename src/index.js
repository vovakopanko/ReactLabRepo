import { FC, useEffect, useState } from "react";
import ReactDom from "react-dom";
import { Route, Routes, Redirect } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import PC from "./pages/Product/PC";
import XBox from "./pages/Product/XBox";
import Playstation from "./pages/Product/Playstation";
import { colors } from "./styles/palette";
import { images } from "./constants/image";
import styled from "styled-components";
import { Footer, Header } from "./components/ui";
import SignIn from "./components/ui/molecules/SignIn";
import SignUp from "./components/ui/molecules/SignUp";
import Profile from "./pages/Profile";
import { getIsAuthUser } from "./redux/selectors/AuthSelector";

const AppContainer = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isOpenAuth, setIsOpenAuth] = useState(false);
  const [isOpenRegistration, setIsOpenRegistration] = useState(false);
  const [isAuth, setIsAuth] = useState(false);
  const [nameUser, setNameUser] = useState("");

  useEffect(() => {}, [isAuth]);

  return (
    <Container>
      <Header
        setIsOpen={setIsOpen}
        isOpen={isOpen}
        setIsOpenAuth={setIsOpenAuth}
        setIsOpenRegistration={setIsOpenRegistration}
        isAuth={isAuth}
        setIsAuth={setIsAuth}
        nameUser={nameUser}
      />
      <Background>
        {isAuth ? (
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="*" element={<Home />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="/home" element={<Home />} />

            <Route path="/about" element={<About />} />
            <Route path="/category/:pc" element={<PC />} />
            <Route path="/category/:xboxone" element={<XBox />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/category/:playstation5" element={<Playstation />} />
          </Routes>
        )}

        <SignUp
          isOpen={isOpenAuth}
          setIsOpen={setIsOpenAuth}
          setIsAuth={setIsAuth}
          setNameUser={setNameUser}
        />
        <SignIn
          isOpen={isOpenRegistration}
          setIsOpen={setIsOpenRegistration}
          setIsAuth={setIsAuth}
          setNameUser={setNameUser}
        />
      </Background>
      <Footer />
    </Container>
  );
};

const Background = styled.div`
  background-image: url(${images.BACKGROUND});
  min-height: 90vh;
  height: 100%;
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

export default AppContainer;
