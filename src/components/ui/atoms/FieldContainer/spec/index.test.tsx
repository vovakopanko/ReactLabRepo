import renderer from "react-test-renderer";
import FieldContainer from "..";

describe("render snapShot", () => {
  it("should return FieldContainer layout component", () => {
    const tree = renderer
      .create(<FieldContainer title={"Title"} titleName={"Description"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
