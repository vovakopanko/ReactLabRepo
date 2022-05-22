import { contentAPI } from "@/api/ContentAPI";
import Button from "@/components/ui/atoms/Button";
import FormSelected from "@/components/ui/form/SelectedForm";
import FormTextArea from "@/components/ui/form/TextArea";
import FormInput from "@/components/ui/form/TextInput";
import {
  isShowDeleteNotification,
  setSelectedNameCard,
  setUniqueIdCurrentCard,
  updateCurrentState,
} from "@/redux/reducers/product";
import { yupResolver } from "@hookform/resolvers/yup";
import { ChangeEvent, useCallback, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { arrayAge } from "./constants";
import { imagesPlatforms } from "../../../molecules/GameCard/types";
import { FormValue, scheme } from "../scheme";
import { ButtonWrapper, CardFormContainer, EditCardForm } from "./styles";
import { CheckBox } from "@/components/ui/form/CheckedForm";
import { imagePlatforms as images } from "../../CreateCardModal/ModalForm/constants";
import { PlatformImage } from "@/pages/Product/constants";

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
  idCard: string;
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
  idCard,
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

  const defaultValues = useMemo(() => {
    const hasPC = imagePlatforms.some(
      (image) => image.alt.toLocaleLowerCase() === PlatformImage.PC
    );
    const hasXbox = imagePlatforms.some(
      (image) => image.alt.toLocaleLowerCase() === PlatformImage.XBOX
    );
    const hasPlaystation = imagePlatforms.some(
      (image) => image.alt.toLocaleLowerCase() === PlatformImage.PLAYSTATION5
    );
    return {
      gameName,
      description,
      image,
      price,
      genres,
      ageUser,
      pc: hasPC,
      xbox: hasXbox,
      playstation: hasPlaystation,
    };
  }, []);

  const handleChangeCriteria = (event: ChangeEvent<any>) => {
    setAgeUser(event.target.value as number);
  };
  const {
    control,
    formState: { isValid, isSubmitting },
    handleSubmit,
  } = useForm<FormValue>({
    mode: "onChange",
    defaultValues,
    resolver: yupResolver(scheme),
  });

  const onDeleteCard = useCallback(() => {
    dispatch(setSelectedNameCard(gameName));
    dispatch(setUniqueIdCurrentCard(idCard));
    dispatch(isShowDeleteNotification(true));
  }, [gameName, idCard]);

  const onSubmit = useCallback(
    handleSubmit(async (dataForm: FormValue) => {
      const {
        gameName,
        genres,
        image,
        price,
        description,
        ageUser,
        pc,
        xbox,
        playstation,
      } = dataForm;
      const selectedPlatforms = [
        pc && images.pc,
        xbox && images.xbox,
        playstation && images.playstation,
      ].filter(Boolean);
      contentAPI
        .updateCardInfo(
          gameName,
          description,
          image,
          price,
          genres,
          ageUser!,
          selectedPlatforms as ImagePlatforms[],
          idCard
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
        <CheckBox title={"PC"} control={control} name={"pc"} />
        <CheckBox title={"Xbox"} control={control} name={"xbox"} />
        <CheckBox
          title={"Playstation5"}
          control={control}
          name={"playstation"}
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
            onClick={onDeleteCard}
          />
        </ButtonWrapper>
      </CardFormContainer>
    </>
  );
};

export default ModalForm;
