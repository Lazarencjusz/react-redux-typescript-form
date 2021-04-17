import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { FormView } from '../../../model/enum/FormView';
import { mockStore } from '../../../utils/mocks/mockStore';
import { App } from '../App';

describe('<App />', () => {
  test('should render button with label "Next"', () => {
    const store = mockStore({
      form: { currentView: FormView.user },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const nextButton = screen.getByRole('button');
    expect(nextButton.textContent).toBe('Next');
  });
  test('should render button with label "Submit"', () => {
    const store = mockStore({
      form: { currentView: FormView.privacy },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const nextButton = screen.getByRole('button');
    expect(nextButton.textContent).toBe('Submit');
  });
  test('should do not render button', () => {
    const store = mockStore({
      form: { currentView: FormView.done },
    });

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const nextButton = screen.queryByRole('button');
    expect(nextButton).toBeNull();
  });
});
