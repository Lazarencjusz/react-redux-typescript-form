import { render, screen } from '@testing-library/react';
import { map } from 'lodash';
import React from 'react';
import { InputProps } from '../../../model/form/InputProps';
import { privacyFormConfig } from '../../../utils/formViews/privacyFormConfig';
import { userFormConfig } from '../../../utils/formViews/userFormConfig';
import * as generateFormInputsModule from '../../../utils/generateFormInputs';
import { FormFactory } from '../FormFactory';

describe('<FormFactory />', () => {
  test('should call "generateFormInputs" and render created elements', async () => {
    const generateFormInputsStub = jest
      .spyOn(generateFormInputsModule, 'generateFormInputs')
      .mockImplementation((config: InputProps[]): JSX.Element[] =>
        map(config, (inputConfig: InputProps) => <div key={inputConfig.field}>{inputConfig.label}</div>),
      );

    const onChange = jest.fn();
    const input1 = userFormConfig[0];
    const input2 = privacyFormConfig[0];

    const config: InputProps[] = [input1, input2];
    render(<FormFactory config={config} onChange={onChange} />);

    const input1Element = await screen.findByText(input1.label);
    const input2Element = await screen.findByText(input2.label);

    expect(input1Element).toBeTruthy();
    expect(input2Element).toBeTruthy();
    expect(generateFormInputsStub).toBeCalledTimes(1);
    expect(generateFormInputsStub).toBeCalledWith(config, onChange);
  });
});
