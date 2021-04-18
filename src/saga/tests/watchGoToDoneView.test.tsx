import { testSaga } from 'redux-saga-test-plan';
import { FormView } from '../../model/enum/FormView';
import { setFormView } from '../../store/form/form.actions';
import { formData } from '../../store/form/form.selectors';
import { actionHandler } from '../watchGoToDoneView';

describe('watchGoToDoneView', () => {
  test('should perform correct actions ', () => {
    testSaga(actionHandler).next().put(setFormView(FormView.done)).next().select(formData).next('form data').isDone();
  });
});
