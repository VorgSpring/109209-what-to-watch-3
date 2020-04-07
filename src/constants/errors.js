import {FormFields} from './form-fields';

// TODO описать нормально ошибки
export const FormFieldsErrors = {
  [FormFields.EMAIL]: `некорректный email`,
  [FormFields.PASSWORD]: `некорректный password`,
  [FormFields.REVIEW]: `текст отзыва должен быть не меньше 50 и не больше 400 символов`,
  [FormFields.RATING]: `выставите оценку фильму`
};

export const ServerErrors = {
  INTERNAL_ERROR: `ошибка сервера`
};

export const RequestErrors = {
  NOT_FOUND: `сервер не найден`,
  BAD_REQUEST: `некорректный запрос`,
  UNAUTHORIZED: `ошибка авторизации`
};
