import { createSelector } from '@reduxjs/toolkit';
import { indexOf, values } from 'lodash';
import { FormView } from '../../model/enum/FormView';
import { RootStore } from '../../model/RootStore';

export const currentFormView = (state: RootStore): FormView => state.form.currentView;

export const getCurrentFormViewIndex = createSelector([currentFormView], (view: FormView): number =>
  indexOf(values(FormView), view),
);
export const getNextButtonLabel = createSelector([currentFormView], (view: FormView): string => {
  switch (view) {
    case FormView.user:
      return 'Next';
    case FormView.privacy:
      return 'Submit';
    default:
      return '';
  }
});

export const getIsActionButtonVisible = createSelector(
  [currentFormView],
  (view: FormView): boolean => view !== FormView.done,
);
