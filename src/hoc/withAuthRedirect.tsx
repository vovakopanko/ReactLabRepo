import { setStatusAuthWindow } from "@/redux/reducers/auth";
import { selectorIsAuthUser } from "@/redux/selectors/AuthSelector";
import { ReactElement } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";

const AuthRedirect = ({ children }: { children: ReactElement<any, any> }) => {
  const isAuth = useSelector(selectorIsAuthUser);
  const dispatch = useDispatch();
  const location = useLocation();

  if (!isAuth) {
    dispatch(setStatusAuthWindow(true));
    return <Navigate to="/home" state={{ from: location }} />;
  }
  return children;
};

export default AuthRedirect;
