import { SectionHeader } from "@/components/ui";
import AuthRedirect from "@/hoc/withAuthRedirect";
import ProductsList from "./components/ProductsList";
import {
  ProductContainer,
  ProductListContainer,
  ProductMediaContainer,
} from "./styles";
import Filter from "../../components/ui/organisms/Filter";
import { useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/palette";
import { useNavigate, useParams } from "react-router-dom";
import { Platform, platformNames } from "./constants";

type NavigationParam = {
  platform: Platform;
};

const Product = () => {
  const [searchData, setSearchData] = useState("");
  const navigation = useNavigate();
  const OnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  };
  const onChange = useCallback((e) => OnChangeData(e), []);
  const { platform = Platform.PC } = useParams<NavigationParam>();

  const pageName = platformNames[platform] || "";

  useEffect(() => {
    if (!pageName) {
      navigation("/home");
    }
  }, [pageName]);

  return (
    <AuthRedirect>
      <ProductContainer>
        <Filter pageInfo={pageName} />
        <ProductMediaContainer>
          <InputContainer>
            <StyleInput
              type="text"
              placeholder="Search..."
              autoComplete="off"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              value={searchData}
            />
          </InputContainer>
          <ProductListContainer>
            <SectionHeader name="Products" />
            <ProductsList pageInfo={pageName} searchData={searchData} />
          </ProductListContainer>
        </ProductMediaContainer>
      </ProductContainer>
    </AuthRedirect>
  );
};
const InputContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const StyleInput = styled.input`
  width: 80%;
  margin-top: 10px;
  margin-bottom: 20px;
  padding-left: 10px;
  border: 2px solid ${colors.WHITE};
  height: 40px;
  background-color: ${colors.BLACK};
  opacity: 0.91;
  border-radius: 15px;
  font-size: 19px;
  font-weight: 300;
  color: ${colors.WHITE};
  @media (max-width: 768px) {
    min-width: 328px;
  }
`;

export default Product;
