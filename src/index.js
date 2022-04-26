import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import { images } from "./constants/image";
import styled from "styled-components";
import { Footer, Header } from "./components/ui";
import SignUp from "./components/ui/molecules/SignUp";
import SignIn from "./components/ui/molecules/SignIn";
import Profile from "./pages/Profile";
import { Layout } from "./Layout.tsx";
import Product from "./pages/Product";

const AppContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route exact path="product/:platform" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

const Background = styled.div`
  background-image: url(${images.BACKGROUND});
  height: 100%;
  min-height: 90vh;
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
