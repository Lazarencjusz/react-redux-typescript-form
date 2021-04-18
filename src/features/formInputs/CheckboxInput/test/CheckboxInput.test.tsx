import { render, screen } from '@testing-library/react';
import React from 'react';
import { FormField } from '../../../../model/form/FormField';
import { CheckboxInput } from '../CheckboxInput';

describe('<CheckboxInput />', () => {
  test('should render correctly and call "onChenge" with payload after click', async () => {
    // given
    const onChange = jest.fn();

    const label = 'label';
    const field: FormField = FormField.name;

    // when
    render(<CheckboxInput field={field} label={label} onChange={onChange} defaultValue />);

    const checkboxElement = await screen.findByText(label);

    checkboxElement.click();

    // then
    expect(checkboxElement).toBeTruthy();
    expect(onChange).toBeCalledTimes(1);
    expect(onChange).toHaveBeenCalledWith({ field, value: false });
  });
});
