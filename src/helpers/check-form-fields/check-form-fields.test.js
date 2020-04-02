import {checkFormFields} from './check-form-fields';
import {FormFields} from '../../constants/form-fields';

describe(`checkFormFields`, () => {
  describe(`check email`, () => {
    it(`should handle valid value`, () => {
      const validEmail = `blah@blah.blah`;
      const result = checkFormFields[FormFields.EMAIL](validEmail);
      expect(result).toBe(true);
    });

    it(`should handle not valid value`, () => {
      const notValidEmail = `blah`;
      const result = checkFormFields[FormFields.EMAIL](notValidEmail);
      expect(result).toBe(false);
    });

    it(`should handle empty value`, () => {
      const emptyEmail = ``;
      const result = checkFormFields[FormFields.EMAIL](emptyEmail);
      expect(result).toBe(false);
    });
  });

  describe(`check password`, () => {
    it(`should handle valid value`, () => {
      const validPassword = `blah@Blah123`;
      const result = checkFormFields[FormFields.PASSWORD](validPassword);
      expect(result).toBe(true);
    });

    it(`should handle not valid value`, () => {
      const notValidPassword = `blah`;
      const result = checkFormFields[FormFields.PASSWORD](notValidPassword);
      expect(result).toBe(false);
    });

    it(`should handle empty value`, () => {
      const emptyPassword = ``;
      const result = checkFormFields[FormFields.PASSWORD](emptyPassword);
      expect(result).toBe(false);
    });
  });
});
