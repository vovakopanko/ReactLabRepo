import renderer from "react-test-renderer";
import UserName from "../index";

it("render ", () => {
  const tree = renderer.create(<UserName userName={"Test User"} />).toJSON();
  expect(tree).toMatchSnapshot();
});
