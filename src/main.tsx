import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ui/container/ErrorBoundary";
import AppContainer from "./index";
import { Provider } from "react-redux";
// import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/reduxStore";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <ErrorBoundary>
    <Router>
      <Provider store={store}>
        {/* <PersistGate loading={null} persistor={persistor}> */}
        <AppContainer />
        {/* </PersistGate> */}
      </Provider>
    </Router>
  </ErrorBoundary>
);
