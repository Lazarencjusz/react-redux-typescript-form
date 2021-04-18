import produce from 'immer';
import { ErrorMessage } from '../../../model/enum/ErrorMessage';
import { FormView } from '../../../model/enum/FormView';
import { AppFormData } from '../../../model/form/AppFormData';
import { FormField } from '../../../model/form/FormField';
import { RootStore } from '../../../model/RootStore';
import { initialState } from '../form.reducer';
import {
  currentFormView,
  formData,
  getCurrentFormViewIndex,
  getFieldError,
  getFieldValue,
  getIsUserFormValid,
  getValidationResult,
  isTouched,
} from '../form.selectors';

describe('form.selectors', () => {
  test('"currentFormView" returns correct value', () => {
    //given
    const currentView: FormView = FormView.done;
    const store: RootStore = {
      form: produce(initialState, () => ({ currentView })),
    };

    // when
    const result = currentFormView(store);

    // then
    expect(result).toEqual(currentView);
  });
  test('"formData" returns correct value', () => {
    //given
    const data: AppFormData = {
      name: 'name',
      communication: true,
      email: 'ermail',
      password: 'pass',
      role: 'role',
      updates: true,
    };
    const store: RootStore = {
      form: produce(initialState, () => ({ data })),
    };

    // when
    const result = formData(store);

    // then
    expect(result).toEqual(data);
  });
  test('"isTouched" returns correct value', () => {
    //given
    const touched = true;
    const store: RootStore = {
      form: produce(initialState, () => ({ touched })),
    };

    // when
    const result = isTouched(store);

    // then
    expect(result).toEqual(touched);
  });
  test('"getCurrentFormViewIndex" returns correct value', () => {
    //given
    const currentView: FormView = FormView.done;
    const store: RootStore = {
      form: produce(initialState, () => ({ currentView })),
    };

    // when
    const result = getCurrentFormViewIndex(store);

    // then
    expect(result).toEqual(2);
  });
  describe('getValidationResult', () => {
    test('returns empty validation results if not touched', () => {
      //given
      const data: AppFormData = {
        name: 'name',
        communication: true,
        email: 'ermail',
        password: 'pass',
        role: 'role',
        updates: true,
      };
      const store: RootStore = {
        form: produce(initialState, () => ({ data, touched: false })),
      };

      // when
      const result = getValidationResult(store);

      // then
      expect(result).toEqual({});
    });
    test('returns validation results if touched', () => {
      //given
      const data: AppFormData = {
        name: 'name',
        communication: true,
        email: 'ermail',
        password: 'pass',
        role: 'role',
        updates: true,
      };
      const store: RootStore = {
        form: produce(initialState, () => ({ data, touched: true })),
      };

      // when
      const result = getValidationResult(store);

      // then
      expect(result).not.toEqual({});
    });
  });
  describe('getIsUserFormValid', () => {
    test('returns false when not valid and touched', () => {
      //given
      const data: AppFormData = {
        name: 'name',
        communication: true,
        email: 'ermail',
        password: 'pass',
        role: 'role',
        updates: true,
      };
      const store: RootStore = {
        form: produce(initialState, () => ({ data, touched: true })),
      };

      // when
      const result = getIsUserFormValid(store);

      // then
      expect(result).toEqual(false);
    });
    test('returns true when not valid and not touched', () => {
      //given
      const data: AppFormData = {
        name: 'name',
        communication: true,
        email: 'ermail',
        password: 'pass',
        role: 'role',
        updates: true,
      };
      const store: RootStore = {
        form: produce(initialState, () => ({ data, touched: false })),
      };

      // when
      const result = getIsUserFormValid(store);

      // then
      expect(result).toEqual(true);
    });
    test('returns true when valid and touched', () => {
      //given
      const data: AppFormData = {
        name: 'name',
        communication: true,
        email: 'ermail@somewhere.io',
        password: 'passslskdjsdkD2',
        role: 'role',
        updates: true,
      };
      const store: RootStore = {
        form: produce(initialState, () => ({ data, touched: true })),
      };

      // when
      const result = getValidationResult(store);

      // then
      expect(result).not.toEqual(true);
    });
  });
  test('"getFieldError" returns error message', () => {
    //given
    const data: AppFormData = {
      name: '',
      communication: true,
      email: 'ermail@somewhere.io',
      password: 'passslskdjsdkD2',
      role: 'role',
      updates: true,
    };

    const store: RootStore = {
      form: produce(initialState, () => ({ data, touched: true })),
    };

    // when
    const result = getFieldError(FormField.name)(store);

    // then
    expect(result).toEqual(ErrorMessage.required);
  });
  test('"getFieldValue" returns field value', () => {
    //given
    const data: AppFormData = {
      name: 'name',
      communication: true,
      email: 'ermail@somewhere.io',
      password: 'passslskdjsdkD2',
      role: 'role',
      updates: true,
    };

    const store: RootStore = {
      form: produce(initialState, () => ({ data, touched: true })),
    };

    // when
    const result = getFieldValue(FormField.name)(store);

    // then
    expect(result).toEqual(data.name);
  });
});
