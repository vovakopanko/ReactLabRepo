import renderer from "react-test-renderer";
import FieldContainer from "..";

describe("FieldContainer component unit test", () => {
  it("should match to snapshot", () => {
    const tree = renderer
      .create(<FieldContainer title={"Title"} titleName={"Description"} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
