import { testSaga } from 'redux-saga-test-plan';
import { FormView } from '../../model/enum/FormView';
import { setFormView } from '../../store/form/form.actions';
import { currentFormView } from '../../store/form/form.selectors';
import { actionHandler } from '../watchGoToPrivacyView';

describe('<FormStepper />', () => {
  test('should perform correct actions', () => {
    const currentView: FormView = FormView.user;
    const nextView: FormView = FormView.privacy;

    testSaga(actionHandler).next().select(currentFormView).next(currentView).put(setFormView(nextView)).next().isDone();
  });
});
