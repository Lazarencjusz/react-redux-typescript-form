import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { FormView } from '../../../model/enum/FormView';
import { mockStore } from '../../../utils/mocks/mockStore';
import { FormStepper } from '../FormStepper';

describe('<FormStepper />', () => {
  test('should find all steps', async () => {
    const store = mockStore({
      form: { currentView: FormView.user },
    });

    render(
      <Provider store={store}>
        <FormStepper />
      </Provider>,
    );

    const userStep = await screen.findByText(FormView.user);
    const privacyStep = await screen.findByText(FormView.privacy);
    const doneStep = await screen.findByText(FormView.done);

    expect(userStep).toBeTruthy();
    expect(privacyStep).toBeTruthy();
    expect(doneStep).toBeTruthy();
  });
});
