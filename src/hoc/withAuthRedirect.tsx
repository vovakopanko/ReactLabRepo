import { Navigate } from "react-router-dom";

const AuthRedirect = (children: () => JSX.Element) => {
  const isAuth = true;
  if (!isAuth) {
    return <Navigate to="/home" replace={true} />;
  }
  return { children };
};

export default AuthRedirect;
