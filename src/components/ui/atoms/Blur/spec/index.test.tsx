import renderer from "react-test-renderer";
import Blur from "../index";

describe("Blur component unit test", () => {
  it("should return Blur layout component", () => {
    const tree = renderer.create(<Blur />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
