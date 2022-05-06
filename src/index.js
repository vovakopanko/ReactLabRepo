import { Route, Routes, useLocation } from "react-router-dom";
import About from "./pages/About";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import { Layout } from "./Layout.tsx";
import Product from "./pages/Product";
import CartPage from "./pages/Cart";
import { CreateCardModal, EditCardModal } from "./components/ui";

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
          <Route path="games/:name" element={<EditCardModal />} />
          <Route path="/createCard" element={<CreateCardModal />} />
        </Routes>
      )}
    </div>
  );
};

export default AppContainer;
