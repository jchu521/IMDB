import React from 'react';
import { mount } from 'enzyme';

test('hello world', () => {
  const wrapper = mount(<p> text=&quot;111&quot; </p>);
  // expect(wrapper.text()).toMatch("Hello Jest!");

  expect(1).toEqual(1);
});
