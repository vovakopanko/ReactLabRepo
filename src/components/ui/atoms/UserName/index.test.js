import React from "react";
import renderer from "react-test-renderer";
import { UserName } from ".";

it("render ", () => {
  const tree = renderer.create(<UserName userName={"Test User"} />).toJSON;
  expect(tree).toMatchSnapshot();
});
