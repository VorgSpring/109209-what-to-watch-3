import {prepareTimeData} from './prepare-time-data';

describe(`prepareTimeData`, () => {
  it(`should correct prepared time data`, () => {
    const time = 5400;
    const correctPreparedTime = `1:30:00`;

    const preparedTime = prepareTimeData(time);

    expect(preparedTime).toEqual(correctPreparedTime);
  });
});
