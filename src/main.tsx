import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import AppContainer from "./index";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <BrowserRouter>
    <AppContainer />
  </BrowserRouter>,
  rootElement
);
