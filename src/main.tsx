import ReactDOM from "react-dom";
import { BrowserRouter as Router } from "react-router-dom";
import ErrorBoundary from "./components/ui/container/ErrorBoundary";
import AppContainer from "./index";
import { Provider } from "react-redux";
import store from "./redux/reduxStore";

const rootElement = document.getElementById("app");

ReactDOM.render(
  <ErrorBoundary>
    <Router>
      <Provider store={store}>
        <AppContainer />
      </Provider>
    </Router>
  </ErrorBoundary>,
  rootElement
);
