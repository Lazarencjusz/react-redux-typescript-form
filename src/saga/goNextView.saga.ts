import { put, select, takeLatest } from 'redux-saga/effects';
import { FormView } from '../model/enum/FormView';
import { goNextView, setFormView } from '../store/form/form.actions';
import { currentFormView } from '../store/form/form.selectors';
import { formStepsPath } from '../utils/formStepsPath';

function* actionHandler() {
  const currentView: FormView = yield select(currentFormView);
  const nextView: FormView = formStepsPath.get(currentView);

  yield put(setFormView(nextView));
}

export function* watchGoNextView(): Generator {
  yield takeLatest(goNextView, actionHandler);
}
