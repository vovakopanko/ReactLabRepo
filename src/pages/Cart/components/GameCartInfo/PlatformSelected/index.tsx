import { colors } from "@/styles/palette";
import styled from "styled-components";
import { Props } from "./types";

const PlatformSelected = ({ value, handleChange, platforms }: Props) => {
  return (
    <PlatformBlock>
      <SelectedPlatform value={value} onChange={handleChange}>
        {platforms.map((option) => (
          <option value={option.id} key={option.id}>
            {option.alt}
          </option>
        ))}
      </SelectedPlatform>
    </PlatformBlock>
  );
};

export const PlatformBlock = styled.div`
  width: 15%;
  @media (max-width: 768px) {
    width: 100%;
  }
`;

export const SelectedPlatform = styled.select`
  min-width: 100px;
  height: 30px;
  background-color: ${colors.BLACK};
  color: ${colors.WHITE};
  &:hover {
    cursor: pointer;
  }
`;

export default PlatformSelected;
