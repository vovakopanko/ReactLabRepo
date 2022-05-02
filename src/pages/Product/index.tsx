import { SectionHeader } from "@/components/ui";
import AuthRedirect from "@/hoc/withAuthRedirect";
import ProductsList from "./components/ProductsList";
import {
  FilterBlock,
  FilterContainer,
  ProductContainer,
  ProductListContainer,
  ProductMediaContainer,
  ProductName,
} from "./styles";
import { ChangeEvent, useCallback, useEffect, useState } from "react";
import styled from "styled-components";
import { colors } from "@/styles/palette";
import { useNavigate, useParams } from "react-router-dom";
import {
  ageRadioButtons,
  arrayCriteria,
  arrayType,
  genresRadioButtons,
  Platform,
  platformNames,
} from "./constants";
import useSearchGameCards from "@/hooks/handlers/useSearchGameCards";
import RadioBtnGroup from "./components/Filter/RadioBtnGroup";
import SelectedBtnGroup from "./components/Filter/SelectedBtnGroup";
import Button from "@/components/ui/atoms/Button";
import { useSelector } from "react-redux";
import { selectRoleUser } from "@/redux/selectors/authSelector";

type NavigationParam = {
  platform: Platform;
};

const Product = () => {
  const [searchData, setSearchData] = useState("");
  const [ageFilter, setAgeFilter] = useState("All");
  const [genresFilter, setGenresFilter] = useState("All");
  const [criteria, setCriteria] = useState("");
  const [type, setType] = useState("");
  const isAdmin = useSelector(selectRoleUser) === "ADMIN";
  const navigation = useNavigate();

  const OnChangeData = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  };
  const onChange = useCallback((e) => OnChangeData(e), []);
  const { platform = Platform.PC } = useParams<NavigationParam>();
  const handleChangeCriteria = (event: ChangeEvent<HTMLSelectElement>) => {
    setCriteria(event.target.value);
  };
  const handleChangeType = (event: ChangeEvent<HTMLSelectElement>) => {
    setType(event.target.value);
  };
  const pageName = platformNames[platform] || "";

  useEffect(() => {
    if (!pageName) {
      navigation("/home");
    }
  }, [pageName]);

  const { isLoading, gamesCards } = useSearchGameCards({
    searchData,
    pageInfo: pageName,
    age: ageFilter,
    genres: genresFilter,
    criteria: criteria,
    type: type,
  });

  const onAgeFilterPress = useCallback((e) => setAgeFilter(e.target.value), []);
  const onGenresFilterPress = useCallback(
    (e) => setGenresFilter(e.target.value),
    []
  );

  return (
    <AuthRedirect>
      <ProductContainer>
        <FilterContainer>
          <ProductName>{pageName.toLocaleUpperCase()}</ProductName>
          <FilterBlock>
            <SectionHeader name="Sort" />
            <SelectedBtnGroup
              title={"Criteria"}
              value={criteria}
              array={arrayCriteria}
              handleChange={handleChangeCriteria}
            />
            <SelectedBtnGroup
              title={"Type"}
              value={type}
              array={arrayType}
              handleChange={handleChangeType}
            />
            <RadioBtnGroup
              radioButtons={genresRadioButtons}
              currentValue={genresFilter}
              onChange={onGenresFilterPress}
              name={"Genres"}
            />
            <RadioBtnGroup
              radioButtons={ageRadioButtons}
              currentValue={ageFilter}
              onChange={onAgeFilterPress}
              name={"Age"}
            />
          </FilterBlock>
        </FilterContainer>
        <ProductMediaContainer>
          <InputContainer>
            <StyleInput
              type="text"
              placeholder="Search..."
              autoComplete="off"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(e)}
              value={searchData}
            />
            {isAdmin && (
              <div style={{ marginTop: 2.5, marginLeft: 5, marginBottom: 20 }}>
                <Button
                  title={"Create card"}
                  width={100}
                  type="secondary"
                  onClick={() => console.log("Create")}
                />
              </div>
            )}
          </InputContainer>
          <ProductListContainer>
            <SectionHeader name="Products" />
            <ProductsList isLoading={isLoading} gamesCards={gamesCards} />
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
  @media (max-width: 768px) {
    max-width: 340px;
  }
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
