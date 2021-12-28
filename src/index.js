import { FC } from "react";
import ReactDom from "react-dom";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Registration from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PC from "./pages/Product/PC";
import XBox from "./pages/Product/XBox";
import Playstation from "./pages/Product/Playstation";
import { colors } from "./styles/palette";
import { images } from "./constants/image";
import styled from "styled-components";
import { Footer, Header } from "./components/ui";

const AppContainer = () => {
  return (
    <Container>
      <Header />
      <Background>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Home />} />
          <Route path="/pc" element={<PC />} />
          <Route path="/xbox" element={<XBox />} />
          <Route path="/ps5" element={<Playstation />} />
        </Routes>
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
