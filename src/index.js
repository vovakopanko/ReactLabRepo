import { FC } from "react";
import ReactDom from "react-dom";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Product";
import Registration from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import PC from "./pages/PC";
import XBox from "./pages/XBox";
import Playstation from "./pages/Playstation";
import { colors } from "./styles/palette";
import { images } from "./constants/image";
import styled from "styled-components";

const AppContainer = () => {
  return (
    <>
      <Header />
      <BackgroundImg>
        <div style={{ padding: 20 }}>
          <Routes>
            <Route path="/home" element={<Home />} />
            <Route path="/product" element={<Product />} />
            <Route path="/about" element={<About />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/signUp" element={<SignUp />} />
            <Route path="*" element={<Home />} />
            <Route path="/pc" element={<PC />} />
            <Route path="/xbox" element={<XBox />} />
            <Route path="/ps5" element={<Playstation />} />
          </Routes>
        </div>
      </BackgroundImg>
      <Footer />
    </>
  );
};

const BackgroundImg = styled.div`
  background-image: url(${images.BACKGROUND});
  min-height: 1000px;
`;

export default AppContainer;
