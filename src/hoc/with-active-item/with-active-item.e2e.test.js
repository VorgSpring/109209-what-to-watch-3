import React from 'react';
import {shallow} from 'enzyme';
import {withActiveItem} from './with-active-item';

describe(`withActiveItem`, () => {
  const MockComponent = () => <div />;
  const MockComponentWrapped = withActiveItem(MockComponent);

  it(`should change active element`, () => {
    const component = shallow(<MockComponentWrapped />);

    component.instance().setActiveItem(`blah`);
    expect(component.state().activeItem).toBe(`blah`);
  });
});
