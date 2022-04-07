import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ui/container/ErrorBoundary";
import AppContainer from "./index";
import { createRoot } from "react-dom/client";

const container = document.getElementById("app");
const root = createRoot(container!);
root.render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </ErrorBoundary>
);
