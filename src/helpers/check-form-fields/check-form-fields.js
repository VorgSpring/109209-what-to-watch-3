import {
  REG_EXP_FOR_CHECK_EMAIL,
  REG_EXP_FOR_CHECK_PASSWORD
} from '../../constants/reg-exp';
import {FormFields} from '../../constants/form-fields';

export const checkFormFields = {
  [FormFields.EMAIL](email) {
    return REG_EXP_FOR_CHECK_EMAIL.test(email);
  },

  [FormFields.PASSWORD](password) {
    return REG_EXP_FOR_CHECK_PASSWORD.test(password);
  }
};
