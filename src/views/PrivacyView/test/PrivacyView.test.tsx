import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { goToDoneView } from '../../../store/form/form.actions';
import { mockStore } from '../../../utils/mocks/mockStore';
import { PrivacyView } from '../PrivacyView';

describe('<PrivacyView />', () => {
  test('should render correct view', () => {
    // given
    const store = mockStore();
    const dispatchSpy = jest.spyOn(store, 'dispatch');

    // when
    render(
      <Provider store={store}>
        <PrivacyView />
      </Provider>,
    );

    const viewElement = screen.getByRole('button');
    viewElement.click();

    // then
    expect(viewElement).toBeTruthy();
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(goToDoneView());
  });
});
