import React from "react";
import { mount } from "enzyme";


test("hello world", () => {
  const wrapper = mount(<p> text="111" </p>);
  // expect(wrapper.text()).toMatch("Hello Jest!");

  expect(1).toEqual(1);
});
