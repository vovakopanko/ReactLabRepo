import renderer from "react-test-renderer";
import Blur from "../index";

describe("Blur component unit test", () => {
  it("should match to snapshot", () => {
    const tree = renderer.create(<Blur />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
