import {
  prepareTimeDataFromSeconds,
  prepareTimeDataFromMinutes
} from './prepared-time-data';

describe(`prepareTimeData`, () => {
  it(`should correct prepared time data from seconds`, () => {
    const time = 5400;
    const correctPreparedTime = `1:30:00`;

    const preparedTime = prepareTimeDataFromSeconds(time);

    expect(preparedTime).toEqual(correctPreparedTime);
  });

  it(`should correct prepared time data from minutes`, () => {
    const time = 90;
    const correctPreparedTime = `1h 30m`;

    const preparedTime = prepareTimeDataFromMinutes(time);

    expect(preparedTime).toEqual(correctPreparedTime);
  });
});
