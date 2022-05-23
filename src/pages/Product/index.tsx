import { SectionHeader } from "@/components/ui";
import ProductsList from "./components/ProductsList";
import {
  CreateButtonContainer,
  FilterBlock,
  FilterContainer,
  InputContainer,
  ProductContainer,
  ProductListContainer,
  ProductMediaContainer,
  ProductName,
  StyleInput,
} from "./styles";
import { ChangeEvent, useCallback, useEffect, useMemo, useState } from "react";
import { useLocation, useNavigate, useParams } from "react-router-dom";
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
import { Criteria, NavigationParam } from "./types";
import Button from "@/components/ui/atoms/Button";
import { useSelector } from "react-redux";
import { selectIsAdmin } from "@/redux/selectors/authSelector";
import { ModalLink } from "@/components/ui/molecules/GameCard/style";
import AuthRedirect from "@/hoc/withAuthRedirect";

const Product = () => {
  const [searchData, setSearchData] = useState("");
  const [ageFilter, setAgeFilter] = useState("All");
  const [genresFilter, setGenresFilter] = useState("All");
  const [criteria, setCriteria] = useState<Criteria>("default");
  const [type, setType] = useState("");
  const isAdmin = useSelector(selectIsAdmin);
  const navigation = useNavigate();
  const location = useLocation();

  const onChangeData = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchData(e.target.value.trim());
  }, []);

  const onChange = useCallback((e) => onChangeData(e), []);

  const backgroundLocation = useMemo(
    () => ({ backgroundLocation: location }),
    [location]
  );
  const handleChangeCriteria = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setCriteria(event.target.value as Criteria);
    },
    []
  );

  const handleChangeType = useCallback(
    (event: ChangeEvent<HTMLSelectElement>) => {
      setType(event.target.value);
    },
    []
  );
  const onAgeFilterPress = useCallback((e) => setAgeFilter(e.target.value), []);

  const onGenresFilterPress = useCallback(
    (e) => setGenresFilter(e.target.value),
    []
  );

  const { platform = Platform.PC } = useParams<NavigationParam>();
  const pageName = platformNames[platform] || "";

  const { isLoading, gamesCards } = useSearchGameCards({
    searchData,
    pageInfo: pageName,
    age: ageFilter,
    genres: genresFilter,
    criteria: criteria,
    type: type,
  });

  useEffect(() => {
    if (!pageName) {
      navigation("/home");
    }
  }, [pageName]);

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
            <>
              <SectionHeader name={"Genres"} />
              <RadioBtnGroup
                radioButtons={genresRadioButtons}
                currentValue={genresFilter}
                onChange={onGenresFilterPress}
              />
            </>
            <>
              <SectionHeader name={"Age"} />
              <RadioBtnGroup
                radioButtons={ageRadioButtons}
                currentValue={ageFilter}
                onChange={onAgeFilterPress}
              />
            </>
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
              <CreateButtonContainer>
                <ModalLink to={`/createCard`} state={{ backgroundLocation }}>
                  <Button title={"Create card"} width={120} type="secondary" />
                </ModalLink>
              </CreateButtonContainer>
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

export default Product;
