import { render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { goToPrivacyView } from '../../../store/form/form.actions';
import { mockStore } from '../../../utils/mocks/mockStore';
import { UserView } from '../UserView';

describe('<UserView />', () => {
  test('should render correct view', () => {
    // given
    const store = mockStore({
      form: { data: {} },
    });

    const dispatchSpy = jest.spyOn(store, 'dispatch');

    // when
    render(
      <Provider store={store}>
        <UserView />
      </Provider>,
    );

    const viewElement = screen.getByRole('button');
    viewElement.click();

    // then
    expect(viewElement).toBeTruthy();
    expect(dispatchSpy).toBeCalledTimes(1);
    expect(dispatchSpy).toBeCalledWith(goToPrivacyView());
  });
});
