import { useLocation, useParams } from "react-router-dom";
import Product from "..";

const pageInfo = "Soon there will be content for XBox";

const XBox = () => {
  const location = useParams();
  console.log("location", location);
  return <Product pageInfo={pageInfo} />;
};

export default XBox;
