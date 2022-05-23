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
import Pages from "./constants/pages";

const ProfileContainer = React.lazy(() => import("./pages/Profile"));
const ProductContainer = React.lazy(() => import("./pages/Product"));
const CartContainer = React.lazy(() => import("./pages/Cart"));
const AboutContainer = React.lazy(() => import("./pages/About"));

type LocationState = {
  backgroundLocation: Pages;
};

const AppContainer = () => {
  const location = useLocation();
  const state = location.state as LocationState;

  return (
    <div>
      <Routes location={state?.backgroundLocation || location}>
        <Route path={Pages.DEFAULT} element={<Layout />}>
          <Route index element={<Home />} />
          <Route path={Pages.ABOUT} element={withSuspense(AboutContainer)} />
          <Route
            path={Pages.PRODUCT_PLATFORM}
            element={withSuspense(ProductContainer)}
          />
          <Route
            path={Pages.PROFILE}
            element={withSuspense(ProfileContainer)}
          />
          <Route path={Pages.BASKET} element={withSuspense(CartContainer)} />
          <Route path={Pages.REDIRECT} element={<Home />} />
        </Route>
      </Routes>
      {state?.backgroundLocation && (
        <Routes>
          <Route path={Pages.EDIT_MODAL} element={<EditCardModal />} />
          <Route path={Pages.FOUND_NAME} element={<FoundCardModal />} />
          <Route path={Pages.CREATE_MODAL} element={<CreateCardModal />} />
        </Routes>
      )}
    </div>
  );
};

export default AppContainer;
