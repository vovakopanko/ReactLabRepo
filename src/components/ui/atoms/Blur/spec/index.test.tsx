import renderer from "react-test-renderer";
import Blur from "..";

it("render ", () => {
  const tree = renderer.create(<Blur />).toJSON();
  expect(tree).toMatchSnapshot();
});
