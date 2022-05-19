import renderer from "react-test-renderer";
import UserName from "../index";

describe("UserName snapshot test", () => {
  it("should match to snapshot", () => {
    const tree = renderer.create(<UserName userName={"Test User"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
