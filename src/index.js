import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import { Layout } from "./components/ui/containers/Layout";
import {
  CreateCardModal,
  EditCardModal,
  FoundCardModal,
} from "./components/ui";
import { withSuspense } from "./hoc/withSuspense";
import React from "react";

const ProfileContainer = React.lazy(() => import("./pages/Profile"));
const ProductContainer = React.lazy(() => import("./pages/Product"));
const CartContainer = React.lazy(() => import("./pages/Cart"));
const AboutContainer = React.lazy(() => import("./pages/About"));

const AppContainer = () => {
  const location = useLocation();
  const state = location.state;

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={withSuspense(AboutContainer)} />
          <Route
            path="product/:platform"
            element={withSuspense(ProductContainer)}
          />
          <Route path="profile" element={withSuspense(ProfileContainer)} />
          <Route path="basket" element={withSuspense(CartContainer)} />
          <Route path="*" element={<Home />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path="games/:name" element={<EditCardModal />} />
          <Route path="found/:name" element={<FoundCardModal />} />
          <Route path="/createCard" element={<CreateCardModal />} />
        </Routes>
      )}
    </div>
  );
};

export default AppContainer;
