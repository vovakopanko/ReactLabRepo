import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import PC from "./pages/Product/PC";
import XBox from "./pages/Product/XBox";
import Playstation from "./pages/Product/Playstation";
import { images } from "./constants/image";
import styled from "styled-components";
import { Footer, Header } from "./components/ui";
import SignIn from "./components/ui/molecules/SignIn";
import SignUp from "./components/ui/molecules/SignUp";
import Profile from "./pages/Profile";
import { Layout } from "./Layout.tsx";

const AppContainer = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="category/:pc" element={<PC />} />
          <Route path="category/:xboxone" element={<XBox />} />
          <Route path="profile" element={<Profile />} />
          <Route path="category/:playstation5" element={<Playstation />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
    </>
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
