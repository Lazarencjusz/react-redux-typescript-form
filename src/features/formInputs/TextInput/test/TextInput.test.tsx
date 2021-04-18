import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import { Provider } from 'react-redux';
import { FormField } from '../../../../model/form/FormField';
import { mockStore } from '../../../../utils/mocks/mockStore';
import { TextInput } from '../TextInput';

describe('<TextInput />', () => {
  test('should render correctly and call "onChenge" with payload after click', async () => {
    const onChange = jest.fn();

    const label = 'INPUT LABEL';
    const field: FormField = FormField.name;
    const value = 'defaultValue';

    const store = mockStore({
      form: { data: { [field]: value } },
    });

    render(
      <Provider store={store}>
        <TextInput field={field} label={label} onChange={onChange} />
      </Provider>,
    );

    const inputElement = screen.getByLabelText(label);

    fireEvent.change(inputElement, { target: { value } });

    expect(inputElement).toBeTruthy();
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ field, value });
  });
});
