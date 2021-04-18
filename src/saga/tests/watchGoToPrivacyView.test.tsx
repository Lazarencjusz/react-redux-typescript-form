import { testSaga } from 'redux-saga-test-plan';
import { FormView } from '../../model/enum/FormView';
import { setFormView, setTouched } from '../../store/form/form.actions';
import { getIsUserFormValid } from '../../store/form/form.selectors';
import { actionHandler } from '../watchGoToPrivacyView';

describe('watchGoToPrivacyView', () => {
  test('should perform correct actions when form is valid', () => {
    testSaga(actionHandler)
      .next()
      .put(setTouched())
      .next()
      .select(getIsUserFormValid)
      .next(true)
      .put(setFormView(FormView.privacy))
      .next()
      .isDone();
  });
  test('should perform correct actions when form is not valid', () => {
    testSaga(actionHandler).next().put(setTouched()).next().select(getIsUserFormValid).next(false).isDone();
  });
});
