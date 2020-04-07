import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD
} from '../../constants/reg-exp';
import {FormFields} from '../../constants/form-fields';

const MIN_COUNT_SYMBOLS = 50;
const MAX_COUNT_SYMBOLS = 400;

export const checkFormFields = {
  [FormFields.EMAIL](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [FormFields.PASSWORD](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  },

  [FormFields.COMMENT]({length}) {
    return length >= MIN_COUNT_SYMBOLS && length <= MAX_COUNT_SYMBOLS;
  },

  [FormFields.RATING](value) {
    return Boolean(value);
  }
};
