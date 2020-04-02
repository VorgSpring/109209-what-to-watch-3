import {FormFields} from './form-fields';

export const FormFieldsErrors = {
  [FormFields.EMAIL]: `некорректный email`,
  [FormFields.PASSWORD]: `некорректный password`
};

export const ServerErrors = {
  INTERNAL_ERROR: `ошибка сервера`
};

export const RequestErrors = {
  NOT_FOUND: `сервер не найден`,
  BAD_REQUEST: `некорректный запрос`,
  UNAUTHORIZED: `ошибка авторизации`
};
