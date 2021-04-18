import { put, select, takeLatest } from 'redux-saga/effects';
import { FormView } from '../model/enum/FormView';
import { goToPrivacyView, setFormView, setTouched } from '../store/form/form.actions';
import { getIsUserFormValid } from '../store/form/form.selectors';

export function* actionHandler() {
  yield put(setTouched());

  const isFormValid: boolean = yield select(getIsUserFormValid);

  if (isFormValid) {
    yield put(setFormView(FormView.privacy));
  }
}

export function* watchGoToPrivacyView(): Generator {
  yield takeLatest(goToPrivacyView, actionHandler);
}
