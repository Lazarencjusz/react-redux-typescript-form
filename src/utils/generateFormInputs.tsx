import { chain } from 'lodash';
import React from 'react';
import { CheckboxInput } from '../features/formInputs/CheckboxInput/CheckboxInput';
import { TextInput } from '../features/formInputs/TextInput/TextInput';
import { InputProps } from '../model/form/InputProps';
import { InputType } from '../model/form/InputType';
import { UpdateFormFieldPayload } from '../model/form/UpdateFormFieldPayload';

export const generateFormInputs = (
  config: InputProps[],
  onChange: (data: UpdateFormFieldPayload) => void,
): JSX.Element[] =>
  chain(config)
    .map((inputConfig: InputProps) => {
      switch (inputConfig.type) {
        case InputType.checkbox:
          return <CheckboxInput {...inputConfig} key={inputConfig.field} onChange={onChange} />;
        case InputType.password:
        case InputType.email:
        default:
          return <TextInput {...inputConfig} key={inputConfig.field} onChange={onChange} />;
      }
    })
    .value();
