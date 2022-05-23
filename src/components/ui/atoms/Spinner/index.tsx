import { StyledSpinner, StyledSpinnerWrapper } from "./styles";

const Spinner = () => (
  <StyledSpinnerWrapper>
    <StyledSpinner viewBox="0 0 50 50">
      <circle
        className="path"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        strokeWidth="4"
      />
    </StyledSpinner>
  </StyledSpinnerWrapper>
);

export default Spinner;
