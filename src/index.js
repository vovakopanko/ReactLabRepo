import { FC } from "react";
import ReactDom from "react-dom";
import { Route, Routes } from "react-router-dom";
import About from "./components/about";
import useWindowDimensions from "./components/api/dimensions";
import Footer from "./components/footer";
import Header from "./components/header";
import Home from "./components/home";
import Product from "./components/product";
import Registration from "./components/registration";
import SignUp from "./components/signUp";

const AppContainer = () => {
  const { height, width } = useWindowDimensions();
  return (
    <>
      <Header />
      <div style={{ height: height * 0.9 }}>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/about" element={<About />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/signUp" element={<SignUp />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default AppContainer;
