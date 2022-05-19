import renderer from "react-test-renderer";
import FieldContainer from "..";

describe("FieldContainer component unit test", () => {
  it("should return FieldContainer layout component", () => {
    const tree = renderer
      .create(<FieldContainer title={"Title"} titleName={"Description"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
