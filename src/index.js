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

const AppContainer = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/product" element={<Product />} />
        <Route path="/about" element={<About />} />
        <Route path="/registration" element={<Registration />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="*" element={<Home />} />
      </Routes>
      <Footer />
    </>
  );
};

export default AppContainer;
