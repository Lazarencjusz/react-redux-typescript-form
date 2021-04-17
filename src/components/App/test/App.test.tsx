import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { MockStoreEnhanced } from 'redux-mock-store';
import { FormView } from '../../../model/enum/FormView';
import { RootStore } from '../../../model/RootStore';
import { goNextView } from '../../../store/form/form.actions';
import { mockStore } from '../../../utils/mocks/mockStore';
import { App } from '../App';

describe('<App />', () => {
  test('should render button with label "Next"', () => {
    const store: MockStoreEnhanced<RootStore> = mockStore({
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
    const store: MockStoreEnhanced<RootStore> = mockStore({
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
    const store: MockStoreEnhanced<RootStore> = mockStore({
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
  test('should call "goNextView" action', () => {
    const store: MockStoreEnhanced<RootStore> = mockStore({
      form: { currentView: FormView.user },
    });
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    render(
      <Provider store={store}>
        <App />
      </Provider>,
    );

    const nextButton = screen.queryByRole('button');
    nextButton?.click();

    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(goNextView());
  });
});
