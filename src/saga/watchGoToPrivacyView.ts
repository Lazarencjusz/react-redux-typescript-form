import { put, select, takeLatest } from 'redux-saga/effects';
import { FormView } from '../model/enum/FormView';
import { goToPrivacyView, setFormView, setTouched } from '../store/form/form.actions';
import { currentFormView, getIsUserFormValid } from '../store/form/form.selectors';
import { formStepsPath } from '../utils/formStepsPath';

export function* actionHandler() {
  const currentView: FormView = yield select(currentFormView);
  const nextView: FormView = formStepsPath.get(currentView) ?? currentView;

  yield put(setTouched());

  const isFormValid: boolean = yield select(getIsUserFormValid);

  if (isFormValid) {
    yield put(setFormView(nextView));
  }
}

export function* watchGoToPrivacyView(): Generator {
  yield takeLatest(goToPrivacyView, actionHandler);
}
