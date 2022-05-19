import renderer from "react-test-renderer";
import UserName from "../index";

describe("render snapShot", () => {
  it("should return UserName layout component", () => {
    const tree = renderer.create(<UserName userName={"Test User"} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
