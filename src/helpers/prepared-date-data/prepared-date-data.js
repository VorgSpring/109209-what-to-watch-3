import {fullMonths} from '../../constants/months';

export const preparedDateData = (date) => {
  const parseDate = new Date(date);

  if (isNaN(parseDate)) {
    return null;
  }

  const day = parseDate.getDate();
  const month = parseDate.getMonth();
  const year = parseDate.getFullYear();

  return `${fullMonths[month]} ${day}, ${year}`;
};
