import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./components/ui/molecules/SignUp";
import SignIn from "./components/ui/molecules/SignIn";
import Profile from "./pages/Profile";
import { Layout } from "./Layout.tsx";
import Product from "./pages/Product";
import CartPage from "./pages/Cart";

const AppContainer = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route exact path="product/:platform" element={<Product />} />
        <Route path="profile" element={<Profile />} />
        <Route path="basket" element={<CartPage />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};

export default AppContainer;
