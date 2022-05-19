import renderer from "react-test-renderer";
import FieldContainer from "..";

it("render ", () => {
  const tree = renderer
    .create(<FieldContainer title={"Title"} titleName={"Description"} />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
