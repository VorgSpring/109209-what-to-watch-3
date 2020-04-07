import {
  createEmptyArray
} from './create-empty-array';

describe(`createEmptyArray`, () => {
  it(`should correct create array length`, () => {
    const array = createEmptyArray(4);

    expect(array.length).toBe(4);
  });
});
