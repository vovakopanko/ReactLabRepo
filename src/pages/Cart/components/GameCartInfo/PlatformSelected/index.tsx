import { PlatformBlock, SelectedPlatform } from "./styles";
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

export default PlatformSelected;
