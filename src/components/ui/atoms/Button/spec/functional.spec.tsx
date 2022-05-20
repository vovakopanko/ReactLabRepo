import { fireEvent, render } from "@testing-library/react";
import Button from "..";

const props = {
  title: "Name",
  width: 100,
  onClick: jest.fn(),
};

describe("Button component functional tests", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("should call onClick when press on the Button", () => {
    const { getByTestId } = render(<Button id={"test"} {...props} />);
    const btn = getByTestId("test");
    fireEvent.click(btn);
    expect(props.onClick).toBeCalledTimes(1);
  });

  it("should not call onClick when press on the Button and it has disabled state", () => {
    const { getByTestId } = render(
      <Button id={"test"} disabled={true} {...props} />
    );
    const btn = getByTestId("test");
    fireEvent.click(btn);
    expect(props.onClick).toBeCalledTimes(0);
  });
});
