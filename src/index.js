import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import SignUp from "./components/ui/molecules/SignUp";
import SignIn from "./components/ui/molecules/SignIn";
import Profile from "./pages/Profile";
import { Layout } from "./Layout.tsx";
import Product from "./pages/Product";
import CartPage from "./pages/Cart";
import { Modal } from "./components/ui/molecules/Modal";
import { CreateNewCardModal } from "./components/ui/molecules/CreateGameCard";

const AppContainer = () => {
  let location = useLocation();
  let state = location.state;

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route exact path="product/:platform" element={<Product />} />
          <Route path="profile" element={<Profile />} />
          <Route path="basket" element={<CartPage />} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="games/:name" element={<Modal />} />
          <Route path="/createCard" element={<CreateNewCardModal />} />
        </Routes>
      )}
    </div>
  );
};

export default AppContainer;
