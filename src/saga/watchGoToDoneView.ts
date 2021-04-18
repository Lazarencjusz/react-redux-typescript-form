import { select } from 'redux-saga-test-plan/matchers';
import { put, takeLatest } from 'redux-saga/effects';
import { FormView } from '../model/enum/FormView';
import { AppFormData } from '../model/form/AppFormData';
import { goToDoneView, setFormView } from '../store/form/form.actions';
import { formData } from '../store/form/form.selectors';

export function* actionHandler() {
  yield put(setFormView(FormView.done));
  const appFormData: AppFormData = yield select(formData);

  console.log('This is form data:', appFormData);
}

export function* watchGoToDoneView(): Generator {
  yield takeLatest(goToDoneView, actionHandler);
}
