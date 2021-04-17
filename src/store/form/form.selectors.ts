import { createSelector } from '@reduxjs/toolkit';
import { indexOf, isEmpty, merge, pick, reduce, values } from 'lodash';
import { FormView } from '../../model/enum/FormView';
import { AppFormData } from '../../model/form/AppFormData';
import { FormField } from '../../model/form/FormField';
import { ValidationResult } from '../../model/form/ValidationResult';
import { RootStore } from '../../model/RootStore';
import { userFormFields } from '../../utils/formViews/userFormConfig';
import { validators } from '../../utils/validators/validators';

export const currentFormView = (state: RootStore): FormView => state.form.currentView;
export const formData = (state: RootStore): AppFormData => state.form.data;
export const isTouched = (state: RootStore): boolean => state.form.touched;

export const getCurrentFormViewIndex = createSelector([currentFormView], (view: FormView): number =>
  indexOf(values(FormView), view),
);

export const getValidationResult = createSelector(
  [formData, isTouched],
  (data: AppFormData, touched: boolean): ValidationResult => {
    return !touched
      ? {}
      : reduce(
          data,
          (validationResult: ValidationResult, _, field: string) => {
            const validator = validators.get(field as FormField);
            if (validator) {
              const result: string | null = validator(data);
              return merge({}, validationResult, result ? { [field]: result } : {});
            }
            return validationResult;
          },
          {},
        );
  },
);

export const getIsUserFormValid = createSelector([getValidationResult], (result: ValidationResult): boolean =>
  isEmpty(pick(result, userFormFields)),
);

export const getFieldError = (field: FormField) =>
  createSelector([getValidationResult], (result: ValidationResult): string | null | undefined => result[field]);

export const getFieldValue = (field: FormField) =>
  createSelector([formData], (data: AppFormData): string | boolean => data[field]);
