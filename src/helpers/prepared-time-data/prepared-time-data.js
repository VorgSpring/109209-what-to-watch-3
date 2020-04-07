const SECOND_IN_MINUTE = 60;
const SECOND_IN_HOURS = SECOND_IN_MINUTE * 60;
const MINUTES_IN_HOURS = 60;

const preparedWithZero = (time) => (`0${Math.floor(time)}`).slice(-2);

export const prepareTimeDataFromSeconds = (time) => {
  const seconds = preparedWithZero(time % SECOND_IN_HOURS);
  let minutes = time / SECOND_IN_MINUTE;
  if (minutes >= 60) {
    minutes = minutes % MINUTES_IN_HOURS;
  }
  minutes = preparedWithZero(minutes);
  const hours = Math.floor(time / SECOND_IN_HOURS);

  return `${hours}:${minutes}:${seconds}`;
};

export const prepareTimeDataFromMinutes = (time) => {
  let minutes = preparedWithZero(time % MINUTES_IN_HOURS);
  const hours = Math.floor(time / MINUTES_IN_HOURS);

  return `${hours}h ${minutes}m`;
};
