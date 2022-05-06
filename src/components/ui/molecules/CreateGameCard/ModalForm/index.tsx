import { contentAPI } from "@/api/ContentAPI";
import Button from "@/components/ui/atoms/Button";
import CheckedForm from "@/components/ui/form/CheckedForm";
import FormSelected from "@/components/ui/form/SelectedForm";
import FormTextArea from "@/components/ui/form/TextArea";
import FormInput from "@/components/ui/form/TextInput";
import { updateCurrentState } from "@/redux/reducers/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useCallback, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { arrayAge, arrayPlatform } from "../../Modal/ModalForm/constants";
import { FormValue, scheme } from "../scheme";
import { ButtonWrapper, CardFormContainer, EditCardForm } from "./styles";
import { arrayStars, imagePlatforms } from "./constants";
import { ImagePlatforms } from "@/pages/Home/components/CategoryList/types";

const ModalForm = () => {
  const [ageUser, setAgeUser] = useState<number>(0);
  const [stars, setStarsUser] = useState<number>(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleChangeAgeUser = (event: ChangeEvent<any>) => {
    setAgeUser(event.target.value as number);
  };

  const handleChangeStars = (event: ChangeEvent<any>) => {
    setStarsUser(event.target.value as number);
  };

  const [checkedArray, setCheckedArray] =
    useState<ImagePlatforms[]>(imagePlatforms);
  const handleChangeCheckedArray = (event: ChangeEvent<any>) => {
    setCheckedArray(event.target.value as ImagePlatforms[]);
  };

  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<FormValue>({
    mode: "onChange",
    defaultValues: {
      gameName: "",
      genres: "",
      image: "",
      price: 0,
      description: "",
      ageUser,
      imagePlatforms,
      stars,
    },
    resolver: yupResolver(scheme),
  });

  const onSubmit = useCallback(
    handleSubmit(async (dataForm: FormValue) => {
      const {
        gameName,
        genres,
        image,
        price,
        description,
        ageUser,
        imagePlatforms,
        stars,
      } = dataForm;
      contentAPI
        .createNewCard(
          gameName,
          description,
          image,
          price,
          genres,
          ageUser,
          imagePlatforms,
          stars
        )
        ?.then((response) => {
          dispatch(updateCurrentState(response));
        });
      navigate(-1);
    }),
    []
  );

  return (
    <>
      <EditCardForm>
        <FormInput
          control={control}
          name={"gameName"}
          title={"Game Name"}
          type={"text"}
          uniqueType={"gameName"}
          placeholder={"Write name..."}
        />
        <FormInput
          control={control}
          name={"genres"}
          title={"Genres"}
          type={"text"}
          uniqueType={"genres"}
          placeholder={"Write genres..."}
        />
        <FormInput
          control={control}
          name={"price"}
          title={"Price"}
          type={"number"}
          uniqueType={"price"}
          placeholder={"Add price..."}
          required
        />
        <FormInput
          control={control}
          name={"image"}
          title={"Image URL"}
          type={"text"}
          uniqueType={"image"}
          placeholder={"Write url..."}
        />
        <FormTextArea
          control={control}
          name={"description"}
          title={"Description"}
          type={"textarea"}
          uniqueType={"description"}
          placeholder={"Write description game..."}
        />
        <FormSelected
          control={control}
          title={"Age"}
          name={"ageUser"}
          uniqueType={"ageUser"}
          array={arrayAge}
          handleChange={handleChangeAgeUser}
        />
        <FormSelected
          control={control}
          title={"Stars"}
          name={"stars"}
          uniqueType={"stars"}
          array={arrayStars}
          handleChange={handleChangeStars}
        />
        <CheckedForm
          imagePlatforms={checkedArray}
          array={arrayPlatform}
          control={control}
          title={"Platform"}
          name={"imagePlatforms"}
          uniqueType={"imagePlatforms"}
          handleChange={handleChangeCheckedArray}
        />
      </EditCardForm>
      <CardFormContainer>
        <ButtonWrapper>
          <Button
            title={"Create"}
            width={100}
            type="secondary"
            disabled={!isValid || isSubmitting}
            onClick={onSubmit}
          />
        </ButtonWrapper>
      </CardFormContainer>
    </>
  );
};

export default ModalForm;
