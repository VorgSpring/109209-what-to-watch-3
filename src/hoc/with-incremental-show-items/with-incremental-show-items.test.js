import React from 'react';
import {shallow} from 'enzyme';
import {withIncrementalShowItems} from './with-incremental-show-items';
import {films} from '../../mocks/films';

describe(`withIncrementalShowItems`, () => {
  let component = null;
  const MockComponent = () => <div />;
  const MockComponentWrapped = withIncrementalShowItems(MockComponent);

  beforeEach(() => {
    component = shallow(<MockComponentWrapped films={films} />);
  });

  afterEach(() => {
    component = null;
  });

  it(`should init element`, () => {
    expect(component.state().showCount).toBe(8);
  });

  it(`should change set more items to show`, () => {
    component.instance().setMoreItemsToShow();
    expect(component.state().showCount).toBe(16);
  });
});
