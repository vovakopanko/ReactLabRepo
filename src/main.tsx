import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import ErrorBoundary from "./components/ui/container/ErrorBoundary";
import AppContainer from "./index";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <ErrorBoundary>
    <BrowserRouter>
      <AppContainer />
    </BrowserRouter>
  </ErrorBoundary>,
  rootElement
);
