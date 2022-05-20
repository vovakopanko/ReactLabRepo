import { setStatusAuthWindow } from "@/redux/reducers/auth";
import { selectIsAuthUser } from "@/redux/selectors/authSelector";
import { ReactElement, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const AuthRedirect = ({ children }: { children: ReactElement<any, any> }) => {
  const isAuth = useSelector(selectIsAuthUser);

  const dispatch = useDispatch();
  const navigation = useNavigate();

  useEffect(() => {
    if (!isAuth) {
      navigation("/home");
      dispatch(setStatusAuthWindow(true));
    }
  }, [isAuth]);

  return children;
};

export default AuthRedirect;
