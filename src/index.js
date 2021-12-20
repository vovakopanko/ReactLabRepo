import { FC } from "react";
import ReactDom from "react-dom";
import { Route, Routes } from "react-router-dom";
import About from "./components/About";
import useWindowDimensions from "./constants/dimensions";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";
import Product from "./components/Product";
import Registration from "./components/SignIn";
import SignUp from "./components/SignUp";

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
