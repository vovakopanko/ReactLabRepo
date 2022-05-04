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
import styled from "styled-components";
import { arrayAge, arrayPlatform } from "..";
import { imagesPlatforms } from "../../GameCard/types";
import { FormValue, scheme } from "../scheme";
import { ButtonWrapper, CardFormContainer, EditCardForm } from "./styles";

type ImagePlatforms = {
  alt: string;
  id: number;
  src: string;
};

type Props = {
  gameName: string;
  description: string;
  image: string;
  price: number;
  genres: string;
  age: number;
  ageUser?: number;
  imagePlatforms: ImagePlatforms[];
};

export type TState = {
  title: string;
  age: string;
  alt: string;
  amountStars: number;
  description: string;
  url: string;
  price: number;
  genres: string;
  imagePlatforms: imagesPlatforms[];
};

const ModalForm = ({
  gameName,
  description,
  image,
  price,
  genres,
  age,
  imagePlatforms,
}: Props) => {
  const [ageUser, setAgeUser] = useState<number>(age);
  const navigate = useNavigate();

  const dispatch = useDispatch();

  const handleChangeCriteria = (event: ChangeEvent<any>) => {
    setAgeUser(event.target.value as number);
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
      gameName,
      description,
      image,
      price,
      genres,
      ageUser,
      imagePlatforms,
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
      } = dataForm;
      contentAPI
        .updateCardInfo(
          gameName,
          description,
          image,
          price,
          genres,
          ageUser!,
          imagePlatforms
        )
        ?.then((response: any) => {
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
          placeholder={gameName}
        />
        <FormInput
          control={control}
          name={"genres"}
          title={"Genres"}
          type={"text"}
          uniqueType={"genres"}
          placeholder={genres}
        />
        <FormInput
          control={control}
          name={"price"}
          title={"Price"}
          type={"number"}
          uniqueType={"price"}
          required
        />
        <FormInput
          control={control}
          name={"image"}
          title={"Image URL"}
          type={"text"}
          uniqueType={"image"}
          placeholder={image}
        />
        <FormTextArea
          control={control}
          name={"description"}
          title={"Description"}
          type={"textarea"}
          uniqueType={"description"}
        />
        <FormSelected
          control={control}
          title={"Age"}
          name={"ageUser"}
          uniqueType={"ageUser"}
          array={arrayAge}
          handleChange={handleChangeCriteria}
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
            title={"Submit"}
            width={100}
            type="secondary"
            disabled={!isValid || isSubmitting}
            onClick={onSubmit}
          />
        </ButtonWrapper>
        <ButtonWrapper>
          <Button
            title={"Delete card"}
            width={100}
            type="secondary"
            onClick={() => console.log("EDIT")}
          />
        </ButtonWrapper>
      </CardFormContainer>
    </>
  );
};

export default ModalForm;
