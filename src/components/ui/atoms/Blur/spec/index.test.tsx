import renderer from "react-test-renderer";
import Blur from "..";

describe("render snapShot", () => {
  it("should return Blur layout component", () => {
    const tree = renderer.create(<Blur />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
