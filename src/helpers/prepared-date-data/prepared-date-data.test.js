import {
  preparedDateData
} from './prepared-date-data';

describe(`preparedDateData`, () => {
  it(`should correct prepared date`, () => {
    const date = `2020-04-02T15:29:12.964Z`;
    const correctPreparedDate = `April 2, 2020`;

    const preparedDate = preparedDateData(date);

    expect(preparedDate).toBe(correctPreparedDate);
  });
});
